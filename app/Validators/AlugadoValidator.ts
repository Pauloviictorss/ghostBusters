import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlugadoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    retirada: schema.date({
      format: 'dd-MM-yyyy',
    }, [
      rules.required(),
      rules.after('today')
    ]),
    entrega: schema.date({
      format: 'dd-MM-yyyy',
    }, [
      rules.required(),
      rules.after(1, 'days')
    ]),
    tempoDias: schema.number([
      rules.required(),
      rules.range(1, 15),
    ]),
    filmeId: schema.number([
      rules.required(),
      rules.exists({ table: 'albums', column: 'id' }),
    ]),
    funcionarioId: schema.number([
      rules.required(),
      rules.exists({ table: 'albums', column: 'id' }),
    ]),
    clienteId: schema.number([
      rules.required(),
      rules.exists({ table: 'albums', column: 'id' }),
    ]),
  })
  
  public messages: CustomMessages = {
    'entrega.required': 'Este é um campo obrigatório.',
    'entrega.after': 'Você só pode entregar esse filme após {{ options. start }} dia.',
    'entrega.format': 'A data deve ser informada no formato dd-mm-yyyy.',

    'retirada.required': 'Este é um campo obrigatório.',
    'retirada.after': 'Você não pode retirar esse filme no passado.',
    'retirada.format': 'A data deve ser informada no formato dd-mm-yyyy.',

    'filmeId.required': 'Este é um campo obrigatório.',
    'filmeId.exists': 'Não existe um filme com esse ID.',

    'funcionarioId.required': 'Este é um campo obrigatório.',
    'funcionarioId.exists': 'Não existe um funcionário com esse ID.',

    'clienteId.required': 'Este é um campo obrigatório.',
    'clienteId.exists': 'Não existe um cliente com esse ID.',

    'tempoDias.required': 'É obrigatório informar quantos dias você ficará com o filme.',
    'tempoDias.range': 'Você pode ficar com o filme por no mínimo {{ options.start }} dias e no máximo {{ options.stop }} dias.',
  }
}
