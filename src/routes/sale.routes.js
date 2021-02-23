import { Router } from 'express'
import * as saleCtrl from '../controllers/sale.controller'
import { authJwt, verifySignup } from '../middlewares'
const router = Router();

//Obtener Venta
router.get('/', saleCtrl.getSales);

//Reporte de Canceladas
router.get('/:estado', saleCtrl.UnidadesByStatus);

//Conteo de Canceladas
router.get('/conteo/canceladas', saleCtrl.conteoUnidadesCanceladas);

//Conteo de Canceladas - Tarapoto
router.get('/conteo/canceladas/tarapoto', saleCtrl.conteoTarapotoCanceladas);

//Conteo de Canceladas - Jaen
router.get('/conteo/canceladas/jaen', saleCtrl.conteoJaenCanceladas);

//Conteo de Libres
router.get('/conteo/libres', saleCtrl.conteoUnidadesLibres);

//Conteo de Libres - Tarapoto
router.get('/conteo/libres/tarapoto', saleCtrl.conteoTarapotoLibres);

//Conteo de Libres - Jaen
router.get('/conteo/libres/jaen', saleCtrl.conteoJaenLibres);

//Conteo de Ventas By Vendedor
router.get('/conteo/ventas', saleCtrl.conteoVentasByVendedor);

//Obtener Venta por Id
router.get('/:salesId', saleCtrl.getSaleById);

//Crear Venta
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], saleCtrl.createSale);

//Actualizar Venta
router.put('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], saleCtrl.updateSaleById);

//Remover Venta
router.delete('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], saleCtrl.deleteSaleById);

export default router;