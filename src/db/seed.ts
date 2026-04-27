import { db } from "@/db/index";
import {
  todosTable,
  movieTable,
  showTable,
  albumTable,
  eventTable,
  placesTable,
  bookTable,
  movieTodoTable,
  showTodoTable,
  albumTodoTable,
  eventTodoTable,
  bookTodoTable,
} from "@/db/schema";

async function main() {
  console.log("Seeding database...");

  // Clear existing data in reverse dependency order
  await db.delete(movieTodoTable);
  await db.delete(showTodoTable);
  await db.delete(albumTodoTable);
  await db.delete(eventTodoTable);
  await db.delete(bookTodoTable);
  await db.delete(todosTable);
  await db.delete(movieTable);
  await db.delete(showTable);
  await db.delete(albumTable);
  await db.delete(eventTable);
  await db.delete(placesTable);
  await db.delete(bookTable);

  // Seed todos
  const todos = await db
    .insert(todosTable)
    .values([
      {
        title: "Watch Dune: Part Two",
        description: "Finally sit down and watch the sequel",
        completed: false,
        dueDate: "2026-05-01 00:00:00",
        priority: "high",
        position: 1,
      },
      {
        title: "Read The Name of the Wind",
        description: "First book in the Kingkiller Chronicle series",
        completed: false,
        dueDate: "2026-06-15 00:00:00",
        priority: "medium",
        position: 2,
      },
      {
        title: "Listen to Beyoncé's Cowboy Carter",
        description: "Full album listen-through with no distractions",
        completed: true,
        completedAt: "2026-04-10 14:30:00",
        priority: "low",
        position: 3,
      },
      {
        title: "Attend Taylor Swift Eras Tour",
        description: "Get tickets and plan travel",
        completed: false,
        dueDate: "2026-08-20 19:00:00",
        priority: "high",
        position: 4,
      },
      {
        title: "Catch up on Shogun",
        description: "Watch the FX limited series from start to finish",
        completed: false,
        priority: "medium",
        position: 5,
      },
      {
        title: "Finish The Pragmatic Programmer",
        description: "Finish reading and take notes",
        completed: false,
        dueDate: "2026-05-30 00:00:00",
        priority: "medium",
        position: 6,
      },
    ])
    .returning();

  // Seed movies
  const movies = await db
    .insert(movieTable)
    .values([
      {
        title: "Dune: Part Two",
        description:
          "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
        duration: 166,
        actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        director: "Denis Villeneuve",
      },
      {
        title: "Oppenheimer",
        description:
          "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        duration: 180,
        actors: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        director: "Christopher Nolan",
      },
      {
        title: "Past Lives",
        description:
          "Two childhood friends separated by migration reconnect decades later, each carrying the weight of what might have been.",
        duration: 106,
        actors: ["Greta Lee", "Teo Yoo", "John Magaro"],
        director: "Celine Song",
      },
      {
        title: "Poor Things",
        description:
          "The incredible tale of Bella Baxter, a young woman brought back to life by an eccentric scientist.",
        duration: 141,
        actors: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"],
        director: "Yorgos Lanthimos",
      },
      {
        title: "The Holdovers",
        description:
          "A curmudgeonly instructor at a New England prep school is forced to remain on campus over the holidays.",
        duration: 133,
        actors: ["Paul Giamatti", "Da'Vine Joy Randolph", "Dominic Sessa"],
        director: "Alexander Payne",
      },
    ])
    .returning();

  // Seed shows
  const shows = await db
    .insert(showTable)
    .values([
      {
        title: "Shogun",
        description:
          "A powerful Japanese warlord allies with a shipwrecked English navigator to seize control of feudal Japan.",
        actors: "Hiroyuki Sanada, Cosmo Jarvis, Anna Sawai",
        genre: "Historical Drama",
      },
      {
        title: "The Bear",
        description:
          "A young chef from the fine dining world returns home to run his family's sandwich shop in Chicago.",
        actors: "Jeremy Allen White, Ayo Edebiri, Ebon Moss-Bachrach",
        genre: "Drama",
      },
      {
        title: "Severance",
        description:
          "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.",
        actors: "Adam Scott, Britt Lower, Patricia Arquette",
        genre: "Sci-Fi Thriller",
      },
      {
        title: "Succession",
        description:
          "The Roy family controls one of the biggest media and entertainment conglomerates in the world.",
        actors: "Brian Cox, Jeremy Strong, Sarah Snook",
        genre: "Drama",
      },
      {
        title: "House of the Dragon",
        description:
          "The story of House Targaryen set 200 years before the events of Game of Thrones.",
        actors: "Paddy Considine, Matt Smith, Olivia Cooke",
        genre: "Fantasy",
      },
    ])
    .returning();

  // Seed albums
  const albums = await db
    .insert(albumTable)
    .values([
      {
        title: "Cowboy Carter",
        description:
          "Beyoncé's genre-blending country-influenced album released in 2024.",
        artist: "Beyoncé",
        genre: "Country/R&B",
      },
      {
        title: "The Tortured Poets Department",
        description: "Taylor Swift's 11th studio album released in April 2024.",
        artist: "Taylor Swift",
        genre: "Indie Pop",
      },
      {
        title: "GNX",
        description: "Kendrick Lamar's surprise album released in November 2024.",
        artist: "Kendrick Lamar",
        genre: "Hip-Hop",
      },
      {
        title: "Short n' Sweet",
        description: "Sabrina Carpenter's third studio album released in 2024.",
        artist: "Sabrina Carpenter",
        genre: "Pop",
      },
      {
        title: "Manning Fireworks",
        description: "MJ Lenderman's breakthrough indie rock album from 2024.",
        artist: "MJ Lenderman",
        genre: "Indie Rock",
      },
    ])
    .returning();

  // Seed events
  const events = await db
    .insert(eventTable)
    .values([
      {
        name: "Taylor Swift Eras Tour",
        description:
          "A concert tour by Taylor Swift celebrating her musical eras.",
        date: "2026-08-20",
        duration: 210,
        location: "SoFi Stadium, Los Angeles, CA",
      },
      {
        name: "Coachella Valley Music and Arts Festival",
        description:
          "Annual music and arts festival held in Indio, California.",
        date: "2026-04-10",
        duration: 4320,
        location: "Empire Polo Club, Indio, CA",
      },
      {
        name: "Sundance Film Festival",
        description:
          "The largest independent film festival in the United States.",
        date: "2026-01-22",
        duration: 11520,
        location: "Park City, Utah",
      },
      {
        name: "SXSW 2026",
        description:
          "Annual conglomerate of film, interactive media, and music festivals in Austin, Texas.",
        date: "2026-03-13",
        duration: 14400,
        location: "Austin, Texas",
      },
      {
        name: "New Year's Eve Fireworks",
        description: "Local fireworks and celebration to ring in the new year.",
        date: "2026-12-31",
        duration: 60,
        location: "Downtown Nashville, TN",
      },
    ])
    .returning();

  // Seed places
  const places = await db
    .insert(placesTable)
    .values([
      {
        name: "The Louvre",
        description: "The world's largest art museum and a historic monument in Paris.",
        location: "Rue de Rivoli, 75001 Paris, France",
      },
      {
        name: "Yellowstone National Park",
        description: "America's first national park, famous for geysers and wildlife.",
        location: "Wyoming, Montana, and Idaho, USA",
      },
      {
        name: "Tokyo, Japan",
        description: "Japan's capital city blending ultramodern and traditional culture.",
        location: "Honshu Island, Japan",
      },
      {
        name: "Machu Picchu",
        description: "15th-century Inca citadel set high in the Andes Mountains of Peru.",
        location: "Cusco Region, Peru",
      },
      {
        name: "Amalfi Coast",
        description: "Stunning stretch of coastline on the southern edge of Italy's Sorrentine Peninsula.",
        location: "Province of Salerno, Campania, Italy",
      },
    ])
    .returning();

  // Seed books
  const books = await db
    .insert(bookTable)
    .values([
      {
        title: "The Name of the Wind",
        description:
          "The riveting first-person narrative of Kvothe, a legendary wizard, as told in his own words.",
        author: "Patrick Rothfuss",
        isbn: "978-0756404741",
        numberOfPages: 662,
      },
      {
        title: "The Pragmatic Programmer",
        description:
          "A guide to software development best practices and career development for programmers.",
        author: "David Thomas & Andrew Hunt",
        isbn: "978-0135957059",
        numberOfPages: 352,
      },
      {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        description:
          "A novel about two friends who build a series of beloved video games over the course of their lives.",
        author: "Gabrielle Zevin",
        isbn: "978-0593321201",
        numberOfPages: 416,
      },
      {
        title: "Fourth Wing",
        description:
          "A fantasy novel set in a war college where students ride dragons into battle.",
        author: "Rebecca Yarros",
        isbn: "978-1649374042",
        numberOfPages: 517,
      },
      {
        title: "Demon Copperhead",
        description:
          "Barbara Kingsolver's Pulitzer Prize-winning retelling of David Copperfield set in Appalachia.",
        author: "Barbara Kingsolver",
        isbn: "978-0063251922",
        numberOfPages: 560,
      },
    ])
    .returning();

  // Seed join tables
  await db.insert(movieTodoTable).values([
    { todoId: todos[0].id, movieId: movies[0].id },
    { todoId: todos[0].id, movieId: movies[1].id },
    { todoId: todos[2].id, movieId: movies[2].id },
    { todoId: todos[3].id, movieId: movies[3].id },
    { todoId: todos[4].id, movieId: movies[4].id },
  ]);

  await db.insert(showTodoTable).values([
    { todoId: todos[4].id, showId: shows[0].id },
    { todoId: todos[0].id, showId: shows[1].id },
    { todoId: todos[1].id, showId: shows[2].id },
    { todoId: todos[3].id, showId: shows[3].id },
    { todoId: todos[5].id, showId: shows[4].id },
  ]);

  await db.insert(albumTodoTable).values([
    { todoId: todos[2].id, albumId: albums[0].id },
    { todoId: todos[3].id, albumId: albums[1].id },
    { todoId: todos[0].id, albumId: albums[2].id },
    { todoId: todos[1].id, albumId: albums[3].id },
    { todoId: todos[4].id, albumId: albums[4].id },
  ]);

  await db.insert(eventTodoTable).values([
    { todoId: todos[3].id, eventId: events[0].id },
    { todoId: todos[2].id, eventId: events[1].id },
    { todoId: todos[0].id, eventId: events[2].id },
    { todoId: todos[4].id, eventId: events[3].id },
    { todoId: todos[5].id, eventId: events[4].id },
  ]);

  await db.insert(bookTodoTable).values([
    { todoId: todos[1].id, bookId: books[0].id },
    { todoId: todos[5].id, bookId: books[1].id },
    { todoId: todos[2].id, bookId: books[2].id },
    { todoId: todos[3].id, bookId: books[3].id },
    { todoId: todos[0].id, bookId: books[4].id },
  ]);

  console.log("Seeding complete.");
  console.log(`  Todos:   ${todos.length}`);
  console.log(`  Movies:  ${movies.length}`);
  console.log(`  Shows:   ${shows.length}`);
  console.log(`  Albums:  ${albums.length}`);
  console.log(`  Events:  ${events.length}`);
  console.log(`  Places:  ${places.length}`);
  console.log(`  Books:   ${books.length}`);
  console.log("  Join table rows: 5 each (movie, show, album, event, book)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
