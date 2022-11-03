import Cargo from "App/Models/Cargo"
import CargoValidator from "App/Validators/CargoValidator"

export default class CargosController {
    index({request}){
        const {nome, salario} = request.all()
        const cargo = Cargo.query()
                           .select(['id', 'nome', 'salario'])
                           .preload('funcionarios')

        if(nome){
            cargo.where('nome', nome)
        } else if(salario){
            cargo.where('salario', salario)
        }

        return cargo
    }
    
    async store({request}){
        const dados = await request.validate(CargoValidator)
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