'use strict'

require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools') // Nota: igual se necesita la dependencia de graphql porque graphql-tools la necesita.
const express = require('express')
const cors = require('cors')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== 'production'

// Definiendo el esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.gql'),
  'utf-8'
)
const schema = makeExecutableSchema({ typeDefs, resolvers })

const whitelist = ['http://localhost']
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => {
  console.log(`On server in listening at http://localhost:${port}/api`)
})
