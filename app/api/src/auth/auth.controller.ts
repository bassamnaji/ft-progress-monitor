import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { FtAuthGuard } from '../common/guards/ft.auth.gaurd'
import { AuthService } from './auth.service'
import { AccessTokenDto } from './dto/auth.dto'
import { Response } from 'express'
import { Me } from './interface/intra.interface'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) {}

    @UseGuards(FtAuthGuard)
    @Post()
    async GetAuth(
        @Req() req,
        @Res() res: Response,
    ): Promise<Response> {
        const user = await this.usersService.findOrCreate(req.user)

        const token: string = await this.authService.getJwt(user.found)

        return res.status(user.httpStatus).json(new AccessTokenDto(token))
    }
}
