import {z} from 'zod'

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    DATABASE_HOST: z.string().url(),
    DATABASE_PORT: z.number(),
    DATABASE_USER: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_PASSWORD: z.string(),
    JWT_PASSWORD: z.string(),
    JWT_EXPIRES_IN: z.string()
});

export const env = envSchema.parse(process.env);