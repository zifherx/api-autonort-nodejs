"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var statusRP = _interopRequireWildcard(require("../controllers/StatusRP.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Status File

router.get('/', statusRP.getAll); //Obtener Status File Activos

router.get('/activos', statusRP.getStatusRPByActivo); //Obtener Status File por ID

router.get('/:statusRPId', statusRP.getStatusRPById); //Crear Status File

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateStatusRP], statusRP.createStatusRP); //Actualizar Status File

router.patch('/:statusRPId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], statusRP.updateStatusRP); //Eliminar Status File

router.delete('/:statusRPId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], statusRP.deleteStatusRP);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusRP.routes.js.map