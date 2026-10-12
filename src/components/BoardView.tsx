import React, { useState, useRef } from 'react';
import { Plus, Pin, FileText } from 'lucide-react';
import { NoteNode } from '../types';
import { NoteCard } from './NoteCard';
import { getSortedChildren, reorderNodeChildren, findNode } from '../utils/tree';

interface BoardViewProps {
  currentNode: NoteNode;
  onOpenNote: (id: string) => void;
  onLongPressNote: (id: string) => void;
  onAddChild: () => void;
  onUpdateTree: (mutator: (tree: NoteNode) => void) => void;
}

export const BoardView: React.FC<BoardViewProps> = ({
  currentNode,
  onOpenNote,
  onLongPressNote,
  onAddChild,
  onUpdateTree,
}) => {
  const [dragSourceId, setDragSourceId] = useState<string | null>(null);
  const [dragSourceIsPinned, setDragSourceIsPinned] = useState<boolean>(false);
  const lastDragTarget = useRef<string | null>(null);

  const { pinned, normal } = getSortedChildren(currentNode.children || []);
  const totalNotes = pinned.length + normal.length;

  const handleDragStartItem = (id: string, isPinned: boolean) => {
    setDragSourceId(id);
    setDragSourceIsPinned(isPinned);
    lastDragTarget.current = id;
  };

  const handleDragOverItem = (targetId: string, isPinned: boolean) => {
    if (!dragSourceId || dragSourceId === targetId) return;
    if (dragSourceIsPinned !== isPinned) return; // Prevent cross-section drag confusion
    if (lastDragTarget.current === targetId) return;
    lastDragTarget.current = targetId;

    onUpdateTree((tree) => {
      const activeParent = findNode(tree, currentNode.id);
      if (!activeParent) return;
      // Reorder in place
      reorderNodeChildren(activeParent, dragSourceId, targetId, isPinned);
    });
  };

  const handleDragEndItem = () => {
    setDragSourceId(null);
    lastDragTarget.current = null;
  };

  return (
    <>
      <div className="board-scroll">
        <div className="board-inner">
          {totalNotes === 0 ? (
            <div className="board-empty">
              <div className="empty-icon-circle">
                <FileText size={28} />
              </div>
              <p>No notes here yet</p>
              <span className="empty-sub">Tap the floating + button to create a new note</span>
            </div>
          ) : (
            <>
              {/* Pinned Section - Takes Priority at the Top */}
              {pinned.length > 0 && (
                <div className="section-block">
                  <div className="section-header">
                    <Pin size={14} className="pin-hdr-icon" />
                    <span>PINNED ({pinned.length})</span>
                    <div className="section-hdr-line" />
                  </div>
                  <div className="cards-grid">
                    {pinned.map((child) => (
                      <NoteCard
                        key={child.id}
                        node={child}
                        isPinnedSection={true}
                        onOpen={onOpenNote}
                        onLongPress={onLongPressNote}
                        onDragStartItem={handleDragStartItem}
                        onDragOverItem={handleDragOverItem}
                        onDragEndItem={handleDragEndItem}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Normal Notes Section */}
              {normal.length > 0 && (
                <div className="section-block">
                  {pinned.length > 0 && (
                    <div className="section-header">
                      <span>OTHER NOTES ({normal.length})</span>
                      <div className="section-hdr-line" />
                    </div>
                  )}
                  <div className="cards-grid">
                    {normal.map((child) => (
                      <NoteCard
                        key={child.id}
                        node={child}
                        isPinnedSection={false}
                        onOpen={onOpenNote}
                        onLongPress={onLongPressNote}
                        onDragStartItem={handleDragStartItem}
                        onDragOverItem={handleDragOverItem}
                        onDragEndItem={handleDragEndItem}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <button className="fab-add" onClick={onAddChild} title="Create Pin + (Add New Note)">
        <Plus size={24} />
      </button>
    </>
  );
};
