"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var propsCtrl = _interopRequireWildcard(require("../controllers/props.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Accesorios

router.get('/', propsCtrl.getAll); //Obtener Accesorios activos

router.get('/activos', propsCtrl.getAccesoriosActivos); //Obtener Accesorio por Id

router.get('/:propsId', propsCtrl.getAccesorioById); //Obtener Accesorio por código Vehicular

router.post('/find', propsCtrl.getAccesorioByAuto); //Crear Accesorio

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateAccesorio], propsCtrl.createProp); //Actualizar Accesorio

router.patch('/:propsId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], propsCtrl.updatePropById); //Remover Accesorio

router.delete('/:propsId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], propsCtrl.deletePropById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=props.routes.js.map