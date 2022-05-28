"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _seller = _interopRequireDefault(require("../controllers/seller.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)(); //Obtener Vendedores

router.get('/', _seller.default.getAll);
router.get('/activos', _seller.default.getAllActive); //Obtener Vendedor por Id

router.get('/:sellerId', _seller.default.getSellerById); //Obtener Vendedor por Sucursal

router.post('/by-sucursal', [_middlewares.authJwt.verifyToken], _seller.default.getSellerBySucursal); // router.post('/brand', sellerCtrl.getSellerByMarcaAndSucursal);
//Obtener Vendedor por Nombre
// router.post('/name', sellerCtrl.getSellerByName);
//Crear Vendedor

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin, _middlewares.verifyDuplicate.checkDuplicateVendedor], _seller.default.createSeller); //Actualizar Vendedor

router.patch('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], _multer.default.single('avatar'), _seller.default.updateSellerById); //Remover Vendedor

router.delete('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], _seller.default.deleteSellerById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=seller.routes.js.map