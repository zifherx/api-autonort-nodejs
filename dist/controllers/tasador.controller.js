"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTasador = exports.updateTasador = exports.createTasador = exports.getTasadorByActivo = exports.getTasadorById = exports.getTasadores = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Tasador = _interopRequireDefault(require("../models/Tasador"));

var getTasadores = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tasador.default.find().sort({
              name: 'asc'
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json(query);
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: 'No existen Tasadores'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(409).json({
              message: _context.t0.message
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getTasadores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasadores = getTasadores;

var getTasadorById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var tasadorId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tasadorId = req.params.tasadorId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Tasador.default.findById(tasadorId);

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json(query);
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existe Tasador'
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(409).json({
              message: _context2.t0.message
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function getTasadorById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTasadorById = getTasadorById;

var getTasadorByActivo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Tasador.default.find({
              status: "Activo"
            }).sort({
              name: 'asc'
            });

          case 3:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 8;
              break;
            }

            res.json(query);
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No hay Tasadores Activos'
            }));

          case 9:
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(409).json({
              message: _context3.t0.message
            });

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getTasadorByActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getTasadorByActivo = getTasadorByActivo;

var createTasador = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, document, sucursal, status, objeto, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, document = _req$body.document, sucursal = _req$body.sucursal, status = _req$body.status;
            _context4.prev = 1;
            objeto = new _Tasador.default({
              name: name,
              document: document,
              sucursal: sucursal,
              status: status
            });
            _context4.next = 5;
            return objeto.save();

          case 5:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Tasador creado con éxito'
              });
            }

            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(409).json({
              message: _context4.t0.message
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));

  return function createTasador(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createTasador = createTasador;

var updateTasador = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, document, sucursal, status, tasadorId, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, document = _req$body2.document, sucursal = _req$body2.sucursal, status = _req$body2.status;
            tasadorId = req.params.tasadorId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Tasador.default.findByIdAndUpdate(tasadorId, {
              name: name,
              document: document,
              sucursal: sucursal,
              status: status
            });

          case 5:
            query = _context5.sent;

            if (query) {
              res.json({
                message: 'Tasador actualizado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Tasador a actualizar'
              });
            }

            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(409).json({
              message: _context5.t0.message
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));

  return function updateTasador(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateTasador = updateTasador;

var deleteTasador = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var tasadorId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            tasadorId = req.params.tasadorId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Tasador.default.findByIdAndDelete(tasadorId);

          case 4:
            query = _context6.sent;

            if (query) {
              res.json({
                message: 'Tasador eliminado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Tasador a eliminar'
              });
            }

            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(409).json({
              message: _context6.t0.message
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function deleteTasador(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteTasador = deleteTasador;
//# sourceMappingURL=tasador.controller.js.map