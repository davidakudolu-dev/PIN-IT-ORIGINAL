import React from 'react';
import { ArchiveRestore, RotateCcw, Trash2 } from 'lucide-react';
import { NoteNode, TrashEntry } from '../types';
import { findNode } from '../utils/tree';

interface ArchiveTrashViewProps {
  mode: 'archive' | 'trash';
  currentNode: NoteNode;
  tree: NoteNode;
  trash: TrashEntry[];
  trashAreaId: string;
  onRestoreArchived: (id: string) => void;
  onRestoreTrash: (trashId: string) => void;
  onPermanentDelete: (trashId: string) => void;
  onDeleteNote: (id: string) => void;
}

export const ArchiveTrashView: React.FC<ArchiveTrashViewProps> = ({
  mode,
  currentNode,
  tree,
  trash,
  trashAreaId,
  onRestoreArchived,
  onRestoreTrash,
  onPermanentDelete,
  onDeleteNote,
}) => {
  if (mode === 'archive') {
    const archivedChildren = (currentNode.children || []).filter((c) => c.archived);

    return (
      <div className="board-scroll">
        <div className="board-inner">
          {archivedChildren.length === 0 ? (
            <div className="board-empty">
              <p>No archived notes in this page</p>
            </div>
          ) : (
            archivedChildren.map((child) => {
              const innerCount = (child.children || []).filter((c) => !c.archived).length;
              return (
                <div className="archive-row" key={child.id}>
                  <div className="archive-row-title">
                    {child.title || 'Untitled Note'}
                    <span>
                      {innerCount} nested note{innerCount === 1 ? '' : 's'} inside
                    </span>
                  </div>
                  <button
                    className="archive-mini-btn"
                    onClick={() => onRestoreArchived(child.id)}
                    title="Restore to active page"
                  >
                    <ArchiveRestore size={16} />
                  </button>
                  <button
                    className="archive-mini-btn danger"
                    onClick={() => onDeleteNote(child.id)}
                    title="Move to Recycle Bin"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }

  // Trash Mode
  const areaTrash = trash.filter((t) => t.parentId === trashAreaId || (trashAreaId === 'root' && !findNode(tree, t.parentId)));

  return (
    <div className="board-scroll">
      <div className="board-inner">
        {areaTrash.length === 0 ? (
          <div className="board-empty">
            <p>Recycle bin is empty for this note area</p>
          </div>
        ) : (
          areaTrash.map((entry) => (
            <div className="archive-row" key={entry.id}>
              <div className="archive-row-title">
                {entry.node.title || 'Untitled Note'}
                {entry.node.pinned && <span className="pinned-tag">PINNED NOTE</span>}
                <span>
                  Deleted {new Date(entry.deletedAt).toLocaleDateString()}
                  {entry.node.children && entry.node.children.length > 0
                    ? ` · ${entry.node.children.length} nested note${
                        entry.node.children.length === 1 ? '' : 's'
                      } inside will restore too`
                    : ''}
                </span>
              </div>
              <button
                className="archive-mini-btn"
                onClick={() => onRestoreTrash(entry.id)}
                title="Restore to original parent page"
              >
                <RotateCcw size={16} />
              </button>
              <button
                className="archive-mini-btn danger"
                onClick={() => onPermanentDelete(entry.id)}
                title="Delete forever"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
