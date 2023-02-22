import {
    HttpStatus,
    Injectable,
    NotFoundException,
    UnauthorizedException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { Role } from './roles/roles.decorator'
import { Me } from '../auth/interface/intra.interface'
import { ProjectService } from 'src/project/project.service'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private readonly projectService: ProjectService,
        private createUserDto: CreateUserDto
    ) {
        const exams = [
            'Exam Rank 02',
            'Exam Rank 03',
            'Exam Rank 04',
            'Exam Rank 05',
            'Exam Rank 06'
        ]
        const circleZero = ['Libft']

        const circleOne = ['get_next_line', 'Born2beroot', 'ft_printf']
        const circleTwo = [
            'minitalk',
            'FdF',
            'so_long',
            'fract-ol',
            'push_swap'
        ]
        const circleThree = ['minishell', 'Philosophers']
        const circleFour = ['cub3d', 'miniRT', 'NetPractice', 'CPP Module 08']
        const circleFive = ['Inception', 'ft_irc', 'webserv', 'ft_containers']
        const circleSix = ['ft_transcendence']
    }

    private checkLastProject(intraUser: Me) {
        const projects = intraUser.projects_users

        let oldDate

        for (const project of projects) {
            let newDate = project.updated_at

            if (oldDate > newDate) {
                if (project['validated?'] && project.cursus_ids.at(2) === 21) {
                    return project.project.name
                }
            }

            oldDate = project.updated_at
        }
    }

    private assignRole(intraUser: Me) {
        return intraUser['staff?'] ? Role.staff : Role.student
    }

    private async findCircle(intraUser: Me): Promise<number> {
        return 0
    }

    private async create(intraUser: Me, createUser: CreateUserDto) {
        const isStaff = intraUser['staff?']

        if (!isStaff) {
            createUser = {
                id: intraUser.id,
                login: intraUser.login,
                displayname: intraUser.displayname,
                kickOff: intraUser.cursus_users.at(2).begin_at,
                circle: 3,
                isStaff: intraUser['isStaff?'],
                role: this.assignRole(intraUser),
                lastProject: this.checkLastProject(intraUser),
                currentPace: 12,
                paceSelected: 12,
                isFrozen: false,
                freezeRemain: 3,
                atRisk: false
            }
        }

        const createdUser = this.userRepository.create(createUser)

        await this.projectService.saveProjects(intraUser, createdUser);

        await this.userRepository.save(createdUser)

        return createdUser
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
        } else {
            await this.userRepository.delete({ id })
        }

        return
    }

    async findAll() {
        return await this.userRepository.findBy({ isStaff: false })
    }

    async findOne(id: number, role: boolean) {
        const notStaff = role === !Role.staff ? true : false

        const user = await this.userRepository.findOneBy({
            id
        })

        if (!user) {
            throw new NotFoundException()
        }

        if (notStaff) {
            user.id !== id
            throw new UnauthorizedException()
        }

        return user
    }
}
