import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards
} from '@nestjs/common'
import { ProjectService } from './project.service'
import { CreateProjectDto } from './dto/create-project.dto'
import { UpdateProjectDto } from './dto/update-project.dto'
import { Roles, Role } from 'src/users/roles/roles.decorator'
import { JwtAuthGuard } from 'src/common/guards/jwt.guard'

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Roles(Role.staff)
    @UseGuards(JwtAuthGuard)
    @Get('all/:project')
    findAll(@Param('project') project: string) {
        return this.projectService.findAll(project)
    }

    @Roles(Role.staff || Role.student)
    findOne(@Param('project') project: string, @Param('id') userId: number) {
        return this.projectService.findOne(project, userId)
    }
}
