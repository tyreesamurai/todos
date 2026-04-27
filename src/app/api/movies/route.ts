import { api } from "@/lib/api";

export async function GET() {
  const movies = await api.movies.get();

  return Response.json({ ok: true, data: movies }, { status: 200 });
}

export async function POST() {}
