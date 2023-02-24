import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod
} from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { FtStrategy } from './strategy/ft.strategy'
import { AuthRepository } from './repository/auth.repository'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategy/jwt.strategy'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ValidationMiddleware } from './middleware/validation.middleware'
import { UsersService } from 'src/users/users.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UsersModule } from 'src/users/users.module'
import { ProjectModule } from 'src/project/project.module'

@Module({
    imports: [
        PassportModule,

        ConfigModule,

        UsersModule,

        ProjectModule,

        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: configService.getOrThrow('JWT_EXPIRES_IN')
                }
            })
        })
    ],
    controllers: [AuthController],
    providers: [
        AuthService,

        FtStrategy,

        JwtStrategy,

        AuthRepository,

        UsersService,

        CreateUserDto
    ]
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(ValidationMiddleware)
            .forRoutes({ path: '/auth', method: RequestMethod.POST })
    }
}
