import { Router } from 'express'
import * as deliveryCtrl from '../controllers/delivery.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

//Obtener Delivery
router.get('/', deliveryCtrl.getAll);

//Obtener Delivery por Id
router.get('/:deliveryId', deliveryCtrl.getDeliveryById);

//Crear Delivery
router.post('/', [authJwt.verifyToken, authJwt.isCSAsistant, verifySignup.checkRolesExist], deliveryCtrl.createDelivery);

//Actualizar Delivery
router.patch('/:deliveryId', [authJwt.verifyToken, authJwt.isCSAsistant, verifySignup.checkRolesExist], deliveryCtrl.updateDeliveryById);

//Remover Delivery
router.delete('/:deliveryId', [authJwt.verifyToken, authJwt.isCSAsistant, verifySignup.checkRolesExist], deliveryCtrl.deleteDeliveryById);

export default router;