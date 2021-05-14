import { Router } from "express";
import * as seguroCtrl from '../controllers/seguro.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Seguro
router.get('/', seguroCtrl.getAll);

//Obtener Seguro Activos
router.get('/activos', seguroCtrl.getSeguroByActivo);

//Obtener Seguro por ID
router.get('/:seguroId', seguroCtrl.getSeguroById);

//Crear Seguro
router.post('/', [authJwt.verifyToken, authJwt.isConexosAsistant, verifySignup.checkRolesExist], seguroCtrl.createSeguro);

//Actualizar Seguro
router.patch('/:seguroId', [authJwt.verifyToken, authJwt.isConexosAsistant, verifySignup.checkRolesExist], seguroCtrl.updateSeguro);

//Eliminar Seguro
router.delete('/:seguroId', [authJwt.verifyToken, authJwt.isConexosAsistant, verifySignup.checkRolesExist], seguroCtrl.deleteSeguro);

export default router;