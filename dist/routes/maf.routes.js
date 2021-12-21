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
router.post('/count/by-sucursal', mafCtrl.getCountAll);
router.post('/count/by-status', mafCtrl.getCountByStatus);
router.post('/by-status', mafCtrl.obtenerRequestbyStatus);
router.post('/by-seller', mafCtrl.getAllByVendedor);
router.post('/by-sucursal', mafCtrl.getAllBySucursal);
router.post('/ranking/status', mafCtrl.getRankingByStatus);
router.post('/ranking/seller', mafCtrl.getRankingByVendedor);
router.post('/ranking/vehicle', mafCtrl.getRankingByVehicle);
router.post('/vehicles-by-seller', mafCtrl.getVehiclesBySeller);
router.post('/status-by-seller', mafCtrl.getSolicitudesBySeller);
router.post('/send-request', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isVendedor], mafCtrl.enviarCorreoSolicitud);
router.post('/zip', _multer.default.single('fileZip'), mafCtrl.descargaYZip);
router.post('/send-message', mafCtrl.sendMessageWsp);
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