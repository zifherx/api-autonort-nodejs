"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var seguroCtrl = _interopRequireWildcard(require("../controllers/seguro.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //Conteo Global de Solicitudes

router.get('/count', seguroCtrl.countAll); //Obtener Seguro

router.get('/', seguroCtrl.getAll); //Obtener Seguro por ID

router.get('/:seguroId', seguroCtrl.getSeguroById); //Conteo by Status

router.post('/count/by-status', seguroCtrl.countByStatusySucursal); //Conteo by Dates

router.post('/count/by-dates', seguroCtrl.countByDates); //Ranking By Status por mes

router.post('/ranking/by-status', seguroCtrl.getRankingByStatus); //Ranking By Tipo Seguro por mes

router.post('/ranking/by-type', seguroCtrl.getRankingByTipo); //Ranking By Vehículo por mes

router.post('/ranking/by-vehicle', seguroCtrl.getRankingByVehicle); //Ranking By Vendedor por mes

router.post('/ranking/by-seller', seguroCtrl.getRankingBySeller); //Ranking By Vendedor por mes

router.post('/ranking/by-aseguradora', seguroCtrl.getRankingByAseguradora);
router.post('/status-by-seller', seguroCtrl.getSegurosByVendedor);
router.post('/vehicles-by-seller', seguroCtrl.getSegurosByModelo); //Crear Seguro

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosAsistant, _middlewares.verifySignup.checkRolesExist], seguroCtrl.createSeguro); //Actualizar Seguro

router.patch('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosAsistant, _middlewares.verifySignup.checkRolesExist], seguroCtrl.updateSeguro); //Eliminar Seguro

router.delete('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], seguroCtrl.deleteSeguro);
var _default = router;
exports.default = _default;
//# sourceMappingURL=seguro.routes.js.map