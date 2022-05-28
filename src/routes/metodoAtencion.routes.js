import {Router} from 'express';
import metodoCtrl from '../controllers/metodoAtencion.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/activos', metodoCtrl.getAllActivos);
router.get('/:origenId', metodoCtrl.getOneById);
router.get('/', metodoCtrl.getAll);
router.post('/', metodoCtrl.createOne);
router.patch('/:origenId', metodoCtrl.updateOneById);
router.delete('/:origenId', metodoCtrl.deleteOneById);

export default router;