"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var mafCtrl = _interopRequireWildcard(require("../controllers/maf.controller"));

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/:mafId', mafCtrl.getOneById);
router.get('/', mafCtrl.getAll);
router.post('/by-status', mafCtrl.obtenerRequestbyStatus);
router.post('/by-seller', mafCtrl.getAllByVendedor);
router.post('/by-sucursal', mafCtrl.getAllBySucursal);
router.post('/send-request', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isVendedor], mafCtrl.enviarCorreoSolicitud);
router.post('/zip', mafCtrl.downloadAndZipeo);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isVendedor], _multer.default.array('files', 50), mafCtrl.createRequest);
router.patch('/evidences/:mafId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isVendedor], _multer.default.array('files', 20), mafCtrl.agregarNewDocuments);
router.patch('/hot/:mafId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefSales], mafCtrl.requestaHot);
router.patch('/approve/:mafId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isExecutiveMaf], _multer.default.single('carta'), mafCtrl.actualizarReqAprobada);
router.patch('/executive/:mafId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isExecutiveMaf], mafCtrl.cambioStatusByMaf);
router.patch('/:mafId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isExecutiveMaf], mafCtrl.actualizarRequest);
router.delete('/:mafId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], mafCtrl.deleteRequest);
var _default = router;
exports.default = _default;
//# sourceMappingURL=maf.routes.js.map