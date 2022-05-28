"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _TipoDocumento = _interopRequireDefault(require("../models/TipoDocumento"));

var _User = _interopRequireDefault(require("../models/User"));

var customerController = {};

customerController.createOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, tipoDocumento, document, representanteLegal, documentoRepresentante, cellphone, email, address, empleado, newCustomer, foundEmployee, tipoDocFound, query;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, tipoDocumento = _req$body.tipoDocumento, document = _req$body.document, representanteLegal = _req$body.representanteLegal, documentoRepresentante = _req$body.documentoRepresentante, cellphone = _req$body.cellphone, email = _req$body.email, address = _req$body.address, empleado = _req$body.empleado;
            _context.prev = 1;
            newCustomer = new _Customer.default({
              name: name,
              document: document,
              representanteLegal: representanteLegal,
              documentoRepresentante: documentoRepresentante,
              cellphone: cellphone,
              email: email,
              address: address
            });
            _context.next = 5;
            return _User.default.findOne({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context.sent;

            if (foundEmployee) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Empleado ".concat(empleado, " no encontrado")
            }));

          case 8:
            newCustomer.empleado = foundEmployee._id;
            _context.next = 11;
            return _TipoDocumento.default.findOne({
              abreviatura: tipoDocumento
            });

          case 11:
            tipoDocFound = _context.sent;

            if (tipoDocFound) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Documento de identidad ".concat(tipoDocumento, " no encontrado")
            }));

          case 14:
            newCustomer.tipoDocumento = tipoDocFound._id;
            _context.next = 17;
            return newCustomer.save();

          case 17:
            query = _context.sent;

            if (query) {
              res.json({
                message: "Cliente creado con éxito"
              });
            }

            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 21]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

customerController.getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Customer.default.find().sort({
              name: 1
            }).populate({
              path: 'tipoDocumento',
              select: 'name abreviatura longitud'
            }).populate({
              path: "empleado",
              select: "name username"
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existen Clientes"
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

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

customerController.getOneById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var customerId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            customerId = req.params.customerId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Customer.default.findById(customerId).populate({
              path: 'tipoDocumento',
              select: 'name abreviatura longitud'
            }).populate({
              path: 'empleado',
              select: 'name username'
            });

          case 4:
            query = _context3.sent;

            if (!query) {
              _context3.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              messsage: "No existe cliente"
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

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

customerController.getClienteByDNI = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var document, query;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            document = req.body.document;
            _context4.prev = 1;
            _context4.next = 4;
            return _Customer.default.findOne({
              document: document
            }).populate({
              path: 'tipoDocumento',
              select: 'name abreviatura longitud'
            }).populate({
              path: 'empleado',
              select: 'name username'
            });

          case 4:
            query = _context4.sent;

            if (!query) {
              _context4.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: "El documento ".concat(document, " no encontrado")
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

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

customerController.updateOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var customerId, _req$body2, name, tipoDocumento, document, representanteLegal, documentoRepresentante, cellphone, email, address, tipoDocFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            customerId = req.params.customerId;
            _req$body2 = req.body, name = _req$body2.name, tipoDocumento = _req$body2.tipoDocumento, document = _req$body2.document, representanteLegal = _req$body2.representanteLegal, documentoRepresentante = _req$body2.documentoRepresentante, cellphone = _req$body2.cellphone, email = _req$body2.email, address = _req$body2.address;
            _context5.prev = 2;
            _context5.next = 5;
            return _TipoDocumento.default.findOne({
              abreviatura: tipoDocumento
            });

          case 5:
            tipoDocFound = _context5.sent;

            if (tipoDocFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Documento de identidad ".concat(tipoDocumento, " no encontrado")
            }));

          case 8:
            _context5.next = 10;
            return _Customer.default.findByIdAndUpdate(customerId, {
              name: name,
              tipoDocumento: tipoDocFound._id,
              document: document,
              representanteLegal: representanteLegal,
              documentoRepresentante: documentoRepresentante,
              cellphone: cellphone,
              email: email,
              address: address
            });

          case 10:
            query = _context5.sent;

            if (!query) {
              _context5.next = 15;
              break;
            }

            res.json({
              message: "Cliente actualizado con éxito"
            });
            _context5.next = 16;
            break;

          case 15:
            return _context5.abrupt("return", res.status(404).json({
              messsage: "No existe cliente a actualizar"
            }));

          case 16:
            _context5.next = 22;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 18]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

customerController.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var customerId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            customerId = req.params.customerId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Customer.default.findByIdAndDelete(customerId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: "Cliente eliminado con éxito"
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              messsage: "No existe cliente a eliminar"
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

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var _default = customerController;
exports.default = _default;
//# sourceMappingURL=customer.controller.js.map