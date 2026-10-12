# Build and deploy the original Pinboard Notes

The entry point remains `index.html` → `src/main.tsx` → `src/App.tsx`.
This is the original React application compiled by Vite, with targeted repairs.

## Reproduce the build

Verified with Node.js 24.19.0, Bun 1.4.3, Python 3, and the supplied `bun.lock`.

```sh
bun install --frozen-lockfile
npm run lint
npm run build
```

`prebuild` regenerates the full source PDF and the in-app source ZIP. `dist/`
contains production HTML, bundled JavaScript, CSS, the original font families,
and the PDF/source downloads. No runtime server, API key, or backend is needed.
The example Gemini and APP_URL variables are not referenced by this app.
`npm run dev` is only for development; do not deploy the source index.html.

## Cloudflare Pages

For Direct Upload, extract `Pinboard-Notes-Cloudflare-Pages.zip` and upload its
contents, or upload the ZIP where the dashboard accepts ZIP uploads. Its
`index.html` is at the archive root. No build step is needed for this ZIP.
For a Git-based Pages project, install with the frozen Bun lockfile, use
`npm run build` as the build command and `dist` as the output directory.

The app uses an in-memory note navigation stack, not pathname-based routes.
Refreshing the root URL reloads the board and keeps saved notes. Asset and
export references are relative, so the compiled folder also works under a
static-site subdirectory. Use HTTP/HTTPS static hosting rather than opening
index.html with a file:// URL. A Python static HTTP server can verify the build:

```sh
python3 -m http.server 3101 --directory dist
```

Cloudflare deployment was not performed as part of artifact preparation.

## Data compatibility

The storage key is still `pinboard-notes-data-v5`. Note IDs, nested children,
pin timestamps, ordering, trash parent IDs, themes, and settings retain their
original record format. Recent changes write immediately to localStorage.
The optional `window.storage` host adapter is retained, with serialized writes.
When both copies exist, the local copy is preferred so pending host writes do
not discard recent browser edits. Malformed records are left untouched and
produce a recovery message instead of being replaced by an empty tree.

Browser storage belongs to an origin and browser profile. Deploying to a new
Pages domain does not automatically move data from another domain, AI Studio,
or a different device. Before changing origins, back up the existing record
from the original site's browser storage. There is no note-data import/backup
UI in the supplied source; project ZIP export exports code, not personal notes.
Keep this application on a stable origin and back up important notes.

The floating bubble is an in-browser panel. Optional Document Picture-in-Picture
requires a compatible desktop browser and user activation. This is not an
Android system-wide overlay. The original implementation supports one active
floating note at a time. Note PDF export retains jsPDF's built-in fonts; arbitrary
Unicode scripts/emoji and rich-text visual layout are not fully represented.

## Browser regressions

With Python Playwright and Chromium installed, serve dist as above, then run:

```sh
python3 tests/browser_smoke.py --url http://127.0.0.1:3101 --output /tmp/pinboard-tests
```

The tests use disposable browser contexts. They cover notes, nesting, rapid
editing, refresh/reopen persistence, formatting/images, pinning/reordering,
archive/trash restoration, orphan restoration, search, theme persistence,
bubble controls/synchronization, PDFs/source downloads, malformed records,
host-write ordering, visible storage-quota failures, five screen widths, and emulated touch input.
Actual iOS Safari/Android devices and native desktop Picture-in-Picture require
separate device checks. Test JSON results distinguish passing and failing groups.

## Bundled original fonts

The self-hosted fonts are the original Inter and Plus Jakarta Sans families,
obtained from the official Google Fonts repository. SIL Open Font License
texts are included in `public/fonts/`. These files remove the dependency on
Google's runtime CSS/font endpoints without changing the intended families.

- https://github.com/google/fonts/tree/main/ofl/inter
- https://github.com/google/fonts/tree/main/ofl/plusjakartasans
