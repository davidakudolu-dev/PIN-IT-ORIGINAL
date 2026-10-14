import { isNative } from './nativeBridge';
import { loadNativeData, saveNativeData } from './nativeStorage';
// Keep the original key and record shape. A bad record must never be replaced
// with an empty tree just because parsing or validation failed.
export const STORAGE_KEY = 'pinboard-notes-data-v5';

export function validateData(data: any): any {
  const ids = new Set<string>();
  const validateNode = (node: any) => {
    if (!node || typeof node.id !== 'string' || !node.id || ids.has(node.id) ||
        typeof node.title !== 'string' || typeof node.content !== 'string' ||
        !Array.isArray(node.children)) throw new Error('Invalid saved note tree');
    ids.add(node.id);
    node.children.forEach(validateNode);
  };
  if (!data || !data.tree || data.tree.id !== 'root') throw new Error('Invalid saved root');
  validateNode(data.tree);
  if (data.trash !== undefined && !Array.isArray(data.trash)) throw new Error('Invalid saved recycle bin');
  const trashIds = new Set<string>();
  for (const entry of data.trash || []) {
    if (!entry || typeof entry.id !== 'string' || trashIds.has(entry.id) ||
        typeof entry.parentId !== 'string' || typeof entry.deletedAt !== 'number') {
      throw new Error('Invalid saved recycle bin entry');
    }
    trashIds.add(entry.id);
    validateNode(entry.node);
  }
  if (data.theme !== undefined && data.theme !== 'dark' && data.theme !== 'light') throw new Error('Invalid saved theme');
  if (data.bubbleSettings !== undefined && (!data.bubbleSettings || typeof data.bubbleSettings !== 'object')) {
    throw new Error('Invalid saved bubble settings');
  }
  const limits: Record<string, [number, number]> = {
    transparency: [0.2, 1], bubblePopSize: [48, 96], expansionWidth: [300, 720],
    expansionHeight: [260, 650], cropTop: [0, 200], cropBottom: [0, 200], cropHeight: [100, 400],
  };
  for (const [key, [min, max]] of Object.entries(limits)) {
    const value = data.bubbleSettings?.[key];
    if (value !== undefined && (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max)) {
      throw new Error('Invalid saved bubble setting');
    }
  }
  return data;
}

export async function loadAppData(): Promise<any | null> {
  if (isNative()) {
    let legacy: string | null = null;
    try { legacy = window.localStorage.getItem(STORAGE_KEY); } catch {}
    return validateData(await loadNativeData(legacy));
  }
  // The synchronous browser copy contains the most recent edits even if the
  // optional asynchronous host storage was still writing when a page closed.
  let local: string | null = null;
  try { local = window.localStorage.getItem(STORAGE_KEY); }
  catch { /* Try the original host storage if browser storage is unavailable. */ }
  if (local !== null) return validateData(JSON.parse(local));

  const storage = (window as any).storage;
  if (storage && typeof storage.get === 'function') {
    const result = await storage.get(STORAGE_KEY, false);
    if (result?.value) return validateData(JSON.parse(result.value));
  }
  return null;
}

let pendingRemote: string | null = null;
let remoteWrite: Promise<boolean> | null = null;

export function saveAppData(data: any): Promise<boolean> {
  if (isNative()) return saveNativeData(data);
  const serialized = JSON.stringify(data);
  let localSaved = false;
  try {
    window.localStorage.setItem(STORAGE_KEY, serialized);
    localSaved = true;
  } catch (error) {
    console.error('localStorage save failed:', error);
  }

  const storage = (window as any).storage;
  if (!storage || typeof storage.set !== 'function') return Promise.resolve(localSaved);
  // Serialize host writes and coalesce pending edits so old writes cannot
  // finish after new ones and overwrite the latest record.
  pendingRemote = serialized;
  if (!remoteWrite) {
    remoteWrite = (async () => {
      let saved = false;
      while (pendingRemote !== null) {
        const next = pendingRemote;
        pendingRemote = null;
        try { await storage.set(STORAGE_KEY, next, false); saved = true; }
        catch (error) { saved = false; console.warn('window.storage.set failed:', error); }
      }
      return saved;
    })().finally(() => { remoteWrite = null; });
  }
  return localSaved ? Promise.resolve(true) : remoteWrite;
}
