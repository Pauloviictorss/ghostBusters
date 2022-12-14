import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.store')//.middleware('auth')
Route.post('/login', 'UsersController.login')

Route.group(() => {
  Route.resource('/cliente', 'ClientesController').apiOnly()
  Route.resource('/promo', 'PromosController').apiOnly()
  Route.resource('/cargo', 'CargosController').apiOnly()
  Route.resource('/funcionario', 'FuncionariosController').apiOnly()
  Route.resource('/categoria', 'CategoriasController').apiOnly()
  Route.resource('/produtoras', 'ProdutorasController').apiOnly()
  Route.resource('/artistas', 'ArtistasController').apiOnly()
  Route.resource('/alugado', 'AlugadosController').apiOnly()
  Route.resource('/filme', 'FilmesController').apiOnly()
  Route.resource('/categoriafilme', 'CategoriafilmesController').apiOnly()
  Route.resource('/filmeartista', 'FilmeartistasController').apiOnly()
}).middleware('auth')