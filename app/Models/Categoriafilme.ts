import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Categoriafilme extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public categoriaId: number

  @column()
  public filmeId: number
}
