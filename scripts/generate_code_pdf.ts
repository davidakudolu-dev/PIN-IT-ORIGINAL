import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { jsPDF } from 'jspdf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.resolve(PROJECT_ROOT, 'public', 'Pinboard_Notes_Codebase.pdf');

interface FileSpec {
  path: string;
  category: string;
  description: string;
}

const FILES_TO_INCLUDE: FileSpec[] = [
  { path: 'metadata.json', category: 'Configuration', description: 'Application metadata, identity, and studio capabilities' },
  { path: 'package.json', category: 'Configuration', description: 'NPM package dependencies, scripts, and build tasks' },
  { path: 'vite.config.ts', category: 'Build Setup', description: 'Vite build tool configuration and Tailwind CSS integration' },
  { path: 'tsconfig.json', category: 'Configuration', description: 'TypeScript compiler configuration and strict path aliases' },
  { path: 'index.html', category: 'Web Entry', description: 'HTML entry point with viewport, title, and OpenGraph tags' },
  { path: 'src/main.tsx', category: 'Web Entry', description: 'React 19 entry point and root DOM container mounting' },
  { path: 'src/types.ts', category: 'Data Models', description: 'Type definitions for NoteNode, TrashEntry, and BubbleSettings' },
  { path: 'src/vite-env.d.ts', category: 'Types', description: 'Vite environment and module declaration for raw imports' },
  { path: 'src/App.tsx', category: 'Application Core', description: 'Main application controller, state machine, and PDF integration' },
  { path: 'src/index.css', category: 'Design System', description: 'Complete CSS variables, dark/light themes, and animation rules' },
  { path: 'src/utils/storage.ts', category: 'Persistence', description: 'Local storage engine for durable cross-session data storage' },
  { path: 'src/utils/tree.ts', category: 'Tree Algorithms', description: 'Tree hierarchy manipulation, sorting, pathing, and chip sync' },
  { path: 'src/utils/codeExport.ts', category: 'Code Export', description: 'In-browser codebase catalog and client-side PDF compiler' },
  { path: 'src/components/TopBar.tsx', category: 'UI Components', description: 'Navigation top bar, breadcrumb stack, and global tools' },
  { path: 'src/components/BoardView.tsx', category: 'UI Components', description: 'Interactive board separating pinned hierarchy and regular notes' },
  { path: 'src/components/NoteCard.tsx', category: 'UI Components', description: 'Interactive card with hold-to-reorder and long-press menu' },
  { path: 'src/components/EditorView.tsx', category: 'UI Components', description: 'Rich text writing canvas, formatting toolbar, and nested chips' },
  { path: 'src/components/BubblePin.tsx', category: 'UI Components', description: 'Detached editable floating bubble pin with viewport cropping' },
  { path: 'src/components/ActionSheet.tsx', category: 'UI Components', description: 'Context action sheet for pin, unpin, copy, PDF, and trash' },
  { path: 'src/components/SearchModal.tsx', category: 'UI Components', description: 'Global full-text search engine with highlighted matched snippets' },
  { path: 'src/components/ArchiveTrashView.tsx', category: 'UI Components', description: 'Recycle bin and archive manager with parent restore flow' },
  { path: 'src/components/CodeExportModal.tsx', category: 'UI Components', description: 'In-app codebase browser, file viewer, and PDF downloader' },
  { path: 'scripts/generate_code_pdf.ts', category: 'Build Scripts', description: 'Comprehensive PDF compiler script for project code & documentation' },
];

interface FeatureSpec {
  id: string;
  title: string;
  subtitle: string;
  details: string[];
}

