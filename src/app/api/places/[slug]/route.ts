import { api } from "@/lib/api";
import { logger } from "@/lib/logger";

export default async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const normalized = slug.trim().replaceAll("-", " ");

  const [place] = await api.places.get(normalized);

  if (!place) {
    logger.warn(`no place found for route ${normalized}`);
    return Response.json(
      { message: `place ${normalized.toString()} not found` },
      { status: 404 },
    );
  }

  logger.trace(`place found: ${place}`);

  return Response.json(place, { status: 200 });
}
