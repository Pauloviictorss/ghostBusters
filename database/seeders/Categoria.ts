import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Categoria from 'App/Models/Categoria'



export default class extends BaseSeeder {
  public async run () {
    await Categoria.createMany([
      {nome: 'Ação'},
    ])
  }
}
