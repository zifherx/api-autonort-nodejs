"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var recordCtrl = _interopRequireWildcard(require("../controllers/record.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Inmatriculados

router.get('/', recordCtrl.getRecords); //Obtener Inmatriculado por Id

router.get('/:recordId', recordCtrl.getRecordById); //Get Tramites by Sucursal

router.post('/sucursal', recordCtrl.getRecordBySucursal); //Obtener Inmatriculado por Status

router.post('/estado', recordCtrl.getRecordByTarjetayPlaca); //Crear Inmatriculado

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistant, _middlewares.verifyDuplicate.checkDuplicateTramite], recordCtrl.createRecord); //Actualizar Inmatriculado

router.patch('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistant], recordCtrl.updateRecordById); //Remover Inmatriculado

router.delete('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistant], recordCtrl.deleteRecordById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=record.routes.js.map