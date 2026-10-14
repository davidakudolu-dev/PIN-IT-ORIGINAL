package com.pinit.notes

import android.Manifest
import android.app.AlertDialog
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.util.Base64
import android.widget.FrameLayout
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.pinit.notes.backup.BackupCodec
import com.pinit.notes.bridge.NativeActions
import com.pinit.notes.bridge.NativeWebHost
import com.pinit.notes.data.*
import com.pinit.notes.overlay.FloatingNotesService
import kotlinx.coroutines.*
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import java.io.File
import java.time.LocalDate

class MainActivity : ComponentActivity(), NativeActions {
    private val app get() = application as PinItApplication
    private var host: NativeWebHost? = null
    private var picker: CompletableDeferred<Uri?>? = null
    private var overlayPermission: CompletableDeferred<Boolean>? = null
    private var notifications: CompletableDeferred<Boolean>? = null
    private val createDocument = registerForActivityResult(ActivityResultContracts.CreateDocument("application/octet-stream")) { picker?.complete(it); picker = null }
    private val openDocument = registerForActivityResult(ActivityResultContracts.OpenDocument()) { picker?.complete(it); picker = null }
    private val permissionScreen = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { overlayPermission?.complete(Settings.canDrawOverlays(this)); overlayPermission = null }
    private val notificationPermission = registerForActivityResult(ActivityResultContracts.RequestPermission()) { notifications?.complete(it); notifications = null }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState); enableEdgeToEdge()
        val root = FrameLayout(this); root.setBackgroundColor(android.graphics.Color.rgb(10, 16, 36)); setContentView(root)
        ViewCompat.setOnApplyWindowInsetsListener(root) { view, insets ->
            val bars = insets.getInsets(WindowInsetsCompat.Type.systemBars() or WindowInsetsCompat.Type.displayCutout())
            val ime = insets.getInsets(WindowInsetsCompat.Type.ime())
            view.setPadding(bars.left, bars.top, bars.right, maxOf(bars.bottom, ime.bottom)); insets
        }
        try { host = NativeWebHost(this, app, this); root.addView(host!!.webView, FrameLayout.LayoutParams(-1, -1)) }
        catch (e: Exception) { AlertDialog.Builder(this).setTitle("Pin-It could not start").setMessage(e.message).setPositiveButton("Close") { _, _ -> finish() }.show() }
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                app.appScope.launch {
                    try {
                        app.flushAll()
                        host?.webView?.evaluateJavascript("Boolean(window.PinIt?.canGoBack?.())") { value ->
                            if (value == "true") host?.webView?.evaluateJavascript("window.dispatchEvent(new Event('pinit:back'))", null) else finish()
                        }
                    } catch (e: Exception) { showError(e.message ?: "Could not save") }
                }
            }
        })
    }
    override fun onPause() { host?.pause(); super.onPause() }
    override fun onResume() {
        super.onResume(); host?.resume()
        if (!Settings.canDrawOverlays(this)) app.appScope.launch { app.repository.stopOverlays() }
    }
    override fun onDestroy() {
        picker?.complete(null); overlayPermission?.complete(false); notifications?.complete(false)
        host?.destroy(); host = null; super.onDestroy()
    }
    private fun showError(message: String) { if (!isFinishing) AlertDialog.Builder(this).setTitle("Pin-It").setMessage(message).setPositiveButton("OK", null).show() }
    private suspend fun confirm(title: String, message: String, positive: String = "Continue"): Boolean = suspendCancellableCoroutine { continuation ->
        val dialog = AlertDialog.Builder(this).setTitle(title).setMessage(message)
            .setPositiveButton(positive) { _, _ -> if (continuation.isActive) continuation.resume(true) {} }
            .setNegativeButton("Cancel") { _, _ -> if (continuation.isActive) continuation.resume(false) {} }
            .setOnCancelListener { if (continuation.isActive) continuation.resume(false) {} }.show()
        continuation.invokeOnCancellation { dialog.dismiss() }
    }
    private suspend fun saveUri(name: String): Uri {
        if (picker != null) throw DataProblem("BUSY", "A file picker is already open")
        val pending = CompletableDeferred<Uri?>(); picker = pending; createDocument.launch(name)
        return pending.await() ?: throw DataProblem("CANCELLED", "File saving was cancelled")
    }
    private suspend fun selectUri(types: Array<String>): Uri {
        if (picker != null) throw DataProblem("BUSY", "A file picker is already open")
        val pending = CompletableDeferred<Uri?>(); picker = pending; openDocument.launch(types)
        return pending.await() ?: throw DataProblem("CANCELLED", "File selection was cancelled")
    }
    override suspend fun handle(action: String, payload: JSONObject): JSONObject = when (action) {
        "overlay.open" -> {
            app.flushAll(); val id = payload.getString("noteId")
            val note = withContext(Dispatchers.IO) { app.repository.dao.note(id) }
            if (note == null || note.id == "root" || note.trashId != null) throw DataProblem("MISSING_NOTE", "This note is not available")
            if (!Settings.canDrawOverlays(this)) {
                if (!confirm("Floating notes", "Allow Pin-It to display movable notes over other permitted apps. This is optional. Android blocks overlays on protected screens. You can stop all floating notes from their notification.", "Open permission settings")) throw DataProblem("PERMISSION_DENIED", "Floating notes were not enabled")
                val pending = CompletableDeferred<Boolean>(); overlayPermission = pending
                permissionScreen.launch(Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:$packageName")))
                if (!pending.await()) throw DataProblem("PERMISSION_DENIED", "Overlay permission was not granted")
            }
            if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != android.content.pm.PackageManager.PERMISSION_GRANTED) {
                val pending = CompletableDeferred<Boolean>(); notifications = pending
                notificationPermission.launch(Manifest.permission.POST_NOTIFICATIONS); pending.await()
            }
            app.repository.setOverlaysRequested(true)
            val intent = Intent(this, FloatingNotesService::class.java).setAction(FloatingNotesService.OPEN).putExtra("noteId", id)
            try { startForegroundService(intent) } catch (e: Exception) { app.repository.setOverlaysRequested(false); throw e }
            JSONObject().put("started", true)
        }
        "overlay.stop" -> { app.flushAll(); app.repository.stopOverlays(); stopService(Intent(this, FloatingNotesService::class.java)); JSONObject().put("stopped", true) }
        "overlay.status" -> JSONObject().put("permission", Settings.canDrawOverlays(this)).put("requested", app.repository.overlaysRequested())
        "backup.export" -> {
            app.flushAll(); val uri = saveUri("Pin-It_Backup_${LocalDate.now()}.pinit"); app.flushAll()
            withContext(Dispatchers.IO) {
                val snapshot = app.repository.backupPayload()
                val temporary = File.createTempFile("pinit-backup-", ".pinit", cacheDir)
                try {
                    temporary.outputStream().use { BackupCodec.write(snapshot, it, cacheDir) }
                    temporary.inputStream().use { BackupCodec.read(it, cacheDir) }
                    (contentResolver.openOutputStream(uri, "wt") ?: error("Destination cannot be opened")).use { out -> temporary.inputStream().use { it.copyTo(out) }; out.flush() }
                } finally { temporary.delete() }
            }
            JSONObject().put("saved", true)
        }
        "backup.restore" -> {
            app.flushAll(); val uri = selectUri(arrayOf("application/*", "text/*", "application/octet-stream"))
            val incoming = withContext(Dispatchers.IO) { (contentResolver.openInputStream(uri) ?: error("File cannot be opened")).use { BackupCodec.read(it, cacheDir) } }
            val current = withContext(Dispatchers.IO) { app.repository.snapshot() }
            val oldNodes = StateCodec.flatten(current.data).getJSONObject("nodes"); val newNodes = StateCodec.flatten(incoming.getJSONObject("state")).getJSONObject("nodes")
            val duplicates = newNodes.keys().asSequence().count { it != "root" && oldNodes.has(it) }
            val conflicts = newNodes.keys().asSequence().count { it != "root" && oldNodes.has(it) && !StateCodec.equal(newNodes.getJSONObject(it), oldNodes.getJSONObject(it)) }
            val summary = "${newNodes.length() - 1} notes including deleted subtrees. $duplicates existing IDs; $conflicts different versions. Merge keeps existing versions and imports missing notes. Replace restores the backup exactly. Floating windows will not start automatically."
            val mode = suspendCancellableCoroutine<Int> { continuation ->
                val dialog = AlertDialog.Builder(this).setTitle("Restore summary").setMessage(summary)
                    .setPositiveButton("Merge") { _, _ -> if (continuation.isActive) continuation.resume(0) {} }
                    .setNeutralButton("Replace") { _, _ -> if (continuation.isActive) continuation.resume(1) {} }
                    .setNegativeButton("Cancel") { _, _ -> if (continuation.isActive) continuation.resume(-1) {} }
                    .setOnCancelListener { if (continuation.isActive) continuation.resume(-1) {} }.show()
                continuation.invokeOnCancellation { dialog.dismiss() }
            }
            if (mode < 0) throw DataProblem("CANCELLED", "Restore cancelled")
            if (mode == 1 && !confirm("Replace local notes?", "All current notes and preferences will be replaced. A recoverable pre-restore copy will be kept inside Pin-It. The selected backup file remains unchanged.", "Replace")) throw DataProblem("CANCELLED", "Restore cancelled")
            app.flushAll()
            withContext(Dispatchers.IO) { app.repository.restore(incoming, mode == 1, current.revision) }.json().put("restored", true)
        }
        "backup.recovery" -> {
            val latest = withContext(Dispatchers.IO) { File(filesDir, "recovery").listFiles()?.maxByOrNull { it.lastModified() } } ?: throw DataProblem("NO_RECOVERY", "No recovery copy is available")
            val uri = saveUri("Pin-It_Recovery_${LocalDate.now()}.json")
            withContext(Dispatchers.IO) { (contentResolver.openOutputStream(uri, "wt") ?: error("Destination cannot be opened")).use { out -> latest.inputStream().use { it.copyTo(out) }; out.flush() } }
            JSONObject().put("saved", true)
        }
        "file.export" -> {
            val name = payload.getString("filename").replace(Regex("[^A-Za-z0-9._ -]"), "_").take(100)
            if (!name.endsWith(".pdf", true)) throw DataProblem("INVALID_FILE", "Only PDF note export is allowed")
            val encoded = payload.getString("base64"); if (encoded.length > 16 * 1024 * 1024) throw DataProblem("TOO_LARGE", "PDF is too large")
            val bytes = Base64.decode(encoded, Base64.DEFAULT)
            if (!bytes.take(4).toByteArray().contentEquals("%PDF".toByteArray())) throw DataProblem("INVALID_FILE", "Invalid PDF")
            val uri = saveUri(name)
            withContext(Dispatchers.IO) { (contentResolver.openOutputStream(uri, "wt") ?: error("Destination cannot be opened")).use { it.write(bytes); it.flush() } }
            JSONObject().put("saved", true)
        }
        "image.pick" -> {
            val uri = selectUri(arrayOf("image/png", "image/jpeg", "image/webp", "image/gif"))
            withContext(Dispatchers.IO) {
                val mime = contentResolver.getType(uri) ?: error("Image type is unknown")
                if (mime !in listOf("image/png", "image/jpeg", "image/webp", "image/gif")) throw DataProblem("INVALID_FILE", "Unsupported image type")
                val out = ByteArrayOutputStream()
                (contentResolver.openInputStream(uri) ?: error("Image cannot be opened")).use { input ->
                    val buffer = ByteArray(8192); while (true) { val n = input.read(buffer); if (n < 0) break; if (out.size() + n > 4 * 1024 * 1024) throw DataProblem("TOO_LARGE", "Image exceeds 4 MiB"); out.write(buffer, 0, n) }
                }
                JSONObject().put("url", "data:$mime;base64," + Base64.encodeToString(out.toByteArray(), Base64.NO_WRAP))
            }
        }
        "resolveConflict" -> {
            val choice = suspendCancellableCoroutine<Int> { continuation ->
                val dialog = AlertDialog.Builder(this).setTitle("Conflicting edits")
                    .setMessage("This note changed in another editor. A recovery copy of your edits has been retained. Choose which version to save, or keep editing.")
                    .setPositiveButton("Save my edits") { _, _ -> if (continuation.isActive) continuation.resume(1) {} }
                    .setNegativeButton("Use saved version") { _, _ -> if (continuation.isActive) continuation.resume(0) {} }
                    .setNeutralButton("Keep editing") { _, _ -> if (continuation.isActive) continuation.resume(2) {} }
                    .setOnCancelListener { if (continuation.isActive) continuation.resume(2) {} }.show()
                continuation.invokeOnCancellation { dialog.dismiss() }
            }
            when (choice) {
                1 -> withContext(Dispatchers.IO) { app.repository.save(payload.getJSONObject("data"), payload.getJSONObject("base"), payload.getLong("baseRevision"), true) }.json()
                0 -> withContext(Dispatchers.IO) { app.repository.snapshot() }.json().put("discarded", true)
                else -> throw DataProblem("CANCELLED", "Edits remain open and have not been saved")
            }
        }
        else -> throw DataProblem("UNSUPPORTED_ACTION", "This action is unavailable in the main window")
    }
}
