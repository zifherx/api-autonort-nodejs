"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var sectoristaCtrl = _interopRequireWildcard(require("../controllers/sectorista.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Sectorista

router.get('/', sectoristaCtrl.getSectoristas); //Obtener Sectorista Activos

router.get('/activos', sectoristaCtrl.getSectoristaByActivo); //Obtener Sectorista por ID

router.get('/:sectoristaId', sectoristaCtrl.getSectoristaById); //Crear Sectorista

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateSectorista], sectoristaCtrl.createSectorista); //Actualizar Sectorista

router.patch('/:sectoristaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], sectoristaCtrl.updateSectorista); //Eliminar Sectorista

router.delete('/:sectoristaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], sectoristaCtrl.deleteSectorista);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sectorista.routes.js.map