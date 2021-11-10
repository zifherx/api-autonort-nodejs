import { Router } from "express";
import * as statusRP from '../controllers/StatusRP.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Status File
router.get('/', statusRP.getAll);

//Obtener Status File Activos
router.get('/activos', statusRP.getStatusRPByActivo);

//Obtener Status File por ID
router.get('/:statusRPId', statusRP.getStatusRPById);

//Crear Status File
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusRP], statusRP.createStatusRP);

//Actualizar Status File
router.patch('/:statusRPId', [authJwt.verifyToken, authJwt.isAdmin], statusRP.updateStatusRP);

//Eliminar Status File
router.delete('/:statusRPId', [authJwt.verifyToken, authJwt.isAdmin], statusRP.deleteStatusRP);

export default router;