import { Module } from '@nestjs/common'
import { User } from './entities/user.entity'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { ProjectModule } from 'src/project/project.module'

@Module({
    imports: [TypeOrmModule.forFeature([User]), ProjectModule],
    controllers: [UsersController],
    providers: [UsersService, CreateUserDto],
    exports: [TypeOrmModule, UsersService]
})
export class UsersModule {}
