"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var conexoCtrl = _interopRequireWildcard(require("../controllers/conexos.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Conexo

router.get('/', conexoCtrl.getConexos); //Obtener Conexo Activos

router.get('/activos', conexoCtrl.getConexoByActivo); //Obtener Conexo por ID

router.get('/:conexoId', conexoCtrl.getConexoById); //Crear Conexo

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateConexo], conexoCtrl.createConexo); //Obtener Asesor x Sucursal

router.post('/sucursal', conexoCtrl.obtenerAsesorxSucursal); //Actualizar Conexo

router.patch('/:conexoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], conexoCtrl.updateConexo); //Eliminar Conexo

router.delete('/:conexoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], conexoCtrl.deleteConexo);
var _default = router;
exports.default = _default;
//# sourceMappingURL=conexos.routes.js.map