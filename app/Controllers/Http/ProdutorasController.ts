import Produtora from "App/Models/Produtora"


export default class CategoriasController {
    index(){
        return Produtora.all()
    }
    store({request}){
        const dados = request.only(['nome'])

        return Produtora.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Produtora.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const produtora = await Produtora.findOrFail(id)
        return produtora.delete()
    }
    async update({request}){
        const id = request.param('id')
        const produtora = await Produtora.findOrFail(id)

        const dados = request.only(['nome'])
        
        produtora.merge(dados).save()

        return dados
    }
}