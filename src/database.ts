import { PrismaClient } from '@prisma/client';

const Prisma = new PrismaClient({
  rejectOnNotFound: {
    findUnique: true,
  },
});

export default Prisma;
