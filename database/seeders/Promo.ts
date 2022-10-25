import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Promo from 'App/Models/Promo'

export default class extends BaseSeeder {
  public async run () {
    await Promo.createMany([
      {nome: 'Semana do Namoro', descricao: '4:24', dias: 'Segunda e Quarta', dataInicio: new Date (2022, 25, 10), dataFim: new Date (2022, 25, 11)},
    ])
  }
}
