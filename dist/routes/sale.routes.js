"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _sale = _interopRequireDefault(require("../controllers/sale.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Venta

router.get('/', _sale.default.getAll); //// Reporte de Canceladas
// router.post('/estado', saleCtrl.UnidadesByStatus);// Usando
// router.post('/progress', saleCtrl.getUnidadesBySucursalFecha)//nueva
// router.post('/count/by-estado', saleCtrl.getConteoUnidadesByEstado)//nuevo
// router.post('/ranking/entregas', saleCtrl.getRankingUnidadesByUbicacion)//nuevo

router.post('/sucursal', _sale.default.UnidadesBySucursalyFecha); //Usandose
// //Conteo por Sucursal, Situación y Fecha
// router.post('/conteo', saleCtrl.conteoUnidadesBySucursalStatusFecha);
// //Conteo por Sucursal, Situación y Fecha
// router.post('/count-all', saleCtrl.conteoUnidadesBySucursalFecha);
// //Unidades Libres
// router.post('/free', saleCtrl.UnidadesLibres);
// //Conteo de Unidades Entregadas
// router.post('/conteo/entregadas', saleCtrl.conteoUnidadesEntregadasBySucursal); //actualizado
// router.post('/conteo/entregas', saleCtrl.conteoVehiculosEntregadosByFecha); // eliminar
// //Conteo By Status
// router.post('/conteo/by-status', saleCtrl.conteoUnidadesByStatus);
//Obtener Venta por Id

router.get('/:salesId', _sale.default.getOneById); // Corregido
// //Sales by Vendedor
// router.post('/vehicles-by-seller', saleCtrl.getVehiclesySeller);
// //Ranking By Vendedor
// router.post('/status-by-seller', saleCtrl.getSalesBySeller);
// //Conteo de Ventas By Vendedor
// router.post('/conteo/ventas', saleCtrl.conteoVentasByVendedor);
// //Conteo de Ventas By Modelo Vehicular
// router.post('/ranking/vehicles', saleCtrl.conteoVentasByModelo);
// router.post('/ranking/models', saleCtrl.rankingVentasByModelo);
// router.post('/ranking/financiamiento', saleCtrl.rankingVentasByFinanciamiento);
// router.post('/ranking/entity', saleCtrl.rankingVentasByEntidad);
// router.post('/total/props', saleCtrl.totalAccesoriosBySucursalMes);
// //Ranking de Ventas By Estado
// router.post('/ranking/sales', saleCtrl.getRankingByStatusyFecha);//actualizado
// //Vista de Expedientes Toyota Value
// router.post('/toyota-value', saleCtrl.obtenerToyotaValues);
// router.post('/ranking-anual/ventas', saleCtrl.probandoRanking);
// router.post('/by-marca', saleCtrl.conteoVentasBySucursalyEstadoyMarca);
//Crear Venta

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV, _middlewares.verifyDuplicate.checkDuplicateExpediente], _sale.default.createOne); //Actualizar Venta

router.patch('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV], _sale.default.updateOneById); //Corregido
//Remover Venta

router.delete('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], _sale.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sale.routes.js.map