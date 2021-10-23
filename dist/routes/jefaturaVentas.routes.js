"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jefaturaVentas = _interopRequireDefault(require("../controllers/jefaturaVentas.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _jefaturaVentas.default.getAll); //Obtener Asesor x Sucursal

router.post('/sucursal', _jefaturaVentas.default.obtenerJefexSucursal);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _jefaturaVentas.default.createOne);
router.patch('/:jefaturaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _jefaturaVentas.default.updateById);
router.delete('/:jefaturaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _jefaturaVentas.default.deleteById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=jefaturaVentas.routes.js.map