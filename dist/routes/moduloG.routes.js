"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _moduloG = _interopRequireDefault(require("../controllers/moduloG.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _moduloG.default.getAll);
router.get('/activos', _moduloG.default.getAllByActivos);
router.get('/:moduloId', _moduloG.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateModuloG], _moduloG.default.createOne);
router.post('/by-menu', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _moduloG.default.getAllActiveByMenu);
router.patch('/:moduloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _moduloG.default.updateOneById);
router.delete('/:moduloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _moduloG.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=moduloG.routes.js.map