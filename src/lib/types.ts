import { createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { todos } from "@/db/schema";

export const todoSchema = createSelectSchema(todos);

export type Todo = z.infer<typeof todoSchema>;
