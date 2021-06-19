"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var operacionCtrl = _interopRequireWildcard(require("../controllers/operacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Operacion

router.get('/', operacionCtrl.getAll); //Obtener Operacion Activos

router.get('/activos', operacionCtrl.getOperacionActivos); //Obtener Operacion por ID

router.get('/:operacionId', operacionCtrl.getOperacionById); //Crear Operacion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateAnio], operacionCtrl.createOperacion); //Actualizar Operacion

router.patch('/:operacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], operacionCtrl.updateOperacion); //Eliminar Operacion

router.delete('/:operacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], operacionCtrl.deleteOperacion);
var _default = router;
exports.default = _default;
//# sourceMappingURL=operacion.routes.js.map