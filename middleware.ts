import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  WEDDING_ALBUM_COOKIE,
  getAlbumAuthSecret,
  verifySessionToken,
} from "@/lib/weddingAlbumAuth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const secret = getAlbumAuthSecret();

  if (pathname === "/wedding-album/login") {
    const token = request.cookies.get(WEDDING_ALBUM_COOKIE)?.value;
    if (await verifySessionToken(secret, token)) {
      return NextResponse.redirect(new URL("/wedding-album", request.url));
    }
    return NextResponse.next();
  }

  const token = request.cookies.get(WEDDING_ALBUM_COOKIE)?.value;
  const ok = await verifySessionToken(secret, token);
  if (ok) {
    return NextResponse.next();
  }

  const login = new URL("/wedding-album/login", request.url);
  const from =
    pathname.startsWith("/wedding-album/image/") ? "/wedding-album" : pathname;
  login.searchParams.set("from", from);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/wedding-album", "/wedding-album/:path*"],
};
