"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jefaturaVentas = _interopRequireDefault(require("../controllers/jefaturaVentas.controller"));

var router = (0, _express.Router)();
router.get('/', _jefaturaVentas.default.getAll);
router.post('/', _jefaturaVentas.default.createOne); //Obtener Asesor x Sucursal

router.post('/sucursal', _jefaturaVentas.default.obtenerJefexSucursal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=jefaturaVentas.routes.js.map