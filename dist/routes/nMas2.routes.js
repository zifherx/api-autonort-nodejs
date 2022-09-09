"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _nMas = _interopRequireDefault(require("../controllers/nMas2.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _nMas.default.getAll);
router.get('/active', _nMas.default.getAllActive);
router.get('/:itemId', _nMas.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _nMas.default.createOne);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _nMas.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _nMas.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=nMas2.routes.js.map