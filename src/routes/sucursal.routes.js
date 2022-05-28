import { Router } from "express";
import sucursalCtrl from '../controllers/sucursal.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Sucursal
router.get('/', sucursalCtrl.getAll);

//Obtener Sucursal Activos
router.get('/activos', sucursalCtrl.getAllActivos);

//Obtener Sucursal por ID
router.get('/:sucursalId', sucursalCtrl.getOneById);

//Crear Sucursal
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateSucursal], sucursalCtrl.createOne);

//Actualizar Sucursal
router.patch('/:sucursalId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sucursalCtrl.updateOneById);

//Eliminar Sucursal
router.delete('/:sucursalId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sucursalCtrl.deleteOneById);

export default router;