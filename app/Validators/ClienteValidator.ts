import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.alpha(),
    ]),
    cpf: schema.string([
      rules.maxLength(14),
      rules.alphaNum(),
    ]),
  })

  public messages: CustomMessages = {}
}
