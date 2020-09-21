import helloResolver from './helloResolvers'

export default {
  Query: {
    ...helloResolver.Query
  },
  Mutation: {
    ...helloResolver.Mutation
  }
}