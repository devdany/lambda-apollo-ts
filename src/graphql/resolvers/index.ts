import helloResolver from './helloResolvers'
import userResolver from './userResolvers'

export default {
  Query: {
    ...helloResolver.Query,
    ...userResolver.Query
  },
  Mutation: {
    ...helloResolver.Mutation,
    ...userResolver.Mutation
  }
}