# Implementation and data model

## Existing interface and native boundary

The existing React App, BoardView, NoteCard, EditorView, BubblePin, search, archive/trash and themes remain the interface. New Settings and Move dialogs use existing sheet styles. Download Project Code controls and active handlers were removed from the rendered app; development source export files are retained unreferenced. Note PDF export remains, with a native file-picker destination on Android.

MainActivity hosts locally bundled React through WebViewAssetLoader's HTTPS app-assets origin. FloatingNotesService creates real WindowManager TYPE_APPLICATION_OVERLAY windows: minimized bubbles are lightweight Canvas views; expanded windows host the original React BubblePin editor. The WebView disables file/content access, mixed content and remote requests. Its WebMessageListener accepts only the trusted origin and main frame, with a fixed action list. A floating editor's save and conflict actions can only change its own title/content/update time and shared bubble preferences. DOMPurify strips executable markup from rendered/pasted rich text while retaining the stored record and supported formatting/chips. The debug build enables WebView inspection; release builds do not.

## Storage and automatic saves

PinItApplication owns one Room database and shared PinItRepository. Room tables store normalized note IDs/parents/trash associations, order, pin/archive state, timestamps, record versions, preferences, overlay geometry, migration markers and large-content chunks. HTML beyond 64 KiB is split on Unicode-safe boundaries to avoid CursorWindow overflow. Schema 1 is included at `android/app/schemas/`; there is no destructive migration fallback.

The bridge returns a complete snapshot plus monotonic revision. React debounces typing for 150 ms, serializes writes, retains the latest pending draft, and flushes on navigation, minimize, backup and lifecycle transitions. Repository writes use a mutex and Room transaction, update changed rows, and perform a three-way merge against the editor's base snapshot. Changes to independent fields merge. Conflicting changes to the same field produce an explicit dialog and recovery copy. “Keep editing” retains the pending draft; “Use saved version” discards it only by explicit choice; “Save my edits” retains current unrelated changes. Database revisions update main and floating editors without polling.

## Legacy migration

The original `pinboard-notes-data-v5` key and JSON tree format are retained. On native load, a compatible record present in that WebView origin is copied verbatim to a private recovery file before parsing. IDs, hierarchy, order, pin/archive state, trash ancestry, formatting, images, timestamps, settings and unknown metadata are retained within supported limits. The import is transactional, its reconstructed snapshot is verified, and a hash marker plus DataStore completion flag make migration idempotent. The original localStorage value is not removed. After successful native initialization, Android note saves go exclusively to Room.

A native WebView cannot read another browser's origin/profile or an earlier website's localStorage. Export a `.pinit` backup (or compatible v5 JSON) from that original origin and import it explicitly. Existing nonempty/revised Room data is not silently replaced by legacy data. Invalid migration data produces a recovery message and leaves it intact.

## Portable .pinit format, version 1

The file is a ZIP containing exactly `manifest.json` and `data.json`:

- Manifest: `format: "Pin-It"`, `version: 1`, creation timestamp, `dataFile: "data.json"`, exact uncompressed byte count, and SHA-256 of the raw UTF-8 data bytes.
- Payload: `state` (v5-compatible tree, trash and UI preferences), `overlays` (note IDs, bubble/panel fractional positions, dimensions and window state), and native preferences describing user-requested overlays.
- Images inserted natively are data URIs inside note HTML; no private file or database paths are required to restore them.

Backup exports flush live editors, snapshot consistently, generate/validate a temporary archive and write through Android's Storage Access Framework. Restore validates before showing a summary. Merge keeps local IDs and preferences and adds missing IDs; Replace needs explicit confirmation. A revision check rejects changes made while the summary is open. The pre-restore snapshot is synced to a recovery file before one atomic Room transaction applies data. Imported overlay records stay inactive so restoring cannot grant permission/start overlays. Private recovery copies can be exported through Settings and imported again.

Limits: 40 MiB compressed input, 32 MiB JSON payload, 64 KiB manifest, 20,000 notes, 128 nested levels, 8 MiB per note HTML, 8,192 characters per title, and 64 KiB note metadata. Unsafe/extra/duplicate ZIP paths, unsupported versions, inconsistent sizes, checksum failures, invalid IDs/hierarchy/settings and malformed UTF-8 are rejected. Import reads streams into bounded temporary files and never extracts archive paths. Source backups are never modified. Browser backup uses the same v1 format; browser storage remains localStorage and browser floating windows remain the original single-panel fallback.

## Overlay lifecycle

SYSTEM_ALERT_WINDOW is requested with an explanation and system settings. Android 14+ uses a declared special-use foreground service with a visible stop action. Native DataStore records whether the user enabled the feature; Room records positions and associations. Minimized windows are nonfocusable; expanded windows accept keyboard input without making areas outside the window intercept touches. Opacity applies only to minimized views. Expanded root/window content remains opaque. Window positions are clamped on rotation; low-memory handling minimizes editors after flushing. Permission revocation stops windows, and closing a window never deletes its note.

Performance bounds include at most eight Canvas bubbles and two expanded WebViews, indexed hierarchy reconstruction, changed-row writes, chunked large bodies, streams for archive IO, and coroutine/observer cleanup when hosts/windows are destroyed. Physical-device latency, memory, battery and OEM lifecycle behavior remain part of the device verification checklist.
