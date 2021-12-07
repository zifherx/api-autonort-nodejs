import { Router } from 'express';
import * as sellerCtrl from '../controllers/seller.controller';
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares';
import multer from '../middlewares/multer';

const router = Router();

//Obtener Vendedores
router.get('/', sellerCtrl.getSellers);

//Obtener Vendedor por Id
router.get('/:sellerId', sellerCtrl.getSellerById);

//Obtener Vendedor por Sucursal
router.post('/find', sellerCtrl.getSellerBySucursal);

router.post('/brand', sellerCtrl.getSellerByMarcaAndSucursal);

//Obtener Vendedor por Nombre
router.post('/name', sellerCtrl.getSellerByName);

//Crear Vendedor
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin, verifyDuplicate.checkDuplicateVendedor], sellerCtrl.createSeller);

router.patch('/upload/:sellerId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], multer.single('photo'), sellerCtrl.uploadAvatar);

//Actualizar Vendedor
router.patch('/:sellerId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], sellerCtrl.updateSellerById);

//Remover Vendedor
router.delete('/:sellerId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], sellerCtrl.deleteSellerById);

export default router;