import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FilmeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.required()
    ]),
    preco: schema.string([
      rules.maxLength(20),
    ]),
    avaliacao: schema.number([
      rules.required(),
      rules.range(0, 5),
    ]),
    dataLancamento: schema.date({
      format: 'dd-MM-yyyy',
    }, [
      rules.required(),
      rules.before('today')
    ]),
    promoId: schema.number([
      rules.required(),
      rules.exists({ table: 'promos', column: 'id' }),
    ]),
    produtoraId: schema.number([
      rules.required(),
      rules.exists({ table: 'produtoras', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome do filme só pode ter {{options.maxLength }} caracteres.',
    'nome.required': 'Esse campo é obrigatório.',

    'preco.maxLength': 'O preço só pode ter {{options.maxLength }} caracteres.',

    'avaliacao.range': 'A avaliação deve ser um número entre {{ options.start }} e {{ options.stop }}.',

    'dataLancamento.required': 'O campo data de lançamento é obrigatório.',
    'dataLancamento.before': 'A data de lançamento deve ser menor do que o dia atual.',
    'dataLancamento.format': 'O formato de data é dd-mm-yyyy.',

    'promoId.required': 'Informe o campo de ID da promoção!',
    'promoId.exists': 'Antes você precisa inserir um promoção.',

    'produtoraId.required': 'Informe o campo de ID da produtora!',
    'produtoraId.exists': 'Antes você precisa inserir um produtora.',
  }
}
