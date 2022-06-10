"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _resultado = _interopRequireDefault(require("../controllers/resultado.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _resultado.default.getAll);
router.get('/:itemId', _resultado.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isJefeDigitalJefePlaneamientoAdmin], _resultado.default.createOne);
router.post('/by-sucursal', _resultado.default.getAllByProductSedeYear);
router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _resultado.default.updateOneById);
router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _resultado.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=resultado.routes.js.map