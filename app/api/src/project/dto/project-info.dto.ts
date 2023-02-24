import { Project } from '../entities/project.entity'

export class ProjectInfoResponseDto {
    constructor(project_name: Project) {
        this.id = project_name.id
        this.project = project_name.project
        this.status = project_name.status
        this.market_at = project_name.marked_at
        this.validated = project_name.validated
    }

    id: number
    project: string
    status: string
    market_at: Date | null
    validated: boolean
}
