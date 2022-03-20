import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User {
    id: ID!
    uuid: String!
    user_details: UserDetails!
    details_history: [UserDetails]!
  }

  type UserDetails {
    first_name: String!
    last_name: String!
    date_of_birth: String!
    username: String!
    email: String!
    created_at: DateTime!
    invalid_at: DateTime
  }

  extend type Query {
    userByUuid(uuid: String!): User
  }
`;

export default typeDefs;
