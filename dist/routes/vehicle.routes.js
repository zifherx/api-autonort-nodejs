"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var vehicleCtrl = _interopRequireWildcard(require("../controllers/vehicles.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv], vehicleCtrl.createVehicle);

router.get('/', vehicleCtrl.getVehicles);
router.get('/:vehicleId', vehicleCtrl.getVehicleById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], vehicleCtrl.createVehicle);
router.post('/find', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], vehicleCtrl.getVehicleByCodigo);
router.put('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], vehicleCtrl.updateVehicleById);
router.delete('/:vehicleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], vehicleCtrl.deleteVehicleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=vehicle.routes.js.map