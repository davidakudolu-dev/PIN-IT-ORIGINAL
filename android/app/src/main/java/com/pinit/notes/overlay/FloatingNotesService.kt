package com.pinit.notes.overlay

import android.app.*
import android.content.*
import android.content.pm.ServiceInfo
import android.graphics.*
import android.os.*
import android.provider.Settings
import android.view.*
import android.widget.FrameLayout
import android.widget.Toast
import androidx.core.app.NotificationCompat
import androidx.core.app.ServiceCompat
import com.pinit.notes.MainActivity
import com.pinit.notes.PinItApplication
import com.pinit.notes.R
import com.pinit.notes.bridge.NativeActions
import com.pinit.notes.bridge.NativeWebHost
import com.pinit.notes.data.*
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.collect
import org.json.JSONObject
import kotlin.math.abs
import kotlin.math.roundToInt

class FloatingNotesService : Service() {
    companion object {
        const val OPEN = "com.pinit.notes.OPEN"
        const val STOP = "com.pinit.notes.STOP"
        private const val CHANNEL = "floating_notes"
        private const val NOTIFICATION_ID = 42
        const val MAX_BUBBLES = 8
        const val MAX_EDITORS = 2
    }
    private val app get() = application as PinItApplication
    private lateinit var windows: WindowManager
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Main.immediate + CoroutineExceptionHandler { _, _ ->
        Toast.makeText(this, "Floating notes stopped because storage could not be read or written. Your saved notes remain in Pin-It.", Toast.LENGTH_LONG).show()
        stopSelf()
    })
    private data class Entry(var state: OverlayEntity, var view: View, var params: WindowManager.LayoutParams, var host: NativeWebHost? = null)
    private val entries = mutableMapOf<String, Entry>()
    private var starting = true
    private var stateData = StateCodec.empty()
    private val labelTypeface by lazy {
        try { val face = Typeface.createFromAsset(assets, "web/fonts/PlusJakartaSans-variable.ttf")
            if (Build.VERSION.SDK_INT >= 28) Typeface.create(face, 800, false) else Typeface.create(face, Typeface.BOLD)
        } catch (_: Exception) { Typeface.DEFAULT_BOLD }
    }
    private val screenReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            if (!Settings.canDrawOverlays(this@FloatingNotesService)) { app.appScope.launch { app.repository.stopOverlays() }; stopSelf(); return }
            val show = intent?.action == Intent.ACTION_USER_PRESENT
            entries.values.forEach { it.view.visibility = if (show) View.VISIBLE else View.GONE; if (show) it.host?.resume() else it.host?.pause() }
        }
    }
    override fun onCreate() {
        super.onCreate(); windows = getSystemService(WINDOW_SERVICE) as WindowManager
        val manager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager
        manager.createNotificationChannel(NotificationChannel(CHANNEL, "Floating notes", NotificationManager.IMPORTANCE_LOW))
        ServiceCompat.startForeground(this, NOTIFICATION_ID, notification(), if (Build.VERSION.SDK_INT >= 34) ServiceInfo.FOREGROUND_SERVICE_TYPE_SPECIAL_USE else 0)
        val filter = IntentFilter().apply { addAction(Intent.ACTION_SCREEN_OFF); addAction(Intent.ACTION_USER_PRESENT) }
        if (Build.VERSION.SDK_INT >= 33) registerReceiver(screenReceiver, filter, RECEIVER_NOT_EXPORTED) else registerReceiver(screenReceiver, filter)
        scope.launch {
            app.repository.dao.revisions().collect {
                stateData = withContext(Dispatchers.IO) { app.repository.snapshot().data }
                entries.values.forEach { entry ->
                    (entry.view as? BubbleView)?.update(stateData, entry.state.noteId)
                    if (!entry.state.expanded) {
                        entry.view.alpha = stateData.optJSONObject("bubbleSettings")?.optDouble("transparency", .92)?.toFloat() ?: .92f
                        // Diameter changes are shared preferences, not overlay-row
                        // changes, so apply their new native bounds here as well.
                        entry.params = layout(entry.state)
                        try { windows.updateViewLayout(entry.view, entry.params) } catch (_: Exception) { stopSelf() }
                    }
                }
            }
        }
        scope.launch {
            app.repository.dao.observeOverlays().collect { records ->
                if (!Settings.canDrawOverlays(this@FloatingNotesService)) { app.appScope.launch { app.repository.stopOverlays() }; stopSelf(); return@collect }
                val active = records.filter { it.active }.take(MAX_BUBBLES)
                (entries.keys - active.map { it.noteId }.toSet()).toList().forEach { remove(it) }
                for (record in active) render(record)
                (getSystemService(NOTIFICATION_SERVICE) as NotificationManager).notify(NOTIFICATION_ID, notification())
                if (active.isEmpty() && !starting) { app.repository.setOverlaysRequested(false); stopSelf() }
            }
        }
    }
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (!Settings.canDrawOverlays(this)) { app.appScope.launch { app.repository.stopOverlays() }; stopSelf(); return START_NOT_STICKY }
        if (intent?.action == STOP) {
            scope.launch {
                try { app.flushAll() } catch (e: Exception) { Toast.makeText(this@FloatingNotesService, "Some edits need recovery in Pin-It", Toast.LENGTH_LONG).show() }
                app.repository.stopOverlays(); stopSelf()
            }
            return START_NOT_STICKY
        }
        scope.launch {
            try {
                if (!app.repository.overlaysRequested()) { stopSelf(); return@launch }
                val id = intent?.getStringExtra("noteId")
                if (id != null) {
                    val note = withContext(Dispatchers.IO) { app.repository.dao.note(id) }
                    if (note == null || note.trashId != null || id == "root") throw DataProblem("MISSING_NOTE", "Note is unavailable")
                    val records = app.repository.dao.overlays()
                    if (records.count { it.active } >= MAX_BUBBLES && records.none { it.noteId == id && it.active }) throw DataProblem("LIMIT", "Up to 8 floating notes are supported")
                    val previous = records.firstOrNull { it.noteId == id }
                    val settings = app.repository.snapshot().data.optJSONObject("bubbleSettings")
                    app.repository.setOverlay((previous ?: OverlayEntity(id, xFraction = .8f, yFraction = (.15f + records.count { it.active } * .09f).coerceAtMost(.85f), widthDp = settings?.optInt("expansionWidth", 460) ?: 460, heightDp = settings?.optInt("expansionHeight", 420) ?: 420)).copy(active = true, expanded = false))
                }
            } catch (e: Exception) { Toast.makeText(this@FloatingNotesService, e.message, Toast.LENGTH_LONG).show() }
            finally { starting = false; if (app.repository.dao.overlays().none { it.active }) stopSelf() }
        }
        return START_STICKY
    }
    private fun notification(): Notification {
        val stop = PendingIntent.getService(this, 1, Intent(this, javaClass).setAction(STOP), PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val open = PendingIntent.getActivity(this, 2, Intent(this, MainActivity::class.java), PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        return NotificationCompat.Builder(this, CHANNEL).setSmallIcon(R.drawable.ic_notification)
            .setContentTitle("Pin-It floating notes").setContentText("${entries.size} floating note(s) • Tap to open Pin-It")
            .setContentIntent(open).setOngoing(true).addAction(R.drawable.ic_notification, "Stop floating notes", stop).build()
    }
    private fun dp(value: Int) = (value * resources.displayMetrics.density).roundToInt()
    private fun bounds(): Rect {
        if (Build.VERSION.SDK_INT >= 30) {
            val metrics = windows.currentWindowMetrics
            val insets = metrics.windowInsets.getInsetsIgnoringVisibility(WindowInsets.Type.systemBars() or WindowInsets.Type.displayCutout())
            return Rect(metrics.bounds.left + insets.left, metrics.bounds.top + insets.top, metrics.bounds.right - insets.right, metrics.bounds.bottom - insets.bottom)
        }
        @Suppress("DEPRECATION") val metrics = android.util.DisplayMetrics().also { windows.defaultDisplay.getRealMetrics(it) }
        fun inset(name: String): Int { val id = resources.getIdentifier(name, "dimen", "android"); return if (id != 0) resources.getDimensionPixelSize(id) else 0 }
        return Rect(0, inset("status_bar_height"), metrics.widthPixels, metrics.heightPixels - inset("navigation_bar_height"))
    }
    private fun layout(state: OverlayEntity): WindowManager.LayoutParams {
        val box = bounds(); val settings = stateData.optJSONObject("bubbleSettings")
        val size = dp(settings?.optInt("bubblePopSize", 64) ?: 64)
        val width = (if (state.expanded) dp(state.widthDp) else size).coerceAtMost((box.width() - dp(16)).coerceAtLeast(dp(48)))
        val height = (if (state.expanded) dp(state.heightDp) else size).coerceAtMost((box.height() - dp(16)).coerceAtLeast(dp(48)))
        val flags = WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL or WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN or (if (state.expanded) 0 else WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE)
        return WindowManager.LayoutParams(width, height, WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY, flags, PixelFormat.TRANSLUCENT).apply {
            gravity = Gravity.TOP or Gravity.LEFT
            x = box.left + dp(8) + ((box.width() - width - dp(16)).coerceAtLeast(0) * (if (state.expanded) state.panelXFraction else state.xFraction)).roundToInt()
            y = box.top + dp(8) + ((box.height() - height - dp(16)).coerceAtLeast(0) * (if (state.expanded) state.panelYFraction else state.yFraction)).roundToInt()
            softInputMode = WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE
        }
    }
    private suspend fun render(state: OverlayEntity) {
        val existing = entries[state.noteId]
        if (existing != null && existing.state.expanded == state.expanded) {
            if (existing.state != state) {
                existing.state = state; existing.params = layout(state)
                try { windows.updateViewLayout(existing.view, existing.params) } catch (_: Exception) { stopSelf() }
            }
            existing.host?.webView?.evaluateJavascript("window.dispatchEvent(new CustomEvent('pinit:overlay-size',{detail:{width:${state.widthDp},height:${state.heightDp}}}))", null)
            return
        }
        remove(state.noteId)
        stateData = withContext(Dispatchers.IO) { app.repository.snapshot().data }
        try {
            if (state.expanded) {
                if (entries.values.count { it.state.expanded } >= MAX_EDITORS) {
                    scope.launch { app.repository.setOverlay(state.copy(expanded = false)) }
                    Toast.makeText(this, "Keep up to two floating editors open at once", Toast.LENGTH_LONG).show(); return
                }
                val host = NativeWebHost(this, app, NativeActions { action, payload -> handleForNote(state.noteId, action, payload) }, state.noteId)
                val root = FrameLayout(this).apply { alpha = 1f }
                root.addView(host.webView, FrameLayout.LayoutParams(-1, -1))
                // A narrow border grip moves the native window without intercepting editor controls.
                val grip = View(this)
                root.addView(grip, FrameLayout.LayoutParams(-1, dp(8), Gravity.TOP))
                val resize = View(this)
                root.addView(resize, FrameLayout.LayoutParams(dp(24), dp(24), Gravity.BOTTOM or Gravity.RIGHT))
                val entry = Entry(state, root, layout(state), host); entries[state.noteId] = entry
                installDrag(grip, entry, resize = false); installDrag(resize, entry, resize = true)
                windows.addView(root, entry.params)
            } else {
                val view = BubbleView().apply { update(stateData, state.noteId); alpha = stateData.optJSONObject("bubbleSettings")?.optDouble("transparency", .92)?.toFloat() ?: .92f }
                val entry = Entry(state, view, layout(state)); entries[state.noteId] = entry
                installDrag(view, entry, resize = false)
                windows.addView(view, entry.params)
            }
        } catch (e: Exception) {
            remove(state.noteId)
            scope.launch { app.repository.setOverlay(state.copy(active = false, expanded = false)) }
            Toast.makeText(this, "Floating note could not open: ${e.message}", Toast.LENGTH_LONG).show()
        }
    }
    private fun installDrag(view: View, entry: Entry, resize: Boolean) {
        var startX = 0f; var startY = 0f; var originalX = 0; var originalY = 0; var originalWidth = 0; var originalHeight = 0; var moved = false
        val slop = ViewConfiguration.get(this).scaledTouchSlop
        view.setOnTouchListener { _, event ->
            when (event.actionMasked) {
                MotionEvent.ACTION_DOWN -> { startX = event.rawX; startY = event.rawY; originalX = entry.params.x; originalY = entry.params.y; originalWidth = entry.params.width; originalHeight = entry.params.height; moved = false; true }
                MotionEvent.ACTION_MOVE -> {
                    val dx = event.rawX - startX; val dy = event.rawY - startY
                    if (abs(dx) > slop || abs(dy) > slop) moved = true
                    if (moved) {
                        val box = bounds()
                        if (resize) {
                            entry.params.width = (originalWidth + dx).roundToInt().coerceIn(dp(300).coerceAtMost(box.width() - dp(16)), dp(720).coerceAtMost(box.width() - dp(16)))
                            entry.params.height = (originalHeight + dy).roundToInt().coerceIn(dp(260).coerceAtMost(box.height() - dp(16)), dp(650).coerceAtMost(box.height() - dp(16)))
                        } else {
                            entry.params.x = (originalX + dx).roundToInt().coerceIn(box.left + dp(8), (box.right - entry.params.width - dp(8)).coerceAtLeast(box.left + dp(8)))
                            entry.params.y = (originalY + dy).roundToInt().coerceIn(box.top + dp(8), (box.bottom - entry.params.height - dp(8)).coerceAtLeast(box.top + dp(8)))
                        }
                        try { windows.updateViewLayout(entry.view, entry.params) } catch (_: Exception) { stopSelf() }
                    }
                    true
                }
                MotionEvent.ACTION_UP -> {
                    if (moved) persist(entry, resize)
                    else if (!entry.state.expanded) scope.launch { app.repository.setOverlay(entry.state.copy(expanded = true)) }
                    true
                }
                MotionEvent.ACTION_CANCEL -> { if (moved) persist(entry, resize); true }
                else -> false
            }
        }
    }
    private fun persist(entry: Entry, resized: Boolean) {
        val box = bounds(); val density = resources.displayMetrics.density
        val x = (entry.params.x - box.left - dp(8)).toFloat() / (box.width() - entry.params.width - dp(16)).coerceAtLeast(1)
        val y = (entry.params.y - box.top - dp(8)).toFloat() / (box.height() - entry.params.height - dp(16)).coerceAtLeast(1)
        val updated = entry.state.copy(xFraction = if (entry.state.expanded) entry.state.xFraction else x.coerceIn(0f, 1f), yFraction = if (entry.state.expanded) entry.state.yFraction else y.coerceIn(0f, 1f),
            panelXFraction = if (entry.state.expanded) x.coerceIn(0f, 1f) else entry.state.panelXFraction, panelYFraction = if (entry.state.expanded) y.coerceIn(0f, 1f) else entry.state.panelYFraction,
            widthDp = if (resized) (entry.params.width / density).roundToInt().coerceIn(300, 720) else entry.state.widthDp,
            heightDp = if (resized) (entry.params.height / density).roundToInt().coerceIn(260, 650) else entry.state.heightDp)
        entry.state = updated; scope.launch { app.repository.setOverlay(updated) }
    }
    private suspend fun handleForNote(id: String, action: String, payload: JSONObject): JSONObject {
        val state = app.repository.dao.overlays().firstOrNull { it.noteId == id } ?: throw DataProblem("MISSING_NOTE", "Floating note is closed")
        return when (action) {
            "overlay.minimize" -> { app.repository.setOverlay(state.copy(expanded = false)); JSONObject().put("minimized", true) }
            "overlay.close" -> { app.repository.setOverlay(state.copy(active = false, expanded = false)); JSONObject().put("closed", true) }
            "overlay.resize" -> {
                val width = payload.optInt("widthDp", state.widthDp); val height = payload.optInt("heightDp", state.heightDp)
                if (width !in 300..720 || height !in 260..650) throw DataProblem("INVALID_SIZE", "Invalid editor dimensions")
                app.repository.setOverlay(state.copy(widthDp = width, heightDp = height)); JSONObject().put("resized", true)
            }
            "overlay.status" -> JSONObject().put("permission", Settings.canDrawOverlays(this)).put("active", true).put("widthDp", state.widthDp).put("heightDp", state.heightDp)
            "resolveConflict" -> {
                val choice = suspendCancellableCoroutine<Int> { continuation ->
                    val dialog = AlertDialog.Builder(android.view.ContextThemeWrapper(this, android.R.style.Theme_Material_Dialog_Alert))
                        .setTitle("Conflicting note edits").setMessage("A recovery copy was retained. Save your changed fields, or use the database version?")
                        .setPositiveButton("Save my edits") { _, _ -> if (continuation.isActive) continuation.resume(1) {} }
                        .setNegativeButton("Use saved version") { _, _ -> if (continuation.isActive) continuation.resume(0) {} }
                        .setNeutralButton("Keep editing") { _, _ -> if (continuation.isActive) continuation.resume(2) {} }
                        .setOnCancelListener { if (continuation.isActive) continuation.resume(2) {} }.create()
                    dialog.window?.setType(WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY); dialog.show()
                    continuation.invokeOnCancellation { dialog.dismiss() }
                }
                when (choice) {
                    1 -> withContext(Dispatchers.IO) { app.repository.save(payload.getJSONObject("data"), payload.getJSONObject("base"), payload.getLong("baseRevision"), true) }.json()
                    0 -> withContext(Dispatchers.IO) { app.repository.snapshot() }.json().put("discarded", true)
                    else -> throw DataProblem("CANCELLED", "Edits remain open and have not been saved")
                }
            }
            else -> throw DataProblem("UNSUPPORTED_ACTION", "Open the main Pin-It app for this operation")
        }
    }
    private fun remove(id: String) {
        entries.remove(id)?.let { entry ->
            try { windows.removeView(entry.view) } catch (_: Exception) { }
            entry.host?.destroy()
        }
    }
    override fun onConfigurationChanged(newConfig: android.content.res.Configuration) {
        super.onConfigurationChanged(newConfig)
        entries.values.forEach { entry -> entry.params = layout(entry.state); try { windows.updateViewLayout(entry.view, entry.params) } catch (_: Exception) { } }
    }
    override fun onTrimMemory(level: Int) {
        super.onTrimMemory(level)
        if (level >= TRIM_MEMORY_RUNNING_LOW) scope.launch {
            entries.values.filter { it.state.expanded }.toList().forEach { entry ->
                if (entry.host?.flush() == true) app.repository.setOverlay(entry.state.copy(expanded = false))
            }
        }
    }
    override fun onDestroy() {
        scope.cancel(); try { unregisterReceiver(screenReceiver) } catch (_: Exception) { }
        entries.keys.toList().forEach { remove(it) }; stopForeground(STOP_FOREGROUND_REMOVE); super.onDestroy()
    }
    override fun onBind(intent: Intent?): IBinder? = null
    private inner class BubbleView : View(this@FloatingNotesService) {
        private var label = "Untitled"; private var light = false; private val paint = Paint(Paint.ANTI_ALIAS_FLAG)
        fun update(data: JSONObject, id: String) {
            light = data.optString("theme") == "light"
            fun title(n: JSONObject): String? {
                if (n.optString("id") == id) return n.optString("title")
                val children = n.optJSONArray("children") ?: return null
                for (i in 0 until children.length()) title(children.getJSONObject(i))?.let { return it }
                return null
            }
            label = (title(data.getJSONObject("tree")) ?: "Untitled").take(10); invalidate()
        }
        override fun onDraw(canvas: Canvas) {
            super.onDraw(canvas)
            val radius = minOf(width, height) / 2f - dp(3); val x = width / 2f; val y = height / 2f
            paint.shader = LinearGradient(0f, 0f, width.toFloat(), height.toFloat(), if (light) Color.rgb(201, 99, 31) else Color.rgb(255, 201, 102), if (light) Color.rgb(232, 130, 61) else Color.rgb(58, 95, 224), Shader.TileMode.CLAMP)
            paint.style = Paint.Style.FILL; canvas.drawCircle(x, y, radius, paint); paint.shader = null
            paint.style = Paint.Style.STROKE; paint.strokeWidth = dp(1).toFloat(); paint.color = if (light) Color.rgb(232, 130, 61) else Color.rgb(255, 201, 102)
            paint.pathEffect = DashPathEffect(floatArrayOf(dp(4).toFloat(), dp(4).toFloat()), 0f); canvas.drawCircle(x, y, radius + dp(2), paint); paint.pathEffect = null
            paint.style = Paint.Style.FILL; paint.textAlign = Paint.Align.CENTER; paint.color = Color.rgb(26, 16, 36)
            paint.typeface = Typeface.DEFAULT; paint.textSize = resources.displayMetrics.scaledDensity * 16; canvas.drawText("📌", x, y, paint)
            paint.typeface = labelTypeface; paint.textSize = resources.displayMetrics.scaledDensity * 9
            var caption = label
            while (caption.length > 1 && paint.measureText(caption) > width - dp(14)) caption = caption.dropLast(1)
            if (caption != label) caption = caption.dropLast(1) + "…"
            canvas.drawText(caption, x, y + dp(14), paint)
        }
    }
}
