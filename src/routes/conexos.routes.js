import { Router } from "express";
import conexoCtrl from '../controllers/conexos.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Conexo
router.get('/', conexoCtrl.getAll);

//Obtener Conexo Activos
router.get('/activos', conexoCtrl.getAllActivos);

//Obtener Conexo por ID
router.get('/:itemId', conexoCtrl.getOneById);

//Obtener Asesor x Sucursal
router.post('/by-sucursal', conexoCtrl.getAsesorxSucursalyArea);
router.post('/by-area', conexoCtrl.getAsesoresxArea);
router.post('/by-name', conexoCtrl.getAsesorByName);

//Crear Conexo
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateConexo], conexoCtrl.createOne);

//Actualizar Conexo
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], conexoCtrl.updateOneById);

//Eliminar Conexo
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], conexoCtrl.deleteOneById);

export default router;
