import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db', // file name of where data base will be create
  },
})
