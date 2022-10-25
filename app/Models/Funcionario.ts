import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cargo from './Cargo'
import Alugado from './Alugado'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public nome: string

  @column()
  public telefone: string

  @column()
  public sexo: string

  @column()
  public endereco: string

  @column()
  public cargoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cargo)
  public cargo: BelongsTo<typeof Cargo>

  @hasMany(() => Alugado)
  public alugados: HasMany<typeof Alugado>
}
