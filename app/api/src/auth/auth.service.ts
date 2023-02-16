// import { UserGetDto } from '../module/user/dto/user.dto';
import { Injectable, HttpStatus } from '@nestjs/common';
import { IntraAccessToken, Me } from './interface/intra.interface';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';

@Injectable({})
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private authrepository: AuthRepository,
  ) {}

  async createOrFind(intraUser): Promise<{ httpStatus: HttpStatus; user }> {
    const myuser = {
      id: 1,
      login: 'bnaji',
    }
    if (!myuser) {
        return {
            httpStatus: HttpStatus.CREATED,
            user: myuser,
        }
    }
    return { httpStatus: HttpStatus.OK, user: myuser }
}

  async validateUserWithIntra(code: string): Promise<Me> {
    const intraToken: IntraAccessToken =
      await this.authrepository.getIntraAccessToken(code);
    return await this.authrepository.getUserIntraProfile(intraToken);
  }

  async getJwt(user): Promise<string> {
    const payload = {
      id: user.id,
      login: user.login,
    };
    return this.jwtService.sign(payload);
  }
}
