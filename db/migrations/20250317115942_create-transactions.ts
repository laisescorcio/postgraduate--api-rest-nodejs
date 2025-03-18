import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary() // to generate id with uuid and to be a primary key
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable() // creation date of the data -- important in all created tables
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
