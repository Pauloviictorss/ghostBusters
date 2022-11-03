import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.unique({table: 'categorias', column: 'nome'}),
      rules.maxLength(20),
      rules.required(),
    ]),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'A categoria deve ter no máximo {{options.maxLength }} caracteres.',
    'nome.required': 'Esse campo é obrigatório.',
    'nome.unique': 'Essa categoria já foi cadastrada, insira uma nova categoria.',
  }
}
