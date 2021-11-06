"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tasacion = _interopRequireDefault(require("../controllers/tasacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/count', _tasacion.default.countAll);
router.get('/:tasacionId', _tasacion.default.getOneById);
router.get('/', _tasacion.default.getAll);
router.post('/by-tasador', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isTasadororChiefEPDP], _tasacion.default.getAllByTasador);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isTasadororChiefEPDP], _tasacion.default.createTasacion);
router.patch('/:tasacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isTasadororChiefEPDP], _tasacion.default.updatedOneById);
router.delete('/:tasacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefEPDPorAdmin], _tasacion.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tasacion.routes.js.map