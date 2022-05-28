import { Router } from "express";
import ubicacionCtrl from '../controllers/ubicacion.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Ubicacion
router.get('/', ubicacionCtrl.getAll);

//Obtener Ubicacion Activos
router.get('/activos', ubicacionCtrl.getAllActivos);

//Obtener Ubicacion por ID
router.get('/:ubicacionId', ubicacionCtrl.getOneById);

//Crear Ubicacion
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateUbicacion], ubicacionCtrl.createOne);

//Actualizar Ubicacion
router.patch('/:ubicacionId', [authJwt.verifyToken, authJwt.isAdmin], ubicacionCtrl.updateOneById);

//Eliminar Ubicacion
router.delete('/:ubicacionId', [authJwt.verifyToken, authJwt.isAdmin], ubicacionCtrl.deleteOneById);

export default router;