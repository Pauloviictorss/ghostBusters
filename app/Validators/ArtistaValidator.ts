import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArtistaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
    ]),
    sexo: schema.string([
      rules.maxLength(1),
      rules.minLength(1),
    ]),
  })

  public messages: CustomMessages = {}
}
