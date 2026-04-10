import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const priority = pgEnum("priority", ["low", "medium", "high"]);

export const todos = pgTable("todos", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  title: text().notNull(),
  description: text(),
  completed: boolean().default(false).notNull(),
  completedAt: timestamp("completed_at", { mode: "string" }),
  dueDate: timestamp("due_date", { mode: "string" }),
  priority: priority().default("medium"),
  position: integer(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
});
