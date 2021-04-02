import { Router } from "express";
import * as modeloCtrl from '../controllers/modelo.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Modelos
router.get('/', modeloCtrl.getModelos);

//Obtener Modelos Activos
router.get('/activos', modeloCtrl.getModeloByActivo);

//Obtener Modelos por ID
router.get('/:modeloId', modeloCtrl.getModeloById);

//Crear Modelo
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateModelo], modeloCtrl.createModelo);

//Actualizar Modelo
router.patch('/:modeloId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], modeloCtrl.updateModelo);

//Eliminar Modelo
router.delete('/:modeloId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], modeloCtrl.deleteModelo);

export default router;