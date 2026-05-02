"server-only";

import { eq, ilike } from "drizzle-orm";
import { db } from "@/db/index";
import * as schema from "@/db/schema";
import type { Album, Book, Event, Movie, Place, Show, Todo } from "@/lib/types";

export const api = {
  albums: {
    get: async (title: string | undefined = undefined) => {
      if (title) {
        return await db
          .select()
          .from(schema.albumTable)
          .where(ilike(schema.albumTable.title, title));
      }
      return await db.select().from(schema.albumTable);
    },
    post: async (album: Album) =>
      await db.insert(schema.albumTable).values(album).returning(),
    put: () => {},
    delete: async (id: string) =>
      await db
        .delete(schema.albumTable)
        .where(eq(schema.albumTable.id, id))
        .returning(),
  },
  books: {
    todos: {
      get: async (title: string | undefined = undefined) => {
        if (title) {
          return await db
            .select()
            .from(schema.bookTable)
            .innerJoin(
              schema.bookTodoTable,
              eq(schema.bookTable.id, schema.bookTodoTable.bookId),
            )
            .where(ilike(schema.bookTable.title, title));
        }
        return await db
          .select()
          .from(schema.bookTable)
          .innerJoin(
            schema.bookTodoTable,
            eq(schema.bookTable.id, schema.bookTodoTable.bookId),
          );
      },
    },
    get: async (title: string | undefined = undefined) => {
      if (title) {
        return await db
          .select()
          .from(schema.bookTable)
          .where(ilike(schema.bookTable.title, title));
      }
      return await db.select().from(schema.bookTable);
    },
    post: async (book: Book) =>
      await db.insert(schema.bookTable).values(book).returning(),
    put: () => {},
    delete: async (id: string) =>
      await db
        .delete(schema.bookTable)
        .where(eq(schema.bookTable.id, id))
        .returning(),
  },
  events: {
    get: async (name: string | undefined = undefined) => {
      if (name) {
        return await db
          .select()
          .from(schema.eventTable)
          .where(ilike(schema.eventTable.name, name));
      }
      return await db.select().from(schema.eventTable);
    },
    post: async (event: Event) =>
      await db.insert(schema.eventTable).values(event).returning(),
    put: () => {},
    delete: async (id: string) =>
      await db
        .delete(schema.eventTable)
        .where(eq(schema.eventTable.id, id))
        .returning(),
  },
  movies: {
    get: async (title: string | undefined = undefined) => {
      if (title) {
        return await db
          .select()
          .from(schema.movieTable)
          .where(ilike(schema.movieTable.title, title));
      }
      return await db.select().from(schema.movieTable);
    },
    post: async (movie: Movie) =>
      await db.insert(schema.movieTable).values(movie).returning(),
    put: () => {},
    delete: async (id: string) =>
      await db
        .delete(schema.movieTable)
        .where(eq(schema.movieTable.id, id))
        .returning(),
  },
  places: {
    get: async (name: string | undefined = undefined) => {
      if (name) {
        return await db
          .select()
          .from(schema.placesTable)
          .where(ilike(schema.placesTable.name, name));
      }
      return await db.select().from(schema.placesTable);
    },
    post: async (place: Place) =>
      await db.insert(schema.placesTable).values(place).returning(),
    put: () => {},
    delete: async (id: string) =>
      await db
        .delete(schema.placesTable)
        .where(eq(schema.placesTable.id, id))
        .returning(),
  },
  shows: {
    get: async (title: string | undefined = undefined) => {
      if (title) {
        return await db
          .select()
          .from(schema.showTable)
          .where(ilike(schema.showTable.title, title));
      }
      return await db.select().from(schema.showTable);
    },
    post: async (show: Show) =>
      await db.insert(schema.showTable).values(show).returning(),
    put: () => {},
    delete: async (id: string) =>
      await db
        .delete(schema.showTable)
        .where(eq(schema.showTable.id, id))
        .returning(),
  },
  todos: {
    get: async (title: string | undefined = undefined) => {
      if (title) {
        return await db
          .select()
          .from(schema.todosTable)
          .where(ilike(schema.todosTable.title, title));
      }
      return await db.select().from(schema.todosTable);
    },
  },
  post: async (todo: Todo) =>
    await db.insert(schema.todosTable).values(todo).returning(),
  put: async () => {},
  delete: async (id: string) =>
    await db
      .delete(schema.todosTable)
      .where(eq(schema.todosTable.id, id))
      .returning(),
};
