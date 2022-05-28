import { Router } from "express";
import * as marcaTCtrl from '../controllers/marcaT.controller'
import { authJwt, verifyDuplicate } from "../middlewares";
import multer from '../middlewares/multer'

const router = Router();

router.get('/activos', marcaTCtrl.getMarcaActiva);

router.get('/:marcaId', marcaTCtrl.getMarcaById);

router.get('/', marcaTCtrl.getAll);

// router.post('/', multer.single('avatar'), marcaTCtrl.createMarca);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateMarcaT], multer.single('avatar'), marcaTCtrl.createMarca);

router.patch('/:marcaId', [authJwt.verifyToken, authJwt.isAdmin], multer.single('avatar'), marcaTCtrl.updateMarcaById);

router.delete('/:marcaId', [authJwt.verifyToken, authJwt.isAdmin], marcaTCtrl.deleteMarcaById);

export default router;