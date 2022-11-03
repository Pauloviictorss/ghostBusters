import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/rota1', async () => {
  return { rota: 'Rota 1' }
})

Route.resource('/cliente', 'ClientesController').apiOnly()
Route.resource('/promo', 'PromosController').apiOnly()
Route.resource('/cargo', 'CargosController').apiOnly()
Route.resource('/funcionario', 'FuncionariosController').apiOnly()
Route.resource('/categoria', 'CategoriasController').apiOnly()
Route.resource('/produtoras', 'ProdutorasController').apiOnly()
Route.resource('/artistas', 'ArtistasController').apiOnly()
Route.resource('/alugado', 'AlugadosController').apiOnly()
Route.resource('/filme', 'FilmesController').apiOnly()