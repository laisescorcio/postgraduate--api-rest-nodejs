import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema') // searching data of sqlite_schema data base
    .select('*') // searching all data

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server Running!')
  })
