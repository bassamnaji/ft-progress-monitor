import {
    HttpStatus,
    Injectable,
    NotFoundException,
    UnauthorizedException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'
import { Role } from './roles/roles.decorator'
import { Me } from '../auth/interface/intra.interface'
import { ProjectService } from 'src/project/project.service'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
    private readonly circle: {
        circleZero: string[]
        circleOne: string[]
        circleTwo: string[]
        circleThree: string[]
        circleFour: string[]
        circleFive: string[]
        circleSix: string[]
    }

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private readonly projectService: ProjectService,
        private createUserDto: CreateUserDto
    ) {
        this.circle = {
            circleZero: ['Libft'],
            circleOne: ['get_next_line', 'Born2beroot', 'ft_printf'],
            circleTwo: ['minitalk', 'FdF', 'so_long', 'fract-ol', 'push_swap'],
            circleThree: ['minishell', 'Philosophers'],
            circleFour: ['cub3d', 'miniRT', 'NetPractice', 'CPP Module 08'],
            circleFive: ['Inception', 'ft_irc', 'webserv', 'ft_containers'],
            circleSix: ['ft_transcendence']
        }
    }

    private weekHours(): number[] {
        let hours: number[]

        for (let i = 0; i < 7; i++) {
            hours[i] = this.getLogHours()
        }

        return hours
    }

    private getLogHours(): number {
        const num = (Math.random() * 10).toString()

        return parseInt(num)
    }

    private async getBlackHole(user: Me) {
        const day = 86400000
        const start = user.cursus_users.at(1).begin_at.getTime()
        const end = user.cursus_users.at(1).end_at.getTime()
        const result = (end - start) / day

        return result - 1
    }

    private dateLastSubmitted(intraUser: Me, projectName: string) {
        const projects = intraUser.projects_users

        let date: Date

        for (const project of projects) {
            if (project.project.name.match(projectName))
                date = project.updated_at
        }

        return date
    }

    private async checkLastProject(intraUser: Me) {
        const projects = intraUser.projects_users

        let projectFound: string

        let oldDate: Date

        for (const project of projects) {
            let newDate = project.updated_at

            if (oldDate > newDate) {
                if (project['validated?'] && project.cursus_ids.at(2) === 21) {
                    projectFound = project.project.name
                }
            }

            oldDate = project.updated_at
        }

        projectFound = projectFound ? projectFound : null

        return projectFound
    }

    private assignRole(intraUser: Me) {
        return intraUser['staff?'] ? Role.staff : Role.student
    }

    private async findCircle(lastProject: string) {
        let thisCircle = 0

        const currentCircle = this.circle

        if (!lastProject.match('libft')) {
            for (let i = 0; currentCircle[i]; i++) {
                for (const project of currentCircle[i]) {
                    if (project.match(lastProject)) {
                        return thisCircle
                    }
                }
                thisCircle++
            }
        }
        return 0
    }

    private async create(intraUser: Me, createUser: CreateUserDto) {
        const isStaff = intraUser['staff?']

        let user: User

        if (!isStaff) {
            createUser = {
                id: intraUser.id,
                login: intraUser.login,
                displayname: intraUser.displayname,
                logHours: this.weekHours(),
                kickOff: intraUser.cursus_users.at(1).begin_at,
                isStaff: isStaff,
                role: this.assignRole(intraUser),
                lastProject: await this.checkLastProject(intraUser),
                currentPace: 0,
                paceSelected: 0,
                isFrozen: false,
                freezeRemain: 3,
                atRisk: false,
                blackHole: await this.getBlackHole(intraUser)
            }

            createUser.lastSubmitted = await this.dateLastSubmitted(
                intraUser,
                createUser.lastProject
            )

            createUser.circle = await this.findCircle(createUser.lastProject)
        } else {
            createUser = {
                id: intraUser.id,
                login: intraUser.login,
                displayname: intraUser.displayname,
                isStaff: intraUser['isStaff?'],
                role: this.assignRole(intraUser)
            }
        }

        const createdUser = this.userRepository.create(createUser)

        if (!!!createdUser.isStaff) {
            await this.projectService.saveProjects(intraUser, createdUser)
        }

        user = await this.userRepository.save(createdUser)

        return user
    }

    async findOrCreate(intraUser: Me) {
        let found = await this.userRepository.findOneBy(intraUser)

        const httpStatus = found ? HttpStatus.CREATED : HttpStatus.OK

        if (!found) {
            found = await this.create(intraUser, this.createUserDto)
        }

        return { httpStatus, found }
    }

    async remove(id: number) {
        const user = await this.userRepository.findOneBy({ id })

        if (!user) {
            throw new NotFoundException()
        }
        if (!user.isStaff) {
            await this.userRepository.delete({ id })
        } else {
            throw new UnauthorizedException()
        }

        return
    }

    async findAll() {
        return await this.userRepository.findBy({ isStaff: false })
    }

    async findOne(id: number, role?: boolean) {
        const user = await this.userRepository.findOneBy({
            id
        })

        if (!user) {
            throw new NotFoundException()
        }

        return user
    }

    async update(id: number, updateUser: UpdateUserDto) {
        const user = await this.userRepository.findOneBy({ id })

        if (!user) {
            throw new NotFoundException()
        }

        this.userRepository.update(id, updateUser)

        return
    }
}
