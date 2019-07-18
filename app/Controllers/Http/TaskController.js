'use strict'

const Task = use('App/Models/Task')
class TaskController {
  async index ({ request, response, view }) {
    const tasks = await Task.query()
      .with('user', 'file', 'project')
      .fetch()

    return tasks
  }

  async store ({ request, response, auth }) {
    const data = await request.only([
      'project_id',
      'file_id',
      'title',
      'description',
      'due_date'
    ])

    const task = await Task.create({ ...data, user_id: auth.user.id })

    return task
  }

  async show ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = TaskController
