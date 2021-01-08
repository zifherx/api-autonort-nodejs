import { Router } from 'express'
import * as vehicleCtrl from '../controllers/vehicles.controller'
import { authJwt, verifySignup } from '../middlewares'

const router = Router();

//router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv], vehicleCtrl.createVehicle);

router.post('/', vehicleCtrl.createVehicle);

router.get('/', vehicleCtrl.getVehicles);

router.get('/:vehicleId', vehicleCtrl.getVehicleById);

router.post('/find', vehicleCtrl.getVehicleBySerie);

//router.put('/:vehicleId', [authJwt.verifyToken, authJwt.isChiefAdv], vehicleCtrl.updateVehicleById);

//router.delete('/:vehicleId', [authJwt.verifyToken, authJwt.isChiefAdv], vehicleCtrl.deleteVehicleById);

router.put('/:vehicleId', vehicleCtrl.updateVehicleById);

router.delete('/:vehicleId', vehicleCtrl.deleteVehicleById);

export default router;