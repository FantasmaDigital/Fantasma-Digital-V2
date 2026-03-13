import { ProjectFormDTO } from '../dtos/ProjectForm.dto';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { EmailService } from './EmailService';

export class ProjectService {
    private projectRepo: ProjectRepository;
    private emailService: EmailService;

    constructor() {
        this.projectRepo = new ProjectRepository();
        this.emailService = new EmailService();
    }

    async submitProjectRequest(data: ProjectFormDTO): Promise<{ id: number; message: string }> {
        // 1. Save to Database
        const id = await this.projectRepo.create(data);

        // 2. Send Email Notification (Async, don't block response if email fails, or block if critical)
        try {
            await this.emailService.sendProjectConfirmation(data);
        } catch (error) {
            console.error('Failed to send email notification:', error);
            // Decide if we want to fail the whole request or just log the error.
            // For now, logging it implies the project is saved but notification failed.
        }

        return { id, message: 'Project request submitted successfully' };
    }
}
