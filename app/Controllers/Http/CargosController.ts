import Cargo from "App/Models/Cargo"

export default class CargosController {
    index(){
        return Cargo.all()
    }
    store({request}){
        const dados = request.only(['nome', 'salario'])

        return Cargo.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Cargo.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const cargo = await Cargo.findOrFail(id)
        return cargo.delete()
    }
    async update({request}){
        const id = request.param('id')
        const cargo = await Cargo.findOrFail(id)

        const dados = request.only(['nome', 'salario'])
        
        cargo.merge(dados).save()

        return dados
    }
}