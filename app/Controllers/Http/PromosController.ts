import Promo from "App/Models/Promo"
import PromoValidator from "App/Validators/PromoValidator"

export default class PromosController {
    index({request}){
        const {nome, dataInicio, dataFim} = request.all()
        const promo = Promo.query()
                             .select(['id', 'nome', 'descricao', 'dias', 'dataInicio', 'dataFim'])
                             .preload('filmes')

        if(nome){
            promo.where('nome', nome)
        } else if(dataInicio){
            promo.where('dataInicio', dataInicio)
        } else if(dataFim){
            promo.where('dataFim', dataFim)
        }

        return promo
    }
    
    async store({request}){
        const dados = await request.validate(PromoValidator)
        return Promo.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Promo.find(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const promo = await Promo.findOrFail(id)
        return promo.delete()
    }

    async update({request}){
        const id = request.param('id')
        const promo = await Promo.findOrFail(id)
        const dados = request.only(['nome', 'descricao', 'dias', 'dataInicio', 'dataFim'])
        promo.merge(dados).save()
        return dados
    }
}