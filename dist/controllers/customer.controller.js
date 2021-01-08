"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCustomerById = exports.updateCustomerById = exports.getCustomerByDni = exports.getCustomerById = exports.getCustomers = exports.createCustomer = void 0;

var _Customer = _interopRequireDefault(require("../models/Customer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCustomer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, lastname, document, cellphone, email, address, newCustomer, customerSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, document = _req$body.document, cellphone = _req$body.cellphone, email = _req$body.email, address = _req$body.address;
            newCustomer = new _Customer.default({
              name: name,
              lastname: lastname,
              document: document,
              cellphone: cellphone,
              email: email,
              address: address
            });
            _context.next = 5;
            return newCustomer.save();

          case 5:
            customerSaved = _context.sent;
            res.status(201).json(customerSaved);
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var customers;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Customer.default.find();

          case 3:
            customers = _context2.sent;

            if (customers) {
              res.status(200).json(customers);
            } else {
              res.status(201).json({
                messsage: 'No existen clientes a mostrar'
              });
            }

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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var customerId, customer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
            res.status(401).json({
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var customerDni, customer;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
            console.log(customer);

            if (customer) {
              console.log(customer);
              res.status(200).json(customer);
            } else {
              res.status(201).json({
                messsage: 'No existe cliente a mostrar'
              });
            }

            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function getCustomerByDni(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCustomerByDni = getCustomerByDni;

var updateCustomerById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var customerId, updateCustomer;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
              res.status(200).json(updateCustomer);
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
            res.status(401).json({
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
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var customerId, deletedCustomer;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
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
              res.status(200).json({
                messsage: 'Cliente Eliminado'
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
            res.status(401).json({
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