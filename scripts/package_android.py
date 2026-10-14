"""Package all project sources and runtime assets, excluding local build caches.

Usage: python3 scripts/package_android.py --output /tmp/Pin-It_Complete.zip
       [--apk android/app/build/outputs/apk/debug/app-debug.apk]
Existing outputs are never overwritten. A SHA-256 inventory is embedded and
verified after creation. This does not mutate project sources or old archives.
"""
import argparse
import hashlib
import json
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parent.parent
EXCLUDED_DIRS = {'.git', 'node_modules', '.gradle', '.kotlin', '__pycache__',
                 'build', 'coverage', 'downloads'}
EXCLUDED_FILES = {'local.properties', '.DS_Store'}
REQUIRED = {'README.md', 'ANDROID_README.md', 'IMPLEMENTATION.md', 'TEST_RESULTS.md',
            'package.json', 'bun.lock', 'index.html', 'src/App.tsx',
            'android/gradlew', 'android/gradlew.bat', 'android/settings.gradle.kts',
            'android/build.gradle.kts', 'android/gradle.properties',
            'android/gradle/wrapper/gradle-wrapper.jar',
            'android/gradle/wrapper/gradle-wrapper.properties',
            'android/app/build.gradle.kts', 'android/app/src/main/AndroidManifest.xml',
            'android/app/src/main/assets/web/index.html',
            'android/app/src/main/java/com/pinit/notes/MainActivity.kt',
            'android/app/src/main/java/com/pinit/notes/data/PinItDatabase.kt',
            'android/app/src/main/java/com/pinit/notes/data/PinItRepository.kt',
            'android/app/src/main/java/com/pinit/notes/overlay/FloatingNotesService.kt',
            'android/app/src/main/java/com/pinit/notes/backup/BackupCodec.kt',
            'android/app/src/main/res/drawable/ic_pin.xml',
            'android/app/schemas/com.pinit.notes.data.PinItDatabase/1.json'}

def project_files():
    for path in sorted(ROOT.rglob('*')):
        if not path.is_file():
            continue
        rel = path.relative_to(ROOT)
        if any(part in EXCLUDED_DIRS for part in rel.parts[:-1]):
            continue
        if path.name in EXCLUDED_FILES or path.suffix in {'.log', '.pyc', '.jks', '.keystore'}:
            continue
        if path.name.startswith('.env') and path.name != '.env.example':
            continue
        if path.is_symlink():
            raise ValueError(f'Unexpected project symlink: {rel}')
        yield rel.as_posix(), path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', required=True, type=Path)
    parser.add_argument('--apk', type=Path)
    args = parser.parse_args()
    output = args.output.resolve()
    if output.exists():
        raise FileExistsError(f'Output already exists: {output}')
    files = {name: path for name, path in project_files() if path.resolve() != output}
    missing = REQUIRED - files.keys()
    if missing:
        raise ValueError(f'Incomplete project; required files missing: {sorted(missing)}')
    if args.apk:
        apk = args.apk.resolve()
        if not apk.is_file():
            raise FileNotFoundError(apk)
        files['Pin-It-debug.apk'] = apk
    inventory = {'project': 'Pin-It', 'files': {name: {'bytes': path.stat().st_size,
                 'sha256': hashlib.sha256(path.read_bytes()).hexdigest()}
                 for name, path in files.items()}}
    output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output, 'x', zipfile.ZIP_DEFLATED) as archive:
        for name, path in files.items():
            archive.write(path, 'Pin-It/' + name)
        archive.writestr('Pin-It/PACKAGE_INVENTORY.json', json.dumps(inventory, indent=2))
    with zipfile.ZipFile(output) as archive:
        if archive.testzip() is not None:
            raise ValueError('ZIP CRC verification failed')
        for name, metadata in inventory['files'].items():
            data = archive.read('Pin-It/' + name)
            if len(data) != metadata['bytes'] or hashlib.sha256(data).hexdigest() != metadata['sha256']:
                raise ValueError(f'ZIP content mismatch: {name}')
    print(json.dumps({'zip': str(output), 'project_files': len(files),
                      'bytes': output.stat().st_size,
                      'sha256': hashlib.sha256(output.read_bytes()).hexdigest(),
                      'required_files': 'present', 'CRC_and_file_hashes': 'passed'}, indent=2))

if __name__ == '__main__':
    main()
