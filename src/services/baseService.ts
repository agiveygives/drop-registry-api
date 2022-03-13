import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

class BaseService {
  protected res: Response;
  protected req: Request;
  protected prismaClient: PrismaClient;

  constructor(
    res: Response,
    req: Request,
    prismaClient: PrismaClient,
  ) {
    this.res = res,
    this.req = req;
    this.prismaClient = prismaClient;
  }
}

export default BaseService;
