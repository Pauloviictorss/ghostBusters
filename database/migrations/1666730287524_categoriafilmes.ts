import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categoriafilmes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('filme_id').unsigned().references('id').inTable('filmes')
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
