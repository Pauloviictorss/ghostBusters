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

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome do cargo deve ter, no máximo, {{options.maxLength }} caracteres.',
    'nome.required': 'Esse campo é obrigatório.',
    'nome.unique': 'Esse cargo já foi cadastrado, insira um novo cargo.',
  }
}
