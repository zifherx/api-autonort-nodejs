"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCustomerById = exports.getCustomers = exports.getCustomerById = exports.getCustomerByDni = exports.deleteCustomerById = exports.createCustomer = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _User = _interopRequireDefault(require("../models/User"));

var createCustomer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, typeDocument, document, representanteLegal, documentoRepresentante, cellphone, email, address, empleado, newCustomer, foundEmployee, customerSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, typeDocument = _req$body.typeDocument, document = _req$body.document, representanteLegal = _req$body.representanteLegal, documentoRepresentante = _req$body.documentoRepresentante, cellphone = _req$body.cellphone, email = _req$body.email, address = _req$body.address, empleado = _req$body.empleado;
            _context.prev = 1;
            newCustomer = new _Customer.default({
              name: name,
              typeDocument: typeDocument,
              document: document,
              representanteLegal: representanteLegal,
              documentoRepresentante: documentoRepresentante,
              cellphone: cellphone,
              email: email,
              address: address
            });
            _context.next = 5;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context.sent;
            newCustomer.empleado = foundEmployee.map(function (em) {
              return em._id;
            });
            _context.next = 9;
            return newCustomer.save();

          case 9:
            customerSaved = _context.sent;

            if (customerSaved) {
              res.json({
                message: 'Cliente creado con éxito'
              });
            }

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));

  return function createCustomer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCustomer = createCustomer;

var getCustomers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Customer.default.find().populate({
              path: 'empleado',
              select: 'name username'
            }).sort({
              name: 'asc'
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json(query);
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen Clientes'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
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
            customerId = req.params.customerId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Customer.default.findById(customerId);

          case 4:
            customer = _context3.sent;

            if (!customer) {
              _context3.next = 9;
              break;
            }

            res.json(customer);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              messsage: 'No existe cliente'
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
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
            customerDni = req.body.customerDni;
            _context4.prev = 1;
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

            res.json(customer);
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: 'No existe el DNI en el Sistema'
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 12]]);
  }));

  return function getCustomerByDni(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCustomerByDni = getCustomerByDni;

var updateCustomerById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var customerId, _req$body2, name, typeDocument, document, representanteLegal, documentoRepresentante, cellphone, email, address, updateCustomer;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            customerId = req.params.customerId;
            _req$body2 = req.body, name = _req$body2.name, typeDocument = _req$body2.typeDocument, document = _req$body2.document, representanteLegal = _req$body2.representanteLegal, documentoRepresentante = _req$body2.documentoRepresentante, cellphone = _req$body2.cellphone, email = _req$body2.email, address = _req$body2.address;
            _context5.prev = 2;
            _context5.next = 5;
            return _Customer.default.findByIdAndUpdate(customerId, {
              name: name,
              typeDocument: typeDocument,
              document: document,
              representanteLegal: representanteLegal,
              documentoRepresentante: documentoRepresentante,
              cellphone: cellphone,
              email: email,
              address: address
            });

          case 5:
            updateCustomer = _context5.sent;

            if (updateCustomer) {
              res.json({
                message: 'Cliente actualizado con éxito'
              });
            } else {
              res.status(404).json({
                messsage: 'No existe Cliente a actualizar'
              });
            }

            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
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
            customerId = req.params.customerId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Customer.default.findByIdAndDelete(customerId);

          case 4:
            deletedCustomer = _context6.sent;

            if (!deletedCustomer) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Cliente eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              messsage: 'No existe Cliente a eliminar'
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function deleteCustomerById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteCustomerById = deleteCustomerById;
//# sourceMappingURL=customer.controller.js.map