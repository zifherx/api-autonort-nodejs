"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var goalCtrl = _interopRequireWildcard(require("../controllers/goals.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Meta

router.get('/', goalCtrl.getMetas); //Obtener Meta Activos

router.get('/activos', goalCtrl.getMetaByActivo); //Obtener Meta por ID

router.get('/:metaId', goalCtrl.getMetaById); //Crear Meta

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], goalCtrl.createMeta); //Actualizar Meta

router.patch('/:metaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], goalCtrl.updateMeta); //Eliminar Meta

router.delete('/:metaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], goalCtrl.deleteMeta);
var _default = router;
exports.default = _default;
//# sourceMappingURL=goals.routes.js.map