module.exports = {
  scope: 'heinz',
  name: 'cartRepo',
  dependencies: ['Repo'],
  factory: (Repo) => {
    'use strict'

    const repo = new Repo()

    const get = (callback) => {
      repo.get({ path: `/checkout` }, callback)
    }

    return { get }
  },
}