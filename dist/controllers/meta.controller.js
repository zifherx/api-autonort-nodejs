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

metaCtrl.createOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var _req$body, name, sucursal, area, tipo, fecha, mes, valor, createdBy, obj, employeeFound, query;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, sucursal = _req$body.sucursal, area = _req$body.area, tipo = _req$body.tipo, fecha = _req$body.fecha, mes = _req$body.mes, valor = _req$body.valor, createdBy = _req$body.createdBy;
            _context2.prev = 1;
            obj = new _Meta.default({
              name: name,
              sucursal: sucursal,
              area: area,
              tipo: tipo,
              fecha: fecha,
              mes: mes,
              valor: valor
            });
            _context2.next = 5;
            return _User.default.find({
              username: {
                $in: createdBy
              }
            });

          case 5:
            employeeFound = _context2.sent;
            obj.createdBy = employeeFound.map(function (a) {
              return a._id;
            });
            _context2.next = 9;
            return obj.save();

          case 9:
            query = _context2.sent;

            if (query) {
              res.json({
                message: 'Meta creada con éxito'
              });
            }

            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = metaCtrl;
exports.default = _default;
//# sourceMappingURL=meta.controller.js.map