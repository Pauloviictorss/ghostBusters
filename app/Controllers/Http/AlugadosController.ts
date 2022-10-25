import Alugado from "App/Models/Alugado"

export default class AlugadosController {
    index({request}){

        const {retirada, entrega, tempoDias} = request.all()

        const alugado = Alugado.query()
                             .select(['id', 'retirada', 'entrega', 'tempoDias'])
                             .preload('funcionario')
                             .preload('cliente')
                             .preload('filme')

        if(retirada){
            alugado.where('retirada', retirada)
        }

        if(entrega){
            alugado.where('entrega', entrega)
        }

        if(tempoDias){
            alugado.where('tempoDias', tempoDias)
        }

        return alugado
    }
    store({request}){
        const dados = request.only(['retirada', 'entrega', 'tempoDias', 'filmeId', 'funcionarioId', 'clienteId'])

        return Alugado.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Alugado.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const alugado = await Alugado.findOrFail(id)
        return alugado.delete()
    }
    async update({request}){
        const id = request.param('id')
        const alugado = await Alugado.findOrFail(id)

        const dados = request.only(['retirada', 'entrega', 'tempoDias', 'filmesId', 'funcionariosId', 'clientesId'])
        
        alugado.merge(dados).save()

        return dados
    }
}