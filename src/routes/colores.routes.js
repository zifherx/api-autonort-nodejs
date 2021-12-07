import { Router } from "express";
import * as colorCtrl from '../controllers/colores.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Color
router.get('/', colorCtrl.getColors);

//Obtener Color Activos
router.get('/activos', colorCtrl.getColorByActivo);

//Obtener Color por ID
router.get('/:colorId', colorCtrl.getColorById);

//Crear Color
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateColor], colorCtrl.createColor);

//Actualizar Color
router.patch('/:colorId', [authJwt.verifyToken, authJwt.isAdmin], colorCtrl.updateColor);

//Eliminar Color
router.delete('/:colorId', [authJwt.verifyToken, authJwt.isAdmin], colorCtrl.deleteColor);

export default router;