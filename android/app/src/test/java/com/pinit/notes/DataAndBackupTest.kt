package com.pinit.notes

import android.app.Application
import androidx.room.Room
import androidx.test.core.app.ApplicationProvider
import com.pinit.notes.backup.BackupCodec
import com.pinit.notes.data.*
import kotlinx.coroutines.runBlocking
import org.json.JSONArray
import org.json.JSONObject
import org.junit.*
import org.junit.Assert.*
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.File
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [35], application = Application::class)
class DataAndBackupTest {
    private lateinit var app: Application
    private lateinit var db: PinItDatabase
    private lateinit var repo: PinItRepository
    @Before fun setup() {
        app = ApplicationProvider.getApplicationContext()
        db = Room.inMemoryDatabaseBuilder(app, PinItDatabase::class.java).build()
        repo = PinItRepository(app, db)
    }
    @After fun cleanup() { db.close() }
    private fun notes(count: Int): JSONObject {
        val data = StateCodec.empty(); val children = data.getJSONObject("tree").getJSONArray("children")
        repeat(count) { i -> children.put(JSONObject().put("id", "n-$i").put("title", "Note $i").put("content", "<p>Body $i</p>")
            .put("archived", false).put("pinned", i % 5 == 0).put("pinnedAt", i).put("order", i).put("createdAt", 1000L)
            .put("updatedAt", 1000L).put("children", JSONArray())) }
        return data
    }
    @Test fun migrationPreservesThousandNotesAndIsIdempotent() = runBlocking {
        val legacy = notes(1000); legacy.getJSONObject("tree").getJSONArray("children").getJSONObject(1).put("archived", true)
        val first = repo.migrateLegacy(legacy.toString()); val second = repo.migrateLegacy(legacy.toString())
        assertTrue(StateCodec.equal(legacy, first.data)); assertEquals(first.revision, second.revision)
        assertEquals(1001, repo.dao.notes().size)
        assertTrue(File(app.filesDir, "recovery").listFiles()!!.any { it.name.startsWith("migration-") })
    }
    @Test fun malformedMigrationLeavesDatabaseAndOriginalUntouched() = runBlocking {
        val old = repo.snapshot(); val raw = "{malformed"
        try { repo.migrateLegacy(raw); fail("Should reject malformed records") } catch (_: Exception) {}
        assertTrue(StateCodec.equal(old.data, repo.snapshot().data)); assertEquals("{malformed", raw)
    }
    @Test fun concurrentDifferentFieldsMergeAndSameFieldConflicts() = runBlocking {
        val initial = repo.migrateLegacy(notes(2).toString())
        val main = StateCodec.copy(initial.data); main.getJSONObject("tree").getJSONArray("children").getJSONObject(0).put("title", "Main title").put("updatedAt", 2000L)
        repo.save(main, initial.data, initial.revision)
        val overlay = StateCodec.copy(initial.data); overlay.getJSONObject("tree").getJSONArray("children").getJSONObject(0).put("content", "Overlay body").put("updatedAt", 3000L)
        val merged = repo.save(overlay, initial.data, initial.revision)
        val note = merged.data.getJSONObject("tree").getJSONArray("children").getJSONObject(0)
        assertEquals("Main title", note.getString("title")); assertEquals("Overlay body", note.getString("content"))
        val stale = StateCodec.copy(initial.data); stale.getJSONObject("tree").getJSONArray("children").getJSONObject(0).put("title", "Stale title")
        try { repo.save(stale, initial.data, initial.revision); fail("Should detect conflict") } catch (e: DataProblem) { assertEquals("CONFLICT", e.code) }
        assertEquals("Main title", repo.dao.note("n-0")!!.title)
    }
    @Test fun trashAndNestedRelationshipsRoundTrip() = runBlocking {
        val data = notes(2); val children = data.getJSONObject("tree").getJSONArray("children")
        val child = children.getJSONObject(1); children.remove(1); children.getJSONObject(0).getJSONArray("children").put(child)
        val deleted = StateCodec.copy(children.getJSONObject(0)); children.remove(0)
        data.getJSONArray("trash").put(JSONObject().put("id", "trash-1").put("parentId", "root").put("deletedAt", 4000).put("node", deleted))
        val result = repo.migrateLegacy(data.toString()); assertTrue(StateCodec.equal(data, result.data))
        assertEquals("trash-1", repo.dao.note("n-1")!!.trashId); assertEquals("n-0", repo.dao.note("n-1")!!.parentId)
    }
    @Test fun unicodeAtChunkBoundaryIsNotDamaged() = runBlocking {
        val data = notes(1); val html = "A".repeat(65535) + "😀" + "Z".repeat(65536)
        data.getJSONObject("tree").getJSONArray("children").getJSONObject(0).put("content", html)
        repo.migrateLegacy(data.toString())
        assertEquals(html, repo.snapshot().data.getJSONObject("tree").getJSONArray("children").getJSONObject(0).getString("content"))
    }
    @Test fun largeImageContentRoundTripsWithoutCursorOverflow() = runBlocking {
        val data = notes(1)
        val html = "<img src=\"data:image/png;base64," + "A".repeat(3 * 1024 * 1024) + "\">"
        data.getJSONObject("tree").getJSONArray("children").getJSONObject(0).put("content", html)
        val saved = repo.migrateLegacy(data.toString())
        assertEquals(html, saved.data.getJSONObject("tree").getJSONArray("children").getJSONObject(0).getString("content"))
        assertTrue(repo.dao.contentChunks().size > 1)
        assertEquals("", repo.dao.note("n-0")!!.content)
    }
    @Test fun backupOneHundredAndThousandArePortable() = runBlocking {
        for (count in listOf(1, 100, 1000)) {
            val payload = JSONObject().put("state", notes(count)).put("overlays", JSONArray())
            val bytes = ByteArrayOutputStream().also { BackupCodec.write(payload, it, app.cacheDir) }.toByteArray()
            val read = BackupCodec.read(ByteArrayInputStream(bytes), app.cacheDir)
            assertTrue(StateCodec.equal(payload, read)); assertEquals(count, read.getJSONObject("state").getJSONObject("tree").getJSONArray("children").length())
        }
    }
    @Test fun mergeAndReplaceAreTransactionalAndRecoverable() = runBlocking {
        repo.migrateLegacy(notes(1).toString())
        val incoming = notes(2); incoming.getJSONObject("tree").getJSONArray("children").getJSONObject(0).put("title", "Backup version")
        val payload = JSONObject().put("state", incoming).put("overlays", JSONArray())
        val merge = repo.restore(payload, false, repo.snapshot().revision)
        assertEquals("Note 0", repo.dao.note("n-0")!!.title); assertEquals(3, repo.dao.notes().size)
        val replace = repo.restore(payload, true, merge.revision)
        assertEquals("Backup version", repo.dao.note("n-0")!!.title); assertTrue(StateCodec.equal(incoming, replace.data))
        assertTrue(File(app.filesDir, "recovery").listFiles()!!.any { it.name.startsWith("pre-restore-") })
    }
    @Test fun restoreRejectsStaleSummaryWithoutPartialWrites() = runBlocking {
        val initial = repo.migrateLegacy(notes(1).toString())
        val change = StateCodec.copy(initial.data); change.put("theme", "light"); repo.save(change, initial.data, initial.revision)
        try { repo.restore(JSONObject().put("state", notes(100)).put("overlays", JSONArray()), true, initial.revision); fail("Should reject stale summary") }
        catch (e: DataProblem) { assertEquals("CONFLICT", e.code) }
        assertEquals(2, repo.dao.notes().size); assertEquals("light", repo.snapshot().data.getString("theme"))
    }
    @Test fun unsafePathsUnsupportedVersionAndChecksumMismatchAreRejected() {
        fun archive(manifest: String, name: String = "data.json", data: String = "{}"): ByteArray {
            val out = ByteArrayOutputStream(); ZipOutputStream(out).use { zip ->
                zip.putNextEntry(ZipEntry("manifest.json")); zip.write(manifest.toByteArray()); zip.closeEntry()
                zip.putNextEntry(ZipEntry(name)); zip.write(data.toByteArray()); zip.closeEntry()
            }; return out.toByteArray()
        }
        val badCases = listOf(archive("{}", "../data.json"), archive("{\"format\":\"Pin-It\",\"version\":99}"), archive("{\"format\":\"Pin-It\",\"version\":1,\"dataFile\":\"data.json\",\"dataBytes\":2,\"sha256\":\"wrong\"}"))
        for (bytes in badCases) try { BackupCodec.read(ByteArrayInputStream(bytes), app.cacheDir); fail("Should reject invalid archive") } catch (_: DataProblem) {}
    }
    @Test fun backupRestoresImagesSettingsAndIndependentWindowPositions() = runBlocking {
        val original = notes(2); original.put("theme", "light")
        original.put("bubbleSettings", JSONObject().put("transparency", .25).put("bubblePopSize", 96))
        val html = "<p><b>Portable image</b><img src=\"data:image/png;base64,aGVsbG8=\"></p>"
        original.getJSONObject("tree").getJSONArray("children").getJSONObject(0).put("content", html)
        repo.migrateLegacy(original.toString())
        repo.setOverlay(OverlayEntity("n-0", xFraction = .2f, yFraction = .4f, panelXFraction = .7f, panelYFraction = .8f, active = true, expanded = true))
        repo.setOverlaysRequested(true)
        val archive = ByteArrayOutputStream().also { BackupCodec.write(repo.backupPayload(), it, app.cacheDir) }.toByteArray()
        val backup = BackupCodec.read(ByteArrayInputStream(archive), app.cacheDir)
        val base = repo.snapshot(); val changed = StateCodec.copy(base.data); changed.put("theme", "dark")
        repo.save(changed, base.data, base.revision)
        val restored = repo.restore(backup, true, repo.snapshot().revision)
        assertTrue(StateCodec.equal(original, restored.data))
        val window = repo.dao.overlays().single()
        assertEquals(.2f, window.xFraction, .0001f); assertEquals(.7f, window.panelXFraction, .0001f)
        assertFalse(window.active); assertFalse(window.expanded); assertFalse(repo.overlaysRequested())
        repo.restore(JSONObject().put("state", original).put("overlays", JSONArray()), true, restored.revision)
        assertTrue(repo.dao.overlays().isEmpty())
        assertEquals(html, repo.snapshot().data.getJSONObject("tree").getJSONArray("children").getJSONObject(0).getString("content"))
    }
    @Test fun closingBubblesKeepsNotesAndDataSurvivesDatabaseReopen() = runBlocking {
        val file = File(app.cacheDir, "persist-${System.nanoTime()}.db")
        var disk = Room.databaseBuilder(app, PinItDatabase::class.java, file.absolutePath).build()
        var storage = PinItRepository(app, disk); storage.migrateLegacy(notes(1000).toString())
        storage.setOverlay(OverlayEntity("n-0", xFraction = .3f, yFraction = .6f, active = true))
        storage.stopOverlays(); assertNotNull(storage.dao.note("n-0")); disk.close()
        disk = Room.databaseBuilder(app, PinItDatabase::class.java, file.absolutePath).build(); storage = PinItRepository(app, disk)
        assertEquals(1001, storage.dao.notes().size); assertEquals(.3f, storage.dao.overlays().single().xFraction, .0001f)
        assertFalse(storage.dao.overlays().single().active); disk.close()
    }
}
