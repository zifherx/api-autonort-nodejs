"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tasacion = _interopRequireDefault(require("../controllers/tasacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/:tasacionId', _tasacion.default.getOneById);
router.get('/', _tasacion.default.getAll);
router.post('/ranking/status', _tasacion.default.getRankingByStatus);
router.post('/ranking/metodo', _tasacion.default.getCountByMetodo);
router.post('/ranking/origin', _tasacion.default.getCountByOrigen);
router.post('/ranking/ingreso', _tasacion.default.getRankingByIngreso);
router.post('/ranking/seller', _tasacion.default.getRankingByVendedor);
router.post('/status-by-seller', _tasacion.default.getTasacionesBySeller);
router.post('/status-by-advisor', _tasacion.default.getTasacionesByAdvisor);
router.post('/vehicles-by-seller', _tasacion.default.getVehiclesByVentas);
router.post('/vehicles-by-advisor', _tasacion.default.getVehiclesByServicios);
router.post('/by-sucursal', _tasacion.default.getBySucursalFecha);
router.post('/by-estado', [_middlewares.authJwt.verifyToken], _tasacion.default.getAllByDatesyEstado);
router.post('/by-tasador', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isTasadororChiefEPDP], _tasacion.default.getAllByTasador);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isTasadororChiefEPDP], _tasacion.default.createOne);
router.patch('/:tasacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isTasadororChiefEPDP], _tasacion.default.updatedOneById);
router.delete('/:tasacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefEPDPorAdmin], _tasacion.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tasacion.routes.js.map