import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator'
import { Role } from '../roles/roles.decorator'

export class CreateUserDto {
    @IsNumber()
    id: number

    @IsString()
    login: string

    @IsString()
    displayname: string

    @IsDate()
    kickOff: Date

    @IsNumber()
    circle: number

    @IsBoolean()
    isStaff: boolean

    @IsEnum(Role)
    role: Role

    @IsString({ null: true })
    lastProject: string | null

    @IsNumber()
    currentPace?: number

    @IsNumber()
    paceSelected?: number

    @IsBoolean()
    isFrozen?: boolean

    @IsNumber()
    freezeRemain?: number

    @IsBoolean({ default: false })
    atRisk?: boolean

    @IsNumber()
    blackHole?: number
}
