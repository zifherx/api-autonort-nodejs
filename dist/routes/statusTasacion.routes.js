"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _statusTasacion = _interopRequireDefault(require("../controllers/statusTasacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Status File

router.get('/', _statusTasacion.default.getAll); //Obtener Status File Activos

router.get('/activos', _statusTasacion.default.getAllActivos); //Obtener Status File por ID

router.get('/:statusId', _statusTasacion.default.getOneById); //Crear Status File

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateStatusTasacion], _statusTasacion.default.createOne); //Actualizar Status File

router.patch('/:statusId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _statusTasacion.default.updateOneById); //Eliminar Status File

router.delete('/:statusId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _statusTasacion.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusTasacion.routes.js.map