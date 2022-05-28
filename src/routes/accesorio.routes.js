import { Router} from 'express';
import accesorioCtrl from '../controllers/accesorio.controller';
import { authJwt, verifyDuplicate} from '../middlewares'

const router = Router();

router.get('/activos', accesorioCtrl.getAllActivos);
router.get('/:accesorioId', accesorioCtrl.getOne);
router.get('/', accesorioCtrl.getAll);
router.post('/by-modelo', accesorioCtrl.getAccesoriosByModelo);
router.post('/', [ authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV, verifyDuplicate.checkDuplicateAccesorio], accesorioCtrl.createOne);
router.patch('/:accesorioId', [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV] ,accesorioCtrl.updateById);
router.delete('/:accesorioId', [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV] , accesorioCtrl.deleteById);

export default router;