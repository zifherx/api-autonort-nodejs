"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tipoDocumento = _interopRequireDefault(require("../controllers/tipoDocumento.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _tipoDocumento.default.getAll);
router.get('/activos', _tipoDocumento.default.getAllByActive);
router.get('/:tipoId', _tipoDocumento.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateTipoDocumento], _tipoDocumento.default.createOne);
router.patch('/:tipoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoDocumento.default.updateOneById);
router.delete('/:tipoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoDocumento.default.deleteTipoDocumento);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tipoDocumento.routes.js.map