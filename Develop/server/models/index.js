const { gql } = require('apollo-server-express');
const User = require('./User');

const typeDefs = gql`
  # Define your GraphQL types here
  type Query {
    # Define your queries here
  }

  type Mutation {
    # Define your mutations here
  }
`;

const resolvers = {
};

module.exports = {
  typeDefs,
  resolvers,
  User,
};