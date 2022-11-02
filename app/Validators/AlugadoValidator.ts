import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlugadoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    retirada: schema.date(),
    entrega: schema.date(),
    tempoDias: schema.number([
      rules.required(),
      rules.range(1, 15),
    ]),
    filmeId: schema.number([
      rules.required()
    ]),
    funcionarioId: schema.number([
      rules.required(),
    ]),
    clienteId: schema.number([
      rules.required(),
    ]),
  })
  
  public messages: CustomMessages = {}
}
