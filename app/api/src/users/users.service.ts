import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async findAll() {
        return await this.userRepository.findBy({ isStudent: true })
    }

    async findOne(id: number) {
        const user = await this.userRepository.findOneBy({
            id,
            isStudent: true
        })

        if (!user) {
            throw new NotFoundException()
        }

        return user
    }

    async findOrCreate(id: number, userDto: CreateUserDto) {
        let user = await this.userRepository.findOneBy({ id })

        const httpStatus = user ? HttpStatus.CREATED : HttpStatus.OK

        if (!user) {
            user = await this.userRepository.save(userDto)
        }

        return { httpStatus, user }
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findOneBy({ id })

        if (!user) {
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
}
