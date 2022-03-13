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
  type createAccount {
    firstName: String
    lastName: String
    dateOfBirth: Date
  }

  type Mutation {
    createAccount(
      firstName: String!
      lastName: String!
      dateOfBirth: Date!
      username: String!
      email: String!
      password: String!
    ): Post
  }
`;

const resolvers = {
  Mutation: {
    player: (
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
      return services.authService.createUser(
        firstName,
        lastName,
        dateOfBirth,
        username,
        email,
        password,
      );
    },
  },
};

export { typeDefs, resolvers };
