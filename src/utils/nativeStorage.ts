import { nativeCall } from './nativeBridge';
import { equalData, mergeAppData } from './stateMerge';
let base: any = null;
let revision = 0;
let pending: { data: any; base: any; revision: number } | null = null;
let working = false;
let timer: ReturnType<typeof setTimeout> | null = null;
let error: Error | null = null;
let latestRemote: any = null;
const waiters: ((saved: boolean) => void)[] = [];
const subscribers = new Set<(data: any) => void>();
const clone = (data: any) => JSON.parse(JSON.stringify(data));
function publish(data: any) { subscribers.forEach(callback => callback(clone(data))); }
export function subscribeNativeData(callback: (data: any) => void) { subscribers.add(callback); return () => { subscribers.delete(callback); }; }
export async function loadNativeData(legacy: string | null) {
  const result = await nativeCall('load', { legacy });
  base = clone(result.data); revision = result.revision;
  return clone(base);
}
async function drain() {
  if (working || !pending) return;
  working = true;
  const job = pending; pending = null;
  try {
    let result;
    try { result = await nativeCall('save', { data: job.data, base: job.base, baseRevision: job.revision }); }
    catch (problem) {
      if ((problem as any)?.code !== 'CONFLICT') throw problem;
      // Include edits typed while the first save was waiting in the recovery copy.
      if (pending) { job.data = pending.data; pending = null; }
      result = await nativeCall('resolveConflict', { data: job.data, base: job.base, baseRevision: job.revision });
    }
    if (result.discarded) pending = null;
    if (pending) {
      pending.data = mergeAppData(job.data, pending.data, result.data);
      pending.base = clone(result.data); pending.revision = result.revision;
    }
    base = clone(result.data); revision = result.revision; error = null;
    if (!pending) publish(base);
  } catch (problem) {
    error = problem as Error;
    if (!pending) pending = job;
    waiters.splice(0).forEach(resolve => resolve(false));
    window.dispatchEvent(new CustomEvent('pinit:save-error', { detail: error.message }));
  } finally {
    working = false;
    if (!error && pending) void drain();
    else if (!pending) {
      if (latestRemote && latestRemote.revision > revision) { base = clone(latestRemote.data); revision = latestRemote.revision; publish(base); }
      latestRemote = null;
      waiters.splice(0).forEach(resolve => resolve(true));
    }
  }
}
export function saveNativeData(data: any): Promise<boolean> {
  if (base && equalData(data, base) && !pending && !working) return Promise.resolve(true);
  if (!pending) pending = { data: clone(data), base: clone(base), revision };
  else pending.data = clone(data);
  error = null;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => { timer = null; void drain(); }, 150);
  return new Promise(resolve => { waiters.push(resolve); });
}
export async function flushNativeData() {
  if (timer) { clearTimeout(timer); timer = null; }
  if (error) throw error;
  if (!working && !pending) return;
  const saved = new Promise<boolean>(resolve => waiters.push(resolve));
  void drain();
  if (!await saved) throw error || new Error('Edits have not been saved');
}
window.addEventListener('pinit:native-state', (event: Event) => {
  const result = (event as CustomEvent).detail;
  if (!result || !base || result.revision <= revision) return;
  if (working || pending) { if (!latestRemote || result.revision > latestRemote.revision) latestRemote = result; return; }
  base = clone(result.data); revision = result.revision; publish(base);
});
(window as any).PinIt = { ...(window as any).PinIt, flush: flushNativeData };
window.addEventListener('pagehide', () => { void flushNativeData().catch(() => {}); });
window.addEventListener('blur', () => { void flushNativeData().catch(() => {}); });

export async function retryNativeSave() { error = null; await flushNativeData(); }

export function acceptNativeSnapshot(result: any) {
  if (!result?.data || result.revision < revision) return;
  if (working || pending) { latestRemote = result; return; }
  base = clone(result.data); revision = result.revision; publish(base);
}
