import { ApolloServer } from 'apollo-server-lambda';

import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const options: any = {
  cors: {
    origin: '*',
    credentials: false,
  },
  endpointURL: '/graphql',
}

export const graphqlHandler = server.createHandler(options);
