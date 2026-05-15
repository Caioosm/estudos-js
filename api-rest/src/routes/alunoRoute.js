import { Router } from 'express';
import alunoController from '../controllers/AlunoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.getById);

router.post('/', authMiddleware, alunoController.create);
router.put('/:id', authMiddleware, alunoController.update);
router.delete('/:id', authMiddleware, alunoController.delete);

export default router;
