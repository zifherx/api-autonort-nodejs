import { Router } from 'express';
import resultadoCtrl from '../controllers/resultado.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/', resultadoCtrl.getAll);
router.get('/:itemId', resultadoCtrl.getOneById);
router.post('/', [authJwt.verifyToken, authJwt.isJefeDigitalJefePlaneamientoAdmin],resultadoCtrl.createOne);
router.post('/by-sucursal', resultadoCtrl.getAllByProductSedeYear);
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin],resultadoCtrl.updateOneById);
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin],resultadoCtrl.deleteOneById);

export default router;