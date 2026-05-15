import { Router } from 'express';

import ImageController from '../controllers/ImageController.js';
const router = new Router();

router.post('/', ImageController.create);

export default router;
