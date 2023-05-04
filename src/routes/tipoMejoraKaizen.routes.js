import { Router } from 'express';
import itemController from '../controllers/tipoMejoraKaizen.controller';
const router = Router();

router.get('/', itemController.getAll);
router.get('/activos', itemController.getAllActivos);
router.get('/:itemId', itemController.getOneById);
router.post('/', itemController.createOne);
router.patch('/:itemId', itemController.updateOneById);
router.put('/:itemId', itemController.deleteOneById);

export default router;
