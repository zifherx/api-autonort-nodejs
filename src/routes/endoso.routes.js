import { Router } from "express";
import * as endosoCtrl from '../controllers/endoso.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Endoso
router.get('/', endosoCtrl.getAll);

//Obtener Endoso Activos
router.get('/activos', endosoCtrl.getAllActivos);

//Obtener Endoso por ID
router.get('/:itemId', endosoCtrl.getOneById);

//Crear Endoso
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateEndoso], endosoCtrl.createOne);

//Actualizar Endoso
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], endosoCtrl.updateOneById);

//Eliminar Endoso
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], endosoCtrl.deleteOneById);

export default router;
