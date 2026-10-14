# Pin-It for Android

## Install the supplied APK

Use `Pin-It-debug.apk` on Android 8.0/API 26 or later. Android asks for permission to install an APK from the browser/file manager you use. Install it, open Pin-It, and create or edit notes normally. Notes save automatically to the app's Room database. Keep the editor open if a save error appears; Settings offers Retry pending edits and Export recovery copy.

Open a note and tap its original Bubble Pin button to enable floating notes. Pin-It explains the optional “Display over other apps” permission and opens Android Settings. Return to Pin-It after enabling it. Android 13+ may also request notification permission. The foreground service provides a Stop floating notes action; Settings provides the same control. Pin-It does not use Accessibility permissions or automatically start overlays at boot.

Drag a minimized bubble to move it; tap to open its editor. Drag the narrow top border to move an expanded window or its bottom-right corner to resize it. Minimize and close use the original panel controls. Closing a floating window keeps its note. Bubble opacity is 20–100%; an expanded editor is always opaque. Bubble and panel positions are independent and saved per note. The original opacity/diameter/theme settings are shared. Up to eight bubbles and two expanded editors are supported to bound memory use.

Android prevents overlays on protected screens. Some vendors also impose battery restrictions or stop services. Screen locking hides windows; unlocking restores them while the service remains active. A service restart restores only windows the user previously enabled. A force-stop or reboot requires reopening Pin-It. Rotation clamps windows within available screen bounds. Tiny screens may clamp requested dimensions.

## Backup and reinstall

Open Settings → Download Backup. Choose Downloads, an SD card, or another location outside Pin-It using Android's file picker. Success appears only after the stream has been written and closed. The file contains active, archived and deleted notes, nested relationships, rich text and embedded images, settings, and floating window associations/positions.

Keep that `.pinit` file outside the app before uninstalling. Uninstall removes Room and private recovery copies. After reinstalling, use Settings → Upload & Restore Backup and select the external file. Review the native summary, then choose Merge (existing IDs win; missing IDs are imported) or Replace. Replace requires a second confirmation. Both retain a pre-restore recovery copy and apply notes transactionally. Restoring never silently starts floating windows; open a note's Bubble Pin to enable them again.

External image URLs are preserved in note HTML but their remote bytes are not downloaded into backups. Native image insertion embeds supported PNG/JPEG/WebP/GIF files, up to 4 MiB each, so they are portable and offline. The app's native WebView permits bundled resources and embedded images, not remote network requests. Backups are portable ZIP/JSON files without encryption; choose their storage location accordingly.

## Android Studio build

1. Extract the complete project and open its `android/` directory in a current Android Studio that supports Android Gradle Plugin 8.13.2.
2. Configure Gradle JDK 21. Install Android SDK Platform 36 and Build Tools 35.0.0 through SDK Manager. Studio writes your local SDK path to `local.properties`; that machine-specific file is intentionally excluded from distribution.
3. Sync Gradle and select the `app` module. Run on an Android 8.0+ device or hardware-accelerated emulator with a current Android System WebView.
4. Build → Build APK(s), or run `./gradlew assembleDebug`. The APK is at `app/build/outputs/apk/debug/app-debug.apk`.
5. Run `./gradlew testDebugUnitTest lintDebug` for repository/backup tests and static Android checks. Gradle resolves Robolectric's SDK artifact before tests; tests then use it locally.

Gradle 8.13 is pinned by the supplied wrapper and SHA-256. AGP, Kotlin 2.2.21, Room 2.7.2, DataStore 1.1.7 and WebKit 1.14.0 are pinned in Gradle configuration. First-time dependency/SDK installation needs internet; the installed app has no INTERNET permission or cloud service dependency. Studio generates a local debug signing key. No signing keys, credentials, SDK installation or dependency caches are bundled.

Prepared web assets are included. If you change React source, run `bun install --frozen-lockfile`, `npm run lint`, and `python3 scripts/prepare_android.py` at the project root before rebuilding Android. The helper replaces only its generated Android web-assets directory. It does not regenerate historical source archives. Use `bunx vite build` for a current browser `dist/` build without regenerating those archives.

For a store release, configure your own release signing, test actual devices and Android permission/lifecycle behavior, and review the store's special-use foreground-service requirements. See TEST_RESULTS.md for the checks actually performed; successful compilation is not a device-certification claim.
