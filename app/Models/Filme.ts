import { BaseModel, BelongsTo, belongsTo, column, hasOne, HasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'
import Artista from './Artista'
import Promo from './Promo'
import Produtora from './Produtora'
import Alugado from './Alugado'

export default class Filme extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public preco: string

  @column()
  public avaliacao: number

  @column()
  public dataLancamento: Date

  @column()
  public promoId: number

  @column()
  public produtoraId: number

  @manyToMany(() => Categoria, {pivotTable: 'categoriafilmes'})
  public categorias: ManyToMany<typeof Categoria>

  @manyToMany(() => Artista, {pivotTable: 'filmeartistas'})
  public artistas: ManyToMany<typeof Artista>

  @belongsTo(() => Promo)
  public promocao: BelongsTo<typeof Promo>

  @belongsTo(() => Produtora)
  public produtora: BelongsTo<typeof Produtora>

  @hasOne(() => Alugado)
  public alugado: HasOne<typeof Alugado>
}
