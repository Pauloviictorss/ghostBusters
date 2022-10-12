import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Equipamento from 'App/Models/Equipamento'



export default class extends BaseSeeder {
  public async run () {
    await Equipamento.createMany([
      {nome: 'TV Samsung', preco: 'R$ 20,00'},
    ])
  }
}
