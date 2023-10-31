import { Router } from "express";
import controller from '../controllers/tipoPermission.controller';

const router = Router();

router.get('/', controller.getAll);
router.get('/activos', controller.getAllActivos);
router.get('/:itemId', controller.getOneById);
router.post('/', controller.newOne);
router.patch('/:itemId', controller.updateOneById);
router.delete('/:itemId', controller.deleteOneById);

export default router;