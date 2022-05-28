import { Router } from "express";
import planCtrl from '../controllers/planMaf.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Anio
router.get('/', planCtrl.getAll);

//Obtener Anio Activos
router.get('/activos', planCtrl.getAllActivos);

//Obtener Anio por ID
router.get('/:planId', planCtrl.getOneById);

//Crear Anio
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicatePlanMAF], planCtrl.createOne);

//Actualizar Anio
router.patch('/:planId', [authJwt.verifyToken, authJwt.isAdmin], planCtrl.updateOneById);

//Eliminar Anio
router.delete('/:planId', [authJwt.verifyToken, authJwt.isAdmin], planCtrl.deleteOneById);

export default router;