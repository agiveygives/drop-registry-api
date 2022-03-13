import AuthBaseService from 'services/authBaseService';

export class UserService extends AuthBaseService {
  async getUserById(id: number) {
    return await this.prismaClient.user.findUnique({
      where: {
        id
      },
    });
  }

  async getUserByUuid(uuid: string) {
    return await this.prismaClient.user.findUnique({
      where: {
        uuid
      },
    });
  }

  async getUserByEmail(email: string) {
    return await this.prismaClient.user.findFirst({
      select: {
        uuid: true,
        user_details: {
          select: {
            first_name: true,
            last_name: true,
            username: true,
            email: true,
          },
          where: {
            email,
            invalid_at: null
          }
        }
      },
    })
  }

  async getUserByUsername(username: string) {
    return await this.prismaClient.user.findFirst({
      select: {
        uuid: true,
        user_details: {
          select: {
            first_name: true,
            last_name: true,
            username: true,
            email: true,
          },
          where: {
            username,
            invalid_at: null
          }
        }
      },
    })
  }
}