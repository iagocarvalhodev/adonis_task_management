'use strict'

const Model = use('Model')
const Env = use('Env')

class File extends Model {
  // adicionando novo campo de retorno
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }
}

module.exports = File
