"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var bancoCtrl = _interopRequireWildcard(require("../controllers/banco.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)(); //Obtener Banco

router.get('/', bancoCtrl.getBancos); //Obtener Banco Activos

router.get('/activos', bancoCtrl.getBancoByActivo); //Obtener Banco por ID

router.get('/:bancoId', bancoCtrl.getBancoById); //Crear Banco

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateBanco], _multer.default.single('avatar'), bancoCtrl.createBanco); //Actualizar Banco

router.patch('/:bancoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('avatar'), bancoCtrl.updateBanco); //Eliminar Banco

router.delete('/:bancoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], bancoCtrl.deleteBanco);
var _default = router;
exports.default = _default;
//# sourceMappingURL=banco.routes.js.map