import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from 'src/users/entities/user.entity'

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    project: string

    @Column()
    status: string

    @Column()
    marked_at: Date | null

    @Column()
    validated: boolean

    @ManyToOne(() => User, (user) => user.projects)
    user: User
}
