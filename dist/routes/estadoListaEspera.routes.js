"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _estadoListaEspera = _interopRequireDefault(require("../controllers/estadoListaEspera.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _estadoListaEspera.default.getAll);
router.get('/activos', _estadoListaEspera.default.getAllActivos);
router.get('/:itemId', _estadoListaEspera.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateEstadoListaEspera], _estadoListaEspera.default.createOne);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _estadoListaEspera.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _estadoListaEspera.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=estadoListaEspera.routes.js.map