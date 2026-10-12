import React, { useRef, useState, useEffect } from 'react';
import { GripVertical, Pin } from 'lucide-react';
import { NoteNode } from '../types';
import { stripHtml } from '../utils/tree';

interface NoteCardProps {
  node: NoteNode;
  isPinnedSection: boolean;
  onOpen: (id: string) => void;
  onLongPress: (id: string) => void;
  onDragStartItem: (id: string, isPinned: boolean) => void;
  onDragOverItem: (id: string, isPinned: boolean) => void;
  onDragEndItem: () => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({
  node,
  isPinnedSection,
  onOpen,
  onLongPress,
  onDragStartItem,
  onDragOverItem,
  onDragEndItem,
}) => {
  const pressTimer = useRef<any>(null);
  const longFired = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const pressStart = useRef({ x: 0, y: 0 });
  const pointerDrag = useRef(false);

  useEffect(() => () => clearTimeout(pressTimer.current), []);

  const childCount = (node.children || []).filter((c) => !c.archived).length;
  const excerpt = stripHtml(node.content).slice(0, 90);

  const startTimer = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    clearTimer();
    pressStart.current = { x: e.clientX, y: e.clientY };
    longFired.current = false;
    pressTimer.current = setTimeout(() => {
      longFired.current = true;
      onLongPress(node.id);
    }, 450);
  };

  const clearTimer = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (longFired.current) {
      longFired.current = false;
      return;
    }
    onOpen(node.id);
  };

  const handleDragStart = (e: React.DragEvent) => {
    clearTimer();
    longFired.current = true;
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', node.id);
    onDragStartItem(node.id, isPinnedSection);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    onDragOverItem(node.id, isPinnedSection);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEndItem();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className={`note-card ${node.pinned ? 'pinned-glow' : ''} ${isDragging ? 'dragging' : ''}`}
      data-note-id={node.id}
      data-pinned-section={isPinnedSection}
      onPointerDown={startTimer}
      onPointerMove={(e) => {
        if (Math.abs(e.clientX - pressStart.current.x) > 8 || Math.abs(e.clientY - pressStart.current.y) > 8) clearTimer();
      }}
      onPointerUp={clearTimer}
      onPointerLeave={clearTimer}
      onPointerCancel={clearTimer}
      onClick={handleClick}
    >
      <div className="card-drag-handle" title="Hold and drag to reorder note"
        onPointerDown={(e) => {
          if (e.button !== 0) return;
          e.stopPropagation();
          e.preventDefault();
          clearTimer();
          pointerDrag.current = true;
          longFired.current = true;
          setIsDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
          onDragStartItem(node.id, isPinnedSection);
        }}
        onPointerMove={(e) => {
          if (!pointerDrag.current) return;
          e.stopPropagation();
          const target = document.elementFromPoint(e.clientX, e.clientY)?.closest<HTMLElement>('.note-card');
          if (target?.dataset.noteId) onDragOverItem(target.dataset.noteId, target.dataset.pinnedSection === 'true');
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          if (pointerDrag.current) { pointerDrag.current = false; handleDragEnd(); }
        }}
        onPointerCancel={() => { pointerDrag.current = false; handleDragEnd(); }}
        onClick={(e) => { e.stopPropagation(); longFired.current = false; }}
      >
        <GripVertical size={14} />
      </div>

      <span className={`pin-emoji ${node.pinned ? 'pin-emoji-active' : ''}`}>
        📌
      </span>

      {childCount > 0 && <div className="count-badge">{childCount}</div>}

      <div className="card-pill">
        {node.pinned ? 'PINNED NOTE' : 'NOTE'}
      </div>

      <div className="card-title">{node.title || 'Untitled'}</div>
      <div className="card-divider" />
      <div className="card-body">{excerpt || 'No written notes yet.'}</div>
    </div>
  );
};
