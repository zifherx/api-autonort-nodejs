"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _planMaf = _interopRequireDefault(require("../controllers/planMaf.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Anio

router.get('/', _planMaf.default.getAll); //Obtener Anio Activos

router.get('/activos', _planMaf.default.getAllActivos); //Obtener Anio por ID

router.get('/:planId', _planMaf.default.getOneById); //Crear Anio

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicatePlanMAF], _planMaf.default.createOne); //Actualizar Anio

router.patch('/:planId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _planMaf.default.updateOneById); //Eliminar Anio

router.delete('/:planId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _planMaf.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=planMaf.routes.js.map