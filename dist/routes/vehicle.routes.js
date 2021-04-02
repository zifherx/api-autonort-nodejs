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

router.get('/', vehicleCtrl.getVehicles); //Obtener Vehiculo por ID

router.get('/:vehicleId', vehicleCtrl.getVehicleById); //Crear Vehiculo

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateVehiculo], vehicleCtrl.createVehicle); //Obtener Vehiculo por COD-TDP

router.post('/find', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], vehicleCtrl.getVehicleByCodigo); //Actualizar Vehiculo

router.patch('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], vehicleCtrl.updateVehicleById); //Eliminar Vehiculo

router.delete('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], vehicleCtrl.deleteVehicleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=vehicle.routes.js.map