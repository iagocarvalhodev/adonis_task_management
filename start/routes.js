'use strict'

const Route = use('Route')

// Rotas Usuarios
Route.post('users', 'UserController.store').validator('User')

// Autenticação
Route.post('session', 'SessionController.store').validator('Session')
// recuperação de senha
Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

// upload de arquivo e visualização
Route.get('files/:id', 'FileController.show')

// rotas que precisam de autenticação
Route.group(() => {
  // arquivos
  Route.post('/files', 'FileController.store')
  // projetos
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))
  // Tarefas
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['tasks.store'], ['Task']]]))
}).middleware(['auth'])
