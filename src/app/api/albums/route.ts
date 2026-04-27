import { api } from "@/lib/api";
import { logger } from "@/lib/logger";

export async function GET() {
  const albums = await api.albums.get();

  logger.trace(`albums found: ${albums}`);

  return Response.json({ ok: true, data: albums }, { status: 200 });
}

export async function POST(_req: Request) {}
