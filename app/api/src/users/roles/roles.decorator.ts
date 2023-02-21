import { SetMetadata } from '@nestjs/common'

export enum Role {
    student = 'Student',
    staff = 'Bocal'
}

export const ROLE_KEYS = 'roles'
export const Roles = (...roles: Role[]) => SetMetadata(ROLE_KEYS, roles)
