"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Record = _interopRequireDefault(require("../models/Record"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

var _StatusAAP = _interopRequireDefault(require("../models/StatusAAP"));

var _StatusFile = _interopRequireDefault(require("../models/StatusFile"));

var _StatusRP = _interopRequireDefault(require("../models/StatusRP"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _User = _interopRequireDefault(require("../models/User"));

var recordController = {};

recordController.createOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, codigoInterno, sucursal_tramite, sucursalE, statusFile, estadoFileE, status_tarjeta, estadoRPE, status_placa, estadoAAPE, fecha_recepcion, hora_recepcion, observaciones_file, sales, fecha_ingreso_file, hora_ingreso_file, num_titulo, codigo_verificacion, observaciones_registros, motivo_observacion, num_placa, fecha_entrega_file_recepcion, fecha_tramite_placa, fecha_entrega_placa_recepcion, observaciones_aap, empleado, nuevoInmatriculado, salesFound, salesChanged, sucursalFound, estadoFileFound, estadoRPFound, estadoAAPFound, foundEmployee, query;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, codigoInterno = _req$body.codigoInterno, sucursal_tramite = _req$body.sucursal_tramite, sucursalE = _req$body.sucursalE, statusFile = _req$body.statusFile, estadoFileE = _req$body.estadoFileE, status_tarjeta = _req$body.status_tarjeta, estadoRPE = _req$body.estadoRPE, status_placa = _req$body.status_placa, estadoAAPE = _req$body.estadoAAPE, fecha_recepcion = _req$body.fecha_recepcion, hora_recepcion = _req$body.hora_recepcion, observaciones_file = _req$body.observaciones_file, sales = _req$body.sales, fecha_ingreso_file = _req$body.fecha_ingreso_file, hora_ingreso_file = _req$body.hora_ingreso_file, num_titulo = _req$body.num_titulo, codigo_verificacion = _req$body.codigo_verificacion, observaciones_registros = _req$body.observaciones_registros, motivo_observacion = _req$body.motivo_observacion, num_placa = _req$body.num_placa, fecha_entrega_file_recepcion = _req$body.fecha_entrega_file_recepcion, fecha_tramite_placa = _req$body.fecha_tramite_placa, fecha_entrega_placa_recepcion = _req$body.fecha_entrega_placa_recepcion, observaciones_aap = _req$body.observaciones_aap, empleado = _req$body.empleado;
            _context.prev = 1;
            nuevoInmatriculado = new _Record.default({
              codigoInterno: codigoInterno,
              sucursal_tramite: sucursal_tramite,
              fecha_recepcion: fecha_recepcion,
              hora_recepcion: hora_recepcion,
              statusFile: statusFile,
              observaciones_file: observaciones_file,
              fecha_ingreso_file: fecha_ingreso_file,
              hora_ingreso_file: hora_ingreso_file,
              num_titulo: num_titulo,
              codigo_verificacion: codigo_verificacion,
              observaciones_registros: observaciones_registros,
              motivo_observacion: motivo_observacion,
              status_tarjeta: status_tarjeta,
              num_placa: num_placa,
              fecha_entrega_file_recepcion: fecha_entrega_file_recepcion,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              fecha_entrega_placa_recepcion: fecha_entrega_placa_recepcion,
              observaciones_aap: observaciones_aap
            }); // Expediente

            _context.next = 5;
            return _Sale.default.findOne({
              nro_comprobante: sales
            });

          case 5:
            salesFound = _context.sent;

            if (salesFound) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Expediente ".concat(sales, " no tiene comprobante")
            }));

          case 8:
            _context.next = 10;
            return _Sale.default.findByIdAndUpdate(salesFound._id, {
              pasoaTramite: 1
            });

          case 10:
            salesChanged = _context.sent;
            nuevoInmatriculado.sales = salesFound._id; // Sucursal

            _context.next = 14;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 14:
            sucursalFound = _context.sent;

            if (sucursalFound) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 17:
            nuevoInmatriculado.sucursalE = sucursalFound._id; // Estado File

            _context.next = 20;
            return _StatusFile.default.findOne({
              name: estadoFileE
            });

          case 20:
            estadoFileFound = _context.sent;

            if (estadoFileFound) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Estado File ".concat(estadoFileE, " no encontrado")
            }));

          case 23:
            nuevoInmatriculado.estadoFileE = estadoFileFound._id; // Estado RP

            if (!(estadoRPE == null || estadoRPE == undefined || estadoRPE == "")) {
              _context.next = 28;
              break;
            }

            nuevoInmatriculado.estadoRPE = null;
            _context.next = 34;
            break;

          case 28:
            _context.next = 30;
            return _StatusRP.default.findOne({
              name: estadoRPE
            });

          case 30:
            estadoRPFound = _context.sent;

            if (estadoRPFound) {
              _context.next = 33;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Estado RP ".concat(estadoRPE, " no encontrado")
            }));

          case 33:
            nuevoInmatriculado.estadoRPE = estadoRPFound._id;

          case 34:
            if (!(estadoAAPE == null || estadoAAPE == undefined || estadoAAPE == "")) {
              _context.next = 38;
              break;
            }

            nuevoInmatriculado.estadoAAPE = null;
            _context.next = 44;
            break;

          case 38:
            _context.next = 40;
            return _StatusAAP.default.findOne({
              name: estadoAAPE
            });

          case 40:
            estadoAAPFound = _context.sent;

            if (estadoAAPFound) {
              _context.next = 43;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Estado AAP ".concat(estadoAAPE, " no encontrado")
            }));

          case 43:
            nuevoInmatriculado.estadoAAPE = estadoAAPFound._id;

          case 44:
            _context.next = 46;
            return _User.default.findOne({
              username: empleado
            });

          case 46:
            foundEmployee = _context.sent;

            if (foundEmployee) {
              _context.next = 49;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Colaborador ".concat(empleado, " no encontrado")
            }));

          case 49:
            nuevoInmatriculado.empleado = foundEmployee._id;
            _context.next = 52;
            return nuevoInmatriculado.save();

          case 52:
            query = _context.sent;

            if (query) {
              res.json({
                message: "Trámite creado con éxito"
              });
            }

            _context.next = 60;
            break;

          case 56:
            _context.prev = 56;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 60:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 56]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

