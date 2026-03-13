import { z } from 'zod';

export const ProjectFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    project_type: z.array(z.string()).min(1, "At least one project type is required"),
    description: z.string().optional(),
    budget_range: z.string().optional(),
});

export type ProjectFormDTO = z.infer<typeof ProjectFormSchema>;
