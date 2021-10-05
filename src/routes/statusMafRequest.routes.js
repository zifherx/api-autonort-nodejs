import { Router } from "express";
import * as statusMafRequestCtrl from '../controllers/statusMafRequest.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Estado Maf
router.get('/', statusMafRequestCtrl.getAll);

//Obtener Estado Maf Activos
router.get('/activos', statusMafRequestCtrl.getStatusMafRequestByActivo);

//Obtener Estado Maf por ID
router.get('/:statusMafRequestId', statusMafRequestCtrl.getStatusMafRequestById);

//Crear Estado Maf
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateStatusMafRequest], statusMafRequestCtrl.createStatusMafRequest);

//Actualizar Estado Maf
router.patch('/:statusMafRequestId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], statusMafRequestCtrl.updateStatusMafRequest);

//Eliminar Estado Maf
router.delete('/:statusMafRequestId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], statusMafRequestCtrl.deleteStatusMafRequest);

export default router;