import Categoria from "App/Models/Categoria"


export default class CategoriasController {
    index(){
        return Categoria.all()
    }
    store({request}){
        const dados = request.only(['categoria'])

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

        const dados = request.only(['categoria'])
        
        categoria.merge(dados).save()

        return dados
    }
}