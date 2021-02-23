"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCustomerById = exports.updateCustomerById = exports.getCustomerByDni = exports.getCustomerById = exports.getCustomers = exports.createCustomer = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var createCustomer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, document, cellphone, email, address, newCustomer, customerSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, document = _req$body.document, cellphone = _req$body.cellphone, email = _req$body.email, address = _req$body.address;
            newCustomer = new _Customer.default({
              name: name,
              document: document,
              cellphone: cellphone,
              email: email,
              address: address
            });
            _context.next = 5;
            return newCustomer.save();

          case 5:
            customerSaved = _context.sent;
            res.json({
              message: 'Cliente creado con éxito'
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createCustomer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCustomer = createCustomer;

var getCustomers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var customers;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Customer.default.find();

          case 3:
            customers = _context2.sent;
            res.send(customers);
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getCustomers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCustomers = getCustomers;

var getCustomerById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var customerId, customer;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            customerId = req.params.customerId;
            _context3.next = 4;
            return _Customer.default.findById(customerId);

          case 4:
            customer = _context3.sent;

            if (customer) {
              res.status(200).json(customer);
            } else {
              res.status(201).json({
                messsage: 'No existe cliente a mostrar'
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(409).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getCustomerById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCustomerById = getCustomerById;

var getCustomerByDni = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var customerDni, customer;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            customerDni = req.body.customerDni;
            _context4.next = 4;
            return _Customer.default.findOne({
              document: customerDni
            });

          case 4:
            customer = _context4.sent;

            if (!customer) {
              _context4.next = 9;
              break;
            }

            //console.log(customer);
            res.send(customer);
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(201).json({
              message: 'No existe el DNI en el Sistema'
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(403).json({
              message: 'No Autorizado'
            }));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function getCustomerByDni(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCustomerByDni = getCustomerByDni;

var updateCustomerById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var customerId, updateCustomer;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            customerId = req.params.customerId;
            _context5.next = 4;
            return _Customer.default.findByIdAndUpdate(customerId, req.body, {
              new: true
            });

          case 4:
            updateCustomer = _context5.sent;

            if (updateCustomer) {
              res.json({
                message: 'Cliente actualizado con éxito'
              });
            } else {
              res.status(201).json({
                messsage: 'No existe cliente a actualizar'
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(409).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function updateCustomerById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateCustomerById = updateCustomerById;

var deleteCustomerById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var customerId, deletedCustomer;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            customerId = req.params.customerId;
            _context6.next = 4;
            return _Customer.default.findByIdAndDelete(customerId);

          case 4:
            deletedCustomer = _context6.sent;

            if (deletedCustomer) {
              res.json({
                message: 'Cliente eliminado con éxito'
              });
            } else {
              res.status(401).json({
                messsage: 'Cliente no Existe'
              });
            }

            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(409).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function deleteCustomerById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteCustomerById = deleteCustomerById;
//# sourceMappingURL=customer.controller.js.map