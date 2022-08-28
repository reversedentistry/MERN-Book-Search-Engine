const { gpl } = require("apollo-server-express");

const typeDefs = gql`
    type User {
    _id: ID,
    username: String,
    email: String, 
    password: String, 
    bookCount: Int,
    savedBooks: [String]
    } 

    type Auth {
    token: ID!
    profile: Profile
  }    

  type Query {
    users: [User]
    user(_id: String): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs; 