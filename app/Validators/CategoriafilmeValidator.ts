import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriafilmeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    categoriaId: schema.number([
      rules.required()
    ]),
    filmeId: schema.number([
      rules.required()
    ]),
  })

  public messages: CustomMessages = {}
}
