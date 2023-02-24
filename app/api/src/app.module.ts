import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService, ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ProjectModule } from './project/project.module'

export const typeOrmConfig = async (config: ConfigService) => {
    const options: TypeOrmModuleOptions = {
        type: 'postgres',
        host: config.getOrThrow('POSTGRES_HOST'),
        port: +config.getOrThrow('POSTGRES_PORT'),
        database: config.getOrThrow('POSTGRES_DB'),
        username: config.getOrThrow('POSTGRES_USER'),
        password: config.getOrThrow('POSTGRES_PASSWORD'),
        synchronize: config.getOrThrow('NODE_ENV') !== 'production',
        autoLoadEntities: true
    }

    return options
}

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),

        AuthModule,

        UsersModule,

        ProjectModule,

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: typeOrmConfig,
            inject: [ConfigService]
        })
    ]
})
export class AppModule {}
