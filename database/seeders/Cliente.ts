import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'



export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {cpf: '05874286257', nome: 'Paulo', telefone: '61 9 9874 5842', sexo: 'M'},
    ])
  }
}
