import { createReadStream } from "node:fs";
import { Readable } from "node:stream";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  WEDDING_ALBUM_COOKIE,
  getAlbumAuthSecret,
  verifySessionToken,
} from "@/lib/weddingAlbumAuth";
import { getAlbumImagePath } from "../../_lib/getAlbumImages";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  context: { params: Promise<{ filename: string }> },
) {
  const cookieStore = await cookies();
  const token = cookieStore.get(WEDDING_ALBUM_COOKIE)?.value;
  if (!(await verifySessionToken(getAlbumAuthSecret(), token))) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { filename } = await context.params;
  const decoded = decodeURIComponent(filename);
  const filePath = getAlbumImagePath(decoded);
  if (!filePath) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const stream = createReadStream(filePath);
  const web = Readable.toWeb(stream) as ReadableStream;

  return new NextResponse(web, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
      // Discourage automated reuse / indexing of raw image responses
      "X-Robots-Tag": "noindex, nofollow, noimageindex, noai, noimageai",
    },
  });
}
