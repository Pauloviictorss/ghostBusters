import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'artistas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 50).notNullable()
      table.string('sexo').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
