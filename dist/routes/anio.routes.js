"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var anioCtrl = _interopRequireWildcard(require("../controllers/anio.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Anio

router.get('/', anioCtrl.getAnios); //Obtener Anio Activos

router.get('/activos', anioCtrl.getAnioByActivo); //Obtener Anio por ID

router.get('/:anioId', anioCtrl.getAnioById); //Crear Anio

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateAnio], anioCtrl.createAnio); //Actualizar Anio

router.patch('/:anioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], anioCtrl.updateAnio); //Eliminar Anio

router.delete('/:anioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], anioCtrl.deleteAnio);
var _default = router;
exports.default = _default;
//# sourceMappingURL=anio.routes.js.map