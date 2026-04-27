import { api } from "@/lib/api";
import type { Album, Book, Event, Movie, Place, Show } from "@/lib/types";

export default async function Home() {
  const albums = await api.albums.get();

  const books = await api.books.get();

  const events = await api.events.get();

  const movies = await api.movies.get();

  const places = await api.places.get();

  const shows = await api.shows.get();

  return (
    <div>
      <h1>THIS IS TODOS!!!</h1>

      <h1>Albums:</h1>

      {albums.map((album: Album) => (
        <div key={album.id}>
          <h1>{album.title}</h1>
        </div>
      ))}

      <h1>Books:</h1>

      {books.map((book: Book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
        </div>
      ))}

      <h1>Events:</h1>

      {events.map((event: Event) => (
        <div key={event.id}>
          <h1>{event.name}</h1>
        </div>
      ))}

      <h1>Movies:</h1>

      {movies.map((movie: Movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
        </div>
      ))}

      <h1>Places:</h1>

      {places.map((place: Place) => (
        <div key={place.id}>
          <h1>{place.name}</h1>
        </div>
      ))}

      <h1>Shows:</h1>

      {shows.map((show: Show) => (
        <div key={show.id}>
          <h1>{show.title}</h1>
        </div>
      ))}
    </div>
  );
}
