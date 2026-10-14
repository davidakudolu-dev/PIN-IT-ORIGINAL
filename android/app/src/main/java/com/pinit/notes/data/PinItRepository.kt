package com.pinit.notes.data

import android.content.Context
import androidx.datastore.preferences.core.booleanPreferencesKey
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.preferencesDataStore
import androidx.room.withTransaction
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.security.MessageDigest

val Context.nativePreferences by preferencesDataStore("pin_it_native")

data class Snapshot(val revision: Long, val data: JSONObject) {
    fun json() = JSONObject().put("revision", revision).put("data", data)
}
class PinItRepository(private val context: Context, val db: PinItDatabase) {
    private val mutex = Mutex()
    val dao = db.dao()
    companion object {
        val OVERLAYS_REQUESTED = booleanPreferencesKey("overlays_requested")
        val MIGRATED = booleanPreferencesKey("legacy_migration_completed")
        fun sha256(bytes: ByteArray) = MessageDigest.getInstance("SHA-256").digest(bytes).joinToString("") { "%02x".format(it) }
    }
    private suspend fun readLocked(): Snapshot {
        var state = dao.state()
        if (state == null) {
            require(dao.notes().isEmpty()) { "Database metadata is missing; existing notes were left unchanged" }
            writeLocked(StateCodec.empty(), 0)
            state = dao.state()!!
        }
        val nodes = JSONObject()
        val chunks = dao.contentChunks().groupBy { it.noteId }
        for (n in dao.notes()) nodes.put(n.id, JSONObject().put("data", JSONObject(n.nodeJson).put("content", chunks[n.id]?.joinToString("") { it.text } ?: n.content))
            .put("parent", n.parentId ?: JSONObject.NULL).put("trashId", n.trashId ?: JSONObject.NULL).put("index", n.position))
        val trash = JSONObject()
        for (t in dao.trash()) trash.put(t.id, JSONObject(t.metadataJson))
        val flat = JSONObject().put("nodes", nodes).put("trash", trash).put("preferences", JSONObject(state.preferencesJson))
        return Snapshot(state.revision, StateCodec.inflate(flat))
    }
    private fun contentParts(value: String): List<String> {
        val parts = mutableListOf<String>(); var start = 0
        while (start < value.length) {
            var end = minOf(start + 64 * 1024, value.length)
            if (end < value.length && Character.isHighSurrogate(value[end - 1]) && Character.isLowSurrogate(value[end])) end--
            parts.add(value.substring(start, end)); start = end
        }
        return parts
    }
    suspend fun snapshot(): Snapshot = mutex.withLock { db.withTransaction { readLocked() } }
    private suspend fun writeLocked(data: JSONObject, revision: Long) {
        val flat = StateCodec.flatten(data)
        val nodes = flat.getJSONObject("nodes"); val prior = dao.notes().associateBy { it.id }
        val updates = mutableListOf<NoteEntity>()
        val oldChunks = dao.contentChunks().groupBy { it.noteId }
        val changedContent = mutableListOf<String>()
        val nextChunks = mutableListOf<ContentChunkEntity>()
        for (id in nodes.keys().asSequence()) {
            val item = nodes.getJSONObject(id); val n = item.getJSONObject("data"); val old = prior[id]
            val fullContent = n.getString("content")
            val fields = StateCodec.copy(n); fields.remove("content")
            val json = fields.toString()
            if (json.toByteArray(Charsets.UTF_8).size > 64 * 1024) throw DataProblem("TOO_LARGE", "Note metadata exceeds 64 KiB")
            val oldContent = oldChunks[id]?.joinToString("") { it.text } ?: old?.content
            if (oldContent != fullContent) {
                changedContent.add(id)
                if (fullContent.length > 64 * 1024) contentParts(fullContent).forEachIndexed { part, text -> nextChunks.add(ContentChunkEntity(id, part, text)) }
            }
            val parent = if (item.isNull("parent")) null else item.getString("parent")
            val trash = if (item.isNull("trashId")) null else item.getString("trashId")
            val changed = old == null || !StateCodec.equal(JSONObject(old.nodeJson), fields) || oldContent != fullContent || old.parentId != parent || old.trashId != trash || old.position != item.getInt("index")
            if (changed) updates.add(NoteEntity(id, parent, trash, item.getInt("index"), n.getString("title"), if (fullContent.length > 64 * 1024) "" else fullContent,
                n.optBoolean("archived"), n.optBoolean("pinned"), if (n.isNull("pinnedAt")) null else n.optLong("pinnedAt"),
                n.optInt("order"), if (n.isNull("createdAt")) null else n.optLong("createdAt"),
                if (n.isNull("updatedAt")) null else n.optLong("updatedAt"), (old?.recordVersion ?: 0) + 1, json))
        }
        if (updates.isNotEmpty()) dao.putNotes(updates)
        changedContent.chunked(500).forEach { dao.deleteContent(it) }
        if (nextChunks.isNotEmpty()) dao.putContent(nextChunks)
        val removed = prior.keys - nodes.keys().asSequence().toSet()
        // Bind limits are kept below SQLite's parameter limit.
        removed.toList().chunked(500).forEach { dao.deleteNotes(it) }
        val trash = flat.getJSONObject("trash"); val oldTrash = dao.trash().associateBy { it.id }
        val nextTrash = trash.keys().asSequence().map { id ->
            val t = trash.getJSONObject(id); TrashEntity(id, t.getString("parentId"), t.getLong("deletedAt"), t.toString())
        }.filter { oldTrash[it.id] != it }.toList()
        if (nextTrash.isNotEmpty()) dao.putTrash(nextTrash)
        (oldTrash.keys - trash.keys().asSequence().toSet()).toList().chunked(500).forEach { dao.deleteTrash(it) }
        dao.putState(AppStateEntity(revision = revision, preferencesJson = flat.getJSONObject("preferences").toString()))
        for (overlay in dao.overlays()) {
            if (!nodes.has(overlay.noteId)) dao.deleteOverlay(overlay.noteId)
            else if (!nodes.getJSONObject(overlay.noteId).isNull("trashId")) dao.putOverlay(overlay.copy(active = false, expanded = false))
        }
    }
    suspend fun save(data: JSONObject, base: JSONObject, baseRevision: Long, preferLocal: Boolean = false): Snapshot = mutex.withLock {
        StateCodec.validate(data); StateCodec.validate(base)
        db.withTransaction {
            val current = readLocked()
            val merged = if (baseRevision == current.revision && StateCodec.equal(base, current.data)) data
                else StateCodec.merge(base, data, current.data, preferLocal)
            if (StateCodec.equal(merged, current.data)) current else {
                writeLocked(merged, current.revision + 1)
                readLocked()
            }
        }
    }
    suspend fun migrateLegacy(raw: String?): Snapshot = mutex.withLock {
        db.withTransaction {
            val current = readLocked()
            if (raw.isNullOrBlank()) return@withTransaction current
            val hash = sha256(raw.toByteArray(Charsets.UTF_8))
            if (dao.migration(hash) != null) return@withTransaction current
            val hasNotes = current.data.getJSONObject("tree").getJSONArray("children").length() > 0 || current.data.getJSONArray("trash").length() > 0
            if (hasNotes || dao.state()!!.revision > 0) return@withTransaction current
            val recovered = recover("migration", raw.toByteArray(Charsets.UTF_8))
            val legacy = StateCodec.parse(raw)
            writeLocked(legacy, current.revision + 1)
            val imported = readLocked()
            check(StateCodec.equal(imported.data, StateCodec.validate(legacy))) { "Migration verification failed" }
            dao.putMigration(MigrationEntity(hash, recovered.name, System.currentTimeMillis()))
            context.nativePreferences.edit { it[MIGRATED] = true }
            imported
        }
    }
    fun recover(kind: String, bytes: ByteArray): File {
        val dir = File(context.filesDir, "recovery").apply { mkdirs() }
        val file = File(dir, "$kind-${System.currentTimeMillis()}-${sha256(bytes).take(12)}.json")
        file.outputStream().use { stream -> stream.write(bytes); stream.fd.sync() }
        return file
    }
    suspend fun backupPayload(): JSONObject = mutex.withLock { db.withTransaction {
        val snapshot = readLocked()
        val overlays = JSONArray()
        dao.overlays().forEach { o -> overlays.put(JSONObject().put("noteId", o.noteId).put("xFraction", o.xFraction)
            .put("yFraction", o.yFraction).put("panelXFraction", o.panelXFraction).put("panelYFraction", o.panelYFraction).put("widthDp", o.widthDp).put("heightDp", o.heightDp)
            .put("active", o.active).put("expanded", o.expanded)) }
        JSONObject().put("state", snapshot.data).put("overlays", overlays)
            .put("nativePreferences", JSONObject().put("overlaysRequested", overlaysRequested()))
    } }
    suspend fun restore(payload: JSONObject, replace: Boolean, expectedRevision: Long): Snapshot = mutex.withLock {
        val incoming = StateCodec.validate(payload.getJSONObject("state"))
        db.withTransaction {
            val current = readLocked()
            if (current.revision != expectedRevision) throw DataProblem("CONFLICT", "Notes changed while the restore summary was open. Review it again.")
            recover("pre-restore", backupPayloadUnlocked(current).toString().toByteArray(Charsets.UTF_8))
            val result = if (replace) incoming else StateCodec.mergeBackup(current.data, incoming)
            if (replace) {
                dao.overlays().forEach { dao.deleteOverlay(it.noteId) }
                setOverlaysRequested(false)
            }
            writeLocked(result, current.revision + 1)
            val known = StateCodec.flatten(result).getJSONObject("nodes")
            val existing = dao.overlays().associateBy { it.noteId }
            val overlays = payload.optJSONArray("overlays") ?: JSONArray()
            for (i in 0 until overlays.length()) {
                val o = overlays.getJSONObject(i); val id = o.getString("noteId")
                if (known.has(id) && (replace || id !in existing)) dao.putOverlay(OverlayEntity(id,
                    o.getDouble("xFraction").toFloat(), o.getDouble("yFraction").toFloat(), o.getInt("widthDp"), o.getInt("heightDp"), o.optDouble("panelXFraction", .75).toFloat(), o.optDouble("panelYFraction", .35).toFloat(), false, false))
            }
            // Restoring a file never silently starts overlays over other apps.
            readLocked()
        }
    }
    private suspend fun backupPayloadUnlocked(current: Snapshot): JSONObject {
        val overlays = JSONArray()
        dao.overlays().forEach { o -> overlays.put(JSONObject().put("noteId", o.noteId).put("xFraction", o.xFraction).put("yFraction", o.yFraction).put("panelXFraction", o.panelXFraction).put("panelYFraction", o.panelYFraction)
            .put("widthDp", o.widthDp).put("heightDp", o.heightDp).put("active", o.active).put("expanded", o.expanded)) }
        return JSONObject().put("state", current.data).put("overlays", overlays)
            .put("nativePreferences", JSONObject().put("overlaysRequested", overlaysRequested()))
    }
    suspend fun setOverlaysRequested(enabled: Boolean) { context.nativePreferences.edit { it[OVERLAYS_REQUESTED] = enabled } }
    suspend fun overlaysRequested() = context.nativePreferences.data.first()[OVERLAYS_REQUESTED] ?: false
    suspend fun setOverlay(value: OverlayEntity) = mutex.withLock { dao.putOverlay(value) }
    suspend fun stopOverlays() = mutex.withLock { dao.stopOverlays(); setOverlaysRequested(false) }
}
