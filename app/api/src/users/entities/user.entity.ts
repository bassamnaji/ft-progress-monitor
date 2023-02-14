import { Column, Entity, PrimaryColumn } from 'typeorm'

export enum Role {
    student = 'Student',
    staff = 'Bocal',
    admin = 'Admin'
}

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

    @Column({ type: 'enum', enum: Role })
    role: Role
}
