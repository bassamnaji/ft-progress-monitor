import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator'
import { Role } from '../roles/roles.decorator'

export class CreateUserDto {
    @IsNumber()
    id: number

    @IsString()
    login: string

    @IsString()
    displayname: string

    @IsNumber()
    logHours?: number

    @IsDate()
    kickOff?: Date

    @IsNumber()
    circle?: number

    @IsBoolean()
    isStaff: boolean

    @IsEnum(Role)
    role: Role

    @IsString()
    lastProject?: string | null

    @IsDate()
    lastSubmitted?: Date

    @IsNumber()
    currentPace?: number

    @IsNumber()
    paceSelected?: number

    @IsBoolean()
    isFrozen?: boolean

    @IsNumber()
    freezeRemain?: number

    @IsBoolean()
    atRisk?: boolean

    @IsNumber()
    blackHole?: number
}
