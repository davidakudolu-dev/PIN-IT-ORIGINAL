export interface NoteNode {
  id: string;
  title: string;
  content: string;
  archived: boolean;
  pinned: boolean;
  pinnedAt?: number | null; // Timestamp when note was pinned (for hierarchy ordering)
  order?: number;           // Manual sorting index within its parent container
  children: NoteNode[];
  createdAt?: number;
  updatedAt?: number;
}

export interface TrashEntry {
  id: string;
  node: NoteNode;
  parentId: string;
  deletedAt: number;
}

export interface BubbleSettings {
  transparency: number;     // 0.2 to 1.0 (opacity)
  bubblePopSize: number;    // Diameter in px (48 to 96)
  expansionWidth: number;   // In px (320 to 720) or percentage
  expansionHeight: number;  // In px or vh (280 to 600)
  cropEnabled: boolean;     // Whether viewport cropping is active
  cropTop: number;          // Crop inset top in px
  cropBottom: number;       // Crop inset bottom in px
  cropHeight: number;       // Cropped visible window height
}

export type ViewMode = 'board' | 'write' | 'archive' | 'trash';
export type ThemeMode = 'dark' | 'light';

export interface SearchResult {
  id: string;
  title: string;
  path: string[];
  archived: boolean;
  pinned: boolean;
  matchType: 'title' | 'content';
  snippet: string;
}
