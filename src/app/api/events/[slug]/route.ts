import { api } from "@/lib/api";
import { logger } from "@/lib/logger";

export default async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const normalized = slug.trim().replaceAll("-", " ");

  const [event] = await api.events.get(normalized);

  if (!event) {
    logger.warn(`no event found for route ${normalized}`);
    return Response.json(
      { message: `event ${normalized.toString()} not found` },
      { status: 404 },
    );
  }

  logger.trace(`event found: ${event}`);

  return Response.json(event, { status: 200 });
}
