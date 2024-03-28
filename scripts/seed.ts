import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from '../db/schema';

const sql = neon(process.env.DATABABE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try {
        
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database")
    }
};

main();