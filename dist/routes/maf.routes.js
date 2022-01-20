"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var mafCtrl = _interopRequireWildcard(require("../controllers/maf.controller"));

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get('/:mafId', mafCtrl.getOneById);
router.get('/', mafCtrl.getAll);
router.post('/count/by-sucursal', mafCtrl.getCountAll);
router.post('/count/by-status', mafCtrl.getCountByStatus);
router.post('/by-status', mafCtrl.obtenerRequestbyStatus);
router.post('/by-seller', mafCtrl.getAllByVendedor);
router.post('/by-sucursal', mafCtrl.getAllBySucursal);
router.post('/ranking/status', mafCtrl.getRankingByStatus);
router.post('/test-ranking', mafCtrl.testRanking);
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