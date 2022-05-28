import { Router } from "express";
import submoduloCtrl from '../controllers/submoduloG.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', submoduloCtrl.getAll);

router.get('/activos', submoduloCtrl.getAllByActivos);

router.get('/:subModuloId', submoduloCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateSubmoduloG], submoduloCtrl.createOne);

router.post('/by-modulo', [authJwt.verifyToken, authJwt.isAdmin], submoduloCtrl.getAllActiveByModulo);

router.patch('/:subModuloId', [authJwt.verifyToken, authJwt.isAdmin], submoduloCtrl.updateOneById);

router.delete('/:subModuloId', [authJwt.verifyToken, authJwt.isAdmin], submoduloCtrl.deleteOneById);

export default router;