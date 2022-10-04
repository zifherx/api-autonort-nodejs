"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _usados = _interopRequireDefault(require("../controllers/usados.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/:itemId', _usados.default.getOneById);
router.get('/', _usados.default.getAll);
router.post('/find/by-estado', _usados.default.getFilesByEstado);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefEPDPorAdmin], _usados.default.createOne);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefEPDPorAdmin], _usados.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefEPDPorAdmin], _usados.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=usados.routes.js.map