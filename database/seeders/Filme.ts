import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Filme from 'App/Models/Filme'

export default class extends BaseSeeder {
  public async run () {
    await Filme.createMany([
      {nome: 'Make it believe', preco: 'R$ 10,00', avaliacao: 9.3, dataLancamento: new Date (2018, 10, 25), promoId: 1, produtoraId: 1},
    ])
  }
}
