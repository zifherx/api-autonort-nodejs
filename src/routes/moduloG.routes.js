import { Router } from "express";
import moduloCtrl from '../controllers/moduloG.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', moduloCtrl.getAll);

router.get('/activos', moduloCtrl.getAllByActivos);

router.get('/:moduloId', moduloCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateModuloG], moduloCtrl.createOne);

router.post('/by-menu', [authJwt.verifyToken, authJwt.isAdmin] ,moduloCtrl.getAllActiveByMenu);

router.patch('/:moduloId', [authJwt.verifyToken, authJwt.isAdmin], moduloCtrl.updateOneById);

router.delete('/:moduloId', [authJwt.verifyToken, authJwt.isAdmin], moduloCtrl.deleteOneById);

export default router;