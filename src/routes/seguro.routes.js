import { Router } from "express";
import * as seguroCtrl from '../controllers/seguro.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Conteo Global de Solicitudes
router.get('/count', seguroCtrl.countAll);

//Obtener Seguro
router.get('/', seguroCtrl.getAll);

//Obtener Seguro por ID
router.get('/:seguroId', seguroCtrl.getSeguroById);

//Conteo by Status
router.post('/count/by-status', seguroCtrl.countByStatus);

//Crear Seguro
router.post('/', [authJwt.verifyToken, authJwt.isConexosAsistant, verifySignup.checkRolesExist], seguroCtrl.createSeguro);

//Actualizar Seguro
router.patch('/:seguroId', [authJwt.verifyToken, authJwt.isConexosAsistant, verifySignup.checkRolesExist], seguroCtrl.updateSeguro);

//Eliminar Seguro
router.delete('/:seguroId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], seguroCtrl.deleteSeguro);

export default router;