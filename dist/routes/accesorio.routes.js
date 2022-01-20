"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _accesorio = _interopRequireDefault(require("../controllers/accesorio.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', _accesorio.default.getActivos);
router.get('/:accesorioId', _accesorio.default.getOne);
router.get('/', _accesorio.default.getAll);
router.post('/', _accesorio.default.createOne);
router.patch('/:accesorioId', _accesorio.default.updateById);
router.delete('/:accesorioId', _accesorio.default.deleteById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=accesorio.routes.js.map