import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PromoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.required(),
    ]),
    descricao: schema.string.optional([
      rules.maxLength(150),
    ]),
    dias: schema.string([
      rules.maxLength(150),
    ]),
    dataInicio: schema.date({
      format: 'dd-MM-yyyy',
    }, [
      rules.required(),
      rules.before('today')
    ]),
    dataFim: schema.date({
      format: 'dd-MM-yyyy',
    }, [
      rules.required(),
      rules.after('today')
    ]),
  })


  public messages: CustomMessages = {
    'nome.maxLength': 'O nome da promoção pode ter no máximo {{options.maxLength }} caracteres.',
    'nome.required': 'Esse campo é obrigatório.',

    'descricao.maxLength': 'A descrição pode ter no máximo {{options.maxLength }} caracteres.',
    'descricao.required': 'Esse campo é obrigatório.',

    'dias.maxLength': 'Os dias válidos podem ter no máximo {{options.maxLength }} caracteres.',

    'dataInicio.required': 'O campo data de início é obrigatório.',
    'dataInicio.before': 'A data de início deve ser menor do que o dia atual.',
    'dataInicio.format': 'O formato de data é dd-mm-yyyy.',

    'dataFim.required': 'O campo data final é obrigatório.',
    'dataFim.after': 'A data final deve ser maior do que o dia atual.',
    'dataFim.format': 'O formato de data é dd-mm-yyyy.',
  }
}
