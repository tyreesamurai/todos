import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

if (!process.env.DATABASE_URL) throw Error("No database url found in env");

export const db = drizzle(process.env.DATABASE_URL);
