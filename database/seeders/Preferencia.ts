import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Preferencia from 'App/Models/Preferencia'

export default class extends BaseSeeder {
  public async run () {
    await Preferencia.createMany([
      {clienteId: 1, categoriaId: 1},
    ])
  }
}
