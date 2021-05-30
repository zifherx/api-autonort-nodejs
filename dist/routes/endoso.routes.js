"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var endosoCtrl = _interopRequireWildcard(require("../controllers/endoso.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Endoso

router.get('/', endosoCtrl.getEndosos); //Obtener Endoso Activos

router.get('/activos', endosoCtrl.getEndosoByActivo); //Obtener Endoso por ID

router.get('/:endosoId', endosoCtrl.getEndosoById); //Crear Endoso

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateEndoso], endosoCtrl.createEndoso); //Actualizar Endoso

router.patch('/:endosoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], endosoCtrl.updateEndoso); //Eliminar Endoso

router.delete('/:endosoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], endosoCtrl.deleteEndoso);
var _default = router;
exports.default = _default;
//# sourceMappingURL=endoso.routes.js.map