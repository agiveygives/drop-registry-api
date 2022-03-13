import { gql } from 'apollo-server-core';
import { GraphqlContextType } from 'apolloServer';

type argumentType = {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  username: string,
  email: string,
  password: string,
}

const typeDefs = gql`
  type User {
    id: ID!
    uuid: String!
    user_details: [UserDetails!]!
  }

  type UserDetails {
    first_name: String!
    last_name: String!
    date_of_birth: String!
    username: String!
    email: String!
  }

  type Mutation {
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

const resolvers = {
  Mutation: {
    createAccount: async (
      _parent: never,
      {
        firstName,
        lastName,
        dateOfBirth,
        username,
        email,
        password,
      }: argumentType,
      { services }: GraphqlContextType
    ) => {
      return await services.authService.createUser(
        firstName,
        lastName,
        dateOfBirth,
        username,
        email,
        password,
      )
    },
  },
};

export { typeDefs, resolvers };
