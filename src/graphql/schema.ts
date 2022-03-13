import { gql } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { authTypeDefs, authResolvers } from 'graphql/mutations/auth';

// Define base Query/Mutation types to be extended
const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    ...authTypeDefs,
  ],
  resolvers: [
    ...authResolvers,
  ]
});

export default schema;
