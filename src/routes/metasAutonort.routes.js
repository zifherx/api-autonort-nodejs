import { Router } from 'express';
import controller from '../controllers/metaAutonort.controller';
const router = Router();

router.get('/', controller.getAll);
router.get('/:itemId', controller.getOneById);
router.get('/activos', controller.getAllActive);
router.post('/', controller.createNewOne);
router.post('/by-sede', controller.getAllBySedeProducto);
router.patch('/:itemId', controller.updateOneById);
router.delete('/:itemId', controller.deleteOneById);

export default router;
