import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas'

import { makeExecutableSchema } from 'graphql-tools'
import path from 'path'

const allTypes = fileLoader(path.join(__dirname, '/graphql/api/**/**/*.graphql'))
const allResolvers = fileLoader(path.join(__dirname, '/graphql/api/**/**/*.ts'))

console.log(allTypes)
console.log(allResolvers)

export default makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
})
