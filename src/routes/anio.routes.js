import { Router } from "express";
import * as anioCtrl from '../controllers/anio.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Anio
router.get('/', anioCtrl.getAnios);

//Obtener Anio Activos
router.get('/activos', anioCtrl.getAnioByActivo);

//Obtener Anio por ID
router.get('/:anioId', anioCtrl.getAnioById);

//Crear Anio
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateAnio], anioCtrl.createAnio);

//Actualizar Anio
router.patch('/:anioId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], anioCtrl.updateAnio);

//Eliminar Anio
router.delete('/:anioId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], anioCtrl.deleteAnio);

export default router;