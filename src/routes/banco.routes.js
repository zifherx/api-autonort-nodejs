import { Router } from "express";
import * as bancoCtrl from '../controllers/banco.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Banco
router.get('/', bancoCtrl.getBancos);

//Obtener Banco Activos
router.get('/activos', bancoCtrl.getBancoByActivo);

//Obtener Banco por ID
router.get('/:bancoId', bancoCtrl.getBancoById);

//Crear Banco
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateBanco], bancoCtrl.createBanco);

//Actualizar Banco
router.patch('/:bancoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], bancoCtrl.updateBanco);

//Eliminar Banco
router.delete('/:bancoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], bancoCtrl.deleteBanco);

export default router;