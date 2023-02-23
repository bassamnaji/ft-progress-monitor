import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Me } from 'src/auth/interface/intra.interface'
import { User } from 'src/users/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateProjectDto } from './dto/create-project.dto'
import { Project } from './entities/project.entity'
import { ProjectInfoResponseDto } from './dto/project-info.dto'
import { UsersService } from 'src/users/users.service'
import { all } from 'axios'

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
        private createProjectDto: CreateProjectDto,
        private readonly userService: UsersService
    ) {}

    async saveProjects(
        intraUser: Me,
        createdUser: User
    ): Promise<ProjectInfoResponseDto[]> {
        if (
            intraUser.projects_users === undefined ||
            intraUser.projects_users.length == 0
        ) {
            return null
        }
        let projects: ProjectInfoResponseDto[]
        for (let project_index of intraUser.projects_users) {
            const project = new Project()

            project.project = project_index.project.name
            project.status = project_index.status
            project.marked_at = project_index.marked_at
            project.validated = project_index['validated?']
            project.user = createdUser

            await this.projectRepository.save(project)
            projects.push(new ProjectInfoResponseDto(project))
        }
        return projects
    }

    async getProjects(): Promise<ProjectInfoResponseDto[]> {
        const projects = await this.projectRepository.find({
            relations: ['user']
        })
        return projects.map((projects) => new ProjectInfoResponseDto(projects))
    }

    // async findAll(project: string) {
    //     return await this.projectRepository.findBy({ project })
    // }

    // async findOne(projectName: string, userId: number) {
    //     const user = await this.userService.findOne(userId)

    //     return await this.projectRepository.findOneBy({
    //         project: projectName,
    //         user: user
    //     })
    // }
}