recordController.getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Record.default.find().sort({
              fecha_recepcion: -1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "estadoFileE",
              select: "name"
            }).populate({
              path: "estadoRPE",
              select: "name"
            }).populate({
              path: "estadoAAPE",
              select: "name"
            }).populate({
              path: "sales",
              select: "auto vendedor cliente",
              populate: [{
                path: "auto",
                select: "cod_tdp version"
              }, {
                path: "vendedor",
                select: "name document"
              }, {
                path: "cliente",
                select: "name document"
              }]
            }).populate({
              path: "empleado",
              select: "name username"
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existen Trámites"
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

recordController.getOneById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var recordId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            recordId = req.params.recordId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Record.default.findById(recordId).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "estadoFileE",
              select: "name"
            }).populate({
              path: "estadoRPE",
              select: "name"
            }).populate({
              path: "estadoAAPE",
              select: "name"
            }).populate({
              path: "sales",
              select: "auto vendedor cliente fecha_cancelacion sucursalE sucursal_venta serie_tdp nro_comprobante",
              populate: [{
                path: "auto",
                select: "cod_tdp version model",
                populate: {
                  path: "model",
                  select: "name avatar"
                }
              }, {
                path: "vendedor",
                select: "name document"
              }, {
                path: "cliente",
                select: "name document"
              }, {
                path: "sucursalE",
                select: "name"
              }]
            }).populate({
              path: "empleado",
              select: "name username"
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
              message: "No existe el Trámite"
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

recordController.getAllBySucursal = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body2, sucursalE, start, end, query, sucursalFound;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, sucursalE = _req$body2.sucursalE, start = _req$body2.start, end = _req$body2.end;
            query = null;
            _context4.prev = 2;
            _context4.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            sucursalFound = _context4.sent;

            if (!(start == null || start == undefined || start == "")) {
              _context4.next = 12;
              break;
            }

            _context4.next = 9;
            return _Record.default.find({
              $or: [{
                sucursalE: sucursalFound._id
              }, {
                sucursal_tramite: {
                  $regex: ".*" + sucursalE + ".*"
                }
              }]
            }).sort({
              fecha_recepcion: -1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "estadoFileE",
              select: "name"
            }).populate({
              path: "estadoRPE",
              select: "name"
            }).populate({
              path: "estadoAAPE",
              select: "name"
            }).populate({
              path: "sales",
              select: "auto vendedor cliente serie_tdp",
              populate: [{
                path: "auto",
                select: "cod_tdp version model",
                populate: {
                  path: "model",
                  select: "name avatar"
                }
              }, {
                path: "vendedor",
                select: "name document avatar"
              }, {
                path: "cliente",
                select: "name document"
              }]
            }).populate({
              path: "empleado",
              select: "name username"
            });

          case 9:
            query = _context4.sent;
            _context4.next = 15;
            break;

          case 12:
            _context4.next = 14;
            return _Record.default.find({
              sucursal_tramite: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_recepcion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).sort({
              fecha_recepcion: -1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "estadoFileE",
              select: "name"
            }).populate({
              path: "estadoRPE",
              select: "name"
            }).populate({
              path: "estadoAAPE",
              select: "name"
            }).populate({
              path: "sales",
              select: "auto vendedor cliente serie_tdp",
              populate: [{
                path: "auto",
                select: "cod_tdp version model",
                populate: {
                  path: "model",
                  select: "name avatar"
                }
              }, {
                path: "vendedor",
                select: "name document avatar"
              }, {
                path: "cliente",
                select: "name document"
              }]
            }).populate({
              path: "empleado",
              select: "name username"
            });

          case 14:
            query = _context4.sent;

          case 15:
            if (!(query.length > 0)) {
              _context4.next = 19;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context4.next = 20;
            break;

          case 19:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existen Trámites"
            }));

          case 20:
            _context4.next = 26;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 26:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 22]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

