import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CargoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(20),
      rules.unique({table: 'cargos', column: 'nome'}),
    ]),
    salario: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}
