"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var propsCtrl = _interopRequireWildcard(require("../controllers/props.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Vendedores

router.get('/', propsCtrl.getAll); //Obtener Accesorios activos de

router.get('/activos', propsCtrl.getAccesoriosActivos); //Obtener Vendedor por Id

router.get('/:propsId', propsCtrl.getAccesorioById); //Obtener Accesosrio por código Vehicular

router.post('/find', propsCtrl.getAccesorioByAuto); //Crear Vendedor

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefTunning, _middlewares.verifySignup.checkRolesExist], propsCtrl.createProp); //Actualizar Vendedor

router.patch('/:propsId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefTunning, _middlewares.verifySignup.checkRolesExist], propsCtrl.updatePropById); //Remover Vendedor

router.delete('/:propsId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefTunning, _middlewares.verifySignup.checkRolesExist], propsCtrl.deletePropById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=props.routes.js.map