recordController.updateOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var recordId, _req$body3, statusFile, estadoFileE, observaciones_file, isPendienteFirma, fechaPendienteFirma, isFirmado, fechaFirmado, isLegalizado, fechaLegalizado, isFinalizado, fechaFinalizado, fecha_ingreso_file, hora_ingreso_file, num_titulo, codigo_verificacion, observaciones_registros, motivo_observacion, num_placa, status_tarjeta, estadoRPE, fecha_entrega_file_recepcion, fecha_tramite_placa, status_placa, estadoAAPE, fecha_entrega_placa_recepcion, estadoRPNull, estadoAAPNull, query, estadoFileFound, estadoRPFound, estadoAAPFound;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            recordId = req.params.recordId;
            _req$body3 = req.body, statusFile = _req$body3.statusFile, estadoFileE = _req$body3.estadoFileE, observaciones_file = _req$body3.observaciones_file, isPendienteFirma = _req$body3.isPendienteFirma, fechaPendienteFirma = _req$body3.fechaPendienteFirma, isFirmado = _req$body3.isFirmado, fechaFirmado = _req$body3.fechaFirmado, isLegalizado = _req$body3.isLegalizado, fechaLegalizado = _req$body3.fechaLegalizado, isFinalizado = _req$body3.isFinalizado, fechaFinalizado = _req$body3.fechaFinalizado, fecha_ingreso_file = _req$body3.fecha_ingreso_file, hora_ingreso_file = _req$body3.hora_ingreso_file, num_titulo = _req$body3.num_titulo, codigo_verificacion = _req$body3.codigo_verificacion, observaciones_registros = _req$body3.observaciones_registros, motivo_observacion = _req$body3.motivo_observacion, num_placa = _req$body3.num_placa, status_tarjeta = _req$body3.status_tarjeta, estadoRPE = _req$body3.estadoRPE, fecha_entrega_file_recepcion = _req$body3.fecha_entrega_file_recepcion, fecha_tramite_placa = _req$body3.fecha_tramite_placa, status_placa = _req$body3.status_placa, estadoAAPE = _req$body3.estadoAAPE, fecha_entrega_placa_recepcion = _req$body3.fecha_entrega_placa_recepcion;
            estadoRPNull = null;
            estadoAAPNull = null;
            query = null;
            _context5.prev = 5;
            _context5.next = 8;
            return _StatusFile.default.findOne({
              name: estadoFileE
            });

          case 8:
            estadoFileFound = _context5.sent;

            if (estadoFileFound) {
              _context5.next = 11;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Estado File ".concat(estadoFileE, " no encontrado")
            }));

          case 11:
            if (!(estadoRPE == null || estadoRPE == undefined || estadoRPE == "")) {
              _context5.next = 15;
              break;
            }

            estadoRPNull = null;
            _context5.next = 21;
            break;

          case 15:
            _context5.next = 17;
            return _StatusRP.default.findOne({
              name: estadoRPE
            });

          case 17:
            estadoRPFound = _context5.sent;

            if (estadoRPFound) {
              _context5.next = 20;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Estado RP ".concat(estadoRPE, " no encontrado")
            }));

          case 20:
            estadoRPNull = estadoRPFound._id;

          case 21:
            if (!(estadoAAPE == null || estadoAAPE == undefined || estadoAAPE == "")) {
              _context5.next = 25;
              break;
            }

            estadoAAPNull = null;
            _context5.next = 31;
            break;

          case 25:
            _context5.next = 27;
            return _StatusAAP.default.findOne({
              name: estadoAAPE
            });

          case 27:
            estadoAAPFound = _context5.sent;

            if (estadoAAPFound) {
              _context5.next = 30;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Estado AAP ".concat(estadoAAPE, " no encontrado")
            }));

          case 30:
            estadoAAPNull = estadoAAPFound._id;

          case 31:
            if (!(estadoFileE == "Pendiente de Firma")) {
              _context5.next = 37;
              break;
            }

            _context5.next = 34;
            return _Record.default.findByIdAndUpdate(recordId, {
              statusFile: statusFile,
              estadoFileE: estadoFileFound._id,
              observaciones_file: observaciones_file,
              isPendienteFirma: isPendienteFirma,
              fechaPendienteFirma: fechaPendienteFirma,
              fecha_ingreso_file: fecha_ingreso_file,
              hora_ingreso_file: hora_ingreso_file,
              num_titulo: num_titulo,
              codigo_verificacion: codigo_verificacion,
              observaciones_registros: observaciones_registros,
              motivo_observacion: motivo_observacion,
              num_placa: num_placa,
              status_tarjeta: status_tarjeta,
              estadoRPE: estadoRPNull,
              fecha_entrega_file_recepcion: fecha_entrega_file_recepcion,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              estadoAAPE: estadoAAPNull,
              fecha_entrega_placa_recepcion: fecha_entrega_placa_recepcion
            });

          case 34:
            query = _context5.sent;
            _context5.next = 53;
            break;

          case 37:
            if (!(estadoFileE == "Firmado")) {
              _context5.next = 43;
              break;
            }

            _context5.next = 40;
            return _Record.default.findByIdAndUpdate(recordId, {
              statusFile: statusFile,
              estadoFileE: estadoFileFound._id,
              observaciones_file: observaciones_file,
              isFirmado: isFirmado,
              fechaFirmado: fechaFirmado,
              fecha_ingreso_file: fecha_ingreso_file,
              hora_ingreso_file: hora_ingreso_file,
              num_titulo: num_titulo,
              codigo_verificacion: codigo_verificacion,
              observaciones_registros: observaciones_registros,
              motivo_observacion: motivo_observacion,
              num_placa: num_placa,
              status_tarjeta: status_tarjeta,
              estadoRPE: estadoRPNull,
              fecha_entrega_file_recepcion: fecha_entrega_file_recepcion,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              estadoAAP: estadoAAPNull,
              fecha_entrega_placa_recepcion: fecha_entrega_placa_recepcion
            });

          case 40:
            query = _context5.sent;
            _context5.next = 53;
            break;

          case 43:
            if (!(estadoFileE == "Legalizado")) {
              _context5.next = 49;
              break;
            }

            _context5.next = 46;
            return _Record.default.findByIdAndUpdate(recordId, {
              statusFile: statusFile,
              estadoFileE: estadoFileFound._id,
              observaciones_file: observaciones_file,
              isLegalizado: isLegalizado,
              fechaLegalizado: fechaLegalizado,
              fecha_ingreso_file: fecha_ingreso_file,
              hora_ingreso_file: hora_ingreso_file,
              num_titulo: num_titulo,
              codigo_verificacion: codigo_verificacion,
              observaciones_registros: observaciones_registros,
              motivo_observacion: motivo_observacion,
              num_placa: num_placa,
              status_tarjeta: status_tarjeta,
              estadoRPE: estadoRPNull,
              fecha_entrega_file_recepcion: fecha_entrega_file_recepcion,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              estadoAAP: estadoAAPNull,
              fecha_entrega_placa_recepcion: fecha_entrega_placa_recepcion
            });

          case 46:
            query = _context5.sent;
            _context5.next = 53;
            break;

          case 49:
            if (!(estadoFileE == "Finalizado")) {
              _context5.next = 53;
              break;
            }

            _context5.next = 52;
            return _Record.default.findByIdAndUpdate(recordId, {
              statusFile: statusFile,
              estadoFileE: estadoFileFound._id,
              observaciones_file: observaciones_file,
              isFinalizado: isFinalizado,
              fechaFinalizado: fechaFinalizado,
              fecha_ingreso_file: fecha_ingreso_file,
              hora_ingreso_file: hora_ingreso_file,
              num_titulo: num_titulo,
              codigo_verificacion: codigo_verificacion,
              observaciones_registros: observaciones_registros,
              motivo_observacion: motivo_observacion,
              num_placa: num_placa,
              status_tarjeta: status_tarjeta,
              estadoRPE: estadoRPNull,
              fecha_entrega_file_recepcion: fecha_entrega_file_recepcion,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              estadoAAP: estadoAAPNull,
              fecha_entrega_placa_recepcion: fecha_entrega_placa_recepcion
            });

          case 52:
            query = _context5.sent;

          case 53:
            if (!query) {
              _context5.next = 57;
              break;
            }

            res.json({
              message: "Trámite actualizado con éxito"
            });
            _context5.next = 58;
            break;

          case 57:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe trámite a actualizar"
            }));

          case 58:
            _context5.next = 64;
            break;

          case 60:
            _context5.prev = 60;
            _context5.t0 = _context5["catch"](5);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 64:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 60]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

