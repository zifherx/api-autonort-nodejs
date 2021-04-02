import { Router } from 'express'
import * as vehicleCtrl from '../controllers/vehicles.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

//Obtener Vehiculos
router.get('/', vehicleCtrl.getVehicles);

//Obtener Vehiculo por ID
router.get('/:vehicleId', vehicleCtrl.getVehicleById);

//Crear Vehiculo
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateVehiculo], vehicleCtrl.createVehicle);

//Obtener Vehiculo por COD-TDP
router.post('/find', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], vehicleCtrl.getVehicleByCodigo);

//Actualizar Vehiculo
router.patch('/:vehicleId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], vehicleCtrl.updateVehicleById);

//Eliminar Vehiculo
router.delete('/:vehicleId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], vehicleCtrl.deleteVehicleById);

export default router;