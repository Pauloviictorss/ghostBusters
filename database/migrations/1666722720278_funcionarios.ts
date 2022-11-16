import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('cpf').notNullable()
      table.string('nome', 50).notNullable()
      table.string('telefone').notNullable()
      table.string('sexo')
      table.string('endereco', 50)
      table.integer('cargo_id').unsigned().references('id').inTable('cargos')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
