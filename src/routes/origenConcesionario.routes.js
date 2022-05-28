import {Router} from 'express';
import origenCtrl from '../controllers/origenConcesionario.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/activos', origenCtrl.getAllActivos);
router.get('/:origenId', origenCtrl.getOneById);
router.get('/', origenCtrl.getAll);
router.post('/', origenCtrl.createOne);
router.patch('/:origenId', origenCtrl.updateOneById);
router.delete('/:origenId', origenCtrl.deleteOneById);

export default router;