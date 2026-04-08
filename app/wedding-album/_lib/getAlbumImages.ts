import manifest from "./album-manifest.json";

/** Ordered list of filenames under `public/wedding-album/media`. Use a manifest (not `fs.readdir`) so Vercel does not bundle JPEGs into the `/wedding-album` serverless function. */

export function getAlbumImageFilenames(): string[] {
  return manifest.files;
}

export function albumImageSrcPath(filename: string): string {
  return `/wedding-album/media/${encodeURIComponent(filename)}`;
}
