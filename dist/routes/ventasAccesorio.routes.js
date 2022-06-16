"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ventasAccesorio = _interopRequireDefault(require("../controllers/ventasAccesorio.controller"));

var router = (0, _express.Router)();
router.get('/', _ventasAccesorio.default.getAll);
router.post('/', _ventasAccesorio.default.createOne);
router.post('/by-sucursal', _ventasAccesorio.default.getAllBySucursalMes);
var _default = router;
exports.default = _default;
//# sourceMappingURL=ventasAccesorio.routes.js.map