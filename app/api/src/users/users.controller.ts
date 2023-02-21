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
import { UpdateUserDto } from './dto/update-user.dto'
import { JwtAuthGuard } from 'src/common/guards/jwt.guard'
import { Roles, Role } from './roles/roles.decorator'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Get('students')
    findAll() {
        return this.usersService.findAll()
    }

    @Roles(Role.staff || Role.student)
    @UseGuards(JwtAuthGuard)
    @Get('search/:id')
    findOne(@Param('id') id: string, role: Role) {
        return this.usersService.findOne(+id, role)
    }

    @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto)
    }

    @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Delete('remove/:id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id)
    }
}
