import { PrismaClient, User } from '@prisma/client';
import { Response, Request } from 'express';
import { AuthenticationError } from 'apollo-server';
import BaseService from 'services/baseService';

class AuthBaseService extends BaseService {
  protected user?: User | null;

  constructor(
    res: Response,
    req: Request,
    prismaClient: PrismaClient,
    user?: User | null,
  ) {
    super(res, req, prismaClient);
    this.user = user;

    this.requireAuthentication(user);
  }

  requireAuthentication(user?: User | null) {
    if (!user) {
      throw new AuthenticationError(
        'User is not authenticated.'
      );
    }
  }
}

export default AuthBaseService;
