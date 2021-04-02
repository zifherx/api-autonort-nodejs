"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var sustentoCtrl = _interopRequireWildcard(require("../controllers/sustento.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Sustento

router.get('/', sustentoCtrl.getSustentos); //Obtener Sustento Activos

router.get('/activos', sustentoCtrl.getSustentoByActivo); //Obtener Sustento por ID

router.get('/:sustentoId', sustentoCtrl.getSustentoById); //Crear Sustento

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateSustento], sustentoCtrl.createSustento); //Actualizar Sustento

router.patch('/:sustentoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], sustentoCtrl.updateSustento); //Eliminar Sustento

router.delete('/:sustentoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], sustentoCtrl.deleteSustento);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sustento.routes.js.map