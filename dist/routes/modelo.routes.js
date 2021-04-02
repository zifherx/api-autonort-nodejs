"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var modeloCtrl = _interopRequireWildcard(require("../controllers/modelo.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Modelos

router.get('/', modeloCtrl.getModelos); //Obtener Modelos Activos

router.get('/activos', modeloCtrl.getModeloByActivo); //Obtener Modelos por ID

router.get('/:modeloId', modeloCtrl.getModeloById); //Crear Modelo

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateModelo], modeloCtrl.createModelo); //Actualizar Modelo

router.patch('/:modeloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], modeloCtrl.updateModelo); //Eliminar Modelo

router.delete('/:modeloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], modeloCtrl.deleteModelo);
var _default = router;
exports.default = _default;
//# sourceMappingURL=modelo.routes.js.map