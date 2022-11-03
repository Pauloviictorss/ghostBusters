import Artista from "App/Models/Artista"
import ArtistaValidator from "App/Validators/ArtistaValidator"

export default class ArtistasController {
    index({request}){
        const {nome, sexo} = request.all()
        const artista = Artista.query()
                                .select(['id', 'nome', 'sexo'])
                                .preload('filmes')

        if(nome){
            artista.where('nome', nome)
        } else if(sexo){
            artista.where('sexo', sexo)
        }

        return artista
    }

    async store({request}){
        const dados = await request.validate(ArtistaValidator)
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