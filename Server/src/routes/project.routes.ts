import { Router } from 'express';
import { ProjectController } from '../controllers/ProjectController';

const router = Router();
const projectController = new ProjectController();

// Define routes
router.post('/submit', projectController.submit);

export default router;
