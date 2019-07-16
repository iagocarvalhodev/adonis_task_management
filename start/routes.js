'use strict'

const Route = use('Route')

// Rotas Usuarios
Route.post('users', 'UserController.store')

// Autenticação
Route.post('session', 'SessionController.store')
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')
