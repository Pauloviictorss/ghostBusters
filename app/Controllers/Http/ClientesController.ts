import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"


export default class ClientesController {
    index({request}){
        const {nome, cpf} = request.all()
        const cliente = Cliente.query()
                               .select(['id', 'cpf', 'nome', 'telefone', 'sexo'])
                               .preload('alugados')

        if(nome){
            cliente.where('nome', nome)
        } else if(cpf){
            cliente.where('cpf', cpf)
        }

        return cliente
    }

    async store({request}){
        const dados = await request.validate(ClienteValidator)
        return Cliente.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Cliente.find(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)
        return cliente.delete()
    }

    async update({request}){
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)
        const dados = request.only(['cpf', 'nome', 'telefone', 'sexo'])
        cliente.merge(dados).save()
        return dados
    }
}