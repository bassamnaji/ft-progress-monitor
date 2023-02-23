import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Payload } from '../interface/auth.interface'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>(
                'JWT_EXPIRES_IN',
                'JWT_SECRET'
            )
        })
    }

    async validate(payload: any): Promise<Payload> {
        console.log(`id: ${payload.id}`)
        console.log(`login: ${payload.login}`)
        return { id: payload.id, login: payload.login, staff: payload.isStaff }
    }
}
