import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AluguelEquipamento from 'App/Models/AluguelEquipamento'

export default class extends BaseSeeder {
  public async run () {
    await AluguelEquipamento.createMany([
      {clienteId: 1, dataRetirada: new Date(2020, 10, 15), dataEntrega: new Date(2020, 10, 20), diasUtilizacao: 2},      
    ])
  }
}

