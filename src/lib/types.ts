import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import * as schema from "@/db/schema";
import type { AppError } from "@/lib/error";

export type Ok<T> = { ok: true; data: T };
export type Err<E = AppError> = { ok: false; error: E };

export const todoSchema = createSelectSchema(schema.todosTable).partial({
  id: true,
});
export const todosSchema = z.array(todoSchema);

export const albumSchema = createSelectSchema(schema.albumTable).partial({
  id: true,
});
export const albumsSchema = z.array(albumSchema);

export const bookSchema = createSelectSchema(schema.bookTable).partial({
  id: true,
});
export const booksSchema = z.array(bookSchema);

export const eventSchema = createSelectSchema(schema.eventTable).partial({
  id: true,
});
export const eventsSchema = z.array(eventSchema);

export const movieSchema = createSelectSchema(schema.movieTable).partial({
  id: true,
});
export const moviesSchema = z.array(movieSchema);

export const placeSchema = createSelectSchema(schema.placesTable).partial({
  id: true,
});
export const placesSchema = z.array(placeSchema);

export const showSchema = createSelectSchema(schema.showTable).partial({
  id: true,
});
export const showsSchema = z.array(showSchema);

export type Todo = z.infer<typeof todoSchema>;
export type Todos = z.infer<typeof todosSchema>;

export type Album = z.infer<typeof albumSchema>;
export type Albums = z.infer<typeof albumsSchema>;

export type Book = z.infer<typeof bookSchema>;
export type Books = z.infer<typeof booksSchema>;

export type Event = z.infer<typeof eventSchema>;
export type Events = z.infer<typeof eventsSchema>;

export type Movie = z.infer<typeof movieSchema>;
export type Movies = z.infer<typeof moviesSchema>;

export type Place = z.infer<typeof placeSchema>;
export type Places = z.infer<typeof placesSchema>;

export type Show = z.infer<typeof showSchema>;
export type Shows = z.infer<typeof showsSchema>;
