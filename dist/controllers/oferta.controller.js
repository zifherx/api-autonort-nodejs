"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Accesorio = _interopRequireDefault(require("../models/Accesorio"));

var _Oferta = _interopRequireDefault(require("../models/Oferta"));

var ofertaCtrl = {};

ofertaCtrl.getOneActivos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Oferta.default.find({
              estado: true
            }).sort({
              codigo: 1
            }).populate({
              path: 'accesorio',
              select: 'categoria nombre status stock'
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json({
              total: query.length,
              activos: query
            });
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: "No existen Ofertas activas"
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

ofertaCtrl.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var ofertaId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ofertaId = req.params.ofertaId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Oferta.default.findById(ofertaId).populate({
              path: 'accesorio',
              select: 'categoria nombre status stock'
            });

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json({
              oferta: query
            });
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existe la Oferta"
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

ofertaCtrl.getAll = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Oferta.default.find().sort({
              codigo: 1
            }).populate({
              path: 'accesorio',
              select: 'categoria nombre status stock'
            });

          case 3:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 8;
              break;
            }

            res.json({
              total: query.length,
              ofertas: query
            });
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existen ofertas"
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

ofertaCtrl.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, codigo, tipo, opcion, descripcion, moneda, monto, cantidad, accesorio, estado, obj, accesorioFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, codigo = _req$body.codigo, tipo = _req$body.tipo, opcion = _req$body.opcion, descripcion = _req$body.descripcion, moneda = _req$body.moneda, monto = _req$body.monto, cantidad = _req$body.cantidad, accesorio = _req$body.accesorio, estado = _req$body.estado;
            _context4.prev = 1;
            obj = new _Oferta.default({
              codigo: codigo,
              tipo: tipo,
              opcion: opcion,
              descripcion: descripcion,
              moneda: moneda,
              monto: monto,
              cantidad: cantidad,
              estado: estado
            });
            _context4.next = 5;
            return _Accesorio.default.find({
              name: {
                $in: accesorio
              }
            });

          case 5:
            accesorioFound = _context4.sent;
            obj.accesorio = accesorioFound.map(function (a) {
              return a._id;
            });
            _context4.next = 9;
            return obj.save();

          case 9:
            query = _context4.sent;

            if (query) {
              res.json({
                message: "Oferta creada con éxito"
              });
            }

            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 13]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

ofertaCtrl.updateOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var ofertaId, _req$body2, codigo, tipo, opcion, descripcion, moneda, monto, cantidad, accesorio, estado, accesorioFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            ofertaId = req.params.ofertaId;
            _req$body2 = req.body, codigo = _req$body2.codigo, tipo = _req$body2.tipo, opcion = _req$body2.opcion, descripcion = _req$body2.descripcion, moneda = _req$body2.moneda, monto = _req$body2.monto, cantidad = _req$body2.cantidad, accesorio = _req$body2.accesorio, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _Accesorio.default.find({
              name: {
                $in: accesorio
              }
            });

          case 5:
            accesorioFound = _context5.sent;

            if (accesorioFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe el accesorio'
            }));

          case 8:
            _context5.next = 10;
            return _Oferta.default.findByIdAndUpdate(ofertaId, {
              codigo: codigo,
              tipo: tipo,
              opcion: opcion,
              descripcion: descripcion,
              moneda: moneda,
              monto: monto,
              cantidad: cantidad,
              accesorio: accesorioFound.map(function (a) {
                return a._id;
              }),
              estado: estado
            });

          case 10:
            query = _context5.sent;

            if (!query) {
              _context5.next = 15;
              break;
            }

            res.json({
              message: "Oferta actualizada con éxito"
            });
            _context5.next = 16;
            break;

          case 15:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe Oferta a actualizar"
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

ofertaCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var ofertaId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            ofertaId = req.params.ofertaId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Oferta.default.findByIdAndDelete(ofertaId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: "Oferta eliminada con éxito"
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: "No existe Oferta a eliminar"
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

var _default = ofertaCtrl;
exports.default = _default;
//# sourceMappingURL=oferta.controller.js.map