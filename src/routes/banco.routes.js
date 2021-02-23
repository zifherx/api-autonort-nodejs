import { Router } from "express";
import * as bancoCtrl from '../controllers/banco.controller'
import { authJwt, verifySignup } from "../middlewares";

const router = Router();

//Obtener Banco
router.get('/', bancoCtrl.getBancos);

//Obtener Banco Activos
router.get('/activos', bancoCtrl.getBancoByActivo);

//Obtener Banco por ID
router.get('/:bancoId', bancoCtrl.getBancoById);

//Crear Modelo
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], bancoCtrl.createBanco);

//Actualizar Modelo
router.patch('/:bancoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], bancoCtrl.updateBanco);

//Eliminar Modelo
router.delete('/:bancoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], bancoCtrl.deleteBanco);

export default router;