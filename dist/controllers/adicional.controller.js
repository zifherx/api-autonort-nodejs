"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAdicionalById = exports.updateAdicionalById = exports.getAdicionalActivos = exports.getOne = exports.getAll = exports.createAdicional = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Adicional = _interopRequireDefault(require("../models/Adicional"));

var _User = _interopRequireDefault(require("../models/User"));

var createAdicional = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, descripcion, bono, startDate, endDate, status, empleado, objeto, foundEmployee, query;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, descripcion = _req$body.descripcion, bono = _req$body.bono, startDate = _req$body.startDate, endDate = _req$body.endDate, status = _req$body.status, empleado = _req$body.empleado;
            _context.prev = 1;
            objeto = new _Adicional.default({
              name: name,
              descripcion: descripcion,
              bono: bono,
              startDate: startDate,
              endDate: endDate,
              status: status
            });
            _context.next = 5;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context.sent;
            objeto.empleado = foundEmployee.map(function (em) {
              return em._id;
            });
            _context.next = 9;
            return objeto.save();

          case 9:
            query = _context.sent;

            if (query) {
              res.json({
                message: 'Adicional creada con éxito'
              });
            }

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(409).json({
              message: _context.t0.message
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));

  return function createAdicional(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAdicional = createAdicional;

var getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Adicional.default.find().sort({
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
              message: 'No existen Adicionales'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(409).json({
              message: _context2.t0.message
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var adicionalId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            adicionalId = req.params.adicionalId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Adicional.default.findById(adicionalId);

          case 4:
            query = _context3.sent;

            if (!query) {
              _context3.next = 9;
              break;
            }

            res.json(query);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existe Adicional'
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(409).json({
              message: _context3.t0.message
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function getOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var getAdicionalActivos = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Adicional.default.find({
              status: 'Activo'
            }).sort({
              name: 'asc'
            });

          case 3:
            query = _context4.sent;

            if (query.length > 0) {
              res.json(query);
            } else {
              res.status(404).json({
                message: 'No existen Adicionales Activos'
              });
            }

            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(409).json({
              message: _context4.t0.message
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getAdicionalActivos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAdicionalActivos = getAdicionalActivos;

var updateAdicionalById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var adicionalId, _req$body2, name, descripcion, bono, startDate, endDate, status, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            adicionalId = req.params.adicionalId;
            _req$body2 = req.body, name = _req$body2.name, descripcion = _req$body2.descripcion, bono = _req$body2.bono, startDate = _req$body2.startDate, endDate = _req$body2.endDate, status = _req$body2.status;
            _context5.prev = 2;
            _context5.next = 5;
            return _Adicional.default.findByIdAndUpdate(adicionalId, {
              name: name,
              descripcion: descripcion,
              bono: bono,
              startDate: startDate,
              endDate: endDate,
              status: status
            });

          case 5:
            query = _context5.sent;

            if (query) {
              res.json({
                message: 'Adicional actualizada con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Adicional a actualizar'
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

  return function updateAdicionalById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateAdicionalById = updateAdicionalById;

var deleteAdicionalById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var adicionalId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            adicionalId = req.params.adicionalId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Adicional.default.findByIdAndDelete(adicionalId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Adicional eliminada con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'Adicional no existe a eliminar'
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

  return function deleteAdicionalById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteAdicionalById = deleteAdicionalById;
//# sourceMappingURL=adicional.controller.js.map