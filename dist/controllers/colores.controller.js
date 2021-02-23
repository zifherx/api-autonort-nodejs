"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteColor = exports.updateColor = exports.createColor = exports.getColorById = exports.getColorByActivo = exports.getColors = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Colores = _interopRequireDefault(require("../models/Colores"));

var getColors = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var colores;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Colores.default.find();

          case 3:
            colores = _context.sent;

            if (colores.length > 0) {
              res.send(colores);
            } else {
              res.status(404).json({
                message: 'Vacío'
              });
            }

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getColors(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getColors = getColors;

var getColorByActivo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var colores;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Colores.default.find({
              status: "Activo"
            });

          case 3:
            colores = _context2.sent;

            if (colores.length > 0) {
              res.send(colores);
            } else {
              res.status(404).json({
                message: 'Vacío'
              });
            }

            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            //console.log(err);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getColorByActivo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getColorByActivo = getColorByActivo;

var getColorById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var colorId, color;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            colorId = req.params.colorId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Colores.default.findById(colorId);

          case 4:
            color = _context3.sent;

            if (color) {
              res.send(color);
            } else {
              res.status(404).json({
                message: 'No existe Color'
              });
            }

            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function getColorById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getColorById = getColorById;

var createColor = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, status, newColor, colorCreado;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, status = _req$body.status;
            _context4.prev = 1;
            newColor = new _Colores.default({
              name: name,
              status: status
            });
            _context4.next = 5;
            return newColor.save();

          case 5:
            colorCreado = _context4.sent;

            if (colorCreado) {
              res.json({
                message: 'Color creado con éxito'
              });
            }

            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));

  return function createColor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createColor = createColor;

var updateColor = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, status, colorId, _updateColor;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, status = _req$body2.status;
            colorId = req.params.colorId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Colores.default.findByIdAndUpdate(colorId, {
              name: name,
              status: status
            }, {
              new: true
            });

          case 5:
            _updateColor = _context5.sent;

            if (_updateColor) {
              res.json({
                message: 'Color actualizado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Color'
              });
            }

            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            //console.log(e);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));

  return function updateColor(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateColor = updateColor;

var deleteColor = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var colorId, _deleteColor;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            colorId = req.params.colorId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Colores.default.findByIdAndDelete(colorId);

          case 4:
            _deleteColor = _context6.sent;

            if (_deleteColor) {
              res.json({
                message: 'Color eliminado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Color'
              });
            }

            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            //console.log(e);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function deleteColor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteColor = deleteColor;
//# sourceMappingURL=colores.controller.js.map