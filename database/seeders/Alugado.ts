import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Alugado from 'App/Models/Alugado'

export default class extends BaseSeeder {
  public async run () {
    await Alugado.createMany([
      {retirada: new Date (2022, 25, 10), entrega: new Date (2022, 27, 10), tempoDias: 2, filmeId: 1, clienteId: 1, funcionarioId: 1},
    ])
  }
}
