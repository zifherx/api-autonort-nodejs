"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var financiamientoCtrl = _interopRequireWildcard(require("../controllers/financiamiento.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Financiamiento

router.get('/', financiamientoCtrl.getFinanciamientos); //Obtener Financiamiento Activos

router.get('/activos', financiamientoCtrl.getFinanciamientoByActivo); //Obtener Financiamiento por ID

router.get('/:financiamientoId', financiamientoCtrl.getFinanciamientoById); //Crear Financiamiento

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateFinanciamiento], financiamientoCtrl.createFinanciamiento); //Actualizar Financiamiento

router.patch('/:financiamientoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], financiamientoCtrl.updateFinanciamiento); //Eliminar Financiamiento

router.delete('/:financiamientoId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], financiamientoCtrl.deleteFinanciamiento);
var _default = router;
exports.default = _default;
//# sourceMappingURL=financiamiento.routes.js.map