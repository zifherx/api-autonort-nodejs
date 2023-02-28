import { Router } from 'express';
import usadosCtrl from '../controllers/usados.controller';
import { authJwt, verifyDuplicate } from '../middlewares';
import multer from '../middlewares/multer';

const router = Router();

router.get('/:itemId', usadosCtrl.getOneById);
router.get('/', usadosCtrl.getAll);
router.post('/find/by-estado', usadosCtrl.getFilesByEstado);
router.post('/', usadosCtrl.createOne);
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isChiefEPDPorAdmin], multer.array('adjuntos', 15)  ,usadosCtrl.updateOneById);
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isChiefEPDPorAdmin], usadosCtrl.deleteOneById);

export default router;
