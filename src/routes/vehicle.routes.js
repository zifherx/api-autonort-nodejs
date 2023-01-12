import { Router } from 'express'
import vehicleCtrl from '../controllers/vehicles.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

//Obtener Vehiculos
router.get('/', vehicleCtrl.getAll);

//Obtener Vehiculo por ID
router.get('/:itemId', vehicleCtrl.getVehicleById);

//Obtener Vehiculo por COD-TDP
router.post('/by-codtdp', vehicleCtrl.getVehicleByCodigo);

//Obtener Vehiculo por Marca
router.post('/by-marca', vehicleCtrl.getVehiculeByMarca);

//Obtener Vehiculo por Modelo
router.post('/by-modelo', vehicleCtrl.getVehiculeByModelo);

//Crear Vehiculo
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin, verifyDuplicate.checkDuplicateVehiculo], vehicleCtrl.createVehicle);

//Actualizar Vehiculo
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], vehicleCtrl.updateVehicleById);

//Eliminar Vehiculo
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], vehicleCtrl.deleteVehicleById);

export default router;