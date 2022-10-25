import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'alugados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.date('retirada').notNullable()
      table.date('entrega').notNullable()
      table.integer('tempo_dias')
      table.integer('filme_id').unsigned().references('id').inTable('filmes')
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
