export default `
  type Query {
    getHello: String
    getUser(userId: Int!): User!
  }
`