'use strict'

const Route = use('Route')

// Rotas Usuarios
Route.post('users', 'UserController.store')

// Autenticação
Route.post('session', 'SessionController.store')
// recuperação de senha
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

// upload de arquivo e visualização
Route.get('files/:id', 'FileController.show')

// rotas que precisam de autenticação
Route.group(() => {
  // arquivos
  Route.post('/files', 'FileController.store')
  // projetos
  Route.resource('projects', 'ProjectController').apiOnly()
  // Tarefas
  Route.resource('tasks', 'TaskController').apiOnly()
}).middleware(['auth'])
