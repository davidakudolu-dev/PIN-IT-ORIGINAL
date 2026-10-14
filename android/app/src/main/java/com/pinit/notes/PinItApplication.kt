package com.pinit.notes

import android.app.Application
import androidx.room.Room
import com.pinit.notes.data.PinItDatabase
import com.pinit.notes.data.PinItRepository
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob

class PinItApplication : Application() {
    override fun onCreate() { super.onCreate(); android.webkit.WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG) }
    val webHosts = mutableSetOf<com.pinit.notes.bridge.NativeWebHost>()
    suspend fun flushAll() {
        for (host in webHosts.toList()) check(host.flush()) { "Some edits could not be saved. Resolve them before continuing." }
    }
    val appScope = CoroutineScope(SupervisorJob() + Dispatchers.Main.immediate)
    val repository: PinItRepository by lazy {
        PinItRepository(this, Room.databaseBuilder(this, PinItDatabase::class.java, "pin-it.db").build())
    }
}
