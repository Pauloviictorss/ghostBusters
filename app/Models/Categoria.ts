import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Filme from './Filme'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Filme, {pivotTable: 'categoriafilmes'})
  public filmes: ManyToMany<typeof Filme>
}
