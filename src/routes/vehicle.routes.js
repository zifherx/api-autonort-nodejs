import { Router } from 'express'
import * as vehicleCtrl from '../controllers/vehicles.controller'
import { authJwt, verifySignup } from '../middlewares'

const router = Router();

//router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv], vehicleCtrl.createVehicle);

router.get('/', vehicleCtrl.getVehicles);

router.get('/:vehicleId', vehicleCtrl.getVehicleById);

router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], vehicleCtrl.createVehicle);

router.post('/find', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], vehicleCtrl.getVehicleByCodigo);

router.put('/:vehicleId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], vehicleCtrl.updateVehicleById);

router.delete('/:vehicleId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], vehicleCtrl.deleteVehicleById);

export default router;