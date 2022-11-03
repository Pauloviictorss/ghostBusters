import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FilmeartistaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    filmeId: schema.number([
      rules.required(),
      rules.exists({ table: 'filmes', column: 'id' }),
    ]),
    artistaId: schema.number([
      rules.required(),
      rules.exists({ table: 'artistas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'artistaId.required': 'Informe o campo de ID do artista!',
    'artistaId.exists': 'Antes você precisa inserir um artista.',

    'filmeId.required': 'Informe o campo de ID do filme!',
    'filmeId.exists': 'Antes você precisa inserir um filme.',
  }
}
