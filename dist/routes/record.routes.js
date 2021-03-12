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

router.get('/:recordId', recordCtrl.getRecordById); //Crear Inmatriculado

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistant, _middlewares.verifySignup.checkRolesExist], recordCtrl.createRecord); //Actualizar Inmatriculado

router.patch('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistant, _middlewares.verifySignup.checkRolesExist], recordCtrl.updateRecordById); //Remover Inmatriculado

router.delete('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], recordCtrl.deleteRecordById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=record.routes.js.map