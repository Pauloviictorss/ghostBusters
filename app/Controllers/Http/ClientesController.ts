import Cliente from "App/Models/Cliente"


export default class ClientesController {
    index({request}){

        const {nome, cpf} = request.all()

        const cliente = Cliente.query()
                             .select(['id', 'cpf', 'nome', 'telefone', 'sexo'])
                             .preload('alugados')
                             //.preload('playlistmusicas')

        if(nome){
            cliente.where('nome', nome)
        }

        if(cpf){
            cliente.where('cpf', cpf)
        }

        return cliente
    }
    store({request}){
        const dados = request.only(['cpf', 'nome', 'telefone', 'sexo'])

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