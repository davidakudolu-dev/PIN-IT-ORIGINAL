import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import { NoteNode, TrashEntry, BubbleSettings, ViewMode, ThemeMode } from './types';
import { loadAppData, saveAppData } from './utils/storage';
import {
  createRootNode,
  cloneTree,
  findNode,
  findParentNode,
  findPathIds,
  deleteNodeById,
  makeChipHtml,
  contentHasChip,
  generateUid,
  stripHtml,
} from './utils/tree';
import { TopBar } from './components/TopBar';
import { BoardView } from './components/BoardView';
import { EditorView } from './components/EditorView';
import { BubblePin, DEFAULT_BUBBLE_SETTINGS } from './components/BubblePin';
import { ActionSheet } from './components/ActionSheet';
import { SearchModal } from './components/SearchModal';
import { ArchiveTrashView } from './components/ArchiveTrashView';
import { sanitizeHtml } from './utils/sanitize';
import { SettingsDialog } from './components/SettingsDialog';
import { MoveNoteDialog } from './components/MoveNoteDialog';
import { isNative, nativeCall, exportPdf } from './utils/nativeBridge';
import { subscribeNativeData, flushNativeData } from './utils/nativeStorage';

export default function App() {
  const [tree, setTree] = useState<NoteNode | null>(null);
  const [trash, setTrash] = useState<TrashEntry[]>([]);
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [bubbleSettings, setBubbleSettings] = useState<BubbleSettings>(DEFAULT_BUBBLE_SETTINGS);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [saveError, setSaveError] = useState(false);
  useEffect(() => {
    const report = () => setSaveError(true);
    window.addEventListener('pinit:save-error', report);
    return () => window.removeEventListener('pinit:save-error', report);
  }, []);

  const [stack, setStack] = useState<string[]>(['root']);
  const [mode, setMode] = useState<ViewMode>('board');

  const [longPressId, setLongPressId] = useState<string | null>(null);
  const [floatingId, setFloatingId] = useState<string | null>(null);

  const [toast, setToast] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [moveId, setMoveId] = useState<string | null>(null);
  const [trashAreaId, setTrashAreaId] = useState<string>('root');

  const toastTimeout = useRef<any>(null);

  // Load initial app data
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await loadAppData();
        if (cancelled) return;
        if (data) {
          setTree(data.tree || createRootNode());
          setTrash(data.trash || []);
          setTheme(data.theme || 'dark');
          if (data.bubbleSettings) {
            setBubbleSettings({ ...DEFAULT_BUBBLE_SETTINGS, ...data.bubbleSettings });
          }
        } else {
          setTree(createRootNode());
        }
      } catch (err) {
        if (!cancelled) setLoadError(true);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!loaded || !isNative()) return;
    return subscribeNativeData((data) => {
      setTree(data.tree); setTrash(data.trash || []); setTheme(data.theme || 'dark'); setLoadError(false);
      setBubbleSettings({ ...DEFAULT_BUBBLE_SETTINGS, ...data.bubbleSettings }); setSaveError(false);
      setStack(previous => findPathIds(data.tree, previous[previous.length - 1]) || ['root']);
    });
  }, [loaded]);

  useEffect(() => {
    const back = () => {
      void flushNativeData().then(() => {
        if (settingsOpen) setSettingsOpen(false);
        else if (mode === 'archive' || mode === 'trash') setMode('board');
        else if (stack.length > 1) { const next = stack.slice(0, -1); setStack(next); if (next.length === 1) setMode('board'); }
      }).catch(() => setSaveError(true));
    };
    (window as any).PinIt.canGoBack = () => mode !== 'board' || stack.length > 1 || settingsOpen;
    window.addEventListener('pinit:back', back);
    return () => window.removeEventListener('pinit:back', back);
  }, [mode, stack, settingsOpen]);

  useEffect(() => {
    const restored = () => { setStack(['root']); setMode('board'); setSettingsOpen(false); };
    window.addEventListener('pinit:restore-complete', restored);
    return () => window.removeEventListener('pinit:restore-complete', restored);
  }, []);

  // Sync theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Save changes to storage
  useLayoutEffect(() => {
    if (!loaded || !tree || loadError) return;
    // localStorage is written synchronously before the optional remote save.
    void saveAppData({ tree, trash, theme, bubbleSettings }).then((saved) => {
      setSaveError(!saved);
    });
  }, [tree, trash, theme, bubbleSettings, loaded, loadError]);

  useEffect(() => {
    return () => clearTimeout(toastTimeout.current);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const updateTree = useCallback((mutator: (tree: NoteNode) => void) => {
    setTree((prev) => {
      if (!prev) return createRootNode();
      const next = cloneTree(prev);
      mutator(next);
      return next;
    });
  }, []);

  const currentId = stack[stack.length - 1] || 'root';
  const currentNode = tree ? findNode(tree, currentId) || tree : null;
  const longPressNode = tree && longPressId ? findNode(tree, longPressId) : null;
  const floatingNode = tree && floatingId ? findNode(tree, floatingId) : null;
  const trashAreaNode = tree ? findNode(tree, trashAreaId) : null;

  // Add new note
  const handleAddChild = () => {
    const newId = generateUid();
    updateTree((t) => {
      const parent = findNode(t, currentId) || t;
      if (!parent.children) parent.children = [];
      parent.children.push({
        id: newId,
        title: 'Untitled Note',
        content: '',
        archived: false,
        pinned: false,
        pinnedAt: null,
        order: parent.children.length,
        children: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    });
    showToast('New note created');
  };

  // Insert a nested pinned note chip into the editor writing page
  const handleInsertNestedNote = () => {
    const newId = generateUid();
    const title = 'Untitled Note';
    updateTree((t) => {
      const parent = findNode(t, currentId) || t;
      if (!parent.children) parent.children = [];
      parent.children.push({
        id: newId,
        title,
        content: '',
        archived: false,
        pinned: false,
        pinnedAt: null,
        order: parent.children.length,
        children: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      parent.content = (parent.content || '') + makeChipHtml(newId, title, false) + '<br>';
      parent.updatedAt = Date.now();
    });
    showToast('Nested note inserted');
  };

  const handleOpenNote = (id: string) => {
    const path = tree && findPathIds(tree, id);
    if (!path) return;
    setMode('write');
    setStack(path);
  };

  const handleBack = () => {
    if (isNative()) void flushNativeData().catch(() => setSaveError(true));
    if (stack.length <= 1) return;
    const next = stack.slice(0, -1);
    setStack(next);
    if (next[next.length - 1] === 'root') setMode('board');
  };

  // Toggle Pin Note with hierarchy of importance timestamp
  const handleTogglePin = (id: string) => {
    const nowPinned = !tree || !findNode(tree, id)?.pinned;
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.pinned = !node.pinned;
        node.pinnedAt = node.pinned ? Date.now() : null;
      }
    });
    setLongPressId(null);
    showToast(nowPinned ? 'Pinned to top of page' : 'Unpinned — returned to normal list');
  };

  // Copy note content
  const handleCopyNote = async (node: NoteNode) => {
    const text = `${node.title || 'Untitled Note'}\n\n${stripHtml(node.content)}`;
    if (isNative()) {
      try { await nativeCall('clipboard', { text }); showToast('Copied note content'); }
      catch (error) { showToast((error as Error).message); }
      setLongPressId(null); return;
    }
    let success = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        success = true;
      }
    } catch (e) {
      success = false;
    }
    if (!success) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        success = document.execCommand('copy');
      } catch (e) {
        success = false;
      }
      document.body.removeChild(ta);
    }
    showToast(success ? 'Copied note content' : 'Could not copy note');
    setLongPressId(null);
  };

  // Download Note PDF helper
  const handleDownloadPdf = async (node: NoteNode) => {
    showToast('Generating PDF...');
    try {
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const maxWidth = pageWidth - marginX * 2;
      let y = 60;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      const titleLines = doc.splitTextToSize(node.title || 'Untitled Note', maxWidth);
      titleLines.forEach((line: string) => {
        if (y > pageHeight - 50) { doc.addPage(); y = 60; }
        doc.text(line, marginX, y);
        y += 24;
      });
      y += 16;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      const bodyText = stripHtml(node.content) || ' ';
      const bodyLines = doc.splitTextToSize(bodyText, maxWidth);
      const lineHeight = 18;

      bodyLines.forEach((line: string) => {
        if (y > pageHeight - 50) {
          doc.addPage();
          y = 60;
        }
        doc.text(line, marginX, y);
        y += lineHeight;
      });

      const fileName = (node.title || 'note').replace(/[^a-z0-9\-_ ]/gi, '').trim() || 'note';
      if (isNative()) await exportPdf(`${fileName}.pdf`, doc.output('arraybuffer'));
      else doc.save(`${fileName}.pdf`);
      showToast('PDF downloaded');
    } catch (e) {
      showToast('Could not generate PDF');
    }
    setLongPressId(null);
  };

  // Move note to Recycle Bin (Trash)
  const handleDeleteNote = (id: string) => {
    if (!tree) return;
    const nextTree = cloneTree(tree);
    const parent = findParentNode(nextTree, id);
    const nodeToDelete = findNode(nextTree, id);
    if (!nodeToDelete) return;

    deleteNodeById(nextTree, id);
    setTree(nextTree);

    setTrash((prev) => [
      {
        id: generateUid(),
        node: cloneTree(nodeToDelete),
        parentId: parent ? parent.id : 'root',
        deletedAt: Date.now(),
      },
      ...prev,
    ]);

    setLongPressId(null);
    showToast('Moved note to Recycle Bin');
  };

  // Restore Note from Recycle Bin to original parent page
  const handleRestoreFromTrash = (trashId: string) => {
    const entry = trash.find((t) => t.id === trashId);
    if (!entry || !tree) return;

    const nextTree = cloneTree(tree);
    let parent = findNode(nextTree, entry.parentId);
    if (!parent) parent = nextTree;

    const restoredNode = cloneTree(entry.node);
    if (!parent.children) parent.children = [];
    parent.children.push(restoredNode);

    // Re-embed chip placeholder into parent note writing content if missing
    if (!contentHasChip(parent.content, restoredNode.id)) {
      parent.content = (parent.content || '') + makeChipHtml(restoredNode.id, restoredNode.title, restoredNode.pinned) + '<br>';
    }

    setTree(nextTree);
    setTrash((prev) => prev.filter((t) => t.id !== trashId));

    // When parent page is clicked/navigated to, lands on parent writing page containing the restored note chip
    showToast(restoredNode.pinned ? 'Restored pinned note to parent page' : 'Restored note to parent page');
  };

  const handlePermanentDelete = (trashId: string) => {
    setTrash((prev) => prev.filter((t) => t.id !== trashId));
    showToast('Permanently deleted');
  };

  // Archive Note
  const handleArchiveNote = (id: string) => {
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.archived = true;
      }
    });
    setLongPressId(null);
    showToast('Archived note');
  };

  // Restore Archived Note
  const handleRestoreArchived = (id: string) => {
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.archived = false;
        const parent = findParentNode(t, id);
        if (parent && !contentHasChip(parent.content, id)) {
          parent.content = (parent.content || '') + makeChipHtml(id, node.title, node.pinned) + '<br>';
        }
      }
    });
    showToast('Restored note to parent page');
  };

  // Title / Content updates
  const handleTitleChange = (newTitle: string) => {
    updateTree((t) => {
      const node = findNode(t, currentId);
      if (node) {
        node.title = newTitle;
        node.updatedAt = Date.now();
      }
    });
  };

  const handleContentChange = (newHtml: string) => {
    updateTree((t) => {
      const node = findNode(t, currentId);
      if (node) {
        node.content = newHtml;
        node.updatedAt = Date.now();
      }
    });
  };

  const handleUpdateNodeContentDirect = (id: string, title: string, content: string) => {
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.title = title;
        node.content = content;
        node.updatedAt = Date.now();
      }
    });
  };

  // Search result selection - builds path stack to parent writing page
  const handleSelectSearchResult = (result: any) => {
    setStack(result.path);
    setMode('write');
    setSearchOpen(false);
  };

  if (loadError) {
    return <div className="pb-shell pb-loading"><span>Saved notes could not be read. Your stored data has been left unchanged. Back it up before repairing the storage record, then reload.</span>
      {isNative() && <><button className="sheet-item" onClick={() => setSettingsOpen(true)}>Recovery options</button>
        <SettingsDialog isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} data={null} onRestore={() => {}} onShowToast={showToast} saveError={false} /></>}
    </div>;
  }

  if (!loaded || !tree || !currentNode) {
    return (
      <div className="pb-shell pb-loading">
        <span>Loading Pinboard Notes...</span>
      </div>
    );
  }

  return (
    <div className="pb-shell">
      {/* Top Header */}
      <TopBar
        mode={mode}
        currentNode={currentNode}
        stack={stack}
        theme={theme}
        trashAreaNode={trashAreaNode}
        onSetMode={setMode}
        onBack={handleBack}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onOpenSearch={() => setSearchOpen(true)}
        onTitleChange={handleTitleChange}
        onOpenTrashForArea={() => {
          setTrashAreaId(currentId);
          setMode('trash');
        }}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Main Board View */}
      {mode === 'board' && (
        <BoardView
          currentNode={currentNode}
          onOpenNote={handleOpenNote}
          onLongPressNote={setLongPressId}
          onAddChild={handleAddChild}
          onUpdateTree={updateTree}
        />
      )}

      {/* Main Editor View */}
      {mode === 'write' && (
        <EditorView
          currentNode={currentNode}
          tree={tree}
          stack={stack}
          onBack={handleBack}
          onSetModeBoard={() => setMode('board')}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          onInsertNestedNote={handleInsertNestedNote}
          onPopOutBubble={async () => {
            if (!isNative()) { setFloatingId(currentId); return; }
            try { await flushNativeData(); await nativeCall('overlay.open', { noteId: currentId }); showToast('Floating note requested'); }
            catch (error) { showToast((error as Error).message); }
          }}
          onNavigateToNote={handleOpenNote}
          onLongPressNote={setLongPressId}
          onShowToast={showToast}
          onOpenSettings={() => setSettingsOpen(true)}
          onDownloadCurrentNotePdf={() => currentNode && handleDownloadPdf(currentNode)}
        />
      )}

      {/* Archive & Recycle Bin Views */}
      {(mode === 'archive' || mode === 'trash') && (
        <ArchiveTrashView
          mode={mode}
          currentNode={currentNode}
          tree={tree}
          trash={trash}
          trashAreaId={trashAreaId}
          onRestoreArchived={handleRestoreArchived}
          onRestoreTrash={handleRestoreFromTrash}
          onPermanentDelete={handlePermanentDelete}
          onDeleteNote={handleDeleteNote}
        />
      )}

      {/* Editable Floating Bubble Pin */}
      <BubblePin
        floatingNode={floatingNode}
        settings={bubbleSettings}
        onUpdateSettings={(newSettings) =>
          setBubbleSettings((prev) => ({ ...prev, ...newSettings }))
        }
        onUpdateNodeContent={handleUpdateNodeContentDirect}
        onCopyNote={handleCopyNote}
        onShowToast={showToast}
        onClose={() => setFloatingId(null)}
      />

      {/* Long-Press Action Sheet */}
      <ActionSheet
        longPressNode={longPressNode}
        onClose={() => setLongPressId(null)}
        onTogglePin={handleTogglePin}
        onCopyNote={handleCopyNote}
        onDownloadPdf={handleDownloadPdf}
        onArchive={handleArchiveNote}
        onDelete={handleDeleteNote}
        onMoveNote={setMoveId}
      />

      {/* Global Search Modal */}
      <SearchModal
        tree={tree}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      <SettingsDialog isOpen={settingsOpen} onClose={() => setSettingsOpen(false)}
        data={{ tree, trash, theme, bubbleSettings }} onRestore={(data) => {
          setTree(data.tree); setTrash(data.trash || []); setTheme(data.theme || 'dark'); setStack(['root']); setMode('board');
          setBubbleSettings({ ...DEFAULT_BUBBLE_SETTINGS, ...data.bubbleSettings });
        }} onShowToast={showToast} saveError={saveError} />
      <MoveNoteDialog tree={tree} noteId={moveId} onClose={() => setMoveId(null)} onMove={(targetId) => {
        if (!moveId) return;
        updateTree((t) => {
          const note = findNode(t, moveId); const oldParent = findParentNode(t, moveId); const parent = findNode(t, targetId);
          if (!note || !parent || findNode(note, targetId) || oldParent?.id === targetId) return;
          deleteNodeById(t, moveId); note.order = parent.children.length; parent.children.push(note);
          if (oldParent) { const div = document.createElement('div'); div.innerHTML = sanitizeHtml(oldParent.content);
            div.querySelectorAll('.note-chip').forEach(chip => { if (chip.getAttribute('data-note-id') === moveId) chip.remove(); }); oldParent.content = div.innerHTML; }
          if (parent.id !== 'root' && !contentHasChip(parent.content, note.id)) parent.content += makeChipHtml(note.id, note.title, note.pinned) + '<br>';
        }); setMoveId(null); showToast('Moved note to selected page');
      }} />

      {/* Notification Toast */}
      {(saveError || toast) && <div className="toast">{saveError ? 'Could not save notes. Keep this editor open; open Settings to retry or export a recovery copy.' : toast}</div>}
    </div>
  );
}
