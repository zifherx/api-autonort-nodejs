import { Router } from "express";
import * as situacionCtrl from '../controllers/situacion.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Situacion
router.get('/', situacionCtrl.getAll);

//Obtener Situacion Activos
router.get('/activos', situacionCtrl.getSituacionByActivo);

//Obtener Situacion por ID
router.get('/:situacionId', situacionCtrl.getSituacionById);

//Crear Situacion
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateSituacion], situacionCtrl.createSituacion);

//Actualizar Situacion
router.patch('/:situacionId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], situacionCtrl.updateSituacion);

//Eliminar Situacion
router.delete('/:situacionId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], situacionCtrl.deleteSituacion);

export default router;