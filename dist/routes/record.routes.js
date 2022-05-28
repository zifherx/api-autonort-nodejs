"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _record = _interopRequireDefault(require("../controllers/record.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Inmatriculados

router.get('/', _record.default.getAll); //Obtener Inmatriculado por Id

router.get('/:recordId', _record.default.getOneById); //Por Cliente

router.post('/by-seller', _record.default.getAllBySeller);
router.post('/count/by-estado', _record.default.countAllByStatus); //Get Tramites by Sucursal

router.post('/by-sucursal', _record.default.getAllBySucursal); //Crear Inmatriculado

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistantyAdministrador, _middlewares.verifyDuplicate.checkDuplicateTramite], _record.default.createOne); //Actualizar Inmatriculado

router.patch('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistantyAdministrador], _record.default.updateOneById); //Remover Inmatriculado

router.delete('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _record.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=record.routes.js.map