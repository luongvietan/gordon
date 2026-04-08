import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import {
  WEDDING_ALBUM_COOKIE,
  createSessionToken,
  getAlbumAuthSecret,
} from "@/lib/weddingAlbumAuth";

export const runtime = "nodejs";

function safeEqualPassword(a: string, b: string): boolean {
  try {
    const ba = Buffer.from(a, "utf8");
    const bb = Buffer.from(b, "utf8");
    if (ba.length !== bb.length) return false;
    return timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const expected =
    process.env.WEDDING_ALBUM_PASSWORD ?? "forever";
  const password = typeof body.password === "string" ? body.password : "";

  if (!safeEqualPassword(password, expected)) {
    return NextResponse.json({ error: "Sai mật khẩu" }, { status: 401 });
  }

  const secret = getAlbumAuthSecret();
  const token = await createSessionToken(secret);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(WEDDING_ALBUM_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/wedding-album",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