const FEATURE_SPECS: FeatureSpec[] = [
  {
    id: 'F01',
    title: 'Hierarchical Tree Architecture & Path Navigation',
    subtitle: 'Multi-level nested note trees with immutable updates and breadcrumb navigation',
    details: [
      'Data Model: Every note is represented as a recursive NoteNode containing id, title, content (HTML string), archived (boolean), pinned (boolean), pinnedAt (timestamp | null), order (number), and children (NoteNode[]).',
      'Navigation Stack: Navigation state is maintained via a string array stack: string[] representing the active path from "root" to the current node. Breadcrumbs display the ancestral trail.',
      'Immutable Mutations: All tree updates use deep cloning (cloneTree) ensuring pure React state transitions, zero side-effects, and reliable re-rendering.',
      'Auto-Persistence: State modifications are immediately synced to localStorage; optional host-storage writes are serialized to protect recent edits.',
    ],
  },
  {
    id: 'F02',
    title: 'Hierarchy of Importance: Pinning & Chronological Sorting',
    subtitle: 'Pinned notes elevate with structural priority and chronological ordering',
    details: [
      'Significance Over Glow: Pinned notes are not merely highlighted with a visual glow; they are given explicit organizational hierarchy at the top of the container.',
      'Chronological Timestamping: When a note is pinned, node.pinnedAt is set to Date.now(). Pinned notes are dynamically sorted descending by pinnedAt, so the most recently pinned note always appears first.',
      'Clear Visual Separation: BoardView splits items into two distinct sections: "Pinned Notes (Hierarchy of Importance)" at the top with a distinct pin badge, and "Notes" below.',
      'Graceful Unpinning: When unpinned, node.pinned is set to false and node.pinnedAt is reset to null. The note returns back to its standard order in the regular notes section without data loss.',
    ],
  },
  {
    id: 'F03',
    title: 'Hold & Arrange Notes\' Order (Manual Drag & Drop)',
    subtitle: 'Touch & pointer-driven hold-and-drag reordering for custom prioritization',
    details: [
      'Grip Handles & Pointer Events: Each NoteCard features a dedicated drag grip handle (GripVertical) and handles onPointerDown/onDragStart events.',
      'Drop Indicator & Animation: While dragging, cards calculate drag index and render visual insertion guides with drop target styling.',
      'Persistent Reorder Algorithm: The reorderChildren utility mutates the order property of child nodes and updates the parent tree in state, ensuring customized ordering persists across reloads.',
      'Scoped Dragging: Reordering works independently within both the pinned section and the unpinned section, giving users full layout autonomy.',
    ],
  },
  {
    id: 'F04',
    title: 'Editable Floating Bubble Pin & Customizable Viewport',
    subtitle: 'Detached, floating, resizable and croppable note workspace',
    details: [
      'Detached Multitasking: Any note can be popped out into a floating bubble pin that hovers above the entire application.',
      'Full Bi-directional Editing: The bubble pin is completely editable with a rich text area. Typing inside the bubble immediately mutates the underlying tree node via onUpdateNodeContent.',
      'Comprehensive Settings Panel: A toggleable settings modal on the bubble pin provides dynamic sliders for:',
      '  • Transparency Slider: Adjusts container opacity from 20% (see-through reference) to 100% (solid focus).',
      '  • Bubble Pop Size: Adjusts the collapsed/mini badge trigger diameter from 48px to 96px.',
      '  • Expansion Size: Controls expanded panel width (320px to 720px) and height (280px to 620px).',
      '  • Viewport Cropping Engine: When enabled, users can crop top and bottom insets to restrict the visible window exclusively to a specific line, code snippet, or paragraph.',
      'Draggable Physics: Users can drag the bubble pin anywhere across the viewport via pointer drag on the header handle.',
    ],
  },
  {
    id: 'F05',
    title: 'Unique Standout Bubble Pop Button',
    subtitle: 'Distinctive visual design and identity for the bubble pop feature',
    details: [
      'Distinct Identity: The Bubble Pop trigger is visually differentiated from the standard Pin+ button.',
      'Vibrant Gradient & Halo: Styled with a radiant linear gradient (linear-gradient(135deg, #FF6B6B, #9B51E0)), subtle ambient drop-shadow, and pulsing halo.',
      'Animated Sparkle Icon: Houses an animated Sparkles icon with gentle rotation and a clear "Bubble Pin" text label in writing mode.',
      'Instant Elevation: One click transforms any active note into an editable detached floating bubble pin.',
    ],
  },
  {
    id: 'F06',
    title: 'Recycle Bin & Pinned Note Restoration Flow',
    subtitle: 'Safe deletion, parent tracking, and smart contextual restoration',
    details: [
      'Parent Lineage Preservation: When a note is deleted, it is placed in the trash array as a TrashEntry with its parentId, deletedAt timestamp, and deep-cloned node data.',
      'Re-embedding Content Chips: Upon restoration, the note is re-inserted into parent.children. If parent.content lacks the interactive chip, makeChipHtml re-embeds the note chip into the parent note content.',
      'Parent Page Landing Logic: Restoring a pinned note correctly routes the user when clicking the parent page to the parent pinned note\'s writing page (where the restored note is pinned as a chip), rather than entering directly into the restored note.',
      'Permanent Deletion: Items in the Recycle Bin can be selectively restored or permanently expunged.',
    ],
  },
  {
    id: 'F07',
    title: 'Archive System with Instant Restoration',
    subtitle: 'Declutter boards by archiving completed or reference notes',
    details: [
      'Soft Archival: Setting node.archived = true hides notes from the active board without altering their internal hierarchy.',
      'Dedicated Archive View: Users can view all archived notes for the current page container, complete with date tags and pin badges.',
      'One-Click Restoration: Unarchiving seamlessly restores the note to the active board and ensures chips in parent content are synced.',
    ],
  },
  {
    id: 'F08',
    title: 'Instant Global Full-Text Search',
    subtitle: 'Comprehensive search across titles and rich text with highlighted matches',
    details: [
      'Full Tree Traversal: The search engine recursively scans every node in the tree hierarchy.',
      'HTML Tag Stripping: Content is stripped of HTML tags before querying, ensuring clean, accurate text comparisons.',
      'Snippet Context Generation: Matches generate contextual text excerpts with the exact search query emphasized in highlighted badges.',
      'Deep Stack Reconstruction: Clicking any search result reconstructs the complete parent path array (stack: result.path) and transitions immediately to writing mode.',
    ],
  },
  {
    id: 'F09',
    title: 'Dual PDF Export Engines (Note & Full Codebase)',
    subtitle: 'High-fidelity document generation powered by jsPDF',
    details: [
      'Note-Level PDF Export: Users can export any note into a clean, formatted A4 PDF containing its title, metadata, and stripped body text.',
      'Complete Codebase PDF Generator: Bundles every source file, configuration file, build script, and architectural documentation into a single comprehensive PDF.',
      'Table of Contents & Line Numbering: Code files are rendered with monospace typography, line numbering, file metadata badges, and running headers/footers.',
      'Static & Dynamic Availability: Pre-generated to public/Pinboard_Notes_Codebase.pdf and dynamically downloadable through the in-app modal.',
    ],
  },
  {
    id: 'F10',
    title: 'Design System & Responsive Dual Themes',
    subtitle: 'Midnight Dark and Warm Parchment Light modes with CSS variable tokens',
    details: [
      'Midnight Dark Theme: High contrast deep blue palette (--bg1: #0A1024, --bg2: #131B3B, --accent1: #3A5FE0, --pin-active: #FFC966).',
      'Warm Parchment Light Theme: Paper-inspired aesthetic (--bg1: #F3EAD9, --bg2: #F6EFE1, --accent1: #E8823D, --pin-active: #C9631F).',
      'Zero Layout Shift: All UI controls, modals, sheets, and floating toolbars dynamically adapt to theme tokens with seamless CSS transitions.',
      'Mobile & Desktop Responsive: Optimized for phone screens, tablets, and wide desktop displays with responsive split layouts.',
    ],
  },
];

