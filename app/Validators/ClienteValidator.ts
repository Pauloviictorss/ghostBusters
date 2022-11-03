import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.alpha({
        allow: ['space']
      }),
      rules.required(),
    ]),
    cpf: schema.string([
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
      rules.unique({ table: 'clientes', column: 'cpf' })
    ]),
    sexo: schema.enum(
      ['H', 'M'] as const
    ),
    telefone: schema.string.optional()
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome do cliente não pode ter mais do que {{ options.maxLength }} caracteres.',
    'nome.alpha': 'Esse campo aceita apenas caracteres não-numéricos. Insira um nome válido.',
    'nome.required': 'Esse campo é obrigatório.',

    'cpf.regex': 'O padrão de CPF é 999.999.999-99',
    'cpf.unique': 'Já existe um cliente cadastrado com esse CPF.',

    'sexo.enum': 'Essa informação não é válida. Insira de acordo com as opções. Opções disponíveis:',
  }
}
