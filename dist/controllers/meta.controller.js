"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Meta = _interopRequireDefault(require("../models/Meta"));

var _User = _interopRequireDefault(require("../models/User"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Area = _interopRequireDefault(require("../models/Area"));

var metaCtrl = {};

metaCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Meta.default.find().sort({
              name: 1
            }).populate({
              path: 'sucursal',
              select: 'name'
            }).populate({
              path: 'area',
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
              message: 'No existen metas'
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

metaCtrl.getAllActivos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Meta.default.find({
              estado: true
            }).sort({
              name: 'asc'
            }).populate({
              path: 'sucursal',
              select: 'name'
            }).populate({
              path: 'area',
              select: 'name'
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json({
              total_active: query.length,
              all_active: query
            });
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen metas'
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

metaCtrl.getOneById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var metaId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            metaId = req.params.metaId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Meta.default.findById(metaId).populate({
              path: 'sucursal',
              select: 'name'
            }).populate({
              path: 'area',
              select: 'name'
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
              message: 'No existe meta'
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

metaCtrl.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, sucursal, area, tipo, fecha, mes, valor, estado, createdBy, obj, sucursalFound, areaFound, employeeFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, sucursal = _req$body.sucursal, area = _req$body.area, tipo = _req$body.tipo, fecha = _req$body.fecha, mes = _req$body.mes, valor = _req$body.valor, estado = _req$body.estado, createdBy = _req$body.createdBy;
            _context4.prev = 1;
            obj = new _Meta.default({
              name: name,
              tipo: tipo,
              fecha: fecha,
              mes: mes,
              valor: valor,
              estado: estado
            });
            _context4.next = 5;
            return _Sucursal.default.findOne({
              name: sucursal
            });

          case 5:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursal, " no encontrado")
            }));

          case 8:
            obj.sucursal = sucursalFound._id;
            _context4.next = 11;
            return _Area.default.findOne({
              name: area
            });

          case 11:
            areaFound = _context4.sent;

            if (areaFound) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Area ".concat(area, " no encontrado")
            }));

          case 14:
            obj.area = areaFound._id;
            _context4.next = 17;
            return _User.default.findOne({
              username: createdBy
            });

          case 17:
            employeeFound = _context4.sent;

            if (employeeFound) {
              _context4.next = 20;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 20:
            obj.createdBy = employeeFound._id;
            _context4.next = 23;
            return obj.save();

          case 23:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Meta creada con éxito'
              });
            }

            _context4.next = 31;
            break;

          case 27:
            _context4.prev = 27;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 31:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 27]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

metaCtrl.updateOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var metaId, _req$body2, name, sucursal, area, tipo, fecha, mes, valor, estado, sucursalFound, areaFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            metaId = req.params.metaId;
            _req$body2 = req.body, name = _req$body2.name, sucursal = _req$body2.sucursal, area = _req$body2.area, tipo = _req$body2.tipo, fecha = _req$body2.fecha, mes = _req$body2.mes, valor = _req$body2.valor, estado = _req$body2.estado; // console.log(req.body);

            _context5.prev = 2;
            _context5.next = 5;
            return _Sucursal.default.find({
              name: sucursal
            });

          case 5:
            sucursalFound = _context5.sent;

            if (sucursalFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursal, " no encontrado")
            }));

          case 8:
            _context5.next = 10;
            return _Area.default.findOne({
              name: area
            });

          case 10:
            areaFound = _context5.sent;

            if (areaFound) {
              _context5.next = 13;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Area ".concat(area, " no encontrado")
            }));

          case 13:
            _context5.next = 15;
            return _Meta.default.findByIdAndUpdate(metaId, {
              name: name,
              sucursal: sucursalFound.map(function (a) {
                return a._id;
              }),
              area: areaFound._id,
              tipo: tipo,
              fecha: fecha,
              mes: mes,
              valor: valor,
              estado: estado
            });

          case 15:
            query = _context5.sent;

            if (!query) {
              _context5.next = 20;
              break;
            }

            res.json({
              message: 'Meta actualizada con éxito'
            });
            _context5.next = 21;
            break;

          case 20:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe la Meta a actualizar'
            }));

          case 21:
            _context5.next = 27;
            break;

          case 23:
            _context5.prev = 23;
            _context5.t0 = _context5["catch"](2);
            console.error(er);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 27:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 23]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

metaCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var metaId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            metaId = req.params.metaId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Meta.default.findByIdAndRemove(metaId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Meta eliminada con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe la Meta a eliminar'
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.error(er);
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

var _default = metaCtrl;
exports.default = _default;
//# sourceMappingURL=meta.controller.js.map