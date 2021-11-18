import { Router } from "express";
import * as marcaTCtrl from '../controllers/marcaT.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/activos', marcaTCtrl.getMarcaActiva);

router.get('/count', marcaTCtrl.countAll);

router.get('/:marcaId', marcaTCtrl.getMarcaById);

router.get('/', marcaTCtrl.getAll);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateMarcaT], marcaTCtrl.createMarca);

router.patch('/:marcaId', [authJwt.verifyToken, authJwt.isAdmin], marcaTCtrl.updateMarcaById);

router.delete('/:marcaId', [authJwt.verifyToken, authJwt.isAdmin], marcaTCtrl.deleteMarcaById);

export default router;