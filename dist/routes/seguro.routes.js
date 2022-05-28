"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _seguro = _interopRequireDefault(require("../controllers/seguro.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Seguro

router.get('/', _seguro.default.getAll); //Obtener Seguro por ID

router.get('/:seguroId', _seguro.default.getOneById); //Ranking By Status por mes

router.post('/ranking/by-status', _seguro.default.getRankingByStatus); //Ranking By Tipo Seguro por mes

router.post('/ranking/by-type', _seguro.default.getRankingByTipo); //Ranking By Vehículo por mes

router.post('/ranking/by-vehicle', _seguro.default.getRankingByVehicle); //Ranking By Vendedor por mes

router.post('/ranking/by-seller', _seguro.default.getRankingBySeller); //Ranking By Vendedor por mes

router.post('/ranking/by-aseguradora', _seguro.default.getRankingByAseguradora);
router.post('/status-by-seller', _seguro.default.getSegurosByVendedor);
router.post('/vehicles-by-seller', _seguro.default.getSegurosByModelo);
router.post('/by-sucursal', _seguro.default.getBySucursalFecha);
router.post('/by-estado', _seguro.default.getSegurosByEstado);
router.post('/by-creator', _seguro.default.getSegurosByCreator); //Crear Seguro

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosAsistantOrAdmin], _seguro.default.createOne); //Actualizar Seguro

router.patch('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosAsistantOrAdmin], _seguro.default.updateOneById); //Eliminar Seguro

router.delete('/:seguroId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _seguro.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=seguro.routes.js.map