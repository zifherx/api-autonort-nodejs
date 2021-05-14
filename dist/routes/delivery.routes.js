"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var deliveryCtrl = _interopRequireWildcard(require("../controllers/delivery.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Delivery

router.get('/', deliveryCtrl.getAll); //Obtener Delivery por Id

router.get('/:deliveryId', deliveryCtrl.getDeliveryById); //Crear Delivery

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isCSAsistant, _middlewares.verifySignup.checkRolesExist], deliveryCtrl.createDelivery); //Actualizar Delivery

router.patch('/:deliveryId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isCSAsistant, _middlewares.verifySignup.checkRolesExist], deliveryCtrl.updateDeliveryById); //Remover Delivery

router.delete('/:deliveryId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isCSAsistant, _middlewares.verifySignup.checkRolesExist], deliveryCtrl.deleteDeliveryById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=delivery.routes.js.map