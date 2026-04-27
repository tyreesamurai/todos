import { api } from "@/lib/api";

export async function GET() {
  const events = await api.events.get();

  return Response.json({ ok: true, data: events }, { status: 200 });
}

export async function POST() {}
