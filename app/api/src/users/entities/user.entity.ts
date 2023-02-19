import { Column, Entity, PrimaryColumn } from 'typeorm'

export enum Role {
    student = 'Student',
    staff = 'Bocal',
    admin = 'Admin'
}

/**
 *
 ** etof:   Esitmated Time of Finish
 *              Type Date Object
 *
 **/
@Entity()
export class User {
    @PrimaryColumn({ unique: true })
    id: number

    @PrimaryColumn({ unique: true, length: 16 })
    login: string

    @Column({ length: 56 })
    name: string

    @Column()
    kickOff: Date

    @Column()
    etof: Date

    @Column()
    circle: number

    @Column()
    isStaff: boolean

    @Column({ type: 'enum', enum: Role })
    role: Role
}
