import { Router } from 'express'
import * as sellerCtrl from '../controllers/seller.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Vendedores
router.get('/', sellerCtrl.getSellers);

//Obtener Vendedor por Id
router.get('/:sellerId', sellerCtrl.getSellerById);

//Obtener Vendedor por Sucursal
router.post('/find', sellerCtrl.getSellerBySucursal);

//Obtener Vendedor por Nombre
router.post('/name', sellerCtrl.getSellerByName);

//Crear Vendedor
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateVendedor], sellerCtrl.createSeller);

//Actualizar Vendedor
router.patch('/:sellerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], sellerCtrl.updateSellerById);

//Remover Vendedor
router.delete('/:sellerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], sellerCtrl.deleteSellerById);

export default router;