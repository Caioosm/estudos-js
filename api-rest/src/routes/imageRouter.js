import { Router } from 'express';

import ImageController from '../controllers/ImageController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = new Router();

router.post('/', authMiddleware, ImageController.create);

export default router;
