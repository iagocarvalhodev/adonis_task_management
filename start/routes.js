'use strict'

const Route = use('Route')

// Rotas Usuarios
Route.post('users', 'UserController.store')

// Autenticação
Route.post('session', 'SessionController.store')
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

// upload de arquivo e visualização
Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')
  Route.resource('projects', 'ProjectController').apiOnly()
}).middleware(['auth'])
