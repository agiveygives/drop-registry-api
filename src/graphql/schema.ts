import { gql } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { DateTimeTypeDefinition, DateTimeResolver } from 'graphql-scalars';

import types from 'graphql/types';
import resolvers from 'graphql/resolvers'

// Define base Query/Mutation types to be extended
const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const scalarResolvers = {
  DateTime: DateTimeResolver,
};

const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    DateTimeTypeDefinition,
    ...types,
  ],
  resolvers: [
    scalarResolvers,
    ...resolvers,
  ]
});

export default schema;
