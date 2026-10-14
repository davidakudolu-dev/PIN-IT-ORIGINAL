# Pin-It

Pin-It keeps the original React note board, nested pages, editor, themes, pinning, archive, recycle bin, search, note PDF export and animations. The Android application adds Room persistence, genuine floating notes over other permitted apps, and portable `.pinit` data backups.

- [Android installation, build and usage](ANDROID_README.md)
- [Architecture, migration and backup format](IMPLEMENTATION.md)
- [Actual checks and remaining device tests](TEST_RESULTS.md)
- [Web build and Cloudflare Pages](DEPLOYMENT.md)

Open `android/` in Android Studio to build the native app. Prepared HTML, CSS, JavaScript, fonts and licenses are included in its assets, so an Android build does not require Node or Bun. React source, its lockfile and development scripts are included at the project root.

```sh
# Edit/rebuild the existing React interface
bun install --frozen-lockfile
npm run lint
python3 scripts/prepare_android.py

# Build and test Android with JDK 21 and Android SDK 36 installed
cd android
./gradlew testDebugUnitTest assembleDebug lintDebug
```

The debug APK is a development build, not a signed store release. The historical web/source archives remain in the project. Their generated source-export components are retained for development; the running app exposes Backup & Restore instead of Download Project Code.
