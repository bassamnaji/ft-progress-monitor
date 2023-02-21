import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { Role } from 'src/users/roles/roles.decorator'
import { UsersService } from 'src/users/users.service'
import { FtAuthGuard } from '../common/guards/ft.auth.gaurd'
import { AuthService } from './auth.service'
import { AccessTokenDto } from './dto/auth.dto'
import { Response } from 'express'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) {}

    @UseGuards(FtAuthGuard)
    @Post()
    async GetAuth(
        @Req() req: Request,
        @Res() res: Response,
        @Body() createUserDto: CreateUserDto
    ): Promise<AccessTokenDto> {
        const student = {
            id: 5182,
            login: 'hakaddou',
            displayname: 'Hadi Kaddoura',
            kickOff: '17/04/2023',
            etof: '19/08/2024',
            circle: 4,
            isStaff: false,
            role: Role.student
        }

        const staff = {
            id: 3122,
            login: 'isStaff?',
            displayname: 'isStaff?',
            kickOff: '02/03/2020',
            etof: '04/03/2020',
            circle: 6,
            isStaff: true,
            role: Role.staff
        }

        const user = await this.usersService.findOrCreate(
            student,
            createUserDto
        )

        const token: string = await this.authService.getJwt(user.found)

        return res.status(user.httpStatus).json(new AccessTokenDto(token))
    }
}
