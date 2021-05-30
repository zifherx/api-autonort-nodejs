"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var aseguradoraCtrl = _interopRequireWildcard(require("../controllers/aseguradora.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Aseguradora

router.get('/', aseguradoraCtrl.getAll); //Obtener Aseguradora Activos

router.get('/activos', aseguradoraCtrl.getAseguradoraByActivo); //Obtener Aseguradora por ID

router.get('/:aseguradoraId', aseguradoraCtrl.getAseguradoraById); //Crear Aseguradora

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateAseguradora], aseguradoraCtrl.createAseguradora); //Actualizar Aseguradora

router.patch('/:aseguradoraId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], aseguradoraCtrl.updateAseguradora); //Eliminar Aseguradora

router.delete('/:aseguradoraId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], aseguradoraCtrl.deleteAseguradora);
var _default = router;
exports.default = _default;
//# sourceMappingURL=aseguradora.routes.js.map