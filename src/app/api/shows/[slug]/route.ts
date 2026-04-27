import { api } from "@/lib/api";
import { logger } from "@/lib/logger";

export default async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const normalized = slug.trim().replaceAll("-", " ");

  const [show] = await api.shows.get(normalized);

  if (!show) {
    logger.warn(`no show found for route ${normalized}`);
    return Response.json(
      { message: `show ${normalized.toString()} not found` },
      { status: 404 },
    );
  }

  logger.trace(`show found: ${show}`);

  return Response.json(show, { status: 200 });
}
