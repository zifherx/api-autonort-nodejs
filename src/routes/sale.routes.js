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

//Conteo de Unidades Entregadas
router.post('/entregadas', saleCtrl.vistaUnidadesEntregadasByStatus);

//Conteo de Canceladas
router.get('/conteo/canceladas', saleCtrl.conteoUnidadesCanceladas);

//Conteo de Libres
router.get('/conteo/libres', saleCtrl.conteoUnidadesLibres);

//Conteo de Ventas By Vendedor
router.post('/conteo/ventas', saleCtrl.conteoVentasByVendedor);

//Conteo de Ventas By Modelo Vehicular
router.post('/conteo/autos', saleCtrl.conteoVentasByModelo);

//Vista de Expedientes Toyota Value
router.post('/toyota-value', saleCtrl.obtenerToyotaValues)

//Obtener Venta por Id
router.get('/:salesId', saleCtrl.getSaleById);

//Crear Venta
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateExpediente], saleCtrl.createSale);

//Actualizar Venta
router.patch('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], saleCtrl.updateSaleById);

//Remover Venta
router.delete('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], saleCtrl.deleteSaleById);

export default router;