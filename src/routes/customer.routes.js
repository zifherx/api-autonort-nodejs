import { Router } from 'express'
import * as customerCtrl from '../controllers/customer.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Clientes
router.get('/', customerCtrl.getCustomers);

//Obtener Cliente por Id
router.get('/:customerId', customerCtrl.getCustomerById);

//Obtener Cliente por DNI
router.post('/find', customerCtrl.getCustomerByDni);

//Crear Cliente
router.post('/', [authJwt.verifyToken, authJwt.isConexosOrADVOrVendedor, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateCliente], customerCtrl.createCustomer);

//Actualizar Cliente
router.patch('/:customerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], customerCtrl.updateCustomerById);

//Remover Cliente
router.delete('/:customerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], customerCtrl.deleteCustomerById);

export default router;