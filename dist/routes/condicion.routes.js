"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var condicionCtrl = _interopRequireWildcard(require("../controllers/condicion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Condicion

router.get('/', condicionCtrl.getCondiciones); //Obtener Condicion Activos

router.get('/activos', condicionCtrl.getCondicionByActivo); //Obtener Condicion por ID

router.get('/:condicionId', condicionCtrl.getCondicionById); //Crear Condicion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], condicionCtrl.createCondicion); //Actualizar Condicion

router.patch('/:condicionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], condicionCtrl.updateCondicion); //Eliminar Condicion

router.delete('/:condicionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], condicionCtrl.deleteCondicion);
var _default = router;
exports.default = _default;
//# sourceMappingURL=condicion.routes.js.map