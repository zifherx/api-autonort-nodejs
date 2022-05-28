"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _metodoAtencion = _interopRequireDefault(require("../controllers/metodoAtencion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', _metodoAtencion.default.getAllActivos);
router.get('/:origenId', _metodoAtencion.default.getOneById);
router.get('/', _metodoAtencion.default.getAll);
router.post('/', _metodoAtencion.default.createOne);
router.patch('/:origenId', _metodoAtencion.default.updateOneById);
router.delete('/:origenId', _metodoAtencion.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=metodoAtencion.routes.js.map