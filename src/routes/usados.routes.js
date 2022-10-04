import { Router } from 'express';
import usadosCtrl from '../controllers/usados.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/:itemId', usadosCtrl.getOneById);
router.get('/', usadosCtrl.getAll);
router.post('/find/by-estado', usadosCtrl.getFilesByEstado);
router.post('/', [authJwt.verifyToken, authJwt.isChiefEPDPorAdmin], usadosCtrl.createOne);
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isChiefEPDPorAdmin] ,usadosCtrl.updateOneById);
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isChiefEPDPorAdmin], usadosCtrl.deleteOneById);

export default router;