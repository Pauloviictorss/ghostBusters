import Categoriafilme from "App/Models/Categoriafilme"

export default class CategoriafilmesController {
    index({request}){

        const {categoriaId, filmeId} = request.all()

        const categoriafilme = Categoriafilme.query()
                             .select(['id', 'categoriaId', 'filmeId'])
                             //.preload('album')
                             //.preload('playlistmusicas')

        if(categoriaId){
            categoriafilme.where('categoriaId', categoriaId)
        }

        if(filmeId){
            categoriafilme.where('filmeId', filmeId)
        }

        return categoriafilme
    }
    store({request}){
        const dados = request.only(['categoriaId', 'filmeId'])

        return Categoriafilme.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Categoriafilme.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const categoriafilme = await Categoriafilme.findOrFail(id)
        return categoriafilme.delete()
    }
    async update({request}){
        const id = request.param('id')
        const categoriafilme = await Categoriafilme.findOrFail(id)

        const dados = request.only(['categoriaId', 'filmeId'])
        
        categoriafilme.merge(dados).save()

        return dados
    }
}