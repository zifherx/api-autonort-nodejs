import { Router } from 'express';
import categoriaController from '../controllers/categoriaCircular.controller';

const router = Router();

router.get('/', categoriaController.getAll);
router.get('/:itemId', categoriaController.getOneById);
router.get('/activos', categoriaController.getAllByActive);
router.post('/', categoriaController.createOne);
router.patch('/:itemId', categoriaController.updateOneById);
router.delete('/:itemId', categoriaController.deleteOneById);

export default router;