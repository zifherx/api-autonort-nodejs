"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _civil = _interopRequireDefault(require("../controllers/civil.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Estado civil

router.get('/', _civil.default.getAll); //Obtener Estado civil Activos

router.get('/activos', _civil.default.getAllActivos); //Obtener Estado civil por ID

router.get('/:civilId', _civil.default.getOneById); //Crear Estado civil

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateEstadoCivil], _civil.default.createOne); //Actualizar Estado civil

router.patch('/:civilId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _civil.default.updateOneById); //Eliminar Estado civil

router.delete('/:civilId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _civil.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=civil.routes.js.map