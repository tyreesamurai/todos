import { api } from "@/lib/api";
import { logger } from "@/lib/logger";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const normalized = slug.trim().replaceAll("-", " ");

  const [album] = await api.albums.get(normalized);

  if (!album) {
    logger.warn(`no album found for route ${normalized}`);
    return Response.json(
      { message: `album ${normalized.toString()} not found` },
      { status: 404 },
    );
  }

  logger.trace(`album found: ${album}`);

  return Response.json(album, { status: 200 });
}
