import { Router } from "express";
import sustentoCtrl from '../controllers/sustento.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Sustento
router.get('/', sustentoCtrl.getAll);

//Obtener Sustento Activos
router.get('/activos', sustentoCtrl.getAllActivos);

//Obtener Sustento por ID
router.get('/:sustentoId', sustentoCtrl.getOneById);

//Crear Sustento
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateSustento], sustentoCtrl.createOne);

//Actualizar Sustento
router.patch('/:sustentoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sustentoCtrl.updateOneById);

//Eliminar Sustento
router.delete('/:sustentoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sustentoCtrl.deleteOneById);

export default router;