import 'dotenv/config'
import { z } from 'zod'

// process.env
// z = schema on zod

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

export const _env = envSchema.safeParse(process.env) // validation but dont trigger an erro in case failed

if (_env.success === false) {
  console.error('warning! Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environemnt variables')
}

export const env = _env.data
