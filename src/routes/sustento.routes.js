import { Router } from "express";
import * as sustentoCtrl from '../controllers/sustento.controller'
import { authJwt, verifySignup } from "../middlewares";

const router = Router();

//Obtener Sustento
router.get('/', sustentoCtrl.getSustentos);

//Obtener Sustento Activos
router.get('/activos', sustentoCtrl.getSustentoByActivo);

//Obtener Sustento por ID
router.get('/:sustentoId', sustentoCtrl.getSustentoById);

//Crear Sustento
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sustentoCtrl.createSustento);

//Actualizar Sustento
router.patch('/:sustentoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sustentoCtrl.updateSustento);

//Eliminar Sustento
router.delete('/:sustentoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sustentoCtrl.deleteSustento);

export default router;