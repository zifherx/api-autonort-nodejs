import { Router } from "express";
import * as statusJefaturaCtrl from '../controllers/statusJefaturaMaf.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', statusJefaturaCtrl.getAll);

router.get('/activos', statusJefaturaCtrl.getAllActivos);

router.get('/:itemId', statusJefaturaCtrl.getAllActivos);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusFile], statusJefaturaCtrl.createOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], statusJefaturaCtrl.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], statusJefaturaCtrl.deleteOneById);

export default router;