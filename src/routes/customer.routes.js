import { Router } from 'express'
import customerCtrl from '../controllers/customer.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Clientes
router.get('/', customerCtrl.getAll);

//Obtener Cliente por Id
router.get('/:itemId', customerCtrl.getOneById);

//Obtener Cliente por DNI
router.post('/find', customerCtrl.getClienteByDNI);

//Crear Cliente
router.post('/', [authJwt.verifyToken, authJwt.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin, verifyDuplicate.checkDuplicateCliente], customerCtrl.createOne);

router.post('/count/by-type', customerCtrl.getCountByType);

//Actualizar Cliente
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin], customerCtrl.updateOneById);

//Remover Cliente
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], customerCtrl.deleteOneById);

export default router;
