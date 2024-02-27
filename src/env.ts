import  "dotenv/config"
import {z} from 'zod'

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.string(),
    DATABASE_USER: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_PASSWORD: z.string(),
    JWT_PASSWORD: z.string(),
    JWT_EXPIRES_IN: z.string()
});

export const env = envSchema.parse(process.env);