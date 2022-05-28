"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _conexos = _interopRequireDefault(require("../controllers/conexos.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Conexo

router.get('/', _conexos.default.getAll); //Obtener Conexo Activos

router.get('/activos', _conexos.default.getAllActivos); //Obtener Conexo por ID

router.get('/:conexoId', _conexos.default.getOneById); //Obtener Asesor x Sucursal

router.post('/by-sucursal', _conexos.default.getAsesorxSucursalyArea);
router.post('/by-area', _conexos.default.getAsesoresxArea);
router.post('/by-name', _conexos.default.getAsesorByName); //Crear Conexo

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateConexo], _conexos.default.createOne); //Actualizar Conexo

router.patch('/:conexoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _conexos.default.updateOneById); //Eliminar Conexo

router.delete('/:conexoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _conexos.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=conexos.routes.js.map