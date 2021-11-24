import { Router } from 'express'
import * as saleCtrl from '../controllers/sale.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Venta
router.get('/', saleCtrl.getSales);

//Reporte de Canceladas
router.post('/estado', saleCtrl.UnidadesByStatus);

//Reporte de Sucursal
router.post('/sucursal', saleCtrl.UnidadesBySucursal);

//Conteo por Sucursal, Situación y Fecha
router.post('/conteo', saleCtrl.conteoUnidadesBySucursalStatusFecha);

//Unidades Libres
router.post('/free', saleCtrl.UnidadesLibres);

//Conteo de Unidades Entregadas
router.post('/entregadas', saleCtrl.vistaUnidadesEntregadasByStatus);

//Conteo de Canceladas
router.get('/conteo/canceladas', saleCtrl.conteoUnidadesCanceladas);

//Conteo de Libres
router.get('/conteo/libres', saleCtrl.conteoUnidadesLibres);

//Obtener Venta por Id
router.get('/:salesId', saleCtrl.getSaleById);

//Conteo de Ventas By Vendedor
router.post('/conteo/ventas', saleCtrl.conteoVentasByVendedor);

//Conteo de Ventas By Modelo Vehicular
router.post('/conteo/autos', saleCtrl.conteoVentasByModelo);

//Vista de Expedientes Toyota Value
router.post('/toyota-value', saleCtrl.obtenerToyotaValues)

//Crear Venta
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin, verifyDuplicate.checkDuplicateExpediente], saleCtrl.createSale);

//Actualizar Venta
router.patch('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], saleCtrl.updateSaleById);

//Remover Venta
router.delete('/:salesId', [authJwt.verifyToken, authJwt.isAdmin], saleCtrl.deleteSaleById);

export default router;