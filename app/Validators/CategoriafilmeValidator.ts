import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriafilmeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    categoriaId: schema.number([
      rules.required(),
      rules.exists({ table: 'categorias', column: 'id' }),
    ]),
    filmeId: schema.number([
      rules.required(),
      rules.exists({ table: 'filmes', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'categoriaId.required': 'Informe o campo de ID da categoria!',
    'categoriaId.exists': 'Antes você precisa inserir uma categoria.',

    'filmeId.required': 'Informe o campo de ID do filme!',
    'filmeId.exists': 'Antes você precisa inserir um filme.',
  }
}
