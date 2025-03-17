import { knex as setupKnex, Knex } from 'knex'

// to export only the configurations to knexfile.ts
export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db', // file name of where data base will be create
  },
  useNullAsDefault: true, // the default value is null (require of sqlite3),
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
