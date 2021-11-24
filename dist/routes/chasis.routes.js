"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var chasisCtrl = _interopRequireWildcard(require("../controllers/chasis.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Chasis

router.get('/', chasisCtrl.getAll); //Obtener Chasis Activos

router.get('/activos', chasisCtrl.getChasisByActivo); //Obtener Chasis por ID

router.get('/:chasisId', chasisCtrl.getChasisById); //Crear Chasis

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateChasis], chasisCtrl.createChasis); //Actualizar Chasis

router.patch('/:chasisId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], chasisCtrl.updateChasis); //Eliminar Chasis

router.delete('/:chasisId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], chasisCtrl.deleteChasis);
var _default = router;
exports.default = _default;
//# sourceMappingURL=chasis.routes.js.map