package com.pinit.notes.backup

import com.pinit.notes.data.DataProblem
import com.pinit.notes.data.PinItRepository
import com.pinit.notes.data.StateCodec
import org.json.JSONArray
import org.json.JSONObject
import java.io.*
import java.nio.charset.CodingErrorAction
import java.security.DigestOutputStream
import java.security.MessageDigest
import java.util.zip.ZipEntry
import java.util.zip.ZipInputStream
import java.util.zip.ZipOutputStream

object BackupCodec {
    const val FORMAT = "Pin-It"
    const val VERSION = 1
    const val MAX_ARCHIVE = 40L * 1024 * 1024
    fun validatePayload(payload: JSONObject): JSONObject {
        StateCodec.validate(payload.getJSONObject("state"))
        val ids = StateCodec.flatten(payload.getJSONObject("state")).getJSONObject("nodes")
        val positions = payload.optJSONArray("overlays") ?: JSONArray()
        if (positions.length() > StateCodec.MAX_NOTES) throw DataProblem("INVALID_BACKUP", "Too many overlay records")
        val seen = mutableSetOf<String>()
        for (i in 0 until positions.length()) {
            val o = positions.getJSONObject(i); val id = o.getString("noteId")
            if (id == "root" || !ids.has(id) || !seen.add(id)) throw DataProblem("INVALID_BACKUP", "Invalid floating note association")
            for (key in listOf("xFraction", "yFraction", "panelXFraction", "panelYFraction")) {
                val v = o.optDouble(key, if (key.startsWith("panel")) .5 else Double.NaN)
                if (!v.isFinite() || v !in 0.0..1.0) throw DataProblem("INVALID_BACKUP", "Invalid bubble position")
            }
            if (o.getInt("widthDp") !in 300..720 || o.getInt("heightDp") !in 260..650) throw DataProblem("INVALID_BACKUP", "Invalid floating note size")
        }
        return payload
    }
    private fun writeJson(value: Any?, writer: Writer) {
        when (value) {
            null, JSONObject.NULL -> writer.write("null")
            is JSONObject -> {
                writer.write("{"); var separator = ""
                for (key in value.keys().asSequence()) {
                    writer.write(separator); writer.write(JSONObject.quote(key)); writer.write(":")
                    writeJson(value.get(key), writer); separator = ","
                }
                writer.write("}")
            }
            is JSONArray -> {
                writer.write("[")
                for (i in 0 until value.length()) { if (i > 0) writer.write(","); writeJson(value.get(i), writer) }
                writer.write("]")
            }
            is String -> writer.write(JSONObject.quote(value))
            else -> writer.write(value.toString())
        }
    }
    fun write(payload: JSONObject, destination: OutputStream, temporaryDirectory: File) {
        validatePayload(payload)
        val dataFile = File.createTempFile("pinit-data-", ".json", temporaryDirectory)
        try {
            val digest = MessageDigest.getInstance("SHA-256")
            dataFile.outputStream().use { out ->
                OutputStreamWriter(DigestOutputStream(out, digest), Charsets.UTF_8).use { writeJson(payload, it) }
            }
            if (dataFile.length() > StateCodec.MAX_BYTES) throw DataProblem("TOO_LARGE", "Backup data exceeds 32 MiB")
            val checksum = digest.digest().joinToString("") { "%02x".format(it) }
            val manifest = JSONObject().put("format", FORMAT).put("version", VERSION)
                .put("createdAt", System.currentTimeMillis()).put("dataFile", "data.json")
                .put("dataBytes", dataFile.length()).put("sha256", checksum)
                .put("attachments", "Embedded data-URI images remain in note HTML")
            ZipOutputStream(destination).use { zip ->
                zip.putNextEntry(ZipEntry("manifest.json")); zip.write(manifest.toString().toByteArray(Charsets.UTF_8)); zip.closeEntry()
                zip.putNextEntry(ZipEntry("data.json")); dataFile.inputStream().use { it.copyTo(zip) }; zip.closeEntry()
            }
        } finally { dataFile.delete() }
    }
    private fun boundedCopy(input: InputStream, output: OutputStream, limit: Long): Long {
        val buffer = ByteArray(8192); var total = 0L
        while (true) {
            val count = input.read(buffer); if (count < 0) break
            total += count
            if (total > limit) throw DataProblem("TOO_LARGE", "Backup exceeds supported size limit")
            output.write(buffer, 0, count)
        }
        return total
    }
    private fun utf8(file: File): String = InputStreamReader(file.inputStream(), Charsets.UTF_8.newDecoder()
        .onMalformedInput(CodingErrorAction.REPORT).onUnmappableCharacter(CodingErrorAction.REPORT)).use { it.readText() }
    fun read(input: InputStream, temporaryDirectory: File): JSONObject {
        val archive = File.createTempFile("pinit-import-", ".tmp", temporaryDirectory)
        val data = File.createTempFile("pinit-restore-", ".json", temporaryDirectory)
        try {
            archive.outputStream().use { boundedCopy(input, it, MAX_ARCHIVE) }
            val prefix = archive.inputStream().use { byteArrayOf(it.read().toByte(), it.read().toByte()) }
            if (prefix.size != 2 || prefix[0] != 'P'.code.toByte() || prefix[1] != 'K'.code.toByte()) {
                if (archive.length() > StateCodec.MAX_BYTES) throw DataProblem("TOO_LARGE", "Legacy data exceeds 32 MiB")
                val legacy = JSONObject(utf8(archive))
                val payload = if (legacy.has("state")) legacy else JSONObject().put("state", StateCodec.validate(legacy)).put("overlays", JSONArray())
                return validatePayload(payload)
            }
            var manifest: JSONObject? = null; var sawData = false; val entries = mutableSetOf<String>()
            ZipInputStream(archive.inputStream().buffered()).use { zip ->
                while (true) {
                    val entry = zip.nextEntry ?: break
                    if (entry.isDirectory || entry.name !in listOf("manifest.json", "data.json") || !entries.add(entry.name)) {
                        throw DataProblem("INVALID_BACKUP", "Unexpected, duplicate or unsafe archive path")
                    }
                    if (entry.name == "manifest.json") {
                        val bytes = ByteArrayOutputStream(); boundedCopy(zip, bytes, 64 * 1024)
                        manifest = JSONObject(bytes.toString(Charsets.UTF_8.name()))
                    } else {
                        data.outputStream().use { boundedCopy(zip, it, StateCodec.MAX_BYTES.toLong()) }; sawData = true
                    }
                    zip.closeEntry()
                }
            }
            val m = manifest ?: throw DataProblem("INVALID_BACKUP", "Missing backup manifest")
            if (m.optString("format") != FORMAT || m.opt("version") != VERSION) throw DataProblem("UNSUPPORTED_VERSION", "Unsupported Pin-It backup version")
            if (!sawData || m.optString("dataFile") != "data.json" || (m.opt("dataBytes") !is Number || (m.opt("dataBytes") as Number).toDouble() != data.length().toDouble())) throw DataProblem("INVALID_BACKUP", "Missing or incomplete data")
            val digest = MessageDigest.getInstance("SHA-256")
            data.inputStream().use { stream -> val buffer = ByteArray(8192); while (true) { val n = stream.read(buffer); if (n < 0) break; digest.update(buffer, 0, n) } }
            val actual = digest.digest().joinToString("") { "%02x".format(it) }
            if (!MessageDigest.isEqual(actual.toByteArray(), m.getString("sha256").toByteArray())) throw DataProblem("INVALID_BACKUP", "Backup checksum mismatch")
            return validatePayload(JSONObject(utf8(data)))
        } catch (e: DataProblem) { throw e }
        catch (e: Exception) { throw DataProblem("INVALID_BACKUP", "Backup could not be read: ${e.message}") }
        finally { archive.delete(); data.delete() }
    }
}
