# Pinboard Notes

A production-grade hierarchical note-taking application engineered with **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Highlights & Features

1. **Hierarchical Tree & Path Navigation**: Recursive note nesting with breadcrumbs, deep pathing, and localStorage persistence.
2. **Hierarchy of Importance (Pinned Notes)**: Pinned notes are dynamically sorted descending by `pinnedAt` timestamp. Unpinning restores previous relative position.
3. **Hold & Reorder (Drag & Drop)**: Touch and pointer drag handles with live insertion lines and persistent reordering.
4. **Editable Floating Bubble Pin**: Detached floating workspace with:
   - Live two-way synchronization with document tree
   - Transparency slider (20%–100%)
   - Bubble Pop diameter sizing (48px–96px)
   - Expanded window dimension controls (width: 320–720px, height: 280–620px)
   - Viewport Cropping tool with top/bottom inset adjustments
5. **Unique Standout Bubble Pop Trigger**: Vibrant gradient, ambient halo glow, and spinning sparkle icon.
6. **Recycle Bin & Pinned Note Restoration**: Deleted notes preserve parent ancestry (`parentId`). Restoring re-embeds note chips and navigates directly to the parent pinned note's writing page.
7. **Archive System**: Soft-archival state with dedicated view and one-click unarchiving.
8. **Instant Global Full-Text Search**: Traverses titles and rich text with highlighted search query excerpts and instant stack reconstruction.
9. **Dual PDF Export Engines**: Single note printable PDF and full generated comprehensive architectural & codebase PDF (`Pinboard_Notes_Codebase.pdf`).
10. **Dual Theme Design System**: Midnight Dark and Warm Parchment Light modes.

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install --frozen-lockfile

# Start Vite development server
npm run dev

# Compile TypeScript
npm run lint

# Build production bundle
npm run build

# Generate full generated codebase PDF
npm run generate:pdf
```

---

## 📂 Project Structure

```
├── public/
│   ├── Pinboard_Notes_Codebase.pdf   # Full generated comprehensive PDF
│   └── Pinboard_Notes_Complete.zip   # Full zip package
├── scripts/
│   ├── generate_code_pdf.ts          # PDF generation script
│   └── create_project_zip.py         # ZIP packager script
├── src/
│   ├── components/
│   │   ├── ActionSheet.tsx           # Context action sheet
│   │   ├── ArchiveTrashView.tsx      # Recycle bin & archive
│   │   ├── BoardView.tsx             # Main card grid with pinned section
│   │   ├── BubblePin.tsx             # Floating bubble pin with crop & settings
│   │   ├── CodeExportModal.tsx       # Export modal for PDF & ZIP
│   │   ├── EditorView.tsx            # Rich text writing editor
│   │   ├── NoteCard.tsx              # Draggable card with hold-reorder
│   │   ├── SearchModal.tsx           # Global full-text search
│   │   └── TopBar.tsx                # Breadcrumb header & tools
│   ├── utils/
│   │   ├── codeExport.ts             # In-browser PDF & ZIP export engine
│   │   ├── storage.ts                # Local storage persistence
│   │   └── tree.ts                   # Hierarchy, sorting & chip sync
│   ├── App.tsx                       # Main application state machine
│   ├── index.css                     # Themes, design tokens & animations
│   ├── main.tsx                      # DOM entry point
│   ├── types.ts                      # Data models & interfaces
│   └── vite-env.d.ts                 # TypeScript environment types
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Repaired static build

See [DEPLOYMENT.md](DEPLOYMENT.md) for Cloudflare Pages deployment, reproducible installation, data compatibility, and browser regression checks. The original React components, palettes, and storage identifier are retained.
