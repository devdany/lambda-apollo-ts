export default `
  type Mutation {
    setHello(hello: String): String
    setUser(email: String!, password: String!, username: String!): User!
  }
`