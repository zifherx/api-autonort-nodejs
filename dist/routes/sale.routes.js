"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var saleCtrl = _interopRequireWildcard(require("../controllers/sale.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
router.post('/ranking/models', saleCtrl.rankingVentasByModelo);
router.post('/ranking/financiamiento', saleCtrl.rankingVentasByFinanciamiento);
router.post('/ranking/entity', saleCtrl.rankingVentasByEntidad); //Ranking de Ventas By Estado

router.post('/ranking/sales', saleCtrl.getRankingByStatusyFecha); //Vista de Expedientes Toyota Value

router.post('/toyota-value', saleCtrl.obtenerToyotaValues);
router.post('/ranking-anual/ventas', saleCtrl.probandoRanking);
router.post('/by-marca', saleCtrl.conteoVentasBySucursalyEstadoyMarca); //Crear Venta

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV, _middlewares.verifyDuplicate.checkDuplicateExpediente], saleCtrl.createSale); //Actualizar Venta

router.patch('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV], saleCtrl.updateSaleById); //Remover Venta

router.delete('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], saleCtrl.deleteSaleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sale.routes.js.map