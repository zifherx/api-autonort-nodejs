"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _accesorio = _interopRequireDefault(require("../controllers/accesorio.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', _accesorio.default.getAllActivos);
router.get('/:accesorioId', _accesorio.default.getOne);
router.get('/', _accesorio.default.getAll);
router.post('/by-modelo', _accesorio.default.getAccesoriosByModelo);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV, _middlewares.verifyDuplicate.checkDuplicateAccesorio], _accesorio.default.createOne);
router.patch('/:accesorioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV], _accesorio.default.updateById);
router.delete('/:accesorioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADV], _accesorio.default.deleteById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=accesorio.routes.js.map