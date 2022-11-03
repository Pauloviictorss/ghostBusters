import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoraValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.required(),
    ]),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome da produtora só pode ter {{options.maxLength }} caracteres.',
    'nome.required': 'Esse campo é obrigatório.',
  }
}
