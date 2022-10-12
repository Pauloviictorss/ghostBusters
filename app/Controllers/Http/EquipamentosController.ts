import Equipamento from "App/Models/Equipamento"


export default class ClientesController {
    index(){
        return Equipamento.all()
    }
    store({request}){
        const dados = request.only(['nome', 'preco'])

        return Equipamento.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Equipamento.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const equipamento = await Equipamento.findOrFail(id)
        return equipamento.delete()
    }
    async update({request}){
        const id = request.param('id')
        const equipamento = await Equipamento.findOrFail(id)

        const dados = request.only(['nome', 'preco'])
        
        equipamento.merge(dados).save()

        return dados
    }
}