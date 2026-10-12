import { jsPDF } from 'jspdf';

import appTsx from '../App.tsx?raw';
import mainTsx from '../main.tsx?raw';
import typesTs from '../types.ts?raw';
import viteEnvDTs from '../vite-env.d.ts?raw';
import indexCss from '../index.css?raw';
import storageTs from './storage.ts?raw';
import treeTs from './tree.ts?raw';
import codeExportTs from './codeExport.ts?raw';
import topBarTsx from '../components/TopBar.tsx?raw';
import boardViewTsx from '../components/BoardView.tsx?raw';
import noteCardTsx from '../components/NoteCard.tsx?raw';
import editorViewTsx from '../components/EditorView.tsx?raw';
import bubblePinTsx from '../components/BubblePin.tsx?raw';
import actionSheetTsx from '../components/ActionSheet.tsx?raw';
import searchModalTsx from '../components/SearchModal.tsx?raw';
import archiveTrashViewTsx from '../components/ArchiveTrashView.tsx?raw';
import codeExportModalTsx from '../components/CodeExportModal.tsx?raw';

export interface SourceFile {
  path: string;
  category: string;
  description: string;
  content: string;
  lines: number;
}

export const CODEBASE_FILES: SourceFile[] = [
  {
    path: 'src/App.tsx',
    category: 'Core',
    description: 'Main application logic, state orchestration, route handling, and PDF export trigger',
    content: appTsx,
    lines: appTsx.split('\n').length,
  },
  {
    path: 'src/types.ts',
    category: 'Types',
    description: 'TypeScript interfaces for NoteNode, TrashEntry, BubbleSettings, and ViewMode',
    content: typesTs,
    lines: typesTs.split('\n').length,
  },
  {
    path: 'src/components/BubblePin.tsx',
    category: 'UI',
    description: 'Editable floating bubble pin with customizable opacity, pop size, and viewport cropping',
    content: bubblePinTsx,
    lines: bubblePinTsx.split('\n').length,
  },
  {
    path: 'src/components/BoardView.tsx',
    category: 'UI',
    description: 'Interactive board view separating pinned importance hierarchy and unpinned notes',
    content: boardViewTsx,
    lines: boardViewTsx.split('\n').length,
  },
  {
    path: 'src/components/NoteCard.tsx',
    category: 'UI',
    description: 'Draggable note card with hold-to-reorder, pin indicators, and long-press menu',
    content: noteCardTsx,
    lines: noteCardTsx.split('\n').length,
  },
  {
    path: 'src/components/EditorView.tsx',
    category: 'UI',
    description: 'Writing mode with rich text formatting, nested note chips, and standout bubble pop button',
    content: editorViewTsx,
    lines: editorViewTsx.split('\n').length,
  },
  {
    path: 'src/components/TopBar.tsx',
    category: 'UI',
    description: 'Header with breadcrumb navigation, search, theme toggler, and code export trigger',
    content: topBarTsx,
    lines: topBarTsx.split('\n').length,
  },
  {
    path: 'src/components/ActionSheet.tsx',
    category: 'UI',
    description: 'Context menu for pin/unpin, clipboard copy, PDF export, archive, and deletion',
    content: actionSheetTsx,
    lines: actionSheetTsx.split('\n').length,
  },
  {
    path: 'src/components/ArchiveTrashView.tsx',
    category: 'UI',
    description: 'Recycle bin and archive manager with restoration to parent writing pages',
    content: archiveTrashViewTsx,
    lines: archiveTrashViewTsx.split('\n').length,
  },
  {
    path: 'src/components/SearchModal.tsx',
    category: 'UI',
    description: 'Instant full-text search across titles and contents with highlighted snippets',
    content: searchModalTsx,
    lines: searchModalTsx.split('\n').length,
  },
  {
    path: 'src/components/CodeExportModal.tsx',
    category: 'UI',
    description: 'In-app codebase explorer, file inspector, and downloadable PDF modal',
    content: codeExportModalTsx,
    lines: codeExportModalTsx.split('\n').length,
  },
  {
    path: 'src/utils/tree.ts',
    category: 'Utils',
    description: 'Recursive tree algorithms, chronological pinned sorting, chips, and node cloning',
    content: treeTs,
    lines: treeTs.split('\n').length,
  },
  {
    path: 'src/utils/storage.ts',
    category: 'Utils',
    description: 'Local storage persistence manager for state durability across sessions',
    content: storageTs,
    lines: storageTs.split('\n').length,
  },
  {
    path: 'src/utils/codeExport.ts',
    category: 'Utils',
    description: 'Client-side code bundle and in-browser PDF generator engine',
    content: codeExportTs,
    lines: codeExportTs.split('\n').length,
  },
  {
    path: 'src/main.tsx',
    category: 'Entry',
    description: 'Vite React application entry point and DOM root renderer',
    content: mainTsx,
    lines: mainTsx.split('\n').length,
  },
  {
    path: 'src/vite-env.d.ts',
    category: 'Types',
    description: 'Vite client environment and module declarations for raw text assets',
    content: viteEnvDTs,
    lines: viteEnvDTs.split('\n').length,
  },
  {
    path: 'src/index.css',
    category: 'Styles',
    description: 'Complete CSS variables, dual dark/light themes, animations, and modal styles',
    content: indexCss,
    lines: indexCss.split('\n').length,
  },
];

