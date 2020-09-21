import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type Image {
    source: String # Url scalar
    description: String
    thumbnailSource(width: Int, height: Int): String # Url scalar
  }

  enum Currency {
    EUR
    CHF
    USD
  }

  type Price {
    amount: Int
    currency: Currency
  }

  type Product @cacheControl(maxAge: 300) {
    id: ID!
    name: String
    description: String
    image: Image
    brand: String
    price: Price
  }

  type Query {
    product(id: ID!): Product
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'Hello!'
  }
};
