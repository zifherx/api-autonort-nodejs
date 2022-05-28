import { Router } from 'express'
import customerCtrl from '../controllers/customer.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Clientes
router.get('/', customerCtrl.getAll);

//Obtener Cliente por Id
router.get('/:customerId', customerCtrl.getOneById);

//Obtener Cliente por DNI
router.post('/find', customerCtrl.getClienteByDNI);

//Crear Cliente
router.post('/', [authJwt.verifyToken, authJwt.isConexosOrADVOrVendedorOrEPDPOrAdmin, verifyDuplicate.checkDuplicateCliente], customerCtrl.createOne);

//Actualizar Cliente
router.patch('/:customerId', [authJwt.verifyToken, authJwt.isConexosOrADVOrVendedorOrEPDPOrAdmin], customerCtrl.updateOneById);

//Remover Cliente
router.delete('/:customerId', [authJwt.verifyToken, authJwt.isAdmin], customerCtrl.deleteOneById);

export default router;