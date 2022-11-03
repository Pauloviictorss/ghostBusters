import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArtistaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.required(),
    ]),
    sexo: schema.enum(
      ['F', 'M'] as const
    ),
  })

  public messages: CustomMessages = {
  'nome.maxLength': 'O nome do cliente não pode ter mais do que {{ options.maxLength }} caracteres.',
  'nome.required': 'Esse campo é obrigatório.',
  
  'sexo.enum': 'Essa informação não é válida. Insira de acordo com as opções. Opções disponíveis:',
  }
}
