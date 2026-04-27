import { NextResponse } from "next/server";
import { db } from "@/db/index";
import { todosTable } from "@/db/schema";
import { AppError } from "@/lib/error";
import { todoSchema } from "@/lib/types";

export async function GET() {
  const todos = await db.select().from(todosTable);

  return NextResponse.json(todos, { status: 200 });
}

export async function POST(req: Request) {
  const parsed = todoSchema
    .partial()
    .required({ title: true })
    .safeParse(await req.json());

  if (!parsed.success) {
    const error = new AppError({
      code: "MISCONFIGURATION",
      status: 400,
      message: "the wrong todo was provided to insert",
      cause: parsed.error,
    });

    return NextResponse.json(error, { status: error.status });
  }

  const inserted = await db.insert(todosTable).values(parsed.data).returning();

  if (!inserted) {
    const error = new AppError({
      code: "MISCONFIGURATION",
      status: 500,
      message: "unable to insert valid todo",
    });

    return NextResponse.json(error, { status: error.status });
  }

  return NextResponse.json(inserted, { status: 201 });
}
