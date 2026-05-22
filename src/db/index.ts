import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { logger } from "@/lib/logger";

if (!process.env.DATABASE_URL) logger.fatal("database env variable not found");

export const db = drizzle(process.env.DATABASE_URL ?? "");
