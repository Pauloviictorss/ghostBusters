import Filmeartista from "App/Models/Filmeartista"

export default class FilmeartistasController {
    index({request}){

        const {filmeId, artistaId} = request.all()

        const filmeartista = Filmeartista.query()
                             .select(['id', 'filmeId', 'artistaId'])
                             //.preload('album')
                             //.preload('playlistmusicas')

        if(filmeId){
            filmeartista.where('filmeId', filmeId)
        }

        if(artistaId){
            filmeartista.where('artistaId', artistaId)
        }

        return filmeartista
    }
    store({request}){
        const dados = request.only(['filmeId', 'artistaId'])

        return Filmeartista.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Filmeartista.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const filmeartista = await Filmeartista.findOrFail(id)
        return filmeartista.delete()
    }
    async update({request}){
        const id = request.param('id')
        const filmeartista = await Filmeartista.findOrFail(id)

        const dados = request.only(['filmeId', 'artistaId'])
        
        filmeartista.merge(dados).save()

        return dados
    }
}