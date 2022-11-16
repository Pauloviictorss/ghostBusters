import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cargos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 20).notNullable()
      table.string('salario')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
