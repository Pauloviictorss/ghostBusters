import Categoria from "App/Models/Categoria"

export default class CategoriasController {
    index({request}){

        const {nome} = request.all()

        const categoria = Categoria.query()
                             .select(['id', 'nome'])
                             //.preload('album')
                             //.preload('playlistmusicas')

        if(nome){
            categoria.where('nome', nome)
        }

        return categoria
    }
    store({request}){
        const dados = request.only(['nome'])

        return Categoria.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Categoria.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const categoria = await Categoria.findOrFail(id)
        return categoria.delete()
    }
    async update({request}){
        const id = request.param('id')
        const categoria = await Categoria.findOrFail(id)

        const dados = request.only(['nome'])
        
        categoria.merge(dados).save()

        return dados
    }
}