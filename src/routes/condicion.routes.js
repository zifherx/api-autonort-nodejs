import { Router } from "express";
import * as condicionCtrl from '../controllers/condicion.controller'
import { authJwt, verifySignup } from "../middlewares";

const router = Router();

//Obtener Condicion
router.get('/', condicionCtrl.getCondiciones);

//Obtener Condicion Activos
router.get('/activos', condicionCtrl.getCondicionByActivo);

//Obtener Condicion por ID
router.get('/:condicionId', condicionCtrl.getCondicionById);

//Crear Condicion
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], condicionCtrl.createCondicion);

//Actualizar Condicion
router.patch('/:condicionId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], condicionCtrl.updateCondicion);

//Eliminar Condicion
router.delete('/:condicionId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], condicionCtrl.deleteCondicion);

export default router;