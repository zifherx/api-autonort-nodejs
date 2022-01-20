"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var vehicleCtrl = _interopRequireWildcard(require("../controllers/vehicles.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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