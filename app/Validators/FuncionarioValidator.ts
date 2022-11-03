import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
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
      rules.unique({ table: 'funcionarios', column: 'cpf' })
    ]),
    telefone: schema.string.optional(),
    endereco: schema.string([
      rules.maxLength(50),
      rules.required(),
    ]),
    sexo: schema.enum(
      ['H', 'M'] as const
    ),
    cargoId: schema.number([
      rules.exists({ table: 'cargos', column: 'id' })
    ])
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome do funcionário só pode ter {{options.maxLength }} caracteres.',
    'nome.required': 'Esse campo é obrigatório.',

    'endereco.maxLength': 'O endereço só pode ter {{options.maxLength }} caracteres.',
    'endereco.required': 'Esse campo é obrigatório.',

    'cpf.regex': 'O padrão de CPF é 999.999.999-99',
    'cpf.unique': 'Já existe um cliente cadastrado com esse CPF.',

    'sexo.enum': 'Essa informação não é válida. Insira de acordo com as opções. Opções disponíveis:',

    'cargoId.exists': 'Antes você precisa inserir um cargo.',
  }

}
