import {Router} from 'express';
import controllerT from '../controllers/tcambio.controller';

const router = Router();

router.get('/', controllerT.getAll);
router.get('/:itemId', controllerT.getOneById);
router.post('/', controllerT.createOne);

export default router;