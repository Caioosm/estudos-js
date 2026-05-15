import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = new Router();

router.get('/', authMiddleware, UserController.index);
router.get('/:id', authMiddleware, UserController.show);

router.post('/', UserController.create);
router.put('/', authMiddleware, UserController.update);
router.delete('/:id', authMiddleware, UserController.delete);

export default router;
