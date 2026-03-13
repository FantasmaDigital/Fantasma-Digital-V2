"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectFormSchema = void 0;
const zod_1 = require("zod");
exports.ProjectFormSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_1.z.string().email("Invalid email address"),
    company: zod_1.z.string().optional(),
    project_type: zod_1.z.array(zod_1.z.string()).min(1, "At least one project type is required"),
    description: zod_1.z.string().optional(),
    budget_range: zod_1.z.string().optional(),
});
