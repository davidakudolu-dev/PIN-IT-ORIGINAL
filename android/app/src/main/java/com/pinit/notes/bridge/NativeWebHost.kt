package com.pinit.notes.bridge

import android.content.Context
import android.net.Uri
import android.os.Handler
import android.os.Looper
import android.webkit.*
import androidx.webkit.JavaScriptReplyProxy
import androidx.webkit.WebMessageCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewCompat
import androidx.webkit.WebViewFeature
import com.pinit.notes.PinItApplication
import com.pinit.notes.data.*
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.distinctUntilChanged
import org.json.JSONObject
import java.io.ByteArrayInputStream
import java.util.UUID

fun interface NativeActions { suspend fun handle(action: String, payload: JSONObject): JSONObject }

class NativeWebHost(context: Context, private val app: PinItApplication, private val actions: NativeActions, private val noteId: String? = null) {
    companion object { const val ORIGIN = "https://appassets.androidplatform.net" }
    val webView = WebView(context)
    private val ui = Handler(Looper.getMainLooper())
    private var destroyed = false
    private val flushes = mutableMapOf<String, CompletableDeferred<Boolean>>()
    private var revisionJob: Job? = null
    private val uiRequests = mutableSetOf<Job>()
    init {
        check(WebViewFeature.isFeatureSupported(WebViewFeature.WEB_MESSAGE_LISTENER)) { "An updated Android System WebView is required" }
        webView.setBackgroundColor(android.graphics.Color.rgb(10, 16, 36))
        with(webView.settings) {
            javaScriptEnabled = true; domStorageEnabled = true
            allowFileAccess = false; allowContentAccess = false
            mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
            javaScriptCanOpenWindowsAutomatically = false; setSupportMultipleWindows(false)
            safeBrowsingEnabled = true
            @Suppress("DEPRECATION")
            run { allowFileAccessFromFileURLs = false }
            @Suppress("DEPRECATION")
            run { allowUniversalAccessFromFileURLs = false }
        }
        val loader = WebViewAssetLoader.Builder().addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(context)).build()
        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(view: WebView?, request: WebResourceRequest): WebResourceResponse {
                if (request.url.scheme == "https" && request.url.host == "appassets.androidplatform.net") {
                    return loader.shouldInterceptRequest(request.url) ?: denied()
                }
                return denied()
            }
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest): Boolean =
                request.url.scheme != "https" || request.url.host != "appassets.androidplatform.net" || request.url.path != "/assets/web/index.html"
            override fun onReceivedSslError(view: WebView?, handler: android.webkit.SslErrorHandler, error: android.net.http.SslError?) { handler.cancel() }
        }
        webView.webChromeClient = WebChromeClient()
        WebViewCompat.addWebMessageListener(webView, "PinItNative", setOf(ORIGIN)) { _, message, origin, mainFrame, reply ->
            if (destroyed || !mainFrame || origin.toString().trimEnd('/') != ORIGIN || message.type != WebMessageCompat.TYPE_STRING) return@addWebMessageListener
            val raw = message.data ?: return@addWebMessageListener
            if (raw.toByteArray(Charsets.UTF_8).size > StateCodec.MAX_BYTES * 2 + 1024 * 1024) {
                // IDs precede payloads in this bridge protocol; never leave a valid
                // caller waiting forever when its dataset exceeds message limits.
                val id = Regex("\"id\"\\s*:\"(web-[0-9]+)\"").find(raw.take(256))?.groupValues?.get(1)
                if (id != null) respond(reply, JSONObject().put("id", id).put("ok", false).put("error", JSONObject().put("code", "TOO_LARGE").put("message", "Edits exceed the supported dataset size; keep the editor open to recover them")))
                return@addWebMessageListener
            }
            try {
                val request = JSONObject(raw); val id = request.getString("id")
                if (id.length > 100) return@addWebMessageListener
                val action = request.getString("action"); val payload = request.optJSONObject("payload") ?: JSONObject()
                if (action == "flushAck") {
                    flushes.remove(payload.optString("token"))?.complete(payload.optBoolean("ok"))
                    return@addWebMessageListener
                }
                val job = app.appScope.launch {
                    try {
                        val result = when (action) {
                            "load" -> withContext(Dispatchers.IO) { app.repository.migrateLegacy(if (payload.isNull("legacy")) null else payload.optString("legacy")) }.json()
                            "save" -> withContext(Dispatchers.IO) {
                                val data = StateCodec.validate(payload.getJSONObject("data")); val base = StateCodec.validate(payload.getJSONObject("base"))
                                validateEditorScope(data, base)
                                app.repository.save(data, base, payload.getLong("baseRevision"))
                            }.json()
                            "resolveConflict" -> {
                                validateEditorScope(StateCodec.validate(payload.getJSONObject("data")), StateCodec.validate(payload.getJSONObject("base")))
                                withContext(Dispatchers.IO) { app.repository.recover("conflict", payload.getJSONObject("data").toString().toByteArray(Charsets.UTF_8)) }
                                actions.handle(action, payload)
                            }
                            "clipboard" -> {
                                val text = payload.getString("text"); require(text.length <= 8 * 1024 * 1024)
                                (context.getSystemService(Context.CLIPBOARD_SERVICE) as android.content.ClipboardManager)
                                    .setPrimaryClip(android.content.ClipData.newPlainText("Pin-It note", text))
                                JSONObject().put("copied", true)
                            }
                            "overlay.open", "overlay.stop", "overlay.status", "overlay.minimize", "overlay.close", "overlay.resize",
                            "backup.export", "backup.restore", "backup.recovery", "file.export", "image.pick" -> actions.handle(action, payload)
                            else -> throw DataProblem("UNSUPPORTED_ACTION", "Unsupported native request")
                        }
                        respond(reply, JSONObject().put("id", id).put("ok", true).put("result", result))
                    } catch (error: Exception) {
                        val code = (error as? DataProblem)?.code ?: "NATIVE_ERROR"
                        respond(reply, JSONObject().put("id", id).put("ok", false).put("error", JSONObject().put("code", code).put("message", error.message ?: "Operation failed")))
                    }
                }
                if (action !in listOf("load", "save")) {
                    uiRequests.add(job); job.invokeOnCompletion { uiRequests.remove(job) }
                }
            } catch (_: Exception) { /* Invalid requests are ignored without privileged side effects. */ }
        }
        app.webHosts.add(this)
        revisionJob = app.appScope.launch {
            try {
            app.repository.dao.revisions().distinctUntilChanged().collect { revision ->
                if (revision != null && !destroyed) {
                    val snapshot = withContext(Dispatchers.IO) { app.repository.snapshot() }
                    val quoted = JSONObject.quote(snapshot.json().toString())
                    webView.evaluateJavascript("window.dispatchEvent(new CustomEvent('pinit:native-state',{detail:JSON.parse($quoted)}))", null)
                }
            }
            } catch (error: Exception) {
                if (error is CancellationException) throw error
                if (!destroyed) webView.evaluateJavascript("window.dispatchEvent(new CustomEvent('pinit:save-error',{detail:'Saved data could not be read. Your records were left unchanged.'}))", null)
            }
        }
        val suffix = noteId?.let { "?overlayNoteId=" + Uri.encode(it) } ?: ""
        webView.loadUrl("$ORIGIN/assets/web/index.html$suffix")
    }
    private fun validateEditorScope(data: JSONObject, base: JSONObject) {
        if (noteId == null) return
        val next = StateCodec.flatten(data); val before = StateCodec.flatten(base)
        for (flat in listOf(next, before)) {
            val n = flat.getJSONObject("nodes").optJSONObject(noteId)?.getJSONObject("data")
                ?: throw DataProblem("MISSING_NOTE", "Floating note is no longer available")
            n.remove("title"); n.remove("content"); n.remove("updatedAt")
            flat.getJSONObject("preferences").remove("bubbleSettings")
        }
        if (!StateCodec.equal(next, before)) throw DataProblem("FORBIDDEN", "Floating editors can only change their own note and bubble preferences")
    }
    private fun denied() = WebResourceResponse("text/plain", "UTF-8", 403, "Blocked", emptyMap(), ByteArrayInputStream("Only bundled application content is allowed".toByteArray()))
    private fun respond(reply: JavaScriptReplyProxy, response: JSONObject) {
        if (!destroyed) try { reply.postMessage(response.toString()) } catch (_: Exception) { }
    }
    suspend fun flush(): Boolean {
        if (destroyed) return true
        val token = UUID.randomUUID().toString(); val waiter = CompletableDeferred<Boolean>(); flushes[token] = waiter
        val quoted = JSONObject.quote(token)
        webView.evaluateJavascript("(async()=>{let ok=false;try{await window.PinIt?.flush();ok=true}catch(e){}window.PinItNative.postMessage(JSON.stringify({id:'flush-'+$quoted,action:'flushAck',payload:{token:$quoted,ok}}))})()", null)
        return try { withTimeout(30_000) { waiter.await() } } finally { flushes.remove(token) }
    }
    fun pause() { if (!destroyed) { webView.evaluateJavascript("window.PinIt?.flush().catch(()=>{})", null); webView.onPause() } }
    fun resume() { if (!destroyed) webView.onResume() }
    fun destroy() {
        if (destroyed) return
        destroyed = true; revisionJob?.cancel(); uiRequests.toList().forEach { it.cancel() }; uiRequests.clear(); app.webHosts.remove(this)
        flushes.values.forEach { it.complete(false) }; flushes.clear()
        WebViewCompat.removeWebMessageListener(webView, "PinItNative")
        webView.stopLoading(); webView.destroy()
    }
}
