"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAnio = exports.getAnios = exports.getAnioById = exports.getAnioByActivo = exports.deleteAnio = exports.createAnio = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var getAnios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var Anios;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Anio.default.find().sort({
              name: 'asc'
            });

          case 3:
            Anios = _context.sent;

            if (!(Anios.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json(Anios);
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: 'No existen Años'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getAnios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAnios = getAnios;

var getAnioById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var anioId, anios;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            anioId = req.params.anioId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Anio.default.findById(anioId);

          case 4:
            anios = _context2.sent;

            if (!anios) {
              _context2.next = 9;
              break;
            }

            res.json(anios);
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existe Año'
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function getAnioById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAnioById = getAnioById;

var getAnioByActivo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var anios;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Anio.default.find({
              estado: true
            }).sort({
              name: 'asc'
            });

          case 3:
            anios = _context3.sent;

            if (!(anios.length > 0)) {
              _context3.next = 8;
              break;
            }

            res.json(anios);
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existen Años Activos'
            }));

          case 9:
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getAnioByActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAnioByActivo = getAnioByActivo;

var createAnio = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, estado, newAnio, anioCreado;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, estado = _req$body.estado;
            _context4.prev = 1;
            newAnio = new _Anio.default({
              name: name,
              estado: estado
            });
            _context4.next = 5;
            return newAnio.save();

          case 5:
            anioCreado = _context4.sent;

            if (anioCreado) {
              res.json({
                message: 'Año creado con éxito'
              });
            }

            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));

  return function createAnio(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createAnio = createAnio;

var updateAnio = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, estado, anioId, _updateAnio;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, estado = _req$body2.estado;
            anioId = req.params.anioId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Anio.default.findByIdAndUpdate(anioId, {
              name: name,
              estado: estado
            });

          case 5:
            _updateAnio = _context5.sent;

            if (!_updateAnio) {
              _context5.next = 10;
              break;
            }

            res.json({
              message: 'Año actualizado con éxito'
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe Anio a eliminar'
            }));

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function updateAnio(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateAnio = updateAnio;

var deleteAnio = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var anioId, _deleteAnio;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            anioId = req.params.anioId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Anio.default.findByIdAndDelete(anioId);

          case 4:
            _deleteAnio = _context6.sent;

            if (!_deleteAnio) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Año eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe Año a eliminar'
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

  return function deleteAnio(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteAnio = deleteAnio;
//# sourceMappingURL=anio.controller.js.map