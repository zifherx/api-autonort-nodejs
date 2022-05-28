"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _operacion = _interopRequireDefault(require("../controllers/operacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Operacion

router.get('/', _operacion.default.getAll); //Obtener Operacion Activos

router.get('/activos', _operacion.default.getAllActivos); //Obtener Operacion por ID

router.get('/:operacionId', _operacion.default.getOneById); //Crear Operacion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _operacion.default.createOne); //Actualizar Operacion

router.patch('/:operacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _operacion.default.updateOneById); //Eliminar Operacion

router.delete('/:operacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _operacion.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=operacion.routes.js.map