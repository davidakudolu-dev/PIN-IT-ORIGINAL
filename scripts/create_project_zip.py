import os
import zipfile

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUTPUT_ZIP = os.path.join(PROJECT_ROOT, 'public', 'Pinboard_Notes_Complete.zip')

INCLUDED_FILES = [
    ('README.md', 'README.md'),
    ('metadata.json', 'metadata.json'),
    ('package.json', 'package.json'),
    ('bun.lock', 'bun.lock'),
    ('.node-version', '.node-version'),
    ('DEPLOYMENT.md', 'DEPLOYMENT.md'),
    ('tsconfig.json', 'tsconfig.json'),
    ('vite.config.ts', 'vite.config.ts'),
    ('index.html', 'index.html'),
    ('.env.example', '.env.example'),
    ('.gitignore', '.gitignore'),
    (os.path.join('public', 'Pinboard_Notes_Codebase.pdf'), 'public/Pinboard_Notes_Codebase.pdf'),
]

INCLUDED_DIRS = [
    'src',
    'scripts',
    'tests',
    'public/fonts',
    'assets',
]

def make_zip():
    os.makedirs(os.path.dirname(OUTPUT_ZIP), exist_ok=True)
    with zipfile.ZipFile(OUTPUT_ZIP, 'w', zipfile.ZIP_DEFLATED) as zf:
        # Add root files
        for rel_file, arc_name in INCLUDED_FILES:
            full_path = os.path.join(PROJECT_ROOT, rel_file)
            if os.path.exists(full_path):
                zf.write(full_path, arc_name)
                print(f"Added file: {arc_name}")

        # Add directories
        for rel_dir in INCLUDED_DIRS:
            dir_full = os.path.join(PROJECT_ROOT, rel_dir)
            for root, _, files in os.walk(dir_full):
                for f in files:
                    if f.endswith('.pyc') or '__pycache__' in root:
                        continue
                    full_p = os.path.join(root, f)
                    rel_p = os.path.relpath(full_p, PROJECT_ROOT)
                    zf.write(full_p, rel_p)
                    print(f"Added dir file: {rel_p}")

    size_mb = os.path.getsize(OUTPUT_ZIP) / (1024 * 1024)
    print(f"\nSuccessfully generated {OUTPUT_ZIP} ({size_mb:.2f} MB)")

if __name__ == '__main__':
    make_zip()
