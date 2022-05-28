"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _vehicles = _interopRequireDefault(require("../controllers/vehicles.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Vehiculos

router.get('/', _vehicles.default.getAll); //Obtener Vehiculo por ID

router.get('/:vehicleId', _vehicles.default.getVehicleById); //Obtener Vehiculo por COD-TDP

router.post('/by-codtdp', _vehicles.default.getVehicleByCodigo); //Obtener Vehiculo por Marca

router.post('/by-marca', _vehicles.default.getVehiculeByMarca); //Obtener Vehiculo por Modelo

router.post('/by-modelo', _vehicles.default.getVehiculeByModelo); //Crear Vehiculo
// router.post('/', vehicleCtrl.createVehicle);

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin, _middlewares.verifyDuplicate.checkDuplicateVehiculo], _vehicles.default.createVehicle); //Actualizar Vehiculo
// router.patch('/:vehicleId', vehicleCtrl.updateVehicleById);

router.patch('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], _vehicles.default.updateVehicleById); //Eliminar Vehiculo
// router.delete('/:vehicleId', vehicleCtrl.deleteVehicleById);

router.delete('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _vehicles.default.deleteVehicleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=vehicle.routes.js.map