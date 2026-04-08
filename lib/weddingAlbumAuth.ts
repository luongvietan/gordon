/**
 * Session cookie for /wedding-album — HMAC-SHA256 (Edge + Node compatible).
 */

export const WEDDING_ALBUM_COOKIE = "wedding_album_session";

const HMAC_MESSAGE = "wedding-album-auth:v1";

function hexToBytes(hex: string): Uint8Array {
  const len = hex.length / 2;
  const out = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

function bytesToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  const ba = hexToBytes(a);
  const bb = hexToBytes(b);
  if (ba.length !== bb.length) return false;
  let diff = 0;
  for (let i = 0; i < ba.length; i++) {
    diff |= ba[i]! ^ bb[i]!;
  }
  return diff === 0;
}

export function getAlbumAuthSecret(): string {
  const s = process.env.WEDDING_ALBUM_SECRET;
  if (s && s.length >= 16) return s;
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "WEDDING_ALBUM_SECRET is missing or short; set a strong secret in production.",
    );
  }
  return "wedding-album-dev-secret-change-with-WEDDING_ALBUM_SECRET";
}

export async function createSessionToken(secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(HMAC_MESSAGE));
  return bytesToHex(sig);
}

export async function verifySessionToken(
  secret: string,
  token: string | undefined,
): Promise<boolean> {
  if (!token || token.length !== 64) return false;
  const expected = await createSessionToken(secret);
  return timingSafeEqualHex(token, expected);
}
