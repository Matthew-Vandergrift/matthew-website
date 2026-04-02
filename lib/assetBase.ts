/**
 * Prefix root-relative public URLs when the app uses `basePath` (e.g. GitHub Pages project sites).
 * Mirrors `NEXT_PUBLIC_BASE_PATH` from next.config (same value as `basePath`).
 */
export function withAssetBase(path: string): string {
  if (!path || path.startsWith('//')) return path;
  if (/^https?:\/\//i.test(path)) return path;
  if (!path.startsWith('/')) return path;
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
  return base ? `${base}${path}` : path;
}
