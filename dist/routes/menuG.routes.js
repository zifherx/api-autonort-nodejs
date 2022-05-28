"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menuG = _interopRequireDefault(require("../controllers/menuG.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _menuG.default.getAll);
router.get('/activos', _menuG.default.getAllByActivos);
router.get('/:anioId', _menuG.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateMenuG], _menuG.default.createOne);
router.patch('/:anioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _menuG.default.updateOneById);
router.delete('/:anioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _menuG.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=menuG.routes.js.map