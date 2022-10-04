import {Router} from 'express';
import ventaCtrl from '../controllers/ventasAccesorio.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/', ventaCtrl.getAll);
router.post('/', [authJwt.verifyToken, authJwt.isAdministradorOrAsistantComercial] ,ventaCtrl.createOne);
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdministradorOrAsistantComercial], ventaCtrl.updateOneById);
router.post('/by-sucursal', ventaCtrl.getAllBySucursalMes);

export default router;