import Funcionario from "App/Models/Funcionario"

export default class FuncionariosController {
    index({request}){

        const {nome, cpf, cargoId} = request.all()

        const funcionario = Funcionario.query()
                             .select(['id', 'cpf', 'nome', 'telefone', 'sexo', 'endereco', 'cargoId'])
                             //.preload('album')
                             //.preload('playlistmusicas')

        if(nome){
            funcionario.where('nome', nome)
        }

        if(cpf){
            funcionario.where('cpf', cpf)
        }

        if(cargoId){
            funcionario.where('cargoId', cargoId)
        }

        return funcionario
    }
    store({request}){
        const dados = request.only(['cpf', 'nome', 'telefone', 'sexo', 'endereco', 'cargoId'])

        return Funcionario.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Funcionario.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)
        return funcionario.delete()
    }
    async update({request}){
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)

        const dados = request.only(['cpf', 'nome', 'telefone', 'sexo', 'endereco', 'cargoId'])
        
        funcionario.merge(dados).save()

        return dados
    }
}