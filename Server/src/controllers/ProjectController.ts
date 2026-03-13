import { Request, Response } from 'express';
import { ProjectService } from '../services/ProjectService';
import { ProjectFormSchema, ProjectFormDTO } from '../dtos/ProjectForm.dto';

export class ProjectController {
    private projectService: ProjectService;

    constructor() {
        this.projectService = new ProjectService();
    }

    submit = async (req: Request, res: Response): Promise<void> => {
        try {
            // 1. Validate Input
            const validData: ProjectFormDTO = ProjectFormSchema.parse(req.body);

            // 2. Process
            const result = await this.projectService.submitProjectRequest(validData);

            // 3. Respond
            res.status(201).json({
                ok: true,
                message: 'Project request submitted successfully',
                data: result,
            });
        } catch (error: any) {
            if (error.name === 'ZodError') {
                res.status(400).json({
                    ok: false,
                    message: 'Validation failed',
                    data: error.errors,
                });
            } else {
                console.error('Submit error:', error);
                res.status(500).json({
                    ok: false,
                    message: 'Internal server error',
                    error: error.message,
                    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
                    data: null,
                });
            }
        }
    };
}
