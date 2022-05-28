"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _estadoSeguro = _interopRequireDefault(require("../controllers/estadoSeguro.controller"));

var _middlewares = require("../middlewares");

var router = new _express.Router();
router.get('/activos', _estadoSeguro.default.getAllActivos);
router.get('/:seguroId', _estadoSeguro.default.getOneById);
router.get('/', _estadoSeguro.default.getAll);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateEstadoSeguro], _estadoSeguro.default.createOne);
router.patch('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _estadoSeguro.default.updateOneById);
router.delete('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _estadoSeguro.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=estadoSeguro.routes.js.map