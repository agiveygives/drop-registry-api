import { PrismaClient, User } from "@prisma/client";
import { Response, Request } from 'express';
import { AuthService } from 'services/auth';

// import { PlayerService } from "../player/player.service";
// import { TeamService } from "../team/team.service";

class Services {
  private res: Response;
  private req: Request;
  private prismaClient: PrismaClient;
  private user?: User | null;

  private _authService: AuthService | undefined;
  // private _playerService: PlayerService | undefined;
  // private _teamService: TeamService | undefined;

  constructor(
    res: Response,
    req: Request,
    prismaClient: PrismaClient,
    user?: User | null,
  ) {
    this.res = res,
    this.req = req;
    this.prismaClient = prismaClient;
    this.user = user;
  }

  get authService() {
    if (!this._authService) {
      this._authService = new AuthService(
        this.res,
        this.req,
        this.prismaClient
      );
    }
    return this._authService;
  }

  // get playerService() {
  //   if (!this._playerService) {
  //     this._playerService = new PlayerService(
  //       this.res,
  //       this.prismaClient,
  //       this.user
  //     );
  //   }
  //   return this._playerService;
  // }

  // get teamService() {
  //   if (!this._teamService) {
  //     this._teamService = new TeamService(
  //       this.res,
  //       this.prismaClient,
  //       this.user
  //     );
  //   }
  //   return this._teamService;
  // }
}

export default Services;
