import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator'
import { Role } from '../entities/user.entity'

export class CreateUserDto {
    @IsNumber()
    id: number

    @IsString()
    login: string

    @IsString()
    name: string

    @IsDate()
    kickOff: Date

    @IsDate()
    etof: Date

    @IsNumber()
    circle: number

    @IsBoolean()
    isStudent: boolean

    @IsEnum(Role)
    role: Role
}
