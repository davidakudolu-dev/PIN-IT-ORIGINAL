import React from 'react';
import { Pin, Copy, Download, Archive, Trash2, FolderInput } from 'lucide-react';
import { NoteNode } from '../types';

interface ActionSheetProps {
  longPressNode: NoteNode | null;
  onClose: () => void;
  onTogglePin: (id: string) => void;
  onCopyNote: (node: NoteNode) => void;
  onDownloadPdf: (node: NoteNode) => void;
  onArchive: (id: string) => void;
  onDelete: (id: string) => void;
  onMoveNote: (id: string) => void;
}

export const ActionSheet: React.FC<ActionSheetProps> = ({
  longPressNode,
  onClose,
  onTogglePin,
  onCopyNote,
  onDownloadPdf,
  onArchive,
  onDelete,
  onMoveNote,
}) => {
  if (!longPressNode) return null;

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-title">{longPressNode.title || 'Untitled Note'}</div>

        <button
          className={`sheet-item ${longPressNode.pinned ? 'active-pin' : ''}`}
          onClick={() => onTogglePin(longPressNode.id)}
        >
          <Pin size={16} />
          {longPressNode.pinned ? 'Unpin note (Return to normal position)' : 'Pin note (Move to top by time pinned)'}
        </button>

        <button className="sheet-item" onClick={() => onCopyNote(longPressNode)}>
          <Copy size={16} /> Copy content
        </button>

        <button className="sheet-item" onClick={() => onDownloadPdf(longPressNode)}>
          <Download size={16} /> Download Note as PDF
        </button>

        <button className="sheet-item" onClick={() => { onClose(); onMoveNote(longPressNode.id); }}>
          <FolderInput size={16} /> Move to another note page
        </button>

        <button className="sheet-item" onClick={() => onArchive(longPressNode.id)}>
          <Archive size={16} /> Archive note
        </button>

        <button className="sheet-item danger" onClick={() => onDelete(longPressNode.id)}>
          <Trash2 size={16} /> Delete to Recycle Bin
        </button>

        <button className="sheet-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
