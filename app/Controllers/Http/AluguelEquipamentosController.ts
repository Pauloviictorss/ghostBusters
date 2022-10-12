import AluguelEquipamento from "App/Models/AluguelEquipamento"


export default class ClientesController {
    index(){
        return AluguelEquipamento.all()
    }
    store({request}){
        const dados = request.only(['clienteId', 'dataRetirada', 'dataEntrega', 'diasUtilizacao'])

        return AluguelEquipamento.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return AluguelEquipamento.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const aluguelequipamento = await AluguelEquipamento.findOrFail(id)
        return aluguelequipamento.delete()
    }
    async update({request}){
        const id = request.param('id')
        const aluguelequipamento = await AluguelEquipamento.findOrFail(id)

        const dados = request.only(['clienteId', 'dataRetirada', 'dataEntrega', 'diasUtilizacao'])
        
        aluguelequipamento.merge(dados).save()

        return dados
    }
}