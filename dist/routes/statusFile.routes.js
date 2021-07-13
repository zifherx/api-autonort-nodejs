"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var statusFileCtrl = _interopRequireWildcard(require("../controllers/statusFile.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Status File

router.get('/', statusFileCtrl.getAll); //Obtener Status File Activos

router.get('/activos', statusFileCtrl.getStatusFileByActivo); //Obtener Status File por ID

router.get('/:statusFileId', statusFileCtrl.getStatusFileById); //Crear Status File

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateStatusFile], statusFileCtrl.createStatusFile); //Actualizar Status File

router.patch('/:statusFileId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], statusFileCtrl.updateStatusFile); //Eliminar Status File

router.delete('/:statusFileId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], statusFileCtrl.deleteStatusFile);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusFile.routes.js.map