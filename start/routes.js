'use strict'

const Route = use('Route')

// Rotas Usuarios
Route.post('users', 'UserController.store')

// Autenticação
Route.post('session', 'SessionController.store')
