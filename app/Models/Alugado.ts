import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Alugado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public retirada: Date

  @column()
  public entrega: Date

  @column()
  public tempoDias: number

  @column()
  public filmeId: number

  @column()
  public funcionarioId: number

  @column()
  public clienteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
