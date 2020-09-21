import { ApolloServer } from 'apollo-server-lambda';

import schema from './schema';

const server = new ApolloServer({
  schema
});

const options: any = {
  cors: {
    origin: '*',
    credentials: false,
  },
  endpointURL: '/graphql',
}

export const graphqlHandler = server.createHandler(options);
