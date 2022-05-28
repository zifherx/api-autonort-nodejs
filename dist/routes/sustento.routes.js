"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _sustento = _interopRequireDefault(require("../controllers/sustento.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Sustento

router.get('/', _sustento.default.getAll); //Obtener Sustento Activos

router.get('/activos', _sustento.default.getAllActivos); //Obtener Sustento por ID

router.get('/:sustentoId', _sustento.default.getOneById); //Crear Sustento

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateSustento], _sustento.default.createOne); //Actualizar Sustento

router.patch('/:sustentoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _sustento.default.updateOneById); //Eliminar Sustento

router.delete('/:sustentoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _sustento.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=sustento.routes.js.map