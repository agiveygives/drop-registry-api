import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import BaseService from 'services/baseService';

export const AUTH_COOKIE = 'Authentication';

export type AuthJwtPayload = {
  userUuid: string,
  exp: number,
}

export class AuthService extends BaseService {
  async login(username: string, password: string) {
    const user = await this.prismaClient.user.findFirst({
      select: {
        uuid: true,
        user_details: {
          select: {
            username: true,
            password: true
          },
          where: {
            username,
            invalid_at: null
          }
        }
      },
    });

    if (!user || user.user_details.length !== 1) {
      throw new AuthenticationError('');
    } else {
      const user_details = user.user_details[0];
      const passwordMatch = await bcrypt.compare(password, user_details.password);

      if (passwordMatch) {
        const token = jwt.sign(
          { userUuid: user.uuid },
          process.env.JWT_SECRET || "TODO",
          { expiresIn: '1 day' });
        this.res.cookie(AUTH_COOKIE, token, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        });
        this.res.status(StatusCodes.CREATED);
      } else {
        throw new AuthenticationError('');
      }
    }

    return null;
  }

  async logout() {
    try {
      const token = this.req.cookies[AUTH_COOKIE];
      const decoded_token = jwt.decode(token, { json: true, complete: true });
      this.prismaClient.invalidTokens.create({
        data: {
          jwt: this.req.cookies(AUTH_COOKIE),
          expires_at: new Date((decoded_token?.payload as AuthJwtPayload).exp)
        }
      })
    } catch(e) {
      console.error(e);
    }

    this.res.clearCookie(AUTH_COOKIE);
  }

  async createUser (
    first_name: string,
    last_name: string,
    date_of_birth: string,
    username: string,
    email: string,
    password: string
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.prismaClient.user.create({
      data: {
        user_details: {
          create: {
            first_name,
            last_name,
            date_of_birth: (new Date(date_of_birth)).toISOString(),
            username,
            email,
            password: hashedPassword
          }
        }
      },
      include: {
        user_details: true
      }
    });
  }
}
