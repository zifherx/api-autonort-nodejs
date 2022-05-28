"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _filtroMaf = _interopRequireDefault(require("../controllers/filtroMaf.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Estado Maf

router.get('/', _filtroMaf.default.getAll); //Obtener Estado Maf Activos

router.get('/activos', _filtroMaf.default.getAllActivos); //Obtener Estado Maf por ID

router.get('/:estadoId', _filtroMaf.default.getOneById); //Crear Estado Maf

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateFiltroMaf], _filtroMaf.default.createOne); //Actualizar Estado Maf

router.patch('/:estadoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _filtroMaf.default.updateOneById); //Eliminar Estado Maf

router.delete('/:estadoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _filtroMaf.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=filtroMaf.routes.js.map