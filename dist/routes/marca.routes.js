"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var marcaCtrl = _interopRequireWildcard(require("../controllers/marca.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Marca

router.get('/', marcaCtrl.getAll); //Obtener Marca Activos

router.get('/activos', marcaCtrl.getMarcaByActivo); //Obtener Marca por ID

router.get('/:marcaId', marcaCtrl.getMarcaById); //Crear Marca

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateMarca], marcaCtrl.createMarca); //Actualizar Marca

router.patch('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], marcaCtrl.updateMarca); //Eliminar Marca

router.delete('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], marcaCtrl.deleteMarca);
var _default = router;
exports.default = _default;
//# sourceMappingURL=marca.routes.js.map