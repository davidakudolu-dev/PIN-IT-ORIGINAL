import React from 'react';
import { ChevronLeft, X, Sun, Moon, Search, Trash2, Archive, Settings } from 'lucide-react';
import { NoteNode, ViewMode, ThemeMode } from '../types';

interface TopBarProps {
  mode: ViewMode;
  currentNode: NoteNode;
  stack: string[];
  theme: ThemeMode;
  trashAreaNode: NoteNode | null;
  onSetMode: (mode: ViewMode) => void;
  onBack: () => void;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onTitleChange: (newTitle: string) => void;
  onOpenTrashForArea: () => void;
  onOpenSettings: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  mode,
  currentNode,
  stack,
  theme,
  trashAreaNode,
  onSetMode,
  onBack,
  onToggleTheme,
  onOpenSearch,
  onTitleChange,
  onOpenTrashForArea,
  onOpenSettings,
}) => {
  if (mode === 'write') return null; // Writing mode uses floating controls

  return (
    <div className="pb-topbar">
      <div className="pb-topbar-icons">
        <div className="pb-topbar-icons-left">
          {mode === 'archive' || mode === 'trash' ? (
            <button className="icon-btn" onClick={() => onSetMode('board')} title="Close view">
              <X size={18} />
            </button>
          ) : stack.length > 1 ? (
            <button className="icon-btn" onClick={onBack} title="Back">
              <ChevronLeft size={20} />
            </button>
          ) : (
            <div style={{ width: 40 }} />
          )}
        </div>

        <div className="pb-topbar-icons-right">
          <button
            className="icon-btn"
            onClick={onOpenSettings}
            title="Settings"
          >
            <Settings size={18} />
          </button>

          <button
            className="icon-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button className="icon-btn" onClick={onOpenSearch} title="Search notes">
            <Search size={17} />
          </button>

          {mode === 'board' && (
            <>
              <button
                className="icon-btn"
                onClick={onOpenTrashForArea}
                title="Recycle bin for this page"
              >
                <Trash2 size={17} />
              </button>
              <button
                className="icon-btn"
                onClick={() => onSetMode('archive')}
                title="Archive for this page"
              >
                <Archive size={17} />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="pb-title-row">
        <input
          className="pb-title-input"
          value={
            mode === 'archive'
              ? 'Archive'
              : mode === 'trash'
              ? `Recycle Bin — ${trashAreaNode ? trashAreaNode.title || 'Untitled' : 'Home'}`
              : currentNode.title
          }
          placeholder="Untitled Note"
          disabled={currentNode.id === 'root' || mode === 'archive' || mode === 'trash'}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
    </div>
  );
};
