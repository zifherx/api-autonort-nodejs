import { Router } from 'express'
import * as saleCtrl from '../controllers/sale.controller'
const router = Router();

//Crear Venta
router.post('/', saleCtrl.createSale);

//Obtener Venta
router.get('/', saleCtrl.getSales);

//Obtener Venta por Id
router.get('/:salesId', saleCtrl.getSaleById);

//Actualizar Venta
router.put('/:salesId', saleCtrl.updateSaleById);

//Remover Venta
router.delete('/:salesId', saleCtrl.deleteSaleById);

export default router;