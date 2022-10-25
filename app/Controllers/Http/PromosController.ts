import Promo from "App/Models/Promo"

export default class PromosController {
    index({request}){

        const {nome, dataInicio, dataFim} = request.all()

        const promo = Promo.query()
                             .select(['id', 'nome', 'descricao', 'dias', 'dataInicio', 'dataFim'])
                             .preload('filmes')
                             //.preload('playlistmusicas')

        if(nome){
            promo.where('nome', nome)
        }

        if(dataInicio){
            promo.where('dataInicio', dataInicio)
        }

        if(dataFim){
            promo.where('dataFim', dataFim)
        }

        return promo
    }
    store({request}){
        const dados = request.only(['nome', 'descricao', 'dias', 'dataInicio', 'dataFim'])

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