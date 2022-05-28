import { Router } from "express";
import serviciosCtrl from '../controllers/aservicios.controller'
import { authJwt, verifyDuplicate } from "../middlewares";
import multer from '../middlewares/multer';

const router = Router();

//Obtener Asesor de Servicios Activos
router.get('/activos', serviciosCtrl.getAllByActivo);

//Obtener Asesor de Servicios por ID
router.get('/:asesorId', serviciosCtrl.getOneById);

//Obtener Asesor de Servicios
router.get('/', serviciosCtrl.getAll);

//Obtener Asesor de Servicios por Sucrsal
router.post('/by-sucursal', serviciosCtrl.getBySucursal);

//Crear Asesor de Servicios
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateAServicios], multer.single('avatar'), serviciosCtrl.createOne);

//Actualizar Asesor de Servicios
router.patch('/:asesorId', [authJwt.verifyToken, authJwt.isAdmin], multer.single('avatar'), serviciosCtrl.updatedOneById);

//Eliminar Asesor de Servicios
router.delete('/:asesorId', [authJwt.verifyToken, authJwt.isAdmin], serviciosCtrl.deleteOneById);

export default router;