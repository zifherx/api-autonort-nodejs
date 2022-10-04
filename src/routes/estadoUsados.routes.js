import {Router} from 'express';
import estadoCtrl from '../controllers/estadoUsados.controller';
import { authJwt, verifyDuplicate } from '../middlewares'
const router = new Router();

router.get('/activos', estadoCtrl.getAllActivos);
router.get('/:itemId', estadoCtrl.getOneById);
router.get('/', estadoCtrl.getAll);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateEstadoUsado], estadoCtrl.createOne);
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], estadoCtrl.updateOneById);
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], estadoCtrl.deleteOneById);

export default router;