import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { Request, Response } from 'express';
import { Server } from 'http';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import Schema from 'graphql/schema';
import Services from 'services';
import { AuthJwtPayload, AUTH_COOKIE } from 'services/auth';

export type GraphqlContextType = {
  user?: Record<string, unknown> | null,
  services: Services
};

const prisma = new PrismaClient();

export async function newApolloServer(httpServer: Server) {
  return new ApolloServer({
    schema: Schema,
    context: async ({ req, res }: { req: Request, res: Response }): Promise<GraphqlContextType> => {
      const token = req.cookies[AUTH_COOKIE] || '';
      let user = null;
      if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "TODO") as AuthJwtPayload;
        user = await prisma.user.findUnique({
          where: {
            uuid: decodedToken.userUuid
          }
        });
      }
      const services = new Services(res, req, prisma, user);
      return {
        services
      };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
}
