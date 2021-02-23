import { Router } from 'express'
import * as sellerCtrl from '../controllers/seller.controller'
import { authJwt, verifySignup } from '../middlewares'
const router = Router();

//Obtener Vendedores
router.get('/', sellerCtrl.getSellers);

//Obtener Vendedor por Id
router.get('/:sellerId', sellerCtrl.getSellerById);

//Crear Vendedor
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], sellerCtrl.createSeller);

//Actualizar Vendedor
router.put('/:sellerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], sellerCtrl.updateSellerById);

//Remover Vendedor
router.delete('/:sellerId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], sellerCtrl.deleteSellerById);

export default router;