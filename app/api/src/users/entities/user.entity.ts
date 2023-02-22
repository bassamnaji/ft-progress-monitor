import { Column, Entity, PrimaryColumn } from 'typeorm'
import { Role } from '../roles/roles.decorator'

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

    @Column()
    currentPace: number

    @Column()
    paceSelected: number

    @Column()
    isFrozen: boolean

    @Column({ default: false })
    atRisk: boolean
}
