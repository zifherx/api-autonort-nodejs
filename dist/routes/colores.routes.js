"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var colorCtrl = _interopRequireWildcard(require("../controllers/colores.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Color

router.get('/', colorCtrl.getColors); //Obtener Color Activos

router.get('/activos', colorCtrl.getColorByActivo); //Obtener Color por ID

router.get('/:colorId', colorCtrl.getColorById); //Crear Modelo

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], colorCtrl.createColor); //Actualizar Modelo

router.patch('/:colorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], colorCtrl.updateColor); //Eliminar Modelo

router.delete('/:colorId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], colorCtrl.deleteColor);
var _default = router;
exports.default = _default;
//# sourceMappingURL=colores.routes.js.map