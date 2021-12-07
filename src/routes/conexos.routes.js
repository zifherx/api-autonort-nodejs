import { Router } from "express";
import * as conexoCtrl from '../controllers/conexos.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Conexo
router.get('/', conexoCtrl.getConexos);

//Obtener Conexo Activos
router.get('/activos', conexoCtrl.getConexoByActivo);

//Obtener Conexo por ID
router.get('/:conexoId', conexoCtrl.getConexoById);

//Obtener Asesor x Sucursal
router.post('/sucursal', conexoCtrl.obtenerAsesorxSucursal);
router.post('/area', conexoCtrl.obtenerAsesorxArea);
router.post('/by-name', conexoCtrl.obtenerAsesorByName);

//Crear Conexo
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateConexo], conexoCtrl.createConexo);

//Actualizar Conexo
router.patch('/:conexoId', [authJwt.verifyToken, authJwt.isAdmin], conexoCtrl.updateConexo);

//Eliminar Conexo
router.delete('/:conexoId', [authJwt.verifyToken, authJwt.isAdmin], conexoCtrl.deleteConexo);

export default router;