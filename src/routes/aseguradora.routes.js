import { Router } from "express";
import * as aseguradoraCtrl from '../controllers/aseguradora.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Aseguradora
router.get('/', aseguradoraCtrl.getAll);

//Obtener Aseguradora Activos
router.get('/activos', aseguradoraCtrl.getAseguradoraByActivo);

//Obtener Aseguradora por ID
router.get('/:itemId', aseguradoraCtrl.getAseguradoraById);

//Crear Aseguradora
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateAseguradora], aseguradoraCtrl.createAseguradora);

//Actualizar Aseguradora
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], aseguradoraCtrl.updateAseguradora);

//Eliminar Aseguradora
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], aseguradoraCtrl.deleteAseguradora);

export default router;
