"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _aservicios = _interopRequireDefault(require("../controllers/aservicios.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)(); //Obtener Asesor de Servicios Activos

router.get('/activos', _aservicios.default.getAllByActivo); //Obtener Asesor de Servicios por ID

router.get('/:asesorId', _aservicios.default.getOneById); //Obtener Asesor de Servicios

router.get('/', _aservicios.default.getAll); //Obtener Asesor de Servicios por Sucrsal

router.post('/by-sucursal', _aservicios.default.getBySucursal); //Crear Asesor de Servicios

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateAServicios], _multer.default.single('avatar'), _aservicios.default.createOne); //Actualizar Asesor de Servicios

router.patch('/:asesorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('avatar'), _aservicios.default.updatedOneById); //Eliminar Asesor de Servicios

router.delete('/:asesorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _aservicios.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=aservicios.routes.js.map