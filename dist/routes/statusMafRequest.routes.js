"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var statusMafRequestCtrl = _interopRequireWildcard(require("../controllers/statusMafRequest.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Estado Maf

router.get('/', statusMafRequestCtrl.getAll); //Obtener Estado Maf Activos

router.get('/activos', statusMafRequestCtrl.getStatusMafRequestByActivo); //Obtener Estado Maf por ID

router.get('/:statusMafRequestId', statusMafRequestCtrl.getStatusMafRequestById); //Crear Estado Maf

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateStatusMafRequest], statusMafRequestCtrl.createStatusMafRequest); //Actualizar Estado Maf

router.patch('/:statusMafRequestId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], statusMafRequestCtrl.updateStatusMafRequest); //Eliminar Estado Maf

router.delete('/:statusMafRequestId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], statusMafRequestCtrl.deleteStatusMafRequest);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusMafRequest.routes.js.map