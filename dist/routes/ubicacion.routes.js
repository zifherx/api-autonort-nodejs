"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var ubicacionCtrl = _interopRequireWildcard(require("../controllers/ubicacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Ubicacion

router.get('/', ubicacionCtrl.getUbicaciones); //Obtener Ubicacion Activos

router.get('/activos', ubicacionCtrl.getUbicacionByActivo); //Obtener Ubicacion por ID

router.get('/:ubicacionId', ubicacionCtrl.getUbicacionById); //Crear Ubicacion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], ubicacionCtrl.createUbicacion); //Actualizar Ubicacion

router.patch('/:ubicacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], ubicacionCtrl.updateUbicacion); //Eliminar Ubicacion

router.delete('/:ubicacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], ubicacionCtrl.deleteUbicacion);
var _default = router;
exports.default = _default;
//# sourceMappingURL=ubicacion.routes.js.map