import { api } from "@/lib/api";
import { logger } from "@/lib/logger";

export default async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const normalized = slug.trim().replaceAll("-", " ");

  const [movie] = await api.movies.get(normalized);

  if (!movie) {
    logger.warn(`no movie found for route ${normalized}`);
    return Response.json(
      { message: `movie ${normalized.toString()} not found` },
      { status: 404 },
    );
  }

  logger.trace(`movie found: ${movie}`);

  return Response.json(movie, { status: 200 });
}
