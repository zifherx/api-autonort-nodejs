import { Router } from "express";
import * as endosoCtrl from '../controllers/endoso.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Endoso
router.get('/', endosoCtrl.getEndosos);

//Obtener Endoso Activos
router.get('/activos', endosoCtrl.getEndosoByActivo);

//Obtener Endoso por ID
router.get('/:endosoId', endosoCtrl.getEndosoById);

//Crear Endoso
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateEndoso], endosoCtrl.createEndoso);

//Actualizar Endoso
router.patch('/:endosoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], endosoCtrl.updateEndoso);

//Eliminar Endoso
router.delete('/:endosoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], endosoCtrl.deleteEndoso);

export default router;