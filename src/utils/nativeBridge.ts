type Reply = { id: string; ok: boolean; result?: any; error?: { code: string; message: string } };
const pending = new Map<string, { resolve: (value: any) => void; reject: (error: Error) => void }>();
let sequence = 0;
export const isNative = () => typeof (window as any).PinItNative?.postMessage === 'function';
export class NativeError extends Error { constructor(public code: string, message: string) { super(message); } }
export function nativeCall(action: string, payload: any = {}): Promise<any> {
  const bridge = (window as any).PinItNative;
  if (!bridge) return Promise.reject(new NativeError('UNAVAILABLE', 'This feature requires the Android app'));
  if (!bridge.onmessage) bridge.onmessage = (event: { data: string }) => {
    let response: Reply;
    try { response = JSON.parse(event.data); } catch { return; }
    const callback = pending.get(response.id);
    if (!callback) return;
    pending.delete(response.id);
    if (response.ok) callback.resolve(response.result);
    else callback.reject(new NativeError(response.error?.code || 'NATIVE_ERROR', response.error?.message || 'Native operation failed'));
  };
  const id = `web-${++sequence}`;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    try { bridge.postMessage(JSON.stringify({ id, action, payload })); }
    catch (error) { pending.delete(id); reject(error); }
  });
}
export async function exportPdf(filename: string, buffer: ArrayBuffer): Promise<void> {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 8192) binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  await nativeCall('file.export', { filename, base64: btoa(binary) });
}
