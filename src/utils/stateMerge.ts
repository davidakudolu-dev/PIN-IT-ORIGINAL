// Rebase edits made while an asynchronous Room write was in flight.
// The native repository repeats these checks transactionally before committing.
const missing = Symbol('missing');
export const canonical = (v: any): string => {
  if (v === missing) return '__absent__';
  if (Array.isArray(v)) return `[${v.map(canonical).join(',')}]`;
  if (v && typeof v === 'object') return `{${Object.keys(v).sort().map(k => `${JSON.stringify(k)}:${canonical(v[k])}`).join(',')}}`;
  return JSON.stringify(v);
};
export const equalData = (a: any, b: any) => canonical(a) === canonical(b);
function flatten(data: any) {
  const nodes: Record<string, any> = Object.create(null); const trash: Record<string, any> = Object.create(null);
  const walk = (node: any, parent: string | null, trashId: string | null, index: number) => {
    const { children, ...fields } = node;
    nodes[node.id] = { data: fields, parent, trashId, index };
    children.forEach((child: any, i: number) => walk(child, node.id, trashId, i));
  };
  walk(data.tree, null, null, 0);
  (data.trash || []).forEach((entry: any) => { const { node, ...meta } = entry; trash[entry.id] = meta; walk(node, null, entry.id, 0); });
  const { tree, trash: ignored, ...preferences } = data;
  return { nodes, trash, preferences };
}
function inflate(flat: any) {
  const byParent = new Map<string | null, string[]>(); const visited = new Set<string>();
  Object.keys(flat.nodes).forEach(id => { const parent = flat.nodes[id].parent; byParent.set(parent, [...(byParent.get(parent) || []), id]); });
  const build = (id: string, depth = 0): any => {
    if (depth > 128 || visited.has(id)) throw new Error('Conflicting parent relationships');
    visited.add(id);
    const entry = flat.nodes[id];
    const children = (byParent.get(id) || []).sort((a, b) => flat.nodes[a].index - flat.nodes[b].index || a.localeCompare(b));
    return { ...entry.data, children: children.map(child => build(child, depth + 1)) };
  };
  const tree = build('root');
  const trash = Object.keys(flat.trash).sort().map(id => {
    const roots = (byParent.get(null) || []).filter(noteId => flat.nodes[noteId].trashId === id);
    if (roots.length !== 1) throw new Error('Conflicting recycle bin relationships');
    return { ...flat.trash[id], node: build(roots[0]) };
  });
  if (visited.size !== Object.keys(flat.nodes).length) throw new Error('An edited note has lost its parent');
  return { ...flat.preferences, tree, trash };
}
export function mergeAppData(base: any, local: any, remote: any): any {
  const merge = (b: any, l: any, r: any, path: string): any => {
    if (equalData(l, b)) return r;
    if (equalData(r, b) || equalData(l, r)) return l;
    if (path.endsWith('.updatedAt') && typeof l === 'number' && typeof r === 'number') return Math.max(l, r);
    if ([b, l, r].every(v => v && typeof v === 'object' && !Array.isArray(v))) {
      const result: any = Object.create(null);
      for (const key of new Set([...Object.keys(b), ...Object.keys(l), ...Object.keys(r)])) {
        const value = merge(key in b ? b[key] : missing, key in l ? l[key] : missing, key in r ? r[key] : missing, `${path}.${key}`);
        if (value !== missing) result[key] = value;
      }
      return result;
    }
    throw new Error(`Conflicting edits to ${path}`);
  };
  return inflate(merge(flatten(base), flatten(local), flatten(remote), 'state'));
}
export function mergeBackupData(existing: any, incoming: any): any {
  const current = flatten(existing); const source = flatten(incoming);
  for (const [id, node] of Object.entries(source.nodes)) if (!(id in current.nodes)) current.nodes[id] = node;
  const visiting = new Set<string>(); const done = new Set<string>();
  const inherit = (id: string) => {
    if (done.has(id)) return;
    if (visiting.has(id)) throw new Error('Conflicting backup parent relationships');
    visiting.add(id);
    const node = current.nodes[id];
    if (node.parent !== null) { if (!current.nodes[node.parent]) throw new Error('Missing backup parent'); inherit(node.parent); node.trashId = current.nodes[node.parent].trashId; }
    visiting.delete(id); done.add(id);
  };
  Object.keys(current.nodes).forEach(inherit);
  for (const [id, meta] of Object.entries(source.trash)) if (!(id in current.trash) && Object.values(current.nodes).some((n: any) => n.parent === null && n.trashId === id)) current.trash[id] = meta;
  return inflate(current);
}
