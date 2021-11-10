import { Router } from "express";
import * as statusFileCtrl from '../controllers/statusFile.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Status File
router.get('/', statusFileCtrl.getAll);

//Obtener Status File Activos
router.get('/activos', statusFileCtrl.getStatusFileByActivo);

//Obtener Status File por ID
router.get('/:statusFileId', statusFileCtrl.getStatusFileById);

//Crear Status File
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusFile], statusFileCtrl.createStatusFile);

//Actualizar Status File
router.patch('/:statusFileId', [authJwt.verifyToken, authJwt.isAdmin], statusFileCtrl.updateStatusFile);

//Eliminar Status File
router.delete('/:statusFileId', [authJwt.verifyToken, authJwt.isAdmin], statusFileCtrl.deleteStatusFile);

export default router;