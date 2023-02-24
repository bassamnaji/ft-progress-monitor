import {
    Controller,
    Get,
    Req,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards
} from '@nestjs/common'
import { UsersService } from './users.service'
import { JwtAuthGuard } from 'src/common/guards/jwt.guard'
import { Roles, Role } from './roles/roles.decorator'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Get('all')
    findAll() {
        return this.usersService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    fetchLoggedUser(@Req() req: Req) {
        return this.usersService.findOne(req.user.id)
    }

    // @Roles(Role.staff || Role.student)
    @UseGuards(JwtAuthGuard)
    @Get('search/:id')
    findOne(@Param('id') id: number, @Param('isStaff?') isStaff: boolean) {
        return this.usersService.findOne(id, isStaff)
    }

    // @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Delete('remove/:id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id)
    }

    // @Roles(Role.student || Role.staff)
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    update(@Body() updateDto: UpdateUserDto, @Param('id') id: number) {
        return this.usersService.update(id, updateDto)
    }

    // @Roles(Role.staff)
    // @UseGuards(JwtAuthGuard)
    @Get('all/project')
    findUsersByProject(@Body() body: Body) {
        console.log('input =', body)

        return this.usersService.findUsersByProject(body)
    }
}
