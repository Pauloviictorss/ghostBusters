import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Filmeartista from 'App/Models/Filmeartista'

export default class extends BaseSeeder {
  public async run () {
    await Filmeartista.createMany([
      {artistaId: 1, filmeId: 1},
    ])
  }
}
