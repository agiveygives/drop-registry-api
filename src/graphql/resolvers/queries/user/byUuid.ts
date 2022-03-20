import { gql } from "apollo-server-core";
import { GraphqlContextType } from 'apolloServer';

const resolver = {
  Query: {
    userByUuid: (
      _parent: never,
      { uuid }: { uuid: string },
      { services }: GraphqlContextType
    ) => {
      return services.userService.getUserByUuid(uuid);
    },
  },
};

export default resolver;