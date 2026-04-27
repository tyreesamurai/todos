import { api } from "@/lib/api";

export async function GET() {
  const shows = await api.shows.get();

  return Response.json({ ok: true, data: shows }, { status: 200 });
}

export async function POST() {}
