import Produtora from "App/Models/Produtora"
import ProdutoraValidator from "App/Validators/ProdutoraValidator"

export default class ProdutorasController {
    index({request}){
        const {nome} = request.all()
        const produtora = Produtora.query()
                                   .select(['id', 'nome'])
                                   .preload('filmes')

        if(nome){
            produtora.where('nome', nome)
        }

        return produtora
    }
    
    async store({request}){
        const dados = await request.validate(ProdutoraValidator)
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