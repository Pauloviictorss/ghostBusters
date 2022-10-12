import Promo from "App/Models/Promo"

export default class PromosController {
    index(){
        return Promo.all()
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