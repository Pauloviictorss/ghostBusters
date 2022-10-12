import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/rota1', async () => {
  return { rota: 'Rota 1' }
})

Route.resource('/clientes', 'ClientesController').apiOnly()
Route.resource('/promo', 'PromosController').apiOnly()