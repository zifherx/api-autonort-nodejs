"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var vehicleCtrl = _interopRequireWildcard(require("../controllers/vehicles.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Vehiculos

router.get('/', vehicleCtrl.getAll); //Obtener Vehiculo por ID

router.get('/:vehicleId', vehicleCtrl.getVehicleById); //Obtener Vehiculo por COD-TDP

router.post('/find', vehicleCtrl.getVehicleByCodigo); //Obtener Vehiculo por Marca

router.post('/marca', vehicleCtrl.getVehiculeByMarca); //Obtener Vehiculo por Modelo

router.post('/modelo', vehicleCtrl.getVehiculeByModelo); //Crear Vehiculo
// router.post('/', vehicleCtrl.createVehicle);

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateVehiculo], vehicleCtrl.createVehicle); //Actualizar Vehiculo
// router.patch('/:vehicleId', vehicleCtrl.updateVehicleById);

router.patch('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdmin], vehicleCtrl.updateVehicleById); //Eliminar Vehiculo
// router.delete('/:vehicleId', vehicleCtrl.deleteVehicleById);

router.delete('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], vehicleCtrl.deleteVehicleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=vehicle.routes.js.map