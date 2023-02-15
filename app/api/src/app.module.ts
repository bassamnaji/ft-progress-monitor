import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService, ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'

const dataSource = async (config: ConfigService) => {
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

        UsersModule,

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: dataSource,
            inject: [ConfigService]
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
