import { Router } from 'express'
import * as vehicleCtrl from '../controllers/vehicles.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

//Obtener Vehiculos
router.get('/', vehicleCtrl.getAll);

//Obtener Vehiculo por ID
router.get('/:vehicleId', vehicleCtrl.getVehicleById);

//Obtener Vehiculo por COD-TDP
router.post('/find', vehicleCtrl.getVehicleByCodigo);

//Obtener Vehiculo por Marca
router.post('/marca', vehicleCtrl.getVehiculeByMarca);

//Obtener Vehiculo por Modelo
router.post('/modelo', vehicleCtrl.getVehiculeByModelo);

//Crear Vehiculo
// router.post('/', vehicleCtrl.createVehicle);
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateVehiculo], vehicleCtrl.createVehicle);

//Actualizar Vehiculo
// router.patch('/:vehicleId', vehicleCtrl.updateVehicleById);
router.patch('/:vehicleId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], vehicleCtrl.updateVehicleById);

//Eliminar Vehiculo
// router.delete('/:vehicleId', vehicleCtrl.deleteVehicleById);
router.delete('/:vehicleId', [authJwt.verifyToken, authJwt.isAdmin], vehicleCtrl.deleteVehicleById);

export default router;