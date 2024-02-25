import knex from "knex";
import { env } from "../env";

const connPG = knex({
    client: 'pg',
    connection: {
        // connectionString
        host: env.DATABASE_HOST,
        port: env.DATABASE_PORT,
        user: env.DATABASE_USER,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME
    }
});

export {connPG}