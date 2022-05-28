import {Router} from 'express';
import motivoCtrl from '../controllers/rechazo.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/', motivoCtrl.getAll);
router.get('/activos', motivoCtrl.getAllActivos);
router.get('/:motivoId', motivoCtrl.getOneById);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateMotivoRechazo], motivoCtrl.createOne);
router.patch('/:motivoId', [authJwt.verifyToken, authJwt.isAdmin ], motivoCtrl.updateOneById);
router.delete('/:motivoId', [authJwt.verifyToken, authJwt.isAdmin ], motivoCtrl.deleteOneById);

export default router;