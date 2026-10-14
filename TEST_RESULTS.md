# Verification results — 14 October 2026

## Passed

| Check | Actual result |
| --- | --- |
| React TypeScript | `npm run lint` passed |
| Prepared native HTML/CSS/JS/fonts | `python3 scripts/prepare_android.py` passed |
| Current web `dist/` | Vite production build passed; old unused generated assets preserved |
| Android Gradle wrapper | Gradle 8.13/JDK 21 wrapper build passed: `testDebugUnitTest assembleDebug lintDebug` |
| Room/backup JVM tests | **12 tests passed**, zero failed, errored or skipped; Robolectric Android API 35 |
| Clean extracted ZIP project | Android `assembleDebug` passed with all 41 tasks executed, using the bundled Gradle wrapper and prepared web assets |
| APK signature and runtime | Android v2 signature verified; every bundled runtime asset matches the prepared asset bytes |
| Package integrity | Required source/config/resource files present; ZIP CRC and every file SHA-256 verified |
| Android lint | **0 errors**, 19 warnings (including deprecated APIs and dependency/target/tooling advisories) |
| Browser regressions | **17 groups passed**, zero failed; Chromium/Playwright desktop and emulated touch |

Machine-readable evidence is included in `verification/native-tests.xml`, `verification/android-lint.xml`, and `verification/browser-results.json`. Gradle pins the offline Robolectric SDK artifact through its dependency resolution. This is a simulated Android framework test environment, not a physical-device run.

Native repository tests cover 1,000-note idempotent migration with recovery copy, malformed migration preserving records, independent-field concurrency merge and same-field conflict rejection, nested/trash relationship round trips, Unicode-safe content chunk boundaries, a 3 MiB embedded image body without CursorWindow overflow, portable 1/100/1,000-note archives, transactional Merge/Replace plus pre-restore copies, stale restore-summary rejection, unsupported version/unsafe path/checksum rejection, images/settings/independent window coordinates, inactive overlay restore and removal of old overlay associations, closing overlays without deleting notes, and reopening an on-disk database with 1,000 notes.

Browser groups cover creation/nesting/rapid saves/reload/reopen, rich formatting/images, root+nested pin/reorder, archive/trash/subtree recovery, orphan restoration, search/theme persistence, bubble editing/size/opacity (expanded 100%, minimized 50%), note PDF and clipboard, portable backup/merge, invalid records left unchanged, visible storage-quota errors, host write serialization, complete subtree moves, script/event/iframe removal from displayed rich text, 1/100/1,000-note archives with archived/trash/image data, cancelled and confirmed Replace plus recovery copy, corrupt-backup rejection, delayed native-bridge writes/conflict choice using a simulated bridge, five viewport widths, and emulated touch dragging/editing.

The desktop backup corpus completed in about 0.8/0.8/2.0 seconds for 1/100/1,000 notes, including navigation, rendering, archive generation and download inspection. These are browser timings, not Android performance measurements. Early automation runs exposed setup and drag timing issues: seeding was moved before app bootstrap, native checks now compare the untouched legacy record, and drag checks use the visible handle with one target movement. The final full suite passed without an application error.

## Untested / blocked environment checks

This workspace has no `/dev/kvm` hardware acceleration. Android 15 and Android 11 x86_64 software-rendered emulators were attempted. The Android 15 package installer remained unavailable/unready (one attempt reported that system Settings providers were not installed). The lighter image did not become usable for application execution. These are test-environment limitations; **successful installation or native UI/overlay execution is not claimed**.

The following still require a suitable Android emulator or device:

- APK installation/launch and current System WebView startup.
- System overlay and notification permission screens; cross-app WindowManager rendering, true native opacity, dragging/resizing, keyboard/insets, independent window positions, and two simultaneous editors.
- SAF file-picker export completion/cancellation, URI-provider failures, external backup survival through actual uninstall/reinstall, and end-to-end restore after reinstall.
- Screen lock/unlock, rotation, background/foreground, OS process/service kill/restart, permission revocation, force-stop, low-memory cleanup, OEM battery controls and protected-screen restrictions.
- Android 8/11/13/14/15/16 behavior, release signing/store publication, physical-device memory/latency/battery usage, and desktop Picture-in-Picture on a supporting browser.

Run the manual flows in ANDROID_README.md on real devices before distributing a production release. The supplied APK is a buildable development deliverable; no store deployment or device certification was performed.
