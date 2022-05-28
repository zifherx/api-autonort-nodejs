"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _sucursal = _interopRequireDefault(require("../controllers/sucursal.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Sucursal

router.get('/', _sucursal.default.getAll); //Obtener Sucursal Activos

router.get('/activos', _sucursal.default.getAllActivos); //Obtener Sucursal por ID

router.get('/:sucursalId', _sucursal.default.getOneById); //Crear Sucursal

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateSucursal], _sucursal.default.createOne); //Actualizar Sucursal

router.patch('/:sucursalId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _sucursal.default.updateOneById); //Eliminar Sucursal

router.delete('/:sucursalId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _sucursal.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sucursal.routes.js.map