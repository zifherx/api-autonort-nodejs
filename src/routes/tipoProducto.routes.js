import { Router } from "express";
import tipoProductoCtrl from '../controllers/tipoProducto.controller';
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Anio
router.get('/', tipoProductoCtrl.getAll);

//Obtener Anio Activos
router.get('/activos', tipoProductoCtrl.getAllActivos);

//Obtener Anio por ID
router.get('/:itemId', tipoProductoCtrl.getOneById);

//Crear Anio
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateTipoProducto], tipoProductoCtrl.createOne);

//Actualizar Anio
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], tipoProductoCtrl.updateOneById);

//Eliminar Anio
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], tipoProductoCtrl.deleteOneById);

export default router;