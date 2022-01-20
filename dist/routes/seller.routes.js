"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var sellerCtrl = _interopRequireWildcard(require("../controllers/seller.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //Obtener Vendedores

router.get('/', sellerCtrl.getSellers); //Obtener Vendedor por Id

router.get('/:sellerId', sellerCtrl.getSellerById); //Obtener Vendedor por Sucursal

router.post('/find', sellerCtrl.getSellerBySucursal);
router.post('/brand', sellerCtrl.getSellerByMarcaAndSucursal); //Obtener Vendedor por Nombre

router.post('/name', sellerCtrl.getSellerByName); //Crear Vendedor

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin, _middlewares.verifyDuplicate.checkDuplicateVendedor], sellerCtrl.createSeller);
router.patch('/upload/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], _multer.default.single('photo'), sellerCtrl.uploadAvatar); //Actualizar Vendedor

router.patch('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], sellerCtrl.updateSellerById); //Remover Vendedor

router.delete('/:sellerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], sellerCtrl.deleteSellerById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=seller.routes.js.map