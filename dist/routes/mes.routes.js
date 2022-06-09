"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mes = _interopRequireDefault(require("../controllers/mes.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _mes.default.getAll);
router.get('/activos', _mes.default.getAllActive);
router.get('/:itemId', _mes.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateMes], _mes.default.createOne);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _mes.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _mes.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=mes.routes.js.map