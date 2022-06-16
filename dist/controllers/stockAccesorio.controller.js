"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _StockAccesorio = _interopRequireDefault(require("../models/StockAccesorio"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Mes = _interopRequireDefault(require("../models/Mes"));

var _User = _interopRequireDefault(require("../models/User"));

var stockController = {};

stockController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _StockAccesorio.default.find().sort({
              fecha: -1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "anioE",
              select: "name"
            }).populate({
              path: "mesE",
              select: "name"
            }).populate({
              path: "createdBy",
              select: "name username"
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
              message: "No existen registros"
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

stockController.createOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var _req$body, cod_interno, temporada, sucursal, sucursalE, fecha, anio, anioE, mes, mesE, importe, createdBy, newObj, sucursalFound, anioFound, mesFound, userFound, query;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, cod_interno = _req$body.cod_interno, temporada = _req$body.temporada, sucursal = _req$body.sucursal, sucursalE = _req$body.sucursalE, fecha = _req$body.fecha, anio = _req$body.anio, anioE = _req$body.anioE, mes = _req$body.mes, mesE = _req$body.mesE, importe = _req$body.importe, createdBy = _req$body.createdBy;
            _context2.prev = 1;
            newObj = new _StockAccesorio.default({
              cod_interno: cod_interno,
              temporada: temporada,
              sucursal: sucursal,
              fecha: fecha,
              anio: anio,
              mes: mes,
              importe: importe
            });
            _context2.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            sucursalFound = _context2.sent;

            if (sucursalFound) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrado")
            }));

          case 8:
            newObj.sucursalE = sucursalFound._id;
            _context2.next = 11;
            return _Anio.default.findOne({
              name: anioE
            });

          case 11:
            anioFound = _context2.sent;

            if (anioFound) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioE, " no encontrado")
            }));

          case 14:
            newObj.anioE = anioFound._id;
            _context2.next = 17;
            return _Mes.default.findOne({
              name: mesE
            });

          case 17:
            mesFound = _context2.sent;

            if (mesFound) {
              _context2.next = 20;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Mes ".concat(mesE, " no encontrado")
            }));

          case 20:
            newObj.mesE = mesFound._id;
            _context2.next = 23;
            return _User.default.findOne({
              username: createdBy
            });

          case 23:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 26;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 26:
            newObj.createdBy = userFound._id;
            query = newObj.save();
            if (query) res.json({
              message: "Registro agregado con éxito"
            });
            _context2.next = 35;
            break;

          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 31]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

stockController.getAllBySucursalMes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body2, sucursalE, mesE, query;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, sucursalE = _req$body2.sucursalE, mesE = _req$body2.mesE;
            _context3.prev = 1;
            _context3.next = 4;
            return _StockAccesorio.default.find({
              sucursal: {
                $regex: ".*" + sucursalE + ".*"
              },
              mes: mesE
            }).sort({
              fecha: 1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "anioE",
              select: "name"
            }).populate({
              path: "mesE",
              select: "name"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 4:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 9;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existen registros"
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

var _default = stockController;
exports.default = _default;
//# sourceMappingURL=stockAccesorio.controller.js.map