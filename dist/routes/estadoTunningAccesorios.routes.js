"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _EstadoTunningAccesorios = _interopRequireDefault(require("../controllers/EstadoTunningAccesorios.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _EstadoTunningAccesorios.default.getAll);
router.get('/activos', _EstadoTunningAccesorios.default.getAllActivos);
router.get('/:itemId', _EstadoTunningAccesorios.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateEstadoTunningAccesorios], _EstadoTunningAccesorios.default.createOne);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _EstadoTunningAccesorios.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _EstadoTunningAccesorios.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=estadoTunningAccesorios.routes.js.map