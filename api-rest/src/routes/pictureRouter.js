import { Router } from 'express';
import PictureController from '../controllers/PictureController.js';
const router = new Router();

router.get('/', PictureController.index);


export default router;
