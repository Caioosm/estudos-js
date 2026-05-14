import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = new Router();

router.post('/', authMiddleware, UserController.create);
router.get('/', authMiddleware, UserController.index);
router.get('/:id', authMiddleware, UserController.show);
router.put('/:id', authMiddleware, UserController.update);
router.delete('/:id', authMiddleware, UserController.delete);

export default router;
