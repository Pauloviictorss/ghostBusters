import Preferencia from "App/Models/Preferencia"

export default class DisciplinasController {
    index(){
        return Preferencia.all()
    }
    store({request}){
        const dados = request.only(['clienteId', 'categoriaId'])

        return Preferencia.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Preferencia.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const preferencia = await Preferencia.findOrFail(id)
        return preferencia.delete()
    }
    async update({request}){
        const id = request.param('id')
        const preferencia = await Preferencia.findOrFail(id)

        const dados = request.only(['clienteId', 'categoriaId'])
        
        preferencia.merge(dados).save()

        return dados
    }
}