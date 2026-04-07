import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "(landing)", "content", "260207_Chicken Coop_Final.pdf");

  try {
    const fileStat = await stat(filePath);
    const stream = createReadStream(filePath);

    return new Response(Readable.toWeb(stream) as unknown as ReadableStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(fileStat.size),
        "Content-Disposition": 'attachment; filename="Chicken Coop - Full Product Details.pdf"',
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch {
    return new Response("PDF not found", { status: 404 });
  }
}

