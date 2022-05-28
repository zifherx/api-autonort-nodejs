"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _origenConcesionario = _interopRequireDefault(require("../controllers/origenConcesionario.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', _origenConcesionario.default.getAllActivos);
router.get('/:origenId', _origenConcesionario.default.getOneById);
router.get('/', _origenConcesionario.default.getAll);
router.post('/', _origenConcesionario.default.createOne);
router.patch('/:origenId', _origenConcesionario.default.updateOneById);
router.delete('/:origenId', _origenConcesionario.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=origenConcesionario.routes.js.map