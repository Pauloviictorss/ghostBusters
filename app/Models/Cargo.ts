import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './Funcionario'

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public salario: string

  @hasMany(() => Funcionario)
  public funcionarios: HasMany<typeof Funcionario>
}
