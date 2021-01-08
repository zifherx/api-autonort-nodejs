import { Router } from 'express'
import * as customerCtrl from '../controllers/customer.controller'
const router = Router();

//Crear Cliente
router.post('/', customerCtrl.createCustomer);

//Obtener Clientes
router.get('/', customerCtrl.getCustomers);

//Obtener Cliente por Id
router.get('/:customerId', customerCtrl.getCustomerById);

//Obtener Cliente por DNI
router.post('/find', customerCtrl.getCustomerByDni);

//Actualizar Cliente
router.put('/:customerId', customerCtrl.updateCustomerById);

//Remover Cliente
router.delete('/:customerId', customerCtrl.deleteCustomerById);

export default router;