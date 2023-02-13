import { Column, PrimaryColumn } from 'typeorm'

export enum Role {
    student = 'Student',
    staff = 'Bocal',
    admin = 'Admin'
}

export class User {
    @PrimaryColumn()
    id: number

    @Column()
    login: string

    @Column()
    name: string

    @Column()
    kickOff: Date

    @Column()
    etof: Date

    @Column()
    circle: number

    @Column()
    role: Role
}
