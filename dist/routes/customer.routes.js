"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var customerCtrl = _interopRequireWildcard(require("../controllers/customer.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Clientes

router.get('/', customerCtrl.getCustomers); //Obtener Cliente por Id

router.get('/:customerId', customerCtrl.getCustomerById); //Obtener Cliente por DNI

router.post('/find', customerCtrl.getCustomerByDni); //Crear Cliente

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosOrADV, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateCliente], customerCtrl.createCustomer); //Actualizar Cliente

router.patch('/:customerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], customerCtrl.updateCustomerById); //Remover Cliente

router.delete('/:customerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], customerCtrl.deleteCustomerById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=customer.routes.js.map