import { Router } from "express";
import mesCtrl from '../controllers/mes.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', mesCtrl.getAll);

router.get('/activos', mesCtrl.getAllActive);

router.get('/:itemId', mesCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateMes], mesCtrl.createOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], mesCtrl.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], mesCtrl.deleteOneById);

export default router;