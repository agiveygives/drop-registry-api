import {
  typeDefs as createAccountTypeDefs,
  resolvers as createAccountResolver,
} from './createAccount';

export const authTypeDefs = [
  createAccountTypeDefs,
];

export const authResolvers = [
  createAccountResolver,
];
