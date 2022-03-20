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

const resolver = {
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

export default resolver;
