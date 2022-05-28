import { Router } from "express";
import estadoMafCtrl from '../controllers/statusMafRequest.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Estado Maf
router.get('/', estadoMafCtrl.getAll);

//Obtener Estado Maf Activos
router.get('/activos', estadoMafCtrl.getAllActivos);

//Obtener Estado Maf por ID
router.get('/:estadoId', estadoMafCtrl.getOneById);

//Crear Estado Maf
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusMafRequest], estadoMafCtrl.createOne);

//Actualizar Estado Maf
router.patch('/:estadoId', [authJwt.verifyToken, authJwt.isAdmin], estadoMafCtrl.updateOneById);

//Eliminar Estado Maf
router.delete('/:estadoId', [authJwt.verifyToken, authJwt.isAdmin], estadoMafCtrl.deleteOneById);

export default router;