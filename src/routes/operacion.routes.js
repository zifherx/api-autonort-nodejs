import { Router } from "express";
import * as operacionCtrl from '../controllers/operacion.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Operacion
router.get('/', operacionCtrl.getAll);

//Obtener Operacion Activos
router.get('/activos', operacionCtrl.getOperacionActivos);

//Obtener Operacion por ID
router.get('/:operacionId', operacionCtrl.getOperacionById);

//Crear Operacion
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], operacionCtrl.createOperacion);

//Actualizar Operacion
router.patch('/:operacionId', [authJwt.verifyToken, authJwt.isAdmin], operacionCtrl.updateOperacion);

//Eliminar Operacion
router.delete('/:operacionId', [authJwt.verifyToken, authJwt.isAdmin], operacionCtrl.deleteOperacion);

export default router;