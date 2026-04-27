import { api } from "@/lib/api";
import { logger } from "@/lib/logger";

export default async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const normalized = slug.trim().replaceAll("-", " ");

  const [book] = await api.books.get(normalized);

  if (!book) {
    logger.warn(`no book found for route ${normalized}`);
    return Response.json(
      { message: `book ${normalized.toString()} not found` },
      { status: 404 },
    );
  }

  logger.trace(`book found: ${book}`);

  return Response.json(book, { status: 200 });
}
