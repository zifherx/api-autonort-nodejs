"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tipoUso = _interopRequireDefault(require("../controllers/tipoUso.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Anio

router.get('/', _tipoUso.default.getAll); //Obtener Anio Activos

router.get('/activos', _tipoUso.default.getAllByActivo); //Obtener Anio por ID

router.get('/:usoId', _tipoUso.default.getOneById); //Crear Anio

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateTipoUso], _tipoUso.default.createOne); //Actualizar Anio

router.patch('/:usoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoUso.default.updateOneById); //Eliminar Anio

router.delete('/:usoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoUso.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tipoUso.routes.js.map