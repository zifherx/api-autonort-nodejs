"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _rechazo = _interopRequireDefault(require("../controllers/rechazo.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _rechazo.default.getAll);
router.get('/activos', _rechazo.default.getAllActivos);
router.get('/:motivoId', _rechazo.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateMotivoRechazo], _rechazo.default.createOne);
router.patch('/:motivoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _rechazo.default.updateOneById);
router.delete('/:motivoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _rechazo.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=motivo.routes.js.map