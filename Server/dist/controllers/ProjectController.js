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
exports.ProjectController = void 0;
const ProjectService_1 = require("../services/ProjectService");
const ProjectForm_dto_1 = require("../dtos/ProjectForm.dto");
class ProjectController {
    constructor() {
        this.submit = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // 1. Validate Input
                const validData = ProjectForm_dto_1.ProjectFormSchema.parse(req.body);
                // 2. Process
                const result = yield this.projectService.submitProjectRequest(validData);
                // 3. Respond
                res.status(201).json({
                    ok: true,
                    message: 'Project request submitted successfully',
                    data: result,
                });
            }
            catch (error) {
                if (error.name === 'ZodError') {
                    res.status(400).json({
                        ok: false,
                        message: 'Validation failed',
                        data: error.errors,
                    });
                }
                else {
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
        });
        this.projectService = new ProjectService_1.ProjectService();
    }
}
exports.ProjectController = ProjectController;
