import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
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
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    private async calculateETOF(intraUser: Me) {
        const etof = new Date()
        return etof
    }

    private async checkStaff(intraUser: Me) {
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

    private async create(intraUser, userDto: CreateUserDto) {
        const createdUser = this.userRepository.create({
            id: intraUser.id,
            login: intraUser.login,
            name: intraUser.displayname,
            kickOff: intraUser.kickOff,
            etof: intraUser.etof,
            circle: intraUser.circle,
            isStaff: intraUser.isStaff,
            role: intraUser.role
        })

        await this.userRepository.save(createdUser)

        return await this.userRepository.findOneBy({})
    }

    async findOrCreate(intraUser, createUserDto: CreateUserDto) {
        let found = await this.userRepository.findOneBy({})

        const httpStatus = found ? HttpStatus.CREATED : HttpStatus.OK

        if (!found) {
            found = await this.create(intraUser, createUserDto)
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

    async findOne(id: number, role: Role) {
        const isStaff = Role.staff ? true : false
        const user = await this.userRepository.findOneBy({
            id,
            isStaff
        })

        if (!user) {
            throw new NotFoundException()
        }

        return user
    }
}
