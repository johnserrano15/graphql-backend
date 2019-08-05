'use strict'

require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools') // Nota: igual se necesita la dependencia de graphql porque graphql-tools la necesita.
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// Definiendo el esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.gql'),
  'utf-8'
)
const schema = makeExecutableSchema({ typeDefs, resolvers})

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`On server in listening at http://localhost:${port}/api`)
})
