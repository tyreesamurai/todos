import {
  boolean,
  date,
  integer,
  interval,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const priority = pgEnum("priority", ["low", "medium", "high"]);

export const todosTable = pgTable("todos", {
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

export const movieTable = pgTable("movies", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  title: text().notNull().unique(),
  description: text(),
  duration: integer(),
  actors: text().array(),
  director: text(),
});

export const showTable = pgTable("shows", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  title: text().notNull().unique(),
  description: text(),
  actors: text(),
  genre: text(),
});

export const albumTable = pgTable("music", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  title: text().notNull().unique(),
  description: text(),
  artist: text().notNull(),
  genre: text(),
});

export const eventTable = pgTable("events", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text().notNull().unique(),
  description: text(),
  date: date(),
  duration: integer(),
  location: text(),
});

export const placesTable = pgTable("places", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text().notNull().unique(),
  description: text(),
  location: text(),
});

export const bookTable = pgTable("books", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  title: text().notNull().unique(),
  description: text(),
  author: text(),
  isbn: text(),
  numberOfPages: integer("page_count"),
});

export const movieTodoTable = pgTable(
  "movie_todos",
  {
    todoId: uuid("todo_id")
      .references(() => todosTable.id)
      .notNull(),
    movieId: uuid("movie_id")
      .references(() => movieTable.id)
      .notNull(),
  },
  (table) => [primaryKey({ columns: [table.todoId, table.movieId] })],
);

export const showTodoTable = pgTable(
  "show_todos",
  {
    todoId: uuid("todo_id")
      .references(() => todosTable.id)
      .notNull(),
    showId: uuid("show_id")
      .references(() => showTable.id)
      .notNull(),
  },
  (table) => [primaryKey({ columns: [table.todoId, table.showId] })],
);

export const albumTodoTable = pgTable(
  "album_todos",
  {
    todoId: uuid("todo_id")
      .references(() => todosTable.id)
      .notNull(),
    albumId: uuid("album_id")
      .references(() => albumTable.id)
      .notNull(),
  },
  (table) => [primaryKey({ columns: [table.todoId, table.albumId] })],
);

export const eventTodoTable = pgTable(
  "event_todos",
  {
    todoId: uuid("todo_id")
      .references(() => todosTable.id)
      .notNull(),
    eventId: uuid("event_id")
      .references(() => eventTable.id)
      .notNull(),
  },
  (table) => [primaryKey({ columns: [table.todoId, table.eventId] })],
);

export const bookTodoTable = pgTable(
  "book_todos",
  {
    todoId: uuid("todo_id")
      .references(() => todosTable.id)
      .notNull(),
    bookId: uuid("book_id")
      .references(() => bookTable.id)
      .notNull(),
  },
  (table) => [primaryKey({ columns: [table.todoId, table.bookId] })],
);
