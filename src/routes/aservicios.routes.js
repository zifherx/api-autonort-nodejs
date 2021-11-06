import { Router } from "express";
import serviciosCtrl from '../controllers/aservicios.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Conteo Tecnicos
router.get('/count', serviciosCtrl.countAll);

//Obtener Asesor de Servicios Activos
router.get('/activos', serviciosCtrl.getAllByActivo);

//Obtener Asesor de Servicios por ID
router.get('/:asesorId', serviciosCtrl.getOneById);

//Obtener Asesor de Servicios
router.get('/', serviciosCtrl.getAll);

//Obtener Asesor de Servicios por ID
router.post('/count/status', serviciosCtrl.countByStatus);

//Obtener Asesor de Servicios por Sucrsal
router.post('/sucursal', serviciosCtrl.getBySucursal);

//Crear Asesor de Servicios
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateAServicios], serviciosCtrl.createOne);

//Actualizar Asesor de Servicios
router.patch('/:asesorId', [authJwt.verifyToken, authJwt.isAdmin], serviciosCtrl.updatedOneById);

//Eliminar Asesor de Servicios
router.delete('/:asesorId', [authJwt.verifyToken, authJwt.isAdmin], serviciosCtrl.deleteOneById);

export default router;