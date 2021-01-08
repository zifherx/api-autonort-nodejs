import { Router } from 'express'
import * as sellerCtrl from '../controllers/seller.controller'
const router = Router();

//Crear Vendedor
router.post('/', sellerCtrl.createSeller);

//Obtener Vendedores
router.get('/', sellerCtrl.getSellers);

//Obtener Vendedor por Id
router.get('/:sellerId', sellerCtrl.getSellerById);

//Actualizar Vendedor
router.put('/:sellerId', sellerCtrl.updateSellerById);

//Remover Vendedor
router.delete('/:sellerId', sellerCtrl.deleteSellerById);

export default router;