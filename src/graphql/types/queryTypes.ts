import { gql } from "apollo-server-core";

const typeDefs = gql`
  extend type Query {
    userByUuid(uuid: String!): User
  }
`;

export default typeDefs;
