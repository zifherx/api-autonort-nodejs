"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var sellerCtrl = _interopRequireWildcard(require("../controllers/seller.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Vendedores

router.get('/', sellerCtrl.getSellers); //Obtener Vendedor por Id

router.get('/:sellerId', sellerCtrl.getSellerById); //Crear Vendedor

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], sellerCtrl.createSeller); //Actualizar Vendedor

router.put('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], sellerCtrl.updateSellerById); //Remover Vendedor

router.delete('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], sellerCtrl.deleteSellerById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=seller.routes.js.map