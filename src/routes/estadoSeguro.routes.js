import {Router} from 'express';
import seguroCtrl from '../controllers/estadoSeguro.controller';
import { authJwt, verifyDuplicate } from '../middlewares'
const router = new Router();

router.get('/activos', seguroCtrl.getAllActivos);
router.get('/:seguroId', seguroCtrl.getOneById);
router.get('/', seguroCtrl.getAll);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateEstadoSeguro], seguroCtrl.createOne);
router.patch('/:seguroId', [authJwt.verifyToken, authJwt.isAdmin], seguroCtrl.updateOneById);
router.delete('/:seguroId', [authJwt.verifyToken, authJwt.isAdmin], seguroCtrl.deleteOneById);

export default router;