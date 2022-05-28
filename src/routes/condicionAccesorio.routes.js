import { Router } from "express";
import condicionACtrl from '../controllers/condicionAccesorio.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Color
router.get('/', condicionACtrl.getAll);

//Obtener Color Activos
router.get('/activos', condicionACtrl.getAllActivos);

//Obtener Color por ID
router.get('/:condicionId', condicionACtrl.getOneById);

//Crear Color
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateCondicionAccesorio], condicionACtrl.createOne);

//Actualizar Color
router.patch('/:condicionId', [authJwt.verifyToken, authJwt.isAdmin], condicionACtrl.updateOneById);

//Eliminar Color
router.delete('/:condicionId', [authJwt.verifyToken, authJwt.isAdmin], condicionACtrl.deleteOneById);

export default router;