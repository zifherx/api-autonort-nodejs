import { Router } from "express";
import operacionCtrl from '../controllers/operacion.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Operacion
router.get('/', operacionCtrl.getAll);

//Obtener Operacion Activos
router.get('/activos', operacionCtrl.getAllActivos);

//Obtener Operacion por ID
router.get('/:operacionId', operacionCtrl.getOneById);

//Crear Operacion
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], operacionCtrl.createOne);

//Actualizar Operacion
router.patch('/:operacionId', [authJwt.verifyToken, authJwt.isAdmin], operacionCtrl.updateOneById);

//Eliminar Operacion
router.delete('/:operacionId', [authJwt.verifyToken, authJwt.isAdmin], operacionCtrl.deleteOneById);

export default router;