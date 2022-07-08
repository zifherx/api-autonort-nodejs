"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _customer = _interopRequireDefault(require("../controllers/customer.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Clientes

router.get('/', _customer.default.getAll); //Obtener Cliente por Id

router.get('/:customerId', _customer.default.getOneById); //Obtener Cliente por DNI

router.post('/find', _customer.default.getClienteByDNI); //Crear Cliente

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin, _middlewares.verifyDuplicate.checkDuplicateCliente], _customer.default.createOne); //Actualizar Cliente

router.patch('/:customerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin], _customer.default.updateOneById); //Remover Cliente

router.delete('/:customerId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _customer.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=customer.routes.js.map