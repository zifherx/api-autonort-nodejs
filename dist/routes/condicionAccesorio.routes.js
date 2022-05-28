"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _condicionAccesorio = _interopRequireDefault(require("../controllers/condicionAccesorio.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Color

router.get('/', _condicionAccesorio.default.getAll); //Obtener Color Activos

router.get('/activos', _condicionAccesorio.default.getAllActivos); //Obtener Color por ID

router.get('/:condicionId', _condicionAccesorio.default.getOneById); //Crear Color

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateCondicionAccesorio], _condicionAccesorio.default.createOne); //Actualizar Color

router.patch('/:condicionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _condicionAccesorio.default.updateOneById); //Eliminar Color

router.delete('/:condicionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _condicionAccesorio.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=condicionAccesorio.routes.js.map