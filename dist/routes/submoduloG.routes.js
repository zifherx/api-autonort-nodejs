"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _submoduloG = _interopRequireDefault(require("../controllers/submoduloG.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _submoduloG.default.getAll);
router.get('/activos', _submoduloG.default.getAllByActivos);
router.get('/:subModuloId', _submoduloG.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateSubmoduloG], _submoduloG.default.createOne);
router.post('/by-modulo', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _submoduloG.default.getAllActiveByModulo);
router.patch('/:subModuloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _submoduloG.default.updateOneById);
router.delete('/:subModuloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _submoduloG.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=submoduloG.routes.js.map