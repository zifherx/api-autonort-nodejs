"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var tasacionCtrl = _interopRequireWildcard(require("../controllers/tasacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Tasacion

router.get('/', tasacionCtrl.getAll); //Obtener Tasacion Activos

router.get('/activos', tasacionCtrl.getTasacionByActivo); //Obtener Tasacion por ID

router.get('/:tasacionId', tasacionCtrl.getTasacionById); //Crear Tasacion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosOrADV, _middlewares.verifySignup.checkRolesExist], tasacionCtrl.createTasacion); //Actualizar Tasacion

router.patch('/:tasacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosOrADV, _middlewares.verifySignup.checkRolesExist], tasacionCtrl.updateTasacion); //Eliminar Tasacion

router.delete('/:tasacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosOrADV, _middlewares.verifySignup.checkRolesExist], tasacionCtrl.deleteTasacion);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tasacion.routes.js.map