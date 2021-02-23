"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var sucursalCtrl = _interopRequireWildcard(require("../controllers/sucursal.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Sucursal

router.get('/', sucursalCtrl.getSucursales); //Obtener Sucursal Activos

router.get('/activos', sucursalCtrl.getSucursalByActivo); //Obtener Sucursal por ID

router.get('/:sucursalId', sucursalCtrl.getSucursalById); //Crear Sucursal

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], sucursalCtrl.createSucursal); //Actualizar Sucursal

router.patch('/:sucursalId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], sucursalCtrl.updateSucursal); //Eliminar Sucursal

router.delete('/:sucursalId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], sucursalCtrl.deleteSucursal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sucursal.routes.js.map