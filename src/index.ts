import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-lambda'
import { connect } from './sequelize'
import schema from './schema'

connect()

const server = new ApolloServer({
  schema
})

const options: any = {
  cors: {
    origin: '*',
    credentials: false,
  },
  endpointURL: '/graphql',
}

export const graphqlHandler = server.createHandler(options)
