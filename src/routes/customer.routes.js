import { Router } from 'express'
import * as customerCtrl from '../controllers/customer.controller'
import { authJwt, verifySignup } from '../middlewares'
const router = Router();

//Obtener Clientes
router.get('/', customerCtrl.getCustomers);

//Obtener Cliente por Id
router.get('/:customerId', customerCtrl.getCustomerById);

//Crear Cliente
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], customerCtrl.createCustomer);

//Obtener Cliente por DNI
router.post('/find', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], customerCtrl.getCustomerByDni);

//Actualizar Cliente
router.put('/:customerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], customerCtrl.updateCustomerById);

//Remover Cliente
router.delete('/:customerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], customerCtrl.deleteCustomerById);

export default router;