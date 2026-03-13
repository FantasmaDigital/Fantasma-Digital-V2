export interface ProjectPayload {
    name: string;
    email: string;
    company: string;
    project_type: string[];
    description: string;
    budget_range: string;
}

export interface ProjectResponse {
    ok: boolean;
    message: string;
    data?: any;
}

export class ProjectService {
    private static readonly API_URL =
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://localhost:6677/api/projects/submit'
            : 'https://api.fantasmadigital.dev/api/projects/submit';

    /**
     * Submits a new project request to the backend.
     * @param payload The project data to submit.
     * @returns A promise that resolves to the API response.
     */
    static async submit(payload: ProjectPayload): Promise<ProjectResponse> {
        try {
            console.log('ProjectService: Sending request to:', this.API_URL);
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data: ProjectResponse = await response.json();

            if (!response.ok) {
                console.error('ProjectService: Server responded with error:', data);
                return {
                    ok: false,
                    message: data.message || `HTTP Error: ${response.status}`,
                    data: data.data
                };
            }

            return data;
        } catch (error: any) {
            console.error('ProjectService Error:', error);
            return {
                ok: false,
                message: error.message || 'Network error or server unreachable',
            };
        }
    }
}
