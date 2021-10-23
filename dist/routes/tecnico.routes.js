"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tecnico = _interopRequireDefault(require("../controllers/tecnico.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Tasador

router.get('/', _tecnico.default.getAll); //Obtener Tasador Activos

router.get('/activos', _tecnico.default.getTecnicoByActivo); //Obtener Tasador por ID

router.get('/:tasadorId', _tecnico.default.getTecnicoById); //Crear Tasador

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _tecnico.default.createTecnico); //Actualizar Tasador

router.patch('/:tasadorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _tecnico.default.updateTecnico); //Eliminar Tasador

router.delete('/:tasadorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _tecnico.default.deleteTecnico);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tecnico.routes.js.map