export const CORE_FEATURES_LIST = [
  {
    id: 'F01',
    title: 'Hierarchical Tree Architecture & Path Navigation',
    desc: 'Recursive note trees with deep paths, immutable mutations, and automated localStorage persistence.',
  },
  {
    id: 'F02',
    title: 'Hierarchy of Importance: Pinning & Chronological Ordering',
    desc: 'Pinned notes elevate to the top in descending order of pinnedAt timestamp. Unpinning restores previous position.',
  },
  {
    id: 'F03',
    title: 'Hold & Arrange Notes\' Order (Manual Drag & Drop)',
    desc: 'Hold-and-drag interaction with grip handles, drop indicators, and persistent sequential order storage.',
  },
  {
    id: 'F04',
    title: 'Editable Floating Bubble Pin & Customizable Viewport',
    desc: 'Detached floating note with live two-way sync, opacity slider (20%-100%), pop size (48-96px), and viewport cropping.',
  },
  {
    id: 'F05',
    title: 'Unique Standout Bubble Pop Button',
    desc: 'Distinct vibrant gradient, ambient halo glow, spinning sparkle icon, and dedicated tooltip.',
  },
  {
    id: 'F06',
    title: 'Recycle Bin & Pinned Note Restoration Flow',
    desc: 'Deleted notes retain parent lineage. Restoring re-embeds note chips and navigates to the parent writing page.',
  },
  {
    id: 'F07',
    title: 'Archive System with Instant Restoration',
    desc: 'Soft archival hides completed items from active boards while keeping hierarchy intact for one-click unarchiving.',
  },
  {
    id: 'F08',
    title: 'Instant Global Full-Text Search',
    desc: 'Recursively searches titles and rich text with highlighted query snippets and deep stack breadcrumb navigation.',
  },
  {
    id: 'F09',
    title: 'Dual PDF Export Engines (Note & Full Codebase)',
    desc: 'Note-level PDF generation and complete 90+ page unabridged codebase PDF with line numbers and specifications.',
  },
  {
    id: 'F10',
    title: 'Design System & Responsive Dual Themes',
    desc: 'Midnight Dark and Warm Parchment Light modes with semantic CSS variable tokens.',
  },
];

