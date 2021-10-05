"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _JefaturaVentas = _interopRequireDefault(require("../models/JefaturaVentas"));

var _User = _interopRequireDefault(require("../models/User"));

var jefaturaCtrl = {};

jefaturaCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _JefaturaVentas.default.find().populate('createdBy', 'name');

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
              message: 'No existen jefes'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              error: _context.t0
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

jefaturaCtrl.createOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var _req$body, name, email, area, sucursal, createdBy, newObj, userFound, query;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, area = _req$body.area, sucursal = _req$body.sucursal, createdBy = _req$body.createdBy;
            _context2.prev = 1;
            newObj = new _JefaturaVentas.default({
              name: name,
              email: email,
              area: area,
              sucursal: sucursal
            });
            _context2.next = 5;
            return _User.default.find({
              username: {
                $in: createdBy
              }
            });

          case 5:
            userFound = _context2.sent;
            newObj.createdBy = userFound.map(function (a) {
              return a._id;
            });
            _context2.next = 9;
            return newObj.save();

          case 9:
            query = _context2.sent;

            if (query) {
              res.json({
                message: 'Jefatura creada con éxito'
              });
            }

            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
            res.status(503).json({
              error: _context2.t0
            });

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

jefaturaCtrl.obtenerJefexSucursal = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body2, sucursal, area, query;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, sucursal = _req$body2.sucursal, area = _req$body2.area;
            _context3.prev = 1;
            _context3.next = 4;
            return _JefaturaVentas.default.findOne({
              sucursal: sucursal,
              area: area,
              status: true
            }).select('name email');

          case 4:
            query = _context3.sent;

            if (!query) {
              _context3.next = 9;
              break;
            }

            res.json({
              asesor: query
            });
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No se encontraron asesores'
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(503).json({
              message: _context3.t0.message
            });

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

var _default = jefaturaCtrl;
exports.default = _default;
//# sourceMappingURL=jefaturaVentas.controller.js.map