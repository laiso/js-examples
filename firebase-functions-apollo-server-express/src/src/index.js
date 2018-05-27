if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import { https } from "firebase-functions"
import setupGraphQLServer from "./graphql/server"

const graphQLServer = setupGraphQLServer()
export const api = https.onRequest(graphQLServer)
