"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectController_1 = require("../controllers/ProjectController");
const router = (0, express_1.Router)();
const projectController = new ProjectController_1.ProjectController();
// Define routes
router.post('/submit', projectController.submit);
exports.default = router;
