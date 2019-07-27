'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

const TaskHook = (exports = module.exports = {})

TaskHook.sendNewTaskMail = async taskInstance => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return

  // trazer o relacionamento do usuario que esta ligado a tarefa
  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()

  const { title } = taskInstance

  await Mail.send(
    ['emails.news_task'],
    { username, title, hasAttachment: !!file },
    message => {
      message
        .to(email)
        .from('iago@iagocarvalho.com.br', 'Iago | Desenvolvimento Web')
        .subject('Nova Tarefa para você')

      if (file) {
        message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
          filename: file.name
        })
      }
    }
  )
}
