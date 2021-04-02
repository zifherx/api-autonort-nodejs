"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var adicionalCtrl = _interopRequireWildcard(require("../controllers/adicional.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Adicionales

router.get('/', adicionalCtrl.getAll); //Obtener Adicional Activas

router.get('/activos', adicionalCtrl.getAdicionalActivos); //Obtener Adicional por Id

router.get('/:adicionalId', adicionalCtrl.getOne); //Crear Adicional

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateAdicional], adicionalCtrl.createAdicional); //Actualizar Adicional

router.patch('/:adicionalId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], adicionalCtrl.updateAdicionalById); //Remover Adicional

router.delete('/:adicionalId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], adicionalCtrl.deleteAdicionalById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=adicional.routes.js.map