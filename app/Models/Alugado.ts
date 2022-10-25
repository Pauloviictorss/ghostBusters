import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './Funcionario'
import Cliente from './Cliente'
import Filme from './Filme'

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

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @hasOne(() => Filme)
  public filme: HasOne<typeof Filme>
}
