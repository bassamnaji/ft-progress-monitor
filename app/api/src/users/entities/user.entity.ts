import { Project } from 'src/project/entities/project.entity'
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Role } from '../roles/roles.decorator'

@Entity()
export class User {
    @PrimaryColumn({ unique: true })
    id: number

    @PrimaryColumn({ unique: true, length: 16 })
    login: string

    @Column({ length: 56 })
    displayname: string

    @Column()
    kickOff?: Date

    @Column()
    circle?: number

    @Column()
    isStaff: boolean

    @Column({ type: 'enum', enum: Role })
    role: Role

    @Column({ length: 56 })
    lastProject?: string | null

    @Column()
    lastSubmitted?: Date

    @Column()
    currentPace?: number

    @Column()
    paceSelected?: number

    @Column()
    isFrozen?: boolean

    @Column()
    freezeRemain?: number

    @Column({ default: false })
    atRisk?: boolean

    @Column()
    blackHole?: number

    @OneToMany(() => Project, (project) => project.user)
    projects?: Project
}
