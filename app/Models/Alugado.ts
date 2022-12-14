import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
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

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Filme)
  public filme: BelongsTo<typeof Filme>
}
