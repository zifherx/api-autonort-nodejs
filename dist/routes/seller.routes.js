"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var sellerCtrl = _interopRequireWildcard(require("../controllers/seller.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)(); //Obtener Vendedores

router.get('/', sellerCtrl.getSellers); //Obtener Vendedor por Id

router.get('/:sellerId', sellerCtrl.getSellerById); //Obtener Vendedor por Sucursal

router.post('/find', sellerCtrl.getSellerBySucursal);
router.post('/brand', sellerCtrl.getSellerByMarcaAndSucursal); //Obtener Vendedor por Nombre

router.post('/name', sellerCtrl.getSellerByName); //Crear Vendedor

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateVendedor], sellerCtrl.createSeller);
router.patch('/upload/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('photo'), sellerCtrl.uploadAvatar); //Actualizar Vendedor

router.patch('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin, _middlewares.verifySignup.checkRolesExist], sellerCtrl.updateSellerById); //Remover Vendedor

router.delete('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin, _middlewares.verifySignup.checkRolesExist], sellerCtrl.deleteSellerById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=seller.routes.js.map