import { Router } from "express";
import * as colorCtrl from '../controllers/colores.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', colorCtrl.getAll);

router.get('/activos', colorCtrl.getAllByActive);

router.get('/:itemId', colorCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateColor], colorCtrl.createOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], colorCtrl.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], colorCtrl.deleteOneById);

export default router;