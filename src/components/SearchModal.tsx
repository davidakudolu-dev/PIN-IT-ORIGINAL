import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { NoteNode, SearchResult } from '../types';
import { collectSearchResults, pathTitles } from '../utils/tree';

interface SearchModalProps {
  tree: NoteNode;
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (result: SearchResult, query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  tree,
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim();
    if (!q || !tree) return [];
    const out: SearchResult[] = [];
    collectSearchResults(tree, q, [], out);
    return out.slice(0, 60);
  }, [searchQuery, tree]);

  if (!isOpen) return null;

  return (
    <div className="search-backdrop" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-row">
          <Search size={18} />
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search all notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose();
              if (e.key === 'Enter' && searchResults.length > 0) {
                onSelectResult(searchResults[0], searchQuery.trim());
              }
            }}
          />
          <button className="search-close-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="search-results">
          {searchQuery.trim() === '' ? (
            <div className="search-empty">Type any word to find notes instantly</div>
          ) : searchResults.length === 0 ? (
            <div className="search-empty">No notes match “{searchQuery.trim()}”</div>
          ) : (
            searchResults.map((r) => {
              const crumbs = pathTitles(tree, r.path);
              const crumbText = crumbs.length ? `Home / ${crumbs.join(' / ')}` : 'Home';
              const q = searchQuery.trim();

              let titleNode: React.ReactNode = r.title;
              const qIdx = r.title.toLowerCase().indexOf(q.toLowerCase());
              if (r.matchType === 'title' && qIdx !== -1) {
                titleNode = (
                  <>
                    {r.title.slice(0, qIdx)}
                    <mark className="result-hit">{r.title.slice(qIdx, qIdx + q.length)}</mark>
                    {r.title.slice(qIdx + q.length)}
                  </>
                );
              }

              return (
                <button
                  key={r.id}
                  className="search-result-item"
                  onClick={() => onSelectResult(r, q)}
                >
                  <div className="search-result-head">
                    <div className="search-result-title">{titleNode}</div>
                    {r.pinned && <span className="search-result-tag">PINNED</span>}
                    {r.archived && <span className="search-result-tag">ARCHIVED</span>}
                  </div>
                  {r.snippet && <div className="search-result-snippet">{
                    (() => {
                      const index = r.snippet.toLowerCase().indexOf(q.toLowerCase());
                      return index < 0 ? r.snippet : <>{r.snippet.slice(0, index)}<mark className="result-hit">{r.snippet.slice(index, index + q.length)}</mark>{r.snippet.slice(index + q.length)}</>;
                    })()
                  }</div>}
                  <div className="search-result-path">{crumbText}</div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
