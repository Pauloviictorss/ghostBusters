import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produtora from 'App/Models/Produtora'

export default class extends BaseSeeder {
  public async run () {
    await Produtora.createMany([
      {nome: 'GhostBuster'},
      ])
  }
}
