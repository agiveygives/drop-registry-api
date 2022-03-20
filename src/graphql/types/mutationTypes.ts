import { gql } from "apollo-server-core";

const typeDefs = gql`
  extend type Mutation {
    createAccount(
      firstName: String!
      lastName: String!
      dateOfBirth: String!
      username: String!
      email: String!
      password: String!
    ): User
  }
`;

export default typeDefs;
