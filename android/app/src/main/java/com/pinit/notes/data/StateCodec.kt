package com.pinit.notes.data

import org.json.JSONArray
import org.json.JSONObject

class DataProblem(val code: String, message: String) : IllegalArgumentException(message)

object StateCodec {
    const val MAX_BYTES = 32 * 1024 * 1024
    const val MAX_NOTES = 20_000
    private fun bad(message: String): Nothing = throw DataProblem("INVALID_DATA", message)
    fun copy(value: JSONObject) = JSONObject(value.toString())
    fun empty(): JSONObject = JSONObject().put("tree", JSONObject().put("id", "root").put("title", "Home")
        .put("content", "").put("archived", false).put("pinned", false).put("pinnedAt", JSONObject.NULL)
        .put("order", 0).put("children", JSONArray())).put("trash", JSONArray()).put("theme", "dark")
        .put("bubbleSettings", JSONObject().put("transparency", .92).put("bubblePopSize", 64)
            .put("expansionWidth", 460).put("expansionHeight", 420).put("cropEnabled", false)
            .put("cropTop", 0).put("cropBottom", 0).put("cropHeight", 250))
    fun parse(raw: String): JSONObject {
        if (raw.toByteArray(Charsets.UTF_8).size > MAX_BYTES) bad("Note data exceeds 32 MiB")
        return try { validate(JSONObject(raw)) } catch (e: DataProblem) { throw e }
        catch (e: Exception) { bad("Malformed note data: ${e.message}") }
    }
    private fun validUnicode(value: String): Boolean {
        var index = 0
        while (index < value.length) {
            val c = value[index]
            if (Character.isHighSurrogate(c)) {
                if (index + 1 >= value.length || !Character.isLowSurrogate(value[index + 1])) return false
                index += 2
            } else { if (Character.isLowSurrogate(c)) return false; index++ }
        }
        return true
    }
    fun validate(data: JSONObject): JSONObject {
        val ids = mutableSetOf<String>()
        fun node(n: JSONObject, depth: Int) {
            if (depth > 128 || ids.size >= MAX_NOTES) bad("Note tree exceeds supported limits")
            val id = n.opt("id")
            if (id !is String || id.isEmpty() || id.length > 256 || !ids.add(id)) bad("Missing or duplicate note ID")
            if (n.opt("title") !is String || n.getString("title").length > 8192) bad("Invalid note title")
            if (n.opt("content") !is String || n.getString("content").length > 8 * 1024 * 1024) bad("Invalid note content")
            if (listOf("id", "title", "content").any { !validUnicode(n.getString(it)) }) bad("Invalid Unicode text")
            for (field in listOf("archived", "pinned")) if (n.has(field) && n.opt(field) !is Boolean) bad("Invalid $field")
            for (field in listOf("order", "pinnedAt", "createdAt", "updatedAt")) {
                val v = n.opt(field)
                if (v != null && v != JSONObject.NULL && (v !is Number || !v.toDouble().isFinite())) bad("Invalid $field")
            }
            val children = n.optJSONArray("children") ?: bad("Missing children array")
            for (i in 0 until children.length()) node(children.optJSONObject(i) ?: bad("Invalid child"), depth + 1)
        }
        val root = data.optJSONObject("tree") ?: bad("Missing note tree")
        if (root.optString("id") != "root") bad("Invalid root ID")
        node(root, 0)
        val trash = data.optJSONArray("trash") ?: if (!data.has("trash")) JSONArray() else bad("Invalid recycle bin")
        val trashIds = mutableSetOf<String>()
        for (i in 0 until trash.length()) {
            val t = trash.optJSONObject(i) ?: bad("Invalid recycle bin entry")
            if (t.opt("id") !is String || !trashIds.add(t.getString("id")) || t.opt("parentId") !is String || t.opt("deletedAt") !is Number) bad("Invalid recycle bin metadata")
            node(t.optJSONObject("node") ?: bad("Missing deleted note"), 0)
        }
        if (data.has("theme") && data.optString("theme") !in listOf("dark", "light")) bad("Invalid theme")
        val settings = data.optJSONObject("bubbleSettings")
        if (data.has("bubbleSettings") && settings == null) bad("Invalid bubble settings")
        mapOf("transparency" to (.2 to 1.0), "bubblePopSize" to (48.0 to 96.0),
            "expansionWidth" to (300.0 to 720.0), "expansionHeight" to (260.0 to 650.0),
            "cropTop" to (0.0 to 200.0), "cropBottom" to (0.0 to 200.0), "cropHeight" to (100.0 to 400.0)).forEach { (k, range) ->
            if (settings?.has(k) == true) {
                val v = settings.opt(k)
                if (v !is Number || !v.toDouble().isFinite() || v.toDouble() !in range.first..range.second) bad("Invalid $k")
            }
        }
        if (settings?.has("cropEnabled") == true && settings.opt("cropEnabled") !is Boolean) bad("Invalid crop flag")
        if (!data.has("trash")) data.put("trash", trash)
        return data
    }
    fun canonical(value: Any?): String = when (value) {
        null, JSONObject.NULL -> "null"
        is JSONObject -> value.keys().asSequence().toList().sorted().joinToString(",", "{", "}") { JSONObject.quote(it) + ":" + canonical(value.get(it)) }
        is JSONArray -> (0 until value.length()).joinToString(",", "[", "]") { canonical(value.get(it)) }
        is String -> JSONObject.quote(value)
        else -> value.toString()
    }
    fun equal(a: Any?, b: Any?) = canonical(a) == canonical(b)
    fun flatten(data: JSONObject): JSONObject {
        validate(data)
        val nodes = JSONObject(); val trash = JSONObject()
        fun walk(node: JSONObject, parent: String?, trashId: String?, index: Int) {
            val fields = copy(node); fields.remove("children")
            nodes.put(node.getString("id"), JSONObject().put("data", fields)
                .put("parent", parent ?: JSONObject.NULL).put("trashId", trashId ?: JSONObject.NULL).put("index", index))
            val children = node.getJSONArray("children")
            for (i in 0 until children.length()) walk(children.getJSONObject(i), node.getString("id"), trashId, i)
        }
        walk(data.getJSONObject("tree"), null, null, 0)
        val entries = data.optJSONArray("trash") ?: JSONArray()
        for (i in 0 until entries.length()) {
            val entry = entries.getJSONObject(i); val meta = copy(entry); meta.remove("node")
            trash.put(entry.getString("id"), meta)
            walk(entry.getJSONObject("node"), null, entry.getString("id"), 0)
        }
        val preferences = copy(data); preferences.remove("tree"); preferences.remove("trash")
        return JSONObject().put("nodes", nodes).put("trash", trash).put("preferences", preferences)
    }
    fun inflate(flat: JSONObject): JSONObject {
        val nodes = flat.getJSONObject("nodes"); val all = nodes.keys().asSequence().toList()
        val visited = mutableSetOf<String>()
        val byParent = all.groupBy { nodes.getJSONObject(it).optString("parent") }
        fun build(id: String, depth: Int): JSONObject {
            if (depth > 128 || !visited.add(id)) bad("Invalid parent relationships")
            val n = nodes.getJSONObject(id); val value = copy(n.getJSONObject("data")); val children = JSONArray()
            (byParent[id] ?: emptyList())
                .sortedWith(compareBy<String> { nodes.getJSONObject(it).optInt("index") }.thenBy { it })
                .forEach { child ->
                    if (!equal(nodes.getJSONObject(child).opt("trashId"), n.opt("trashId"))) bad("Invalid trash relationship")
                    children.put(build(child, depth + 1))
                }
            return value.put("children", children)
        }
        if (!nodes.has("root")) bad("Missing root")
        val result = copy(flat.getJSONObject("preferences")).put("tree", build("root", 0))
        val trash = JSONArray(); val meta = flat.getJSONObject("trash")
        for (entryId in meta.keys().asSequence().toList().sorted()) {
            val roots = all.filter { nodes.getJSONObject(it).isNull("parent") && nodes.getJSONObject(it).optString("trashId") == entryId }
            if (roots.size != 1) bad("Invalid deleted subtree")
            trash.put(copy(meta.getJSONObject(entryId)).put("node", build(roots.single(), 0)))
        }
        if (visited.size != all.size) bad("Orphan or cyclic note relationship")
        return validate(result.put("trash", trash))
    }
    private object Missing
    fun merge(base: JSONObject, local: JSONObject, remote: JSONObject, preferLocal: Boolean = false): JSONObject {
        fun same(a: Any?, b: Any?) = if (a === Missing || b === Missing) a === b else equal(a, b)
        fun mergeValue(b: Any?, l: Any?, r: Any?, path: String): Any? {
            if (same(l, b)) return r
            if (same(r, b) || same(l, r)) return l
            if (path.endsWith(".updatedAt") && l is Number && r is Number) return maxOf(l.toLong(), r.toLong())
            if (b is JSONObject && l is JSONObject && r is JSONObject) {
                val result = JSONObject()
                val keys = (b.keys().asSequence().toList() + l.keys().asSequence().toList() + r.keys().asSequence().toList()).toSet()
                for (key in keys) {
                    val v = mergeValue(if (b.has(key)) b.get(key) else Missing, if (l.has(key)) l.get(key) else Missing, if (r.has(key)) r.get(key) else Missing, "$path.$key")
                    if (v !== Missing) result.put(key, v)
                }
                return result
            }
            if (preferLocal) return l
            throw DataProblem("CONFLICT", "Both editors changed $path. Your edits are retained; choose which version to keep.")
        }
        return inflate(mergeValue(flatten(base), flatten(local), flatten(remote), "state") as JSONObject)
    }
    fun mergeBackup(existing: JSONObject, incoming: JSONObject): JSONObject {
        val current = flatten(existing); val source = flatten(incoming)
        val nodes = current.getJSONObject("nodes"); val additions = source.getJSONObject("nodes")
        // Existing IDs win only after an explicit summary/confirmation in the UI.
        for (id in additions.keys().asSequence().toList()) if (!nodes.has(id)) nodes.put(id, additions.get(id))
        val resolving = mutableSetOf<String>()
        val resolved = mutableSetOf<String>()
        fun inheritContainer(id: String) {
            if (id in resolved) return
            if (!resolving.add(id)) bad("Conflicting backup parent relationships")
            val n = nodes.getJSONObject(id)
            if (!n.isNull("parent")) {
                val parentId = n.getString("parent")
                if (!nodes.has(parentId)) bad("Missing backup parent")
                inheritContainer(parentId)
                n.put("trashId", nodes.getJSONObject(parentId).opt("trashId"))
            }
            resolving.remove(id); resolved.add(id)
        }
        for (id in nodes.keys().asSequence().toList()) inheritContainer(id)
        val trash = current.getJSONObject("trash"); val incomingTrash = source.getJSONObject("trash")
        for (id in incomingTrash.keys().asSequence().toList()) if (!trash.has(id)) {
            val hasRoot = nodes.keys().asSequence().any { nodes.getJSONObject(it).isNull("parent") && nodes.getJSONObject(it).optString("trashId") == id }
            if (hasRoot) trash.put(id, incomingTrash.get(id))
        }
        return inflate(current)
    }
}
