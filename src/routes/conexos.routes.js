import { Router } from "express";
import * as conexoCtrl from '../controllers/conexos.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Conexo
router.get('/', conexoCtrl.getConexos);

//Obtener Conexo Activos
router.get('/activos', conexoCtrl.getConexoByActivo);

//Obtener Conexo por ID
router.get('/:conexoId', conexoCtrl.getConexoById);

//Crear Conexo
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateConexo], conexoCtrl.createConexo);

//Obtener Asesor x Sucursal
router.post('/sucursal', conexoCtrl.obtenerAsesorxSucursal)
router.post('/by-name', conexoCtrl.obtenerAsesorByName)

//Actualizar Conexo
router.patch('/:conexoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], conexoCtrl.updateConexo);

//Eliminar Conexo
router.delete('/:conexoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], conexoCtrl.deleteConexo);

export default router;