import React, { useEffect, useRef, useState } from 'react';
import { X, Download, Upload, StopCircle, RotateCcw } from 'lucide-react';
import { isNative, nativeCall } from '../utils/nativeBridge';
import { flushNativeData, retryNativeSave, acceptNativeSnapshot } from '../utils/nativeStorage';
import { createBackup, readBackup, downloadBlob } from '../utils/backup';
import { mergeBackupData } from '../utils/stateMerge';
export function SettingsDialog({ isOpen, onClose, data, onRestore, onShowToast, saveError }: { isOpen: boolean; onClose: () => void; data: any; onRestore: (data: any) => void; onShowToast: (text: string) => void; saveError: boolean }) {
  const [busy, setBusy] = useState(false); const [status, setStatus] = useState<any>(null);
  const [incoming, setIncoming] = useState<any>(null); const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (isOpen && isNative()) void nativeCall('overlay.status').then(setStatus).catch(() => setStatus(null)); }, [isOpen]);
  if (!isOpen) return null;
  const run = async (work: () => Promise<void>) => {
    setBusy(true);
    try { await work(); } catch (error) { onShowToast((error as Error).message); } finally { setBusy(false); }
  };
  const exportBackup = () => run(async () => {
    if (isNative()) { await flushNativeData(); await nativeCall('backup.export'); onShowToast('Backup saved'); }
    else { const blob = await createBackup(data); downloadBlob(blob, `Pin-It_Backup_${new Date().toISOString().slice(0, 10)}.pinit`); onShowToast('Backup download requested'); }
  });
  const restore = () => {
    if (isNative()) void run(async () => { await flushNativeData(); const result = await nativeCall('backup.restore'); acceptNativeSnapshot(result); window.dispatchEvent(new Event('pinit:restore-complete')); onShowToast('Backup restored'); });
    else fileRef.current?.click();
  };
  const count = (node: any): number => 1 + node.children.reduce((sum: number, child: any) => sum + count(child), 0);
  const apply = (replace: boolean) => run(async () => {
    if (replace && !window.confirm('Replace all local notes and settings? A recovery copy will be kept in this browser.')) return;
    const next = replace ? incoming : mergeBackupData(data, incoming);
    localStorage.setItem(`pinit-pre-restore-${Date.now()}`, JSON.stringify(data));
    onRestore(next); setIncoming(null); onShowToast('Backup restored');
  });
  return <div className="sheet-backdrop" style={{ zIndex: 70 }} onClick={() => { if (!busy) onClose(); }}>
    <div className="settings-dialog" role="dialog" aria-label="Settings" onClick={e => e.stopPropagation()}>
      <button className="icon-btn" title="Close settings" disabled={busy} onClick={onClose}><X size={18} /></button>
      <h3>Settings</h3><h3>Backup &amp; Restore</h3>
      <p>Save a portable .pinit file outside Pin-It to keep your notes after uninstalling. Backups include active, archived and deleted notes, nested pages, formatting and settings.</p>
      <button className="sheet-item" disabled={busy || !data?.tree} onClick={exportBackup}><Download size={18} /> Download Backup</button>
      <button className="sheet-item" disabled={busy} onClick={restore}><Upload size={18} /> Upload &amp; Restore Backup</button>
      <input ref={fileRef} hidden type="file" accept=".pinit,.json,application/zip,application/octet-stream,application/json" onChange={e => {
        const file = e.target.files?.[0]; e.target.value = '';
        if (file) void run(async () => setIncoming(await readBackup(file)));
      }} />
      {incoming && <div><p>{count(incoming.tree) - 1} active/archived notes and {incoming.trash.length} deleted subtrees. Merge imports missing IDs and keeps existing versions. Replace restores the selected dataset.</p>
        <button className="sheet-item" disabled={busy} onClick={() => void apply(false)}>Merge</button>
        <button className="sheet-item danger" disabled={busy} onClick={() => void apply(true)}>Replace</button>
      </div>}
      {isNative() && <>
        <button className="sheet-item" disabled={busy} onClick={() => void run(async () => { await nativeCall('backup.recovery'); onShowToast('Recovery copy saved'); })}><Download size={18} /> Export recovery copy</button>
        {saveError && <button className="sheet-item" disabled={busy} onClick={() => void run(async () => { await retryNativeSave(); onShowToast('Pending edits saved'); })}><RotateCcw size={18} /> Retry pending edits</button>}
        <h3>Floating notes</h3>
        <p>{status?.permission ? 'Overlay permission is enabled.' : 'Open a note and tap Bubble Pin to request overlay permission.'} Floating notes remain over other permitted Android apps and can be stopped from their notification.</p>
        <button className="sheet-item" disabled={busy} onClick={() => void run(async () => { await flushNativeData(); await nativeCall('overlay.stop'); setStatus(await nativeCall('overlay.status')); onShowToast('Floating notes stopped'); })}><StopCircle size={18} /> Stop floating notes</button>
      </>}
      {busy && <p role="status">Waiting for the operation or Android file picker…</p>}
    </div>
  </div>;
}
