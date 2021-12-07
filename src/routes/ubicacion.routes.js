import { Router } from "express";
import * as ubicacionCtrl from '../controllers/ubicacion.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Ubicacion
router.get('/', ubicacionCtrl.getUbicaciones);

//Obtener Ubicacion Activos
router.get('/activos', ubicacionCtrl.getUbicacionByActivo);

//Obtener Ubicacion por ID
router.get('/:ubicacionId', ubicacionCtrl.getUbicacionById);

//Crear Ubicacion
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateUbicacion], ubicacionCtrl.createUbicacion);

//Actualizar Ubicacion
router.patch('/:ubicacionId', [authJwt.verifyToken, authJwt.isAdmin], ubicacionCtrl.updateUbicacion);

//Eliminar Ubicacion
router.delete('/:ubicacionId', [authJwt.verifyToken, authJwt.isAdmin], ubicacionCtrl.deleteUbicacion);

export default router;