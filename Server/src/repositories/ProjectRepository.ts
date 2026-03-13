import { Pool } from 'mysql2/promise';
import { ProjectFormDTO } from '../dtos/ProjectForm.dto';
import { pool } from '../config/database';

export class ProjectRepository {
    private db: Pool;

    constructor() {
        this.db = pool;
    }

    async create(data: ProjectFormDTO): Promise<number> {
        const query = `
      INSERT INTO project_forms (name, email, company, project_type, description, budget_range)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
        const values = [
            data.name,
            data.email,
            data.company || null,
            JSON.stringify(data.project_type),
            data.description,
            data.budget_range || null,
        ];

        const [result] = await this.db.execute(query, values);
        return (result as any).insertId;
    }
}
