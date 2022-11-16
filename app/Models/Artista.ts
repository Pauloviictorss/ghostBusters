import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Filme from './Filme'

export default class Artista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public sexo: string

  @manyToMany(() => Filme, {pivotTable: 'filmeartistas'})
  public filmes: ManyToMany<typeof Filme>
}
