'use strict'

const Task = use('App/Models/Task')
class TaskController {
  async index ({ params, request, response, view }) {
    const tasks = await Task.query()
      .where('project_id', params.projects_id)
      .with('user')
      .paginate(1, 10)

    return tasks
  }

  async store ({ params, request, response, auth }) {
    const data = await request.only([
      'project_id',
      'file_id',
      'title',
      'description',
      'due_date',
      'user_id'
    ])

    const task = await Task.create({ ...data, project_id: params.projects_id })

    return task
  }

  async show ({ params, request, response, view }) {
    const task = Task.findOrFail(params.id)

    return task
  }

  async update ({ params, request, response }) {
    const task = Task.findOrFail(params.id)

    const data = await request.only([
      'project_id',
      'file_id',
      'title',
      'description',
      'due_date',
      'user_id'
    ])

    task.merge(data)

    await task.save()
    return task
  }

  async destroy ({ params, request, response }) {
    const task = Task.findOrFail(params.id)

    await task.delete()
  }
}

module.exports = TaskController
