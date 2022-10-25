import Artista from "App/Models/Artista"

export default class ArtistasController {
    index({request}){

        const {nome, sexo} = request.all()

        const artista = Artista.query()
                             .select(['id', 'nome', 'sexo'])
                             //.preload('album')
                             //.preload('playlistmusicas')

        if(nome){
            artista.where('nome', nome)
        }

        if(sexo){
            artista.where('sexo', sexo)
        }

        return artista
    }
    store({request}){
        const dados = request.only(['nome', 'sexo'])

        return Artista.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Artista.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const artista = await Artista.findOrFail(id)
        return artista.delete()
    }
    async update({request}){
        const id = request.param('id')
        const artista = await Artista.findOrFail(id)

        const dados = request.only(['nome', 'sexo'])
        
        artista.merge(dados).save()

        return dados
    }
}