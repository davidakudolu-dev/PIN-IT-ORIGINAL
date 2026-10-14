import React from 'react';
import { FolderInput, X } from 'lucide-react';
import { NoteNode } from '../types';
import { findNode, findParentNode } from '../utils/tree';
export function MoveNoteDialog({ tree, noteId, onClose, onMove }: { tree: NoteNode; noteId: string | null; onClose: () => void; onMove: (id: string) => void }) {
  if (!noteId) return null;
  const note = findNode(tree, noteId);
  if (!note) return null;
  const excluded = new Set<string>();
  const exclude = (n: NoteNode) => { excluded.add(n.id); n.children.forEach(exclude); }; exclude(note);
  const currentParent = findParentNode(tree, noteId)?.id;
  const targets: { id: string; path: string }[] = [];
  const walk = (n: NoteNode, path: string) => {
    if (!excluded.has(n.id) && !n.archived) targets.push({ id: n.id, path });
    n.children.forEach(child => walk(child, `${path} / ${child.title || 'Untitled'}`));
  }; walk(tree, 'Home');
  return <div className="sheet-backdrop" style={{ zIndex: 70 }} onClick={onClose}>
    <div className="settings-dialog" role="dialog" aria-label="Move note" onClick={e => e.stopPropagation()}>
      <button className="icon-btn" title="Close move dialog" onClick={onClose}><X size={18} /></button>
      <h3>Move {note.title || 'Untitled'}</h3>
      <p>Choose the page that will contain this note. Its content and nested notes stay together.</p>
      {targets.map(target => <button key={target.id} className="sheet-item" disabled={target.id === currentParent} onClick={() => onMove(target.id)}>
        <FolderInput size={16} /> {target.path}{target.id === currentParent ? ' (current page)' : ''}
      </button>)}
    </div>
  </div>;
}
