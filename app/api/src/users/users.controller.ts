import {
    Controller,
    Get,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards
} from '@nestjs/common'
import { UsersService } from './users.service'
import { JwtAuthGuard } from 'src/common/guards/jwt.guard'
import { Roles, Role } from './roles/roles.decorator'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Get('all')
    findAll() {
        return this.usersService.findAll()
    }

    @Roles(Role.staff || Role.student)
    @UseGuards(JwtAuthGuard)
    @Get('search/:id')
    findOne(@Param('id') id: string, @Param('isStaff?') isStaff: boolean) {
        return this.usersService.findOne(+id, isStaff)
    }

    @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Delete('remove/:id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id)
    }
}
