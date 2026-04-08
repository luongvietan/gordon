import fs from "node:fs";
import path from "node:path";

/** Served as static files under `public/wedding-album/media` (not via a Route Handler) so Vercel serverless bundles stay under size limits. */
const ALBUM_DIR = path.join(process.cwd(), "public", "wedding-album", "media");

function orderAlbumFiles(files: string[]): string[] {
  const jpg = files.filter((f) => /\.jpe?g$/i.test(f));
  const cover = jpg.find(
    (f) =>
      f.startsWith("@") ||
      /bìa/i.test(f) ||
      /30x40/i.test(f) ||
      /30X40/i.test(f),
  );
  const to = jpg.filter((f) => /^TO_\d+\.jpe?g$/i.test(f));
  to.sort((a, b) => {
    const na = parseInt(a.match(/TO_(\d+)/i)?.[1] ?? "0", 10);
    const nb = parseInt(b.match(/TO_(\d+)/i)?.[1] ?? "0", 10);
    return na - nb;
  });
  const used = new Set<string>([...(cover ? [cover] : []), ...to]);
  const rest = jpg.filter((f) => !used.has(f));
  const out: string[] = [];
  if (cover) out.push(cover);
  out.push(...to);
  out.push(...rest);
  return out;
}

export function getAlbumImageFilenames(): string[] {
  if (!fs.existsSync(ALBUM_DIR)) {
    return [];
  }
  const files = fs.readdirSync(ALBUM_DIR);
  return orderAlbumFiles(files);
}

export function albumImageSrcPath(filename: string): string {
  return `/wedding-album/media/${encodeURIComponent(filename)}`;
}
