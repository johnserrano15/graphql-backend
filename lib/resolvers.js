'use strict'

const querys = require('./querys')
const mutations = require('./mutations')
const types = require('./types')

module.exports = {
  Query: querys,
  Mutation: mutations,
  ...types
}
