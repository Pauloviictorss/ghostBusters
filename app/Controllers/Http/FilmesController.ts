import Filme from "App/Models/Filme"
import FilmeValidator from "App/Validators/FilmeValidator"

export default class FilmesController {
    index({request}){
        const {nome, avaliacao} = request.all()
        const filme = Filme.query()
                           .select(['id', 'nome', 'preco', 'avaliacao', 'dataLancamento', 'promoId', 'produtoraId'])
                           .preload('categorias')
                           .preload('artistas')
                           .preload('promocao')
                           .preload('produtora')
                           .preload('alugado')

        if(nome){
            filme.where('nome', nome)
        } else if(avaliacao){
            filme.where('avaliacao', avaliacao)
        }

        return filme
    }
    
    async store({request}){
        const dados = await request.validate(FilmeValidator)
        return Filme.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Filme.find(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const filme = await Filme.findOrFail(id)
        return filme.delete()
    }

    async update({request}){
        const id = request.param('id')
        const filme = await Filme.findOrFail(id)
        const dados = request.only(['nome', 'preco', 'avaliacao', 'dataLancamento', 'promoId', 'produtoraId'])
        filme.merge(dados).save()
        return dados
    }
}