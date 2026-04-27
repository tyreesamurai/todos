import { api } from "@/lib/api";

export async function GET() {
  const places = await api.places.get();

  return Response.json({ ok: true, data: places }, { status: 200 });
}

export async function POST() {}
