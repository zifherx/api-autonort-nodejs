"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ubicacion = _interopRequireDefault(require("../controllers/ubicacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Ubicacion

router.get('/', _ubicacion.default.getAll); //Obtener Ubicacion Activos

router.get('/activos', _ubicacion.default.getAllActivos); //Obtener Ubicacion por ID

router.get('/:ubicacionId', _ubicacion.default.getOneById); //Crear Ubicacion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateUbicacion], _ubicacion.default.createOne); //Actualizar Ubicacion

router.patch('/:ubicacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _ubicacion.default.updateOneById); //Eliminar Ubicacion

router.delete('/:ubicacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _ubicacion.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=ubicacion.routes.js.map