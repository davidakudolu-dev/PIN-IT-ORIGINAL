import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  LayoutGrid,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Image as ImageIcon,
  Pin,
  Sparkles,
  Download,
  Settings,
} from 'lucide-react';
import { NoteNode } from '../types';
import { isNative, nativeCall } from '../utils/nativeBridge';
import { sanitizeHtml } from '../utils/sanitize';
import { makeChipHtml, refreshChipTitles, findNode } from '../utils/tree';

interface EditorViewProps {
  currentNode: NoteNode;
  tree: NoteNode;
  stack: string[];
  onBack: () => void;
  onSetModeBoard: () => void;
  onTitleChange: (newTitle: string) => void;
  onContentChange: (newHtml: string) => void;
  onInsertNestedNote: () => void;
  onPopOutBubble: () => void;
  onNavigateToNote: (id: string) => void;
  onLongPressNote: (id: string) => void;
  onShowToast: (msg: string) => void;
  onOpenSettings: () => void;
  onDownloadCurrentNotePdf: () => void;
}

export const EditorView: React.FC<EditorViewProps> = ({
  currentNode,
  tree,
  stack,
  onBack,
  onSetModeBoard,
  onTitleChange,
  onContentChange,
  onInsertNestedNote,
  onPopOutBubble,
  onNavigateToNote,
  onLongPressNote,
  onShowToast,
  onOpenSettings,
  onDownloadCurrentNotePdf,
}) => {
  const [editorFocused, setEditorFocused] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const writeScrollRef = useRef<HTMLDivElement>(null);

  const chipPressTimer = useRef<any>(null);
  const chipLongFired = useRef(false);
  const displayedNoteId = useRef<string | null>(null);

  // Sync content into DOM editor element when current note changes
  useEffect(() => {
    if (editorRef.current && currentNode) {
      if (displayedNoteId.current !== currentNode.id || editorRef.current.innerHTML !== sanitizeHtml(currentNode.content || '')) {
        editorRef.current.innerHTML = sanitizeHtml(currentNode.content || '');
      }
      displayedNoteId.current = currentNode.id;
      refreshChipTitles(editorRef.current, tree);
    }
  }, [currentNode.id, currentNode.content]);

  useEffect(() => () => clearTimeout(chipPressTimer.current), []);

  // Keep chip titles and pin states in sync with tree updates
  useEffect(() => {
    if (editorRef.current && tree) {
      refreshChipTitles(editorRef.current, tree);
    }
  }, [tree]);

  const scrollCaretIntoView = useCallback(() => {
    const scroller = writeScrollRef.current;
    if (!scroller) return;
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0).cloneRange();
    range.collapse(true);
    let rect = range.getClientRects()[0];
    if (!rect) {
      const marker = document.createElement('span');
      marker.appendChild(document.createTextNode('\u200b'));
      range.insertNode(marker);
      rect = marker.getBoundingClientRect();
      marker.parentNode?.removeChild(marker);
    }
    if (!rect || (rect.top === 0 && rect.bottom === 0)) return;

    const toolbarBuffer = 96;
    const topBuffer = 84;
    const viewportBottom = window.innerHeight - toolbarBuffer;
    if (rect.bottom > viewportBottom) {
      scroller.scrollTop += rect.bottom - viewportBottom + 24;
    } else if (rect.top < topBuffer) {
      scroller.scrollTop -= topBuffer - rect.top + 24;
    }
  }, []);

  const handleEditorInput = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    onContentChange(html);
    requestAnimationFrame(scrollCaretIntoView);
  };

  const exec = (cmd: string, value: string | null = null) => {
    if (editorRef.current) editorRef.current.focus();
    document.execCommand(cmd, false, value as any);
    handleEditorInput();
  };

  const handleChipPointerDown = (e: React.PointerEvent) => {
    const chip = (e.target as HTMLElement).closest?.('.note-chip');
    if (!chip) return;
    const id = chip.getAttribute('data-note-id');
    if (!id) return;

    chipLongFired.current = false;
    chipPressTimer.current = setTimeout(() => {
      chipLongFired.current = true;
      onLongPressNote(id);
    }, 450);
  };

  const handleChipPointerClear = () => {
    if (chipPressTimer.current) clearTimeout(chipPressTimer.current);
  };

  const handleEditorClick = (e: React.MouseEvent) => {
    const chip = (e.target as HTMLElement).closest?.('.note-chip');
    if (chip) {
      e.preventDefault();
      e.stopPropagation();
      if (chipLongFired.current) {
        chipLongFired.current = false;
        return;
      }
      const id = chip.getAttribute('data-note-id');
      if (id) {
        if (!findNode(tree, id)) {
          onShowToast('This nested note was moved or deleted');
          return;
        }
        onNavigateToNote(id);
      }
    }
  };

  const focusEditorAnywhere = (e: React.MouseEvent) => {
    if (!editorRef.current) return;
    if (editorRef.current.contains(e.target as Node)) return;
    editorRef.current.focus();
    const range = document.createRange();
    range.selectNodeContents(editorRef.current);
    range.collapse(false);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  };

  const handleImportImage = async () => {
    if (isNative()) {
      try { const result = await nativeCall('image.pick'); exec('insertImage', result.url); }
      catch (error) { onShowToast((error as Error).message); }
      return;
    }
    let url: string | null = null;
    try {
      url = window.prompt('Paste image URL (e.g. https://... or data:image...)');
    } catch (e) {
      url = null;
    }
    if (url) exec('insertImage', url);
  };

  return (
    <div className="write-scroll" ref={writeScrollRef} onClick={focusEditorAnywhere}>
      {stack.length > 1 && (
        <button
          className="icon-btn write-float-back"
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
          title="Back to parent note page"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Floating Header Actions in Writing Mode */}
      <button
        className="icon-btn write-float-settings"
        onClick={(e) => {
          e.stopPropagation();
          onOpenSettings();
        }}
        title="Settings"
      >
        <Settings size={18} />
      </button>

      <button
        className="icon-btn write-float-pdf"
        onClick={(e) => {
          e.stopPropagation();
          onDownloadCurrentNotePdf();
        }}
        title="Download this Note as PDF"
      >
        <Download size={18} />
      </button>

      <button
        className="icon-btn write-float-grid"
        onClick={(e) => {
          e.stopPropagation();
          onSetModeBoard();
        }}
        title="View grid of nested notes inside this page"
      >
        <LayoutGrid size={18} />
      </button>

      <div className={`write-page ${editorFocused ? 'glow-focus' : ''}`}>
        <input
          className="write-title-input"
          value={currentNode.title}
          placeholder="Untitled Note"
          disabled={currentNode.id === 'root'}
          onChange={(e) => onTitleChange(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />

        <div
          ref={editorRef}
          className="write-content"
          contentEditable
          suppressContentEditableWarning
          onPaste={(event) => {
            const html = event.clipboardData.getData('text/html');
            if (html) { event.preventDefault(); exec('insertHTML', sanitizeHtml(html)); }
          }}
          onInput={handleEditorInput}
          onClick={handleEditorClick}
          onPointerDown={handleChipPointerDown}
          onPointerUp={handleChipPointerClear}
          onPointerLeave={handleChipPointerClear}
          onPointerCancel={handleChipPointerClear}
          onFocus={() => setEditorFocused(true)}
          onBlur={() => setEditorFocused(false)}
        />
      </div>

      {/* Floating Formatting Toolbar with Unique Bubble Pop Button */}
      <div className="write-toolbar" onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.preventDefault()}>
        <button className="tb-btn" onClick={() => exec('formatBlock', 'H1')}>
          <span style={{ fontWeight: 800, fontSize: 13 }}>H1</span>
        </button>
        <button className="tb-btn" onClick={() => exec('formatBlock', 'H2')}>
          <span style={{ fontWeight: 700, fontSize: 13 }}>H2</span>
        </button>

        <div className="tb-sep" />

        <button className="tb-btn" onClick={() => exec('bold')} title="Bold">
          <Bold size={16} />
        </button>
        <button className="tb-btn" onClick={() => exec('italic')} title="Italic">
          <Italic size={16} />
        </button>
        <button className="tb-btn" onClick={() => exec('underline')} title="Underline">
          <Underline size={16} />
        </button>

        <div className="tb-sep" />

        <button className="tb-btn" onClick={() => exec('insertUnorderedList')} title="Bullet List">
          <List size={16} />
        </button>
        <button className="tb-btn" onClick={() => exec('insertOrderedList')} title="Numbered List">
          <ListOrdered size={16} />
        </button>

        <div className="tb-sep" />

        <button className="tb-btn" onClick={handleImportImage} title="Insert Image">
          <ImageIcon size={16} />
        </button>

        <div className="tb-sep" />

        {/* Pin + Button */}
        <button
          className="tb-btn accent-pin"
          onClick={onInsertNestedNote}
          title="Insert a nested pinned note chip here"
        >
          <Pin size={16} />
        </button>

        {/* Unique Standout Bubble Pop Button */}
        <button
          className="tb-btn unique-bubble-pop"
          onClick={onPopOutBubble}
          title="Pop out this note into an editable floating bubble pin!"
        >
          <Sparkles size={16} className="sparkle-spin" />
          <span className="bubble-pop-text">Bubble Pin</span>
        </button>
      </div>
    </div>
  );
};
