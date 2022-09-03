const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
    _id: ID,
    username: String,
    email: String, 
    password: String, 
    bookCount: Int,
    savedBooks: [String]
    } 

    type Book {
      bookId: String,
      authors: [String], 
      description: String,
      title: String,
      image: String,
      link: String
        
    }

    type Auth {
    token: ID,
    user: User
  }    

  type Query {
    users: [User],
    user(_id: String): User,
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  input bookInput {
    bookId: String
    authors: [String],
    description: String,
    title: String,
    image: String,
    link: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs; 