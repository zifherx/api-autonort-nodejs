"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _stockAccesorio = _interopRequireDefault(require("../controllers/stockAccesorio.controller"));

var router = (0, _express.Router)();
router.get('/', _stockAccesorio.default.getAll);
router.post('/', _stockAccesorio.default.createOne);
router.post('/by-sucursal', _stockAccesorio.default.getAllBySucursalMes);
var _default = router;
exports.default = _default;
//# sourceMappingURL=stockAccesorio.routes.js.map