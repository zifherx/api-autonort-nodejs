"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tecnico = _interopRequireDefault(require("../controllers/tecnico.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Tecnico Activos

router.get('/activos', _tecnico.default.getAllActivos); //Obtener Tecnico por ID

router.get('/:tecnicoId', _tecnico.default.getOneById); //Obtener Tecnico

router.get('/', _tecnico.default.getAll); //Crear Tecnico

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateTecnico], _tecnico.default.createOne); //Actualizar Tecnico

router.patch('/:tecnicoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tecnico.default.updateOneById); //Eliminar Tecnico

router.delete('/:tecnicoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tecnico.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tecnico.routes.js.map