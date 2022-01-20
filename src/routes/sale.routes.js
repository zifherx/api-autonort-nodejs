import { Router } from 'express'
import * as saleCtrl from '../controllers/sale.controller'
import { authJwt, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Venta
router.get('/', saleCtrl.getSales);

//Reporte de Canceladas
router.post('/estado', saleCtrl.UnidadesByStatus);

//Reporte de Sucursal
router.post('/sucursal', saleCtrl.UnidadesBySucursalyFecha);

//Conteo por Sucursal, Situación y Fecha
router.post('/conteo', saleCtrl.conteoUnidadesBySucursalStatusFecha);

//Conteo por Sucursal, Situación y Fecha
router.post('/count-all', saleCtrl.conteoUnidadesBySucursalFecha);

//Unidades Libres
router.post('/free', saleCtrl.UnidadesLibres);

//Conteo de Unidades Entregadas
router.post('/conteo/entregadas', saleCtrl.conteoUnidadesEntregadasBySucursal);
router.post('/conteo/entregas', saleCtrl.conteoVehiculosEntregadosByFecha);

//Conteo By Status
router.post('/conteo/by-status', saleCtrl.conteoUnidadesByStatus);

//Obtener Venta por Id
router.get('/:salesId', saleCtrl.getSaleById);

//Sales by Vendedor
router.post('/vehicles-by-seller', saleCtrl.getVehiclesySeller);

//Ranking By Vendedor
router.post('/status-by-seller', saleCtrl.getSalesBySeller);

//Conteo de Ventas By Vendedor
router.post('/conteo/ventas', saleCtrl.conteoVentasByVendedor);

//Conteo de Ventas By Modelo Vehicular
router.post('/ranking/vehicles', saleCtrl.conteoVentasByModelo);
router.post('/ranking/models', saleCtrl.rankingVentasByModelo);
router.post('/ranking/financiamiento', saleCtrl.rankingVentasByFinanciamiento);
router.post('/ranking/entity', saleCtrl.rankingVentasByEntidad);

//Ranking de Ventas By Estado
router.post('/ranking/sales', saleCtrl.getRankingByStatusyFecha);

//Vista de Expedientes Toyota Value
router.post('/toyota-value', saleCtrl.obtenerToyotaValues);

router.post('/ranking-anual/ventas', saleCtrl.probandoRanking);
router.post('/by-marca', saleCtrl.conteoVentasBySucursalyEstadoyMarca);

//Crear Venta
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV, verifyDuplicate.checkDuplicateExpediente], saleCtrl.createSale);

//Actualizar Venta
router.patch('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV], saleCtrl.updateSaleById);

//Remover Venta
router.delete('/:salesId', [authJwt.verifyToken, authJwt.isAdmin], saleCtrl.deleteSaleById);

export default router;