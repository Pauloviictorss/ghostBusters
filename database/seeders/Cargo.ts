import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cargo from 'App/Models/Cargo'

export default class extends BaseSeeder {
  public async run () {
    await Cargo.createMany([
      {nome: 'Atendente', salario: 'R$ 1200,00'},
    ])
  }
}
