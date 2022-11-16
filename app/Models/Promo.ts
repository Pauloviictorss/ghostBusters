import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

export default class Promo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public descricao: string

  @column()
  public dias: string
  
  @column()
  public promoId: number

  @column()
  public dataInicio: Date

  @column()
  public dataFim: Date

  @belongsTo(() => Promo)
  public filmes: BelongsTo<typeof Promo>
}