export function buildCodePdf() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 36;
  const marginTop = 48;
  const marginBottom = 40;
  const contentWidth = pageWidth - marginX * 2;

  // 1. Read all files first
  const fileData = FILES_TO_INCLUDE.map((spec) => {
    const fullPath = path.resolve(PROJECT_ROOT, spec.path);
    let content = '';
    let lineCount = 0;
    try {
      content = fs.readFileSync(fullPath, 'utf8');
      lineCount = content.split('\n').length;
    } catch (e) {
      content = `// Error reading file ${spec.path}`;
    }
    return { ...spec, content, lineCount };
  });

  const totalLines = fileData.reduce((acc, f) => acc + f.lineCount, 0);

  // ==========================================
  // PAGE 1: COVER PAGE
  // ==========================================
  // Top Banner
  doc.setFillColor(30, 58, 138); // Navy 900
  doc.rect(0, 0, pageWidth, 16, 'F');

  // Decorative Accent bar
  doc.setFillColor(59, 130, 246); // Blue 500
  doc.rect(0, 16, pageWidth, 4, 'F');

  // App Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(30, 58, 138);
  doc.text('Pinboard Notes', marginX, 86);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(71, 85, 105);
  doc.text('Complete Architectural Specification & Unabridged Source Code', marginX, 110);

  // Divider
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(1.5);
  doc.line(marginX, 126, pageWidth - marginX, 126);

  // Key Metrics Badges
  const badgeY = 142;
  const badgeWidth = (contentWidth - 24) / 4;
  const badgeHeight = 44;

  const metrics = [
    { label: 'SOURCE FILES', value: `${FILES_TO_INCLUDE.length} Files` },
    { label: 'TOTAL CODE', value: `${totalLines.toLocaleString()} Lines` },
    { label: 'FEATURE SPECS', value: '10 Core Modules' },
    { label: 'RUNTIME', value: 'React 19 + Vite' },
  ];

  metrics.forEach((m, idx) => {
    const bx = marginX + idx * (badgeWidth + 8);
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(bx, badgeY, badgeWidth, badgeHeight, 5, 5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(m.label, bx + 10, badgeY + 16);
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(m.value, bx + 10, badgeY + 33);
  });

  // Project Overview Card
  const overviewY = 202;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(marginX, overviewY, contentWidth, 90, 6, 6, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(1);
  doc.roundedRect(marginX, overviewY, contentWidth, 90, 6, 6, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11.5);
  doc.setTextColor(30, 58, 138);
  doc.text('Executive Summary', marginX + 16, overviewY + 22);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'Pinboard Notes is a production-grade hierarchical note-taking application engineered with React 19, TypeScript, and Tailwind CSS. ' +
    'This comprehensive documentation captures every feature down to the last bit: hierarchical tree persistence, chronological pinned note importance, ' +
    'custom hold-and-drag note arrangement, editable detached bubble pins with transparency and viewport cropping, standout trigger controls, ' +
    'smart Recycle Bin restoration to parent writing pages, full-text instant search, and dual PDF generation engines.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth - 32);
  doc.text(summaryLines, marginX + 16, overviewY + 38);

  // Table of Contents Preview
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(30, 58, 138);
  doc.text('Document Structure & Contents', marginX, 318);

  let tocY = 340;
  doc.setFontSize(9);

  // Section 1 Header
  doc.setFillColor(239, 246, 255);
  doc.rect(marginX, tocY - 11, contentWidth, 18, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(29, 78, 216);
  doc.text('PART I: ARCHITECTURAL SPECIFICATIONS & FEATURE MANUAL', marginX + 8, tocY + 2);
  doc.text('Page 2 - 4', marginX + contentWidth - 60, tocY + 2);
  tocY += 24;

  FEATURE_SPECS.forEach((spec, i) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(51, 65, 85);
    doc.text(`[${spec.id}]`, marginX + 12, tocY);
    doc.setFont('helvetica', 'normal');
    doc.text(spec.title, marginX + 44, tocY);
    tocY += 15;
  });

  tocY += 8;

  // Section 2 Header
  doc.setFillColor(239, 246, 255);
  doc.rect(marginX, tocY - 11, contentWidth, 18, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(29, 78, 216);
  doc.text('PART II: UNABRIDGED SOURCE CODE (23 FILES)', marginX + 8, tocY + 2);
  doc.text('Page 5+', marginX + contentWidth - 60, tocY + 2);
  tocY += 22;

  fileData.slice(0, 10).forEach((file, i) => {
    doc.setFont('courier', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(file.path, marginX + 12, tocY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(`${file.lineCount} lines`, marginX + 220, tocY);
    doc.text(file.category, marginX + 300, tocY);
    tocY += 14;
  });
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(148, 163, 184);
  doc.text(`... and 13 additional source and configuration files printed completely below.`, marginX + 12, tocY);

  drawPageFooter(doc, marginX, contentWidth, pageHeight);

  // ==========================================
  // PART I: FEATURE SPECIFICATIONS (Pages 2-4)
  // ==========================================
  doc.addPage();
  drawSectionBanner(doc, marginX, marginTop, contentWidth, 'PART I: ARCHITECTURAL SPECIFICATIONS & FEATURE MANUAL');

  let curY = marginTop + 40;

  FEATURE_SPECS.forEach((feat, idx) => {
    // Check if new page needed
    if (curY + 110 > pageHeight - marginBottom) {
      drawPageFooter(doc, marginX, contentWidth, pageHeight);
      doc.addPage();
      curY = marginTop;
      drawSectionBanner(doc, marginX, curY, contentWidth, 'PART I: ARCHITECTURAL SPECIFICATIONS (CONTINUED)');
      curY += 40;
    }

    // Feature Card
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(marginX, curY, contentWidth, 24, 4, 4, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.8);
    doc.roundedRect(marginX, curY, contentWidth, 24, 4, 4, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(30, 58, 138);
    doc.text(`${feat.id} — ${feat.title}`, marginX + 10, curY + 16);

    curY += 32;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(feat.subtitle, marginX + 10, curY);
    curY += 14;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);

    feat.details.forEach((det) => {
      const splitDet = doc.splitTextToSize(`• ${det}`, contentWidth - 20);
      splitDet.forEach((line: string) => {
        if (curY > pageHeight - marginBottom - 15) {
          drawPageFooter(doc, marginX, contentWidth, pageHeight);
          doc.addPage();
          curY = marginTop;
          drawSectionBanner(doc, marginX, curY, contentWidth, 'PART I: ARCHITECTURAL SPECIFICATIONS (CONTINUED)');
          curY += 40;
        }
        doc.text(line, marginX + 12, curY);
        curY += 11;
      });
      curY += 2;
    });

    curY += 10;
  });

  drawPageFooter(doc, marginX, contentWidth, pageHeight);

  // ==========================================
  // PART II: COMPLETE UNABRIDGED SOURCE CODE
  // ==========================================
  fileData.forEach((file) => {
    doc.addPage();
    let y = marginTop;

    // File Header Banner
    doc.setFillColor(30, 58, 138);
    doc.roundedRect(marginX, y, contentWidth, 30, 4, 4, 'F');

    doc.setFont('courier', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(file.path, marginX + 12, y + 19);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(219, 234, 254);
    doc.text(`${file.category}  |  ${file.lineCount} Lines`, marginX + contentWidth - 130, y + 19);

    y += 38;

    // Description Box
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(marginX, y, contentWidth, 18, 3, 3, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`Role: ${file.description}`, marginX + 8, y + 12);

    y += 26;

    // Print all code lines
    const lines = file.content.split('\n');
    doc.setFont('courier', 'normal');
    doc.setFontSize(7.2);
    const lineHeight = 10.5;

    for (let i = 0; i < lines.length; i++) {
      if (y + lineHeight > pageHeight - marginBottom) {
        drawPageFooter(doc, marginX, contentWidth, pageHeight);
        doc.addPage();
        y = marginTop;

        // Continuation Header
        doc.setFillColor(241, 245, 249);
        doc.roundedRect(marginX, y, contentWidth, 18, 3, 3, 'F');
        doc.setFont('courier', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(`${file.path} (continued from previous page)`, marginX + 8, y + 12);
        y += 26;
      }

      const rawLine = lines[i];
      const lineNumStr = String(i + 1).padStart(4, ' ') + ' | ';

      // Alternate row tint for readability
      if (i % 2 === 0) {
        doc.setFillColor(252, 253, 255);
        doc.rect(marginX, y - 7.5, contentWidth, lineHeight, 'F');
      }

      // Line number
      doc.setFont('courier', 'bold');
      doc.setTextColor(148, 163, 184);
      doc.text(lineNumStr, marginX + 4, y);

      // Code text
      doc.setFont('courier', 'normal');
      const wrapped = doc.splitTextToSize(rawLine || ' ', contentWidth - 52);
      renderCodeLineWithSyntaxColor(doc, wrapped[0], marginX + 44, y);

      // Handle extra wide lines
      if (wrapped.length > 1) {
        for (let w = 1; w < wrapped.length; w++) {
          y += lineHeight;
          if (y + lineHeight > pageHeight - marginBottom) {
            drawPageFooter(doc, marginX, contentWidth, pageHeight);
            doc.addPage();
            y = marginTop + 22;
          }
          doc.setFont('courier', 'bold');
          doc.setTextColor(148, 163, 184);
          doc.text('     > | ', marginX + 4, y);
          doc.setFont('courier', 'normal');
          doc.setTextColor(71, 85, 105);
          doc.text(wrapped[w], marginX + 44, y);
        }
      }

      y += lineHeight;
    }

    drawPageFooter(doc, marginX, contentWidth, pageHeight);
  });

  // Save PDF to public directory
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  const pdfBytes = doc.output('arraybuffer');
  fs.writeFileSync(OUTPUT_PATH, Buffer.from(pdfBytes));
  const totalPages = (doc.internal as any).getNumberOfPages();
  console.log(`Successfully generated full PDF to ${OUTPUT_PATH} (${totalPages} pages, ${(pdfBytes.byteLength / 1024).toFixed(1)} KB)`);
}

function drawSectionBanner(doc: jsPDF, marginX: number, y: number, contentWidth: number, text: string) {
  doc.setFillColor(30, 58, 138);
  doc.roundedRect(marginX, y, contentWidth, 26, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text(text, marginX + 12, y + 17);
}

function drawPageFooter(doc: jsPDF, marginX: number, contentWidth: number, pageHeight: number) {
  const pageNum = (doc.internal as any).getCurrentPageInfo().pageNumber;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Pinboard Notes — Complete Architectural Specification & Source Code', marginX, pageHeight - 18);
  doc.text(`Page ${pageNum}`, marginX + contentWidth - 36, pageHeight - 18);
}

function renderCodeLineWithSyntaxColor(doc: jsPDF, line: string, x: number, y: number) {
  const trimmed = line.trim();

  // Comment
  if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    doc.setTextColor(100, 116, 139); // Slate gray
    doc.text(line || ' ', x, y);
    return;
  }

  // Import / Export statements
  if (trimmed.startsWith('import ') || trimmed.startsWith('export ')) {
    doc.setTextColor(14, 116, 144); // Cyan / Blue-indigo
    doc.text(line || ' ', x, y);
    return;
  }

  // Interface / Type declarations
  if (trimmed.startsWith('interface ') || trimmed.startsWith('type ') || trimmed.startsWith('const ') || trimmed.startsWith('function ')) {
    doc.setTextColor(67, 56, 202); // Indigo
    doc.text(line || ' ', x, y);
    return;
  }

  // Standard code line
  doc.setTextColor(30, 41, 59); // Slate 800
  doc.text(line || ' ', x, y);
}

// Execute generator
buildCodePdf();
