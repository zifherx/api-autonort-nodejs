"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Tecnico = _interopRequireDefault(require("../models/Tecnico"));

var tecnicoCtrl = {};

tecnicoCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tecnico.default.find().sort({
              name: 1
            }).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: 'No existen Técnicos'
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

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

tecnicoCtrl.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var tecnicoId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tecnicoId = req.params.tecnicoId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Tecnico.default.findById(tecnicoId).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existe el Técnico'
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

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

tecnicoCtrl.getAllActivos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Tecnico.default.find({
              estado: true
            }).sort({
              name: 1
            }).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 3:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 8;
              break;
            }

            res.json({
              total_active: query.length,
              all_active: query
            });
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No hay Técnicos Activos'
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

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

tecnicoCtrl.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, document, cellphone, email, sucursalE, estado, objeto, sucursalFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, document = _req$body.document, cellphone = _req$body.cellphone, email = _req$body.email, sucursalE = _req$body.sucursalE, estado = _req$body.estado;
            _context4.prev = 1;
            objeto = new _Tecnico.default({
              name: name,
              document: document,
              cellphone: cellphone,
              email: email,
              estado: estado
            });
            _context4.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 8:
            objeto.sucursalE = sucursalFound._id;
            _context4.next = 11;
            return objeto.save();

          case 11:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Técnico creado con éxito'
              });
            }

            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 15]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

tecnicoCtrl.updateOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, document, cellphone, email, sucursalE, estado, tecnicoId, sucursalFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, document = _req$body2.document, cellphone = _req$body2.cellphone, email = _req$body2.email, sucursalE = _req$body2.sucursalE, estado = _req$body2.estado;
            tecnicoId = req.params.tecnicoId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            sucursalFound = _context5.sent;

            if (sucursalFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 8:
            _context5.next = 10;
            return _Tecnico.default.findByIdAndUpdate(tecnicoId, {
              name: name,
              document: document,
              cellphone: cellphone,
              email: email,
              sucursalE: sucursalFound._id,
              estado: estado
            });

          case 10:
            query = _context5.sent;

            if (!query) {
              _context5.next = 15;
              break;
            }

            res.json({
              message: 'Técnico actualizado con éxito'
            });
            _context5.next = 16;
            break;

          case 15:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe el Técnico a actualizar'
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

tecnicoCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var tecnicoId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            tecnicoId = req.params.tecnicoId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Tecnico.default.findByIdAndDelete(tecnicoId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Técnico eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe el Técnico a eliminar'
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

var _default = tecnicoCtrl;
exports.default = _default;
//# sourceMappingURL=tecnico.controller.js.map