"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Entrega = _interopRequireDefault(require("../models/Entrega"));

var _Record = _interopRequireDefault(require("../models/Record"));

var _User = _interopRequireDefault(require("../models/User"));

var _StatusEntrega = _interopRequireDefault(require("../models/StatusEntrega"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var entregaController = {};

entregaController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Entrega.default.find().sort({
              fecha_entrega: -1
            }).populate({
              path: "tramite",
              select: "statusFile status_tarjeta status_placa sales",
              populate: {
                path: "sales",
                select: "vendedor cliente auto serie_tdp ubicacion_vehiculo fecha_entrega estatus_venta fecha_cancelacion estadoVentaE",
                populate: [{
                  path: "vendedor",
                  select: "name"
                }, {
                  path: "cliente",
                  select: "name"
                }, {
                  path: "auto",
                  select: "cod_tdp version model",
                  populate: {
                    path: "model",
                    select: "name avatar"
                  }
                }, {
                  path: "estadoVentaE",
                  select: "name"
                }]
              }
            }).populate({
              path: "estadoEntrega",
              select: "name value"
            }).populate({
              path: "createdBy",
              select: "name"
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
              message: "No existen entregas"
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

entregaController.createOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var _req$body, observacion, tramite, fecha_entrega, hora_entrega, estadoEntrega, createdby, obj, tramiteFound, estadoFound, userFound, query;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, observacion = _req$body.observacion, tramite = _req$body.tramite, fecha_entrega = _req$body.fecha_entrega, hora_entrega = _req$body.hora_entrega, estadoEntrega = _req$body.estadoEntrega, createdby = _req$body.createdby; // console.log(req.body);

            _context2.prev = 1;
            obj = new _Entrega.default({
              observacion: observacion,
              fecha_entrega: fecha_entrega,
              hora_entrega: hora_entrega
            });
            _context2.next = 5;
            return _Record.default.findById(new _mongoose.default.Types.ObjectId(tramite));

          case 5:
            tramiteFound = _context2.sent;

            if (tramiteFound) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Tramige ".concat(tramite, " no encontrado")
            }));

          case 8:
            _context2.next = 10;
            return _StatusEntrega.default.findOne({
              name: estadoEntrega
            });

          case 10:
            estadoFound = _context2.sent;

            if (estadoFound) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoEntrega, " no encontrado")
            }));

          case 13:
            _context2.next = 15;
            return _User.default.findOne({
              username: createdby
            });

          case 15:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdby, " no encontrado")
            }));

          case 18:
            obj.tramite = tramiteFound._id;
            obj.estadoEntrega = estadoFound._id;
            obj.createdBy = userFound._id; // console.log('OBJ:',obj);

            _context2.next = 23;
            return obj.save();

          case 23:
            query = _context2.sent;

            if (query) {
              res.json({
                message: "Entrega programada con éxito"
              });
            }

            _context2.next = 31;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 27]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = entregaController;
exports.default = _default;
//# sourceMappingURL=entrega.controller.js.map