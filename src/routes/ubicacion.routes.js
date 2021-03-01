import { Router } from "express";
import * as ubicacionCtrl from '../controllers/ubicacion.controller'
import { authJwt, verifySignup } from "../middlewares";

const router = Router();

//Obtener Ubicacion
router.get('/', ubicacionCtrl.getUbicaciones);

//Obtener Ubicacion Activos
router.get('/activos', ubicacionCtrl.getUbicacionByActivo);

//Obtener Ubicacion por ID
router.get('/:ubicacionId', ubicacionCtrl.getUbicacionById);

//Crear Ubicacion
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], ubicacionCtrl.createUbicacion);

//Actualizar Ubicacion
router.patch('/:ubicacionId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], ubicacionCtrl.updateUbicacion);

//Eliminar Ubicacion
router.delete('/:ubicacionId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], ubicacionCtrl.deleteUbicacion);

export default router;