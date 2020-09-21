import { ApolloServer } from 'apollo-server-lambda';

import { typeDefs, resolvers } from './graphql/schema';

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});