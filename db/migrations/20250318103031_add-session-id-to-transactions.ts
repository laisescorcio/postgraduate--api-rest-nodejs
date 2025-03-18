import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // to change or create new fields
  await knex.schema.alterTable('transactions', (table) => {
    table
      .uuid('session_id')
      .after('id') // insert session_id field after id field -- only some data base suport this fuction
      .index() // to communicate that session_id will be use often on 'where' search
  })
}

export async function down(knex: Knex): Promise<void> {
  // to remove the session_id field
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
