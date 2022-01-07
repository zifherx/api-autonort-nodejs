"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var saleCtrl = _interopRequireWildcard(require("../controllers/sale.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Venta

router.get('/', saleCtrl.getSales); //Reporte de Canceladas

router.post('/estado', saleCtrl.UnidadesByStatus); //Reporte de Sucursal

router.post('/sucursal', saleCtrl.UnidadesBySucursalyFecha); //Conteo por Sucursal, Situación y Fecha

router.post('/conteo', saleCtrl.conteoUnidadesBySucursalStatusFecha); //Conteo por Sucursal, Situación y Fecha

router.post('/count-all', saleCtrl.conteoUnidadesBySucursalFecha); //Unidades Libres

router.post('/free', saleCtrl.UnidadesLibres); //Conteo de Unidades Entregadas

router.post('/conteo/entregadas', saleCtrl.conteoUnidadesEntregadasBySucursal);
router.post('/conteo/entregas', saleCtrl.conteoVehiculosEntregadosByFecha); //Conteo By Status

router.post('/conteo/by-status', saleCtrl.conteoUnidadesByStatus); //Obtener Venta por Id

router.get('/:salesId', saleCtrl.getSaleById); //Sales by Vendedor

router.post('/vehicles-by-seller', saleCtrl.getVehiclesySeller); //Ranking By Vendedor

router.post('/status-by-seller', saleCtrl.getSalesBySeller); //Conteo de Ventas By Vendedor

router.post('/conteo/ventas', saleCtrl.conteoVentasByVendedor); //Conteo de Ventas By Modelo Vehicular

router.post('/ranking/vehicles', saleCtrl.conteoVentasByModelo);
router.post('/ranking/models', saleCtrl.rankingVentasByModelo); //Ranking de Ventas By Estado

router.post('/ranking/sales', saleCtrl.getRankingByStatusyFecha); //Vista de Expedientes Toyota Value

router.post('/toyota-value', saleCtrl.obtenerToyotaValues);
router.post('/test-ranking', saleCtrl.probandoRanking); //Crear Venta

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV, _middlewares.verifyDuplicate.checkDuplicateExpediente], saleCtrl.createSale); //Actualizar Venta

router.patch('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV], saleCtrl.updateSaleById); //Remover Venta

router.delete('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], saleCtrl.deleteSaleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sale.routes.js.map