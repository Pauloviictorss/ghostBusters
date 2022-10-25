import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Categoriafilme from 'App/Models/Categoriafilme'

export default class extends BaseSeeder {
  public async run () {
    await Categoriafilme.createMany([
      {categoriaId: 1, filmeId: 1},
    ])
  }
}