export function generateClientCodePdf(): void {
  const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 36;
  const marginTop = 48;
  const marginBottom = 40;
  const contentWidth = pageWidth - marginX * 2;

  // Cover Page
  doc.setFillColor(30, 58, 138);
  doc.rect(0, 0, pageWidth, 16, 'F');
  doc.setFillColor(59, 130, 246);
  doc.rect(0, 16, pageWidth, 4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  doc.setTextColor(30, 58, 138);
  doc.text('Pinboard Notes', marginX, 86);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.setTextColor(71, 85, 105);
  doc.text('Complete Architectural Specification & Unabridged Source Code', marginX, 108);

  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(1.5);
  doc.line(marginX, 124, pageWidth - marginX, 124);

  // Render Features
  let curY = 150;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(30, 58, 138);
  doc.text('Feature Specifications & Modules', marginX, curY);
  curY += 20;

  CORE_FEATURES_LIST.forEach((feat) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 58, 138);
    doc.text(`[${feat.id}] ${feat.title}`, marginX + 8, curY);
    curY += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const splitDesc = doc.splitTextToSize(feat.desc, contentWidth - 16);
    doc.text(splitDesc, marginX + 16, curY);
    curY += splitDesc.length * 10 + 6;
  });

  drawFooter(doc, marginX, contentWidth, pageHeight);

  // Render Files
  CODEBASE_FILES.forEach((file) => {
    doc.addPage();
    let y = marginTop;

    doc.setFillColor(30, 58, 138);
    doc.roundedRect(marginX, y, contentWidth, 28, 4, 4, 'F');

    doc.setFont('courier', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(255, 255, 255);
    doc.text(file.path, marginX + 12, y + 18);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(219, 234, 254);
    doc.text(`${file.category} • ${file.lines} Lines`, marginX + contentWidth - 120, y + 18);

    y += 36;

    const lines = file.content.split('\n');
    doc.setFont('courier', 'normal');
    doc.setFontSize(7.2);
    const lineHeight = 10.5;

    for (let i = 0; i < lines.length; i++) {
      if (y + lineHeight > pageHeight - marginBottom) {
        drawFooter(doc, marginX, contentWidth, pageHeight);
        doc.addPage();
        y = marginTop;

        doc.setFillColor(241, 245, 249);
        doc.roundedRect(marginX, y, contentWidth, 18, 3, 3, 'F');
        doc.setFont('courier', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(`${file.path} (continued)`, marginX + 8, y + 12);
        y += 26;
      }

      const rawLine = lines[i];
      const lineNumStr = String(i + 1).padStart(4, ' ') + ' | ';

      if (i % 2 === 0) {
        doc.setFillColor(252, 253, 255);
        doc.rect(marginX, y - 7.5, contentWidth, lineHeight, 'F');
      }

      doc.setFont('courier', 'bold');
      doc.setTextColor(148, 163, 184);
      doc.text(lineNumStr, marginX + 4, y);

      doc.setFont('courier', 'normal');
      doc.setTextColor(30, 41, 59);
      const wrapped = doc.splitTextToSize(rawLine || ' ', contentWidth - 52);
      doc.text(wrapped[0], marginX + 44, y);
      y += lineHeight;
      for (const continuation of wrapped.slice(1)) {
        if (y + lineHeight > pageHeight - marginBottom) {
          drawFooter(doc, marginX, contentWidth, pageHeight);
          doc.addPage();
          y = marginTop;
        }
        doc.setFont('courier', 'normal');
        doc.setFontSize(7.2);
        doc.setTextColor(30, 41, 59);
        doc.text(continuation, marginX + 44, y);
        y += lineHeight;
      }
    }

    drawFooter(doc, marginX, contentWidth, pageHeight);
  });

  doc.save('Pinboard_Notes_Codebase.pdf');
}

function drawFooter(doc: jsPDF, marginX: number, contentWidth: number, pageHeight: number) {
  const pageNum = (doc.internal as any).getCurrentPageInfo().pageNumber;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Pinboard Notes — Complete Codebase & Feature Specification', marginX, pageHeight - 18);
  doc.text(`Page ${pageNum}`, marginX + contentWidth - 36, pageHeight - 18);
}
