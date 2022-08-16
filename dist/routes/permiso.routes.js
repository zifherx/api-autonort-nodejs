"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _permiso = _interopRequireDefault(require("../controllers/permiso.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _permiso.default.getAll);
router.post('/by-codigo', _permiso.default.findByCodigo);
router.post('/by-submodule', _permiso.default.findBySubmodule);
router.post('/', _permiso.default.createOne);
router.patch('/:permisoId', _permiso.default.updateOneById);
router.delete('/:permisoId', _permiso.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=permiso.routes.js.map