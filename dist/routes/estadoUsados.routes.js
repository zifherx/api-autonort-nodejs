"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _estadoUsados = _interopRequireDefault(require("../controllers/estadoUsados.controller"));

var _middlewares = require("../middlewares");

var router = new _express.Router();
router.get('/activos', _estadoUsados.default.getAllActivos);
router.get('/:itemId', _estadoUsados.default.getOneById);
router.get('/', _estadoUsados.default.getAll);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateEstadoUsado], _estadoUsados.default.createOne);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _estadoUsados.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _estadoUsados.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=estadoUsados.routes.js.map