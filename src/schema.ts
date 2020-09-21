import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
})
