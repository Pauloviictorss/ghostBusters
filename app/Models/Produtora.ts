import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Filme from './Filme'

export default class Produtora extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @hasMany(() => Filme)
  public filmes: HasMany<typeof Filme>
}
