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

router.post('/sucursal', saleCtrl.UnidadesBySucursal); //Conteo de Canceladas

router.get('/conteo/canceladas', saleCtrl.conteoUnidadesCanceladas); //Conteo de Canceladas - Tarapoto

router.get('/conteo/canceladas/tarapoto', saleCtrl.conteoTarapotoCanceladas); //Conteo de Canceladas - Jaen

router.get('/conteo/canceladas/jaen', saleCtrl.conteoJaenCanceladas); //Conteo de Libres

router.get('/conteo/libres', saleCtrl.conteoUnidadesLibres); //Conteo de Libres - Tarapoto

router.get('/conteo/libres/tarapoto', saleCtrl.conteoTarapotoLibres); //Conteo de Libres - Jaen

router.get('/conteo/libres/jaen', saleCtrl.conteoJaenLibres); //Conteo de Anticipos

router.get('/conteo/anticipos', saleCtrl.conteoUnidadesAnticipos); //Conteo de Anticipos - Tarapoto

router.get('/conteo/anticipos/tarapoto', saleCtrl.conteoTarapotoAnticipos); //Conteo de Anticipos - Jaen

router.get('/conteo/anticipos/jaen', saleCtrl.conteoJaenAnticipos); //Conteo de Ventas By Vendedor

router.get('/conteo/ventas', saleCtrl.conteoVentasByVendedor); //Obtener Venta por Id

router.get('/:salesId', saleCtrl.getSaleById); //Crear Venta

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], saleCtrl.createSale); //Actualizar Venta

router.patch('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], saleCtrl.updateSaleById); //Remover Venta

router.delete('/:salesId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], saleCtrl.deleteSaleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sale.routes.js.map