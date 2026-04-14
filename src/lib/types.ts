import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { todos } from "@/db/schema";
import type { AppError } from "@/lib/error";

export type Ok<T> = { ok: true; data: T };
export type Err<E = AppError> = { ok: false; error: E };

export const todoSchema = createSelectSchema(todos);
export const todosSchema = z.array(todoSchema);

export type Todo = z.infer<typeof todoSchema>;
export type Todos = z.infer<typeof todosSchema>;
