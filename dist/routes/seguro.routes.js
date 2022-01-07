"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var seguroCtrl = _interopRequireWildcard(require("../controllers/seguro.controller"));

var _middlewares = require("../middlewares");

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