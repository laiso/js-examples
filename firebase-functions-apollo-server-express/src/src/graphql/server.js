import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './data/schema'
import { printSchema } from 'graphql/utilities/schemaPrinter'

const setupGraphQLServer = () => {
  const graphQLServer = express()

  graphQLServer.use(
    "/graphql",
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    cors(),
    graphqlExpress({ schema, context: {} })
  )

  graphQLServer.head('/graphql', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Method', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Content-Length');
    res.end();
  });

  graphQLServer.use(
    "/graphiql",
    graphiqlExpress({ endpointURL: "/graphql" })
  )

  graphQLServer.use("/schema", (req, res) => {
    res.set("Content-Type", "text/plain")
    res.send(printSchema(schema))
  })

  return graphQLServer
}

export default setupGraphQLServer