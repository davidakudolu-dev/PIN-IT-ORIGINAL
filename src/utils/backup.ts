import JSZip from 'jszip';
import { validateData } from './storage';
const MAX_DATA = 32 * 1024 * 1024;
export const sha256 = async (data: Uint8Array) => [...new Uint8Array(await crypto.subtle.digest('SHA-256', data as Uint8Array<ArrayBuffer>))].map(n => n.toString(16).padStart(2, '0')).join('');
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = filename;
  document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export async function createBackup(data: any) {
  validateData(data);
  const payload = new TextEncoder().encode(JSON.stringify({ state: data, overlays: [], nativePreferences: {} }));
  if (payload.length > MAX_DATA) throw new Error('Backup data exceeds 32 MiB');
  const manifest = { format: 'Pin-It', version: 1, createdAt: Date.now(), dataFile: 'data.json', dataBytes: payload.length, sha256: await sha256(payload) };
  const zip = new JSZip(); zip.file('manifest.json', JSON.stringify(manifest)); zip.file('data.json', payload);
  return zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
}
async function boundedRead(file: JSZip.JSZipObject, limit: number): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks: Uint8Array[] = []; const stream = (file as any).internalStream('uint8array');
    stream.on('data', (chunk: Uint8Array) => { size += chunk.length; if (size > limit) { stream.pause(); reject(new Error('Backup exceeds supported size')); return; } chunks.push(chunk); });
    stream.on('error', reject); stream.on('end', () => { const result = new Uint8Array(size); let offset = 0; chunks.forEach(chunk => { result.set(chunk, offset); offset += chunk.length; }); resolve(result); }); stream.resume();
  });
}
export async function readBackup(file: File) {
  if (file.size > 40 * 1024 * 1024) throw new Error('Backup exceeds 40 MiB');
  const bytes = await file.arrayBuffer(); const prefix = new Uint8Array(bytes);
  if (prefix[0] !== 80 || prefix[1] !== 75) {
    if (bytes.byteLength > MAX_DATA) throw new Error('Backup data exceeds 32 MiB');
    const legacy = JSON.parse(new TextDecoder().decode(bytes)); return validateData(legacy.state || legacy);
  }
  const zip = await JSZip.loadAsync(bytes);
  if (Object.keys(zip.files).sort().join(',') !== 'data.json,manifest.json') throw new Error('Unexpected or unsafe archive paths');
  const manifest = JSON.parse(new TextDecoder().decode(await boundedRead(zip.file('manifest.json')!, 64 * 1024)));
  if (manifest.format !== 'Pin-It' || manifest.version !== 1 || manifest.dataFile !== 'data.json') throw new Error('Unsupported backup format or version');
  const payload = await boundedRead(zip.file('data.json')!, MAX_DATA);
  if (payload.length !== manifest.dataBytes || await sha256(payload) !== manifest.sha256) throw new Error('Backup checksum mismatch');
  return validateData(JSON.parse(new TextDecoder().decode(payload)).state);
}
