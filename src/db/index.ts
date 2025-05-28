import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema"; //importa o schema para tornar o db visivel para quem chama o db

export const db = drizzle(process.env.DATABASE_URL!, { schema });
