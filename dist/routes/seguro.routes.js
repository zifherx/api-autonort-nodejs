"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var seguroCtrl = _interopRequireWildcard(require("../controllers/seguro.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Seguro

router.get('/', seguroCtrl.getAll); //Obtener Seguro Activos

router.get('/activos', seguroCtrl.getSeguroByActivo); //Obtener Seguro por ID

router.get('/:seguroId', seguroCtrl.getSeguroById); //Crear Seguro

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosAsistant, _middlewares.verifySignup.checkRolesExist], seguroCtrl.createSeguro); //Actualizar Seguro

router.patch('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosAsistant, _middlewares.verifySignup.checkRolesExist], seguroCtrl.updateSeguro); //Eliminar Seguro

router.delete('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosAsistant, _middlewares.verifySignup.checkRolesExist], seguroCtrl.deleteSeguro);
var _default = router;
exports.default = _default;
//# sourceMappingURL=seguro.routes.js.map