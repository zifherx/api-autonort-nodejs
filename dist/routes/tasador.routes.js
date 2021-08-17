"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var tasadorCtrl = _interopRequireWildcard(require("../controllers/tasador.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Tasador

router.get('/', tasadorCtrl.getTasadores); //Obtener Tasador Activos

router.get('/activos', tasadorCtrl.getTasadorByActivo); //Obtener Tasador por ID

router.get('/:tasadorId', tasadorCtrl.getTasadorById); //Crear Tasador

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], tasadorCtrl.createTasador); //Actualizar Tasador

router.patch('/:tasadorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], tasadorCtrl.updateTasador); //Eliminar Tasador

router.delete('/:tasadorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], tasadorCtrl.deleteTasador);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tasador.routes.js.map