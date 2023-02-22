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

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private createUserDto: CreateUserDto
    ) {}

    private async calculateETOF(intraUser: Me) {
        const etof = new Date()
        return etof
    }

    private checkStaff(intraUser: Me) {
        return intraUser['staff?'] ? Role.staff : Role.student
    }

    private async findCircle(intraUser: Me): Promise<number> {
        for (const project of intraUser.projects_users) {
            if (!project['validated?'].valueOf()) {
                return 0
            }
        }

        return 0
    }

    private async create(intraUser: Me, createUser: CreateUserDto) {
        createUser = {
            id: intraUser.id,
            login: intraUser.login,
            displayname: intraUser.displayname,
            kickOff: intraUser.cursus_users.at(1).begin_at,
            etof: new Date(),
            circle: 3,
            isStaff: intraUser['isStaff?'],
            role: this.checkStaff(intraUser),
            currentPace: 12,
            paceSelected: 12,
            isFrozen: false,
            freezeRemain: 3,
            atRisk: false
        }

        const createdUser = this.userRepository.create(createUser)

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

    async update(id: number, user: UpdateUserDto) {
        const found = await this.userRepository.findOneBy({ id })

        if (!found) {
            throw new NotFoundException()
        }

        return
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
