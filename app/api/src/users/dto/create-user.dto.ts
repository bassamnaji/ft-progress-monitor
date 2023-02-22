import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator'
import { Role } from '../roles/roles.decorator'

/**
 *
 ** etof:   Esitmated Time of Finish
 *              @IsDate() of type Date Object
 *
 **/
export class CreateUserDto {
    @IsNumber()
    id: number

    @IsString()
    login: string

    @IsString()
    displayname: string

    @IsDate()
    kickOff: Date

    @IsDate()
    etof: Date

    @IsNumber()
    circle: number

    @IsBoolean()
    isStaff: boolean

    @IsEnum(Role)
    role: Role

    @IsNumber()
    currentPace?: number

    @IsNumber()
    paceSelected?: number

    @IsBoolean()
    isFrozen?: boolean

    @IsNumber()
    freezeRemain?: number

    // @IsBoolean({ default: false })
    @IsBoolean()
    atRisk?: boolean

    @IsNumber()
    blackHole?: number
}
