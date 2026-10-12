import { NoteNode, SearchResult } from '../types';

export const generateUid = () =>
  Math.random().toString(36).slice(2, 9) + Date.now().toString(36);

export function createRootNode(): NoteNode {
  return {
    id: 'root',
    title: 'Home',
    content: '',
    archived: false,
    pinned: false,
    pinnedAt: null,
    order: 0,
    children: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

export function cloneTree(node: NoteNode): NoteNode {
  return JSON.parse(JSON.stringify(node));
}

export function findNode(node: NoteNode, id: string): NoteNode | null {
  if (node.id === id) return node;
  for (const child of node.children || []) {
    const found = findNode(child, id);
    if (found) return found;
  }
  return null;
}

export function findParentNode(node: NoteNode, id: string): NoteNode | null {
  for (const child of node.children || []) {
    if (child.id === id) return node;
    const found = findParentNode(child, id);
    if (found) return found;
  }
  return null;
}

export function findPathIds(node: NoteNode, targetId: string, path: string[] = []): string[] | null {
  const currentPath = [...path, node.id];
  if (node.id === targetId) return currentPath;
  for (const child of node.children || []) {
    const found = findPathIds(child, targetId, currentPath);
    if (found) return found;
  }
  return null;
}

export function deleteNodeById(node: NoteNode, id: string): void {
  if (!node.children) return;
  node.children = node.children.filter((c) => c.id !== id);
  node.children.forEach((c) => deleteNodeById(c, id));
}

export function stripHtml(html: string): string {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  div.querySelectorAll('br').forEach((br) => br.replaceWith('\n'));
  div.querySelectorAll('p, div, h1, h2, h3, h4, h5, h6, li, blockquote').forEach((block) => {
    block.prepend('\n');
    block.append('\n');
  });
  return (div.textContent || '').replace(/\n{3,}/g, '\n\n').trim();
}

export function escapeHtml(str: string): string {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function makeChipHtml(id: string, title: string, pinned: boolean = true): string {
  const pinnedClass = pinned ? 'note-chip-pinned' : '';
  const chip = document.createElement('div');
  chip.className = `note-chip ${pinnedClass}`;
  chip.setAttribute('contenteditable', 'false');
  chip.setAttribute('data-note-id', id);
  chip.innerHTML = `<span class="note-chip-pin"></span><span class="note-chip-label">${escapeHtml(title || 'Untitled')}</span>`;
  return chip.outerHTML;
}

export function contentHasChip(html: string, id: string): boolean {
  if (!html) return false;
  const div = document.createElement('div');
  div.innerHTML = html;
  return Array.from(div.querySelectorAll('.note-chip')).some((chip) => chip.getAttribute('data-note-id') === id);
}

export function refreshChipTitles(container: HTMLElement | null, tree: NoteNode | null): void {
  if (!container || !tree) return;
  const chips = container.querySelectorAll('.note-chip');
  chips.forEach((chip) => {
    const id = chip.getAttribute('data-note-id');
    const node = id ? findNode(tree, id) : null;
    const label = chip.querySelector('.note-chip-label');
    if (label) label.textContent = node ? node.title || 'Untitled' : 'Untitled';
    chip.classList.toggle('note-chip-pinned', !!(node && node.pinned));
    chip.classList.toggle('note-chip-missing', !node);
  });
}

// Sorts children into Pinned (sorted by pinnedAt descending) and Normal (sorted by order)
export function getSortedChildren(children: NoteNode[]): { pinned: NoteNode[]; normal: NoteNode[] } {
  const activeChildren = (children || []).filter((c) => !c.archived);

  // Pinned section: higher pinnedAt (more recently pinned) comes FIRST
  const pinned = activeChildren
    .filter((c) => c.pinned)
    .sort((a, b) => {
      const aTime = a.pinnedAt || a.updatedAt || 0;
      const bTime = b.pinnedAt || b.updatedAt || 0;
      if (bTime !== aTime) return bTime - aTime;
      return (a.order ?? 0) - (b.order ?? 0);
    });

  // Normal section: ordered by `order` property
  const normal = activeChildren
    .filter((c) => !c.pinned)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return { pinned, normal };
}

// Reorders items when dragged
export function reorderNodeChildren(
  parent: NoteNode,
  sourceId: string,
  targetId: string,
  isPinnedList: boolean
): void {
  if (!parent.children) return;

  const { pinned, normal } = getSortedChildren(parent.children);
  const list = isPinnedList ? [...pinned] : [...normal];

  const sourceIndex = list.findIndex((c) => c.id === sourceId);
  const targetIndex = list.findIndex((c) => c.id === targetId);

  if (sourceIndex === -1 || targetIndex === -1 || sourceIndex === targetIndex) return;

  const [movedItem] = list.splice(sourceIndex, 1);
  list.splice(targetIndex, 0, movedItem);

  if (isPinnedList) {
    // Re-assign pinnedAt timestamps so the new visual sequence is preserved
    const now = Date.now();
    list.forEach((item, index) => {
      // Top items get higher timestamps so pinnedAt descending retains the order
      item.pinnedAt = now - index * 1000;
    });
  } else {
    // Re-assign normal order indices
    list.forEach((item, index) => {
      item.order = index;
    });
  }
}

function buildSnippet(text: string, query: string, radius = 42): string {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, 90);
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  let snippet = text.slice(start, end).trim();
  if (start > 0) snippet = '…' + snippet;
  if (end < text.length) snippet = snippet + '…';
  return snippet;
}

export function collectSearchResults(
  node: NoteNode,
  query: string,
  path: string[],
  out: SearchResult[]
): void {
  const q = query.toLowerCase();
  const nextPath = [...path, node.id];
  if (node.id !== 'root') {
    const title = node.title || '';
    const plain = stripHtml(node.content);
    const titleMatch = title.toLowerCase().includes(q);
    const contentMatch = plain.toLowerCase().includes(q);
    if (titleMatch || contentMatch) {
      out.push({
        id: node.id,
        title: title || 'Untitled',
        path: nextPath,
        archived: node.archived,
        pinned: node.pinned,
        matchType: titleMatch ? 'title' : 'content',
        snippet: contentMatch ? buildSnippet(plain, query) : '',
      });
    }
  }
  (node.children || []).forEach((c) => collectSearchResults(c, query, nextPath, out));
}

export function highlightFirstMatch(root: HTMLElement, query: string): HTMLElement | null {
  if (!root || !query) return null;
  const q = query.toLowerCase();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue || '';
    const idx = text.toLowerCase().indexOf(q);
    if (idx !== -1) {
      try {
        const range = document.createRange();
        range.setStart(node, idx);
        range.setEnd(node, idx + query.length);
        const mark = document.createElement('mark');
        mark.className = 'search-hit';
        range.surroundContents(mark);
        return mark;
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}

export function pathTitles(tree: NoteNode, path: string[]): string[] {
  return path
    .slice(1, -1)
    .map((id) => {
      const n = findNode(tree, id);
      return n ? n.title || 'Untitled' : 'Untitled';
    });
}