recordController.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var recordId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            recordId = req.params.recordId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Record.default.findByIdAndDelete(recordId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: "Inmatriculación eliminada con éxito"
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: "No existe Inmatriculación a eliminar"
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

recordController.getAllBySeller = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body4, seller, start, end, query, obj;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body4 = req.body, seller = _req$body4.seller, start = _req$body4.start, end = _req$body4.end;
            _context7.prev = 1;
            _context7.next = 4;
            return _Record.default.find({
              fecha_recepcion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).populate({
              path: "sales",
              select: "vendedor cliente auto serie_tdp ubicacion_vehiculo ubicacionVehiculoE",
              populate: [{
                path: "cliente",
                select: "name document"
              }, {
                path: "auto",
                select: "cod_tdp model version",
                populate: {
                  path: "model",
                  select: "name avatar marca",
                  populate: {
                    path: "marca",
                    select: "name avatar"
                  }
                }
              }, {
                path: "vendedor",
                select: "name",
                match: {
                  name: seller
                }
              }, {
                path: "ubicacionVehiculoE",
                select: "name"
              }]
            });

          case 4:
            query = _context7.sent;
            obj = query.filter(function (b) {
              return b.sales.vendedor;
            });

            if (!(obj.length > 0)) {
              _context7.next = 10;
              break;
            }

            res.json({
              total: obj.length,
              all: obj
            });
            _context7.next = 11;
            break;

          case 10:
            return _context7.abrupt("return", res.status(404).json({
              message: "Asesor ".concat(seller, " no cuenta con tr\xE1mites")
            }));

          case 11:
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 13]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

recordController.countAllByStatus = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var _req$body5, estado, sucursalE, start, end, query;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body5 = req.body, estado = _req$body5.estado, sucursalE = _req$body5.sucursalE, start = _req$body5.start, end = _req$body5.end;
            _context8.prev = 1;
            _context8.next = 4;
            return _Record.default.find({
              statusFile: {
                $regex: '.*' + estado + '.*'
              },
              sucursal_tramite: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_recepcion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 4:
            query = _context8.sent;
            if (query >= 0) res.json({
              total: query
            });
            _context8.next = 12;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var _default = recordController;
exports.default = _default;
//# sourceMappingURL=record.controller.js.map