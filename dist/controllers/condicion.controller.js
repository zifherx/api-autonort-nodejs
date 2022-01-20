"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCondicion = exports.getCondiciones = exports.getCondicionById = exports.getCondicionByActivo = exports.deleteCondicion = exports.createCondicion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Condicion = _interopRequireDefault(require("../models/Condicion"));

var getCondiciones = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Condicion.default.find().sort({
              name: 'asc'
            });

          case 3:
            query = _context.sent;

            if (query.length > 0) {
              res.send(query);
            } else {
              res.status(404).json({
                message: 'No existen Condiciones'
              });
            }

            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(409).json({
              message: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getCondiciones(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCondiciones = getCondiciones;

var getCondicionById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var condicionId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            condicionId = req.params.condicionId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Condicion.default.findById(condicionId);

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
              message: 'No existe Condición'
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

  return function getCondicionById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCondicionById = getCondicionById;

var getCondicionByActivo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Condicion.default.find({
              status: "Activo"
            }).sort({
              name: 'asc'
            });

          case 3:
            query = _context3.sent;

            if (!query) {
              _context3.next = 8;
              break;
            }

            res.json(query);
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existen Condiciones Activas'
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

  return function getCondicionByActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCondicionByActivo = getCondicionByActivo;

var createCondicion = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, status, objeto, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, status = _req$body.status;
            _context4.prev = 1;
            objeto = new _Condicion.default({
              name: name,
              status: status
            });
            _context4.next = 5;
            return objeto.save();

          case 5:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Condición creada con éxito'
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

  return function createCondicion(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createCondicion = createCondicion;

var updateCondicion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, status, condicionId, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, status = _req$body2.status;
            condicionId = req.params.condicionId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Condicion.default.findByIdAndUpdate(condicionId, {
              name: name,
              status: status
            }, {
              new: true
            });

          case 5:
            query = _context5.sent;

            if (!query) {
              _context5.next = 10;
              break;
            }

            res.json({
              message: 'Condición actualizada con éxito'
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe Condición a actualizar'
            }));

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(409).json({
              message: _context5.t0.message
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function updateCondicion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateCondicion = updateCondicion;

var deleteCondicion = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var condicionId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            condicionId = req.params.condicionId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Condicion.default.findByIdAndDelete(condicionId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Condición eliminada con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe Condicion a eliminar'
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(409).json({
              message: _context6.t0.message
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function deleteCondicion(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteCondicion = deleteCondicion;
//# sourceMappingURL=condicion.controller.js.map