import Categoriafilme from "App/Models/Categoriafilme"
import CategoriafilmeValidator from "App/Validators/CategoriafilmeValidator"

export default class CategoriafilmesController {
    index({request}){

        const {categoriaId, filmeId} = request.all()

        const categoriafilme = Categoriafilme.query()
                             .select(['id', 'categoriaId', 'filmeId'])

        if(categoriaId){
            categoriafilme.where('categoriaId', categoriaId)
        }

        if(filmeId){
            categoriafilme.where('filmeId', filmeId)
        }

        return categoriafilme
    }
    
    async store({request}){
        const dados = await request.validate(CategoriafilmeValidator)
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