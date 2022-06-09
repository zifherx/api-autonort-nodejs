"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tipoProducto = _interopRequireDefault(require("../controllers/tipoProducto.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Anio

router.get('/', _tipoProducto.default.getAll); //Obtener Anio Activos

router.get('/activos', _tipoProducto.default.getAllActivos); //Obtener Anio por ID

router.get('/:itemId', _tipoProducto.default.getOneById); //Crear Anio

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateTipoProducto], _tipoProducto.default.createOne); //Actualizar Anio

router.patch('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoProducto.default.updateOneById); //Eliminar Anio

router.delete('/:itemId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoProducto.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tipoProducto.routes.js.map