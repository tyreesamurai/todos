import { api } from "@/lib/api";

export async function GET() {
  const books = await api.books.get();

  return Response.json({ ok: true, data: books }, { status: 200 });
}

export async function POST() {}
