"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _listaEspera = _interopRequireDefault(require("../controllers/listaEspera.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _listaEspera.default.getAll);
router.get('/:itemId', _listaEspera.default.getOneById);
router.post('/by-estado', _listaEspera.default.getCountByEstado);
router.post('/by-vehicle', _listaEspera.default.getCountClientByVehicle);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefADVOrChiefPlaneamientoOrAdministrador], _listaEspera.default.createOne);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefADVOrChiefPlaneamientoOrAdministrador], _listaEspera.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefPlaneamientorAdmin], _listaEspera.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=listaEspera.routes.js.map