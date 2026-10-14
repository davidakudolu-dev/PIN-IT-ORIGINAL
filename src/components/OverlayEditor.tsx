import React, { useEffect, useState } from 'react';
import { BubblePin, DEFAULT_BUBBLE_SETTINGS } from './BubblePin';
import { findNode, cloneTree, stripHtml } from '../utils/tree';
import { loadAppData, saveAppData } from '../utils/storage';
import { subscribeNativeData, flushNativeData } from '../utils/nativeStorage';
import { nativeCall } from '../utils/nativeBridge';
export function OverlayEditor({ noteId }: { noteId: string }) {
  const [data, setData] = useState<any>(null); const [message, setMessage] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 460, height: 420 });
  useEffect(() => {
    let alive = true;
    void loadAppData().then(state => { if (alive) setData(state); }).catch(error => setMessage(error.message));
    void nativeCall('overlay.status').then(status => { if (alive) setDimensions({ width: status.widthDp || 460, height: status.heightDp || 420 }); }).catch(error => { if (alive) setMessage(error.message); });
    const unsubscribe = subscribeNativeData(state => { if (alive) setData(state); });
    const resize = (event: Event) => { if (alive) setDimensions((event as CustomEvent).detail); };
    window.addEventListener('pinit:overlay-size', resize);
    return () => { alive = false; unsubscribe(); window.removeEventListener('pinit:overlay-size', resize); };
  }, []);
  useEffect(() => {
    if (!data) return;
    document.documentElement.setAttribute('data-theme', data.theme || 'dark');
    void saveAppData(data).then(saved => { if (!saved) setMessage('Edits are pending. Resolve conflicting changes before closing.'); });
  }, [data]);
  const run = async (action: string) => { try { await flushNativeData(); await nativeCall(action); } catch (error) { setMessage((error as Error).message); } };
  if (!data) return <div className="pb-shell pb-loading">{message || 'Loading note…'}</div>;
  const node = findNode(data.tree, noteId);
  return <>
    <BubblePin floatingNode={node} nativeOverlay settings={{ ...DEFAULT_BUBBLE_SETTINGS, ...data.bubbleSettings, expansionWidth: dimensions.width, expansionHeight: dimensions.height }}
      onUpdateSettings={updates => {
        const { expansionWidth, expansionHeight, ...preferences } = updates;
        if (expansionWidth || expansionHeight) {
          const next = { width: expansionWidth || dimensions.width, height: expansionHeight || dimensions.height }; setDimensions(next);
          void nativeCall('overlay.resize', { widthDp: next.width, heightDp: next.height }).catch(error => setMessage(error.message));
        }
        if (Object.keys(preferences).length) setData((previous: any) => ({ ...previous, bubbleSettings: { ...DEFAULT_BUBBLE_SETTINGS, ...previous.bubbleSettings, ...preferences } }));
      }}
      onUpdateNodeContent={(id, title, content) => setData((previous: any) => {
        const tree = cloneTree(previous.tree); const note = findNode(tree, id);
        if (note) { note.title = title; note.content = content; note.updatedAt = Date.now(); }
        return { ...previous, tree };
      })}
      onCopyNote={async note => { try { await nativeCall('clipboard', { text: `${note.title}\n\n${stripHtml(note.content)}` }); setMessage('Copied note content'); } catch (error) { setMessage((error as Error).message); } }}
      onShowToast={setMessage} onMinimize={() => void run('overlay.minimize')} onClose={() => void run('overlay.close')} />
    {message && <div className="toast" onClick={() => setMessage(null)}>{message}</div>}
  </>;
}
