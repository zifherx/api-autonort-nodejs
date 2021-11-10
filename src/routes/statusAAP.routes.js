import { Router } from "express";
import * as statusAAPCtrl from '../controllers/statusAAP.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Status File
router.get('/', statusAAPCtrl.getAll);

//Obtener Status File Activos
router.get('/activos', statusAAPCtrl.getStatusAAPByActivo);

//Obtener Status File por ID
router.get('/:statusAAPId', statusAAPCtrl.getStatusAAPById);

//Crear Status File
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusAAP], statusAAPCtrl.createStatusAAP);

//Actualizar Status File
router.patch('/:statusAAPId', [authJwt.verifyToken, authJwt.isAdmin], statusAAPCtrl.updateStatusAAP);

//Eliminar Status File
router.delete('/:statusAAPId', [authJwt.verifyToken, authJwt.isAdmin], statusAAPCtrl.deleteStatusAAP);

export default router;