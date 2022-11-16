import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'filmes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 50).notNullable()
      table.string('preco', 20).notNullable()
      table.float('avaliacao')
      table.date('data_lancamento')
      table.integer('promo_id').unsigned().references('id').inTable('promos')
      table.integer('produtora_id').unsigned().references('id').inTable('produtoras')
      table.integer('alugado_id').unsigned().references('id').inTable('alugados')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
