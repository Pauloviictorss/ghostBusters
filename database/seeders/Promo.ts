import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Promo from 'App/Models/Promo'

export default class extends BaseSeeder {
  public async run () {
    await Promo.createMany([
      {nome: 'Sexta do Namoro', descricao: 'Filmes 50% OFF', dias: 'Sexta', dataInicio: new Date(2020, 10, 15), dataFim: new Date(2022, 10, 15)},
    ])
  }
}
