import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { checkSecretOrThrowError } from "../lib/env.util";

export const queryClientString = checkSecretOrThrowError("PG_URL");
export const queryClient = postgres(queryClientString);
export const db = drizzle(queryClient);
