import { Router } from "express";
import * as colorCtrl from '../controllers/colores.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Color
router.get('/', colorCtrl.getColors);

//Obtener Color Activos
router.get('/activos', colorCtrl.getColorByActivo);

//Obtener Color por ID
router.get('/:colorId', colorCtrl.getColorById);

//Crear Color
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateColor], colorCtrl.createColor);

//Actualizar Color
router.patch('/:colorId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], colorCtrl.updateColor);

//Eliminar Color
router.delete('/:colorId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], colorCtrl.deleteColor);

export default router;