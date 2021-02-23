import { Router } from "express";
import * as sucursalCtrl from '../controllers/sucursal.controller'
import { authJwt, verifySignup } from "../middlewares";

const router = Router();

//Obtener Sucursal
router.get('/', sucursalCtrl.getSucursales);

//Obtener Sucursal Activos
router.get('/activos', sucursalCtrl.getSucursalByActivo);

//Obtener Sucursal por ID
router.get('/:sucursalId', sucursalCtrl.getSucursalById);

//Crear Sucursal
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sucursalCtrl.createSucursal);

//Actualizar Sucursal
router.patch('/:sucursalId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sucursalCtrl.updateSucursal);

//Eliminar Sucursal
router.delete('/:sucursalId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sucursalCtrl.deleteSucursal);

export default router;