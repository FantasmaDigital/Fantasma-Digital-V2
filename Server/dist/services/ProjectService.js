"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const ProjectRepository_1 = require("../repositories/ProjectRepository");
const EmailService_1 = require("./EmailService");
class ProjectService {
    constructor() {
        this.projectRepo = new ProjectRepository_1.ProjectRepository();
        this.emailService = new EmailService_1.EmailService();
    }
    submitProjectRequest(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // 1. Save to Database
            const id = yield this.projectRepo.create(data);
            // 2. Send Email Notification (Async, don't block response if email fails, or block if critical)
            try {
                yield this.emailService.sendProjectConfirmation(data);
            }
            catch (error) {
                console.error('Failed to send email notification:', error);
                // Decide if we want to fail the whole request or just log the error.
                // For now, logging it implies the project is saved but notification failed.
            }
            return { id, message: 'Project request submitted successfully' };
        });
    }
}
exports.ProjectService = ProjectService;
