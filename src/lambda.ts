import { ApolloServer } from 'apollo-server-lambda';

import schema from './schema';

export const server = new ApolloServer({
  schema: schema,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});