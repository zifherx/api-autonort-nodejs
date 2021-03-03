"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUbicacion = exports.updateUbicacion = exports.createUbicacion = exports.getUbicacionByActivo = exports.getUbicacionById = exports.getUbicaciones = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Ubicacion = _interopRequireDefault(require("../models/Ubicacion"));

var getUbicaciones = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Ubicacion.default.find();

          case 3:
            query = _context.sent;

            if (query.length > 0) {
              res.send(query);
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

  return function getUbicaciones(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUbicaciones = getUbicaciones;

var getUbicacionById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var ubicacionId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ubicacionId = req.params.ubicacionId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Ubicacion.default.findById(ubicacionId);

          case 4:
            query = _context2.sent;

            if (query) {
              res.send(query);
            } else {
              res.status(404).json({
                message: 'No existe'
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getUbicacionById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUbicacionById = getUbicacionById;

var getUbicacionByActivo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Ubicacion.default.find({
              status: "Activo"
            });

          case 3:
            query = _context3.sent;

            if (query) {
              res.send(query);
            } else {
              res.status(404).json({
                message: 'Vacío'
              });
            }

            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            //console.log(err);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getUbicacionByActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUbicacionByActivo = getUbicacionByActivo;

var createUbicacion = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, status, objeto, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, status = _req$body.status;
            _context4.prev = 1;
            objeto = new _Ubicacion.default({
              name: name,
              status: status
            });
            _context4.next = 5;
            return objeto.save();

          case 5:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Ubicación creado con éxito'
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

  return function createUbicacion(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createUbicacion = createUbicacion;

var updateUbicacion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, status, ubicacionId, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, status = _req$body2.status;
            ubicacionId = req.params.ubicacionId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Ubicacion.default.findByIdAndUpdate(ubicacionId, {
              name: name,
              status: status
            }, {
              new: true
            });

          case 5:
            query = _context5.sent;

            if (query) {
              res.json({
                message: 'Ubicación actualizado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Ubicación'
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

  return function updateUbicacion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUbicacion = updateUbicacion;

var deleteUbicacion = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var ubicacionId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            ubicacionId = req.params.ubicacionId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Ubicacion.default.findByIdAndDelete(ubicacionId);

          case 4:
            query = _context6.sent;

            if (query) {
              res.json({
                message: 'Ubicación eliminado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Ubicación'
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

  return function deleteUbicacion(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteUbicacion = deleteUbicacion;
//# sourceMappingURL=ubicacion.controller.js.map