import { Router } from 'express';
import tipoCampaniaController from '../controllers/tipoCampania.controller';
import { authJwt, verifyDuplicate } from '../middlewares'

const router = Router();

router.get('/activos', tipoCampaniaController.getAllActivos);
router.get('/:itemId', tipoCampaniaController.getOneById);
router.get('/', tipoCampaniaController.getAll);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateTipoCampania] , tipoCampaniaController.createOne);
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin] ,tipoCampaniaController.updateOneById);
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], tipoCampaniaController.deleteOneById);

export default router;