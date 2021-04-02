"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var situacionCtrl = _interopRequireWildcard(require("../controllers/situacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Situacion

router.get('/', situacionCtrl.getSituaciones); //Obtener Situacion Activos

router.get('/activos', situacionCtrl.getSituacionByActivo); //Obtener Situacion por ID

router.get('/:situacionId', situacionCtrl.getSituacionById); //Crear Situacion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateSituacion], situacionCtrl.createSituacion); //Actualizar Situacion

router.patch('/:situacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], situacionCtrl.updateSituacion); //Eliminar Situacion

router.delete('/:situacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], situacionCtrl.deleteSituacion);
var _default = router;
exports.default = _default;
//# sourceMappingURL=situacion.routes.js.map