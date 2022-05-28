import { Router } from "express";
import civilCtrl from '../controllers/civil.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Estado civil
router.get('/', civilCtrl.getAll);

//Obtener Estado civil Activos
router.get('/activos', civilCtrl.getAllActivos);

//Obtener Estado civil por ID
router.get('/:civilId', civilCtrl.getOneById);

//Crear Estado civil
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateEstadoCivil], civilCtrl.createOne);

//Actualizar Estado civil
router.patch('/:civilId', [authJwt.verifyToken, authJwt.isAdmin], civilCtrl.updateOneById);

//Eliminar Estado civil
router.delete('/:civilId', [authJwt.verifyToken, authJwt.isAdmin], civilCtrl.deleteOneById);

export default router;