import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Categoriafilme extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public categoriaId: number

  @column()
  public filmeId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
