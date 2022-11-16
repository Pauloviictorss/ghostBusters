import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'promos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 50).notNullable()
      table.string('descricao', 150)
      table.string('dias', 150).notNullable()
      table.date('data_inicio').notNullable()
      table.date('data_fim').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
