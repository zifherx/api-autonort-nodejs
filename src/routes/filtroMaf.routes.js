import { Router } from "express";
import filtroMafCtrl from '../controllers/filtroMaf.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Estado Maf
router.get('/', filtroMafCtrl.getAll);

//Obtener Estado Maf Activos
router.get('/activos', filtroMafCtrl.getAllActivos);

//Obtener Estado Maf por ID
router.get('/:estadoId', filtroMafCtrl.getOneById);

//Crear Estado Maf
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateFiltroMaf], filtroMafCtrl.createOne);

//Actualizar Estado Maf
router.patch('/:estadoId', [authJwt.verifyToken, authJwt.isAdmin], filtroMafCtrl.updateOneById);

//Eliminar Estado Maf
router.delete('/:estadoId', [authJwt.verifyToken, authJwt.isAdmin], filtroMafCtrl.deleteOneById);

export default router;