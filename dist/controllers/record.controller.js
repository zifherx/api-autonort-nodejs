"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRecordById = exports.updateRecordById = exports.getRecordByTarjetayPlaca = exports.getRecordBySucursal = exports.getRecordById = exports.getRecords = exports.createRecord = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Record = _interopRequireDefault(require("../models/Record"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

var _User = _interopRequireDefault(require("../models/User"));

var createRecord = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, sucursal_tramite, fecha_recepcion, hora_recepcion, statusFile, observaciones_file, sales, fecha_ingreso_file, hora_ingreso_file, num_titulo, codigo_verificacion, observaciones_registros, status_tarjeta, num_placa, fecha_entrega_file_recepcion, fecha_tramite_placa, status_placa, fecha_entrega_placa_recepcion, empleado, nuevoInmatriculado, expediente, cod_exp, act, foundEmployee, recordSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, sucursal_tramite = _req$body.sucursal_tramite, fecha_recepcion = _req$body.fecha_recepcion, hora_recepcion = _req$body.hora_recepcion, statusFile = _req$body.statusFile, observaciones_file = _req$body.observaciones_file, sales = _req$body.sales, fecha_ingreso_file = _req$body.fecha_ingreso_file, hora_ingreso_file = _req$body.hora_ingreso_file, num_titulo = _req$body.num_titulo, codigo_verificacion = _req$body.codigo_verificacion, observaciones_registros = _req$body.observaciones_registros, status_tarjeta = _req$body.status_tarjeta, num_placa = _req$body.num_placa, fecha_entrega_file_recepcion = _req$body.fecha_entrega_file_recepcion, fecha_tramite_placa = _req$body.fecha_tramite_placa, status_placa = _req$body.status_placa, fecha_entrega_placa_recepcion = _req$body.fecha_entrega_placa_recepcion, empleado = _req$body.empleado;
            _context.prev = 1;
            nuevoInmatriculado = new _Record.default({
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
              status_tarjeta: status_tarjeta,
              num_placa: num_placa,
              fecha_entrega_file_recepcion: fecha_entrega_file_recepcion,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              fecha_entrega_placa_recepcion: fecha_entrega_placa_recepcion
            }); //Sales

            _context.next = 5;
            return _Sale.default.find({
              nro_comprobante: {
                $in: sales
              }
            });

          case 5:
            expediente = _context.sent;
            cod_exp = expediente[0]._id;
            _context.next = 9;
            return _Sale.default.findByIdAndUpdate(cod_exp, {
              pasoaTramite: 1
            });

          case 9:
            act = _context.sent;
            //console.log(act);
            nuevoInmatriculado.sales = expediente.map(function (sales) {
              return sales._id;
            }); //Empleado

            _context.next = 13;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 13:
            foundEmployee = _context.sent;
            nuevoInmatriculado.empleado = foundEmployee.map(function (em) {
              return em._id;
            });
            _context.next = 17;
            return nuevoInmatriculado.save();

          case 17:
            recordSaved = _context.sent;

            if (recordSaved) {
              res.json({
                message: "Inmatriculación creada con éxito"
              });
            }

            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(503).json({
              message: _context.t0.message
            });

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 21]]);
  }));

  return function createRecord(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRecord = createRecord;

var getRecords = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var filtro1, expedientes;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            filtro1 = {
              path: "sales",
              populate: {
                path: "auto vendedor cliente"
              }
            };
            _context2.prev = 1;
            _context2.next = 4;
            return _Record.default.find().populate(filtro1).populate("empleado").sort({
              fecha_recepcion: 'desc'
            });

          case 4:
            expedientes = _context2.sent;

            if (!(expedientes.length > 0)) {
              _context2.next = 9;
              break;
            }

            res.json(expedientes);
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existen Trámites"
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(503).json({
              message: _context2.t0.message
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function getRecords(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRecords = getRecords;

var getRecordById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var recordId, filtro1, expediente;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            recordId = req.params.recordId;
            filtro1 = {
              path: "sales",
              populate: {
                path: "auto vendedor cliente"
              }
            };
            _context3.prev = 2;
            _context3.next = 5;
            return _Record.default.findById(recordId).populate(filtro1).populate("empleado");

          case 5:
            expediente = _context3.sent;

            if (!expediente) {
              _context3.next = 10;
              break;
            }

            res.json(expediente);
            _context3.next = 11;
            break;

          case 10:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existe el Trámite"
            }));

          case 11:
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(503).json({
              message: _context3.t0.message
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 13]]);
  }));

  return function getRecordById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRecordById = getRecordById;

var getRecordBySucursal = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var sucursal, query;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sucursal = req.body.sucursal;
            _context4.prev = 1;
            _context4.next = 4;
            return _Record.default.find({
              sucursal_tramite: sucursal
            }).populate({
              path: 'sales'
            }).populate({
              path: 'empleado',
              select: 'name username roles'
            });

          case 4:
            query = _context4.sent;

            if (!(query.length > 0)) {
              _context4.next = 9;
              break;
            }

            res.json({
              total: query.length,
              files: query
            });
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existen Trámites"
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(503).json({
              message: _context4.t0.message
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 12]]);
  }));

  return function getRecordBySucursal(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getRecordBySucursal = getRecordBySucursal;

var getRecordByTarjetayPlaca = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, tarjeta, placa, entrega, filtro, objeto;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, tarjeta = _req$body2.tarjeta, placa = _req$body2.placa, entrega = _req$body2.entrega;
            filtro = {
              path: "sales",
              populate: {
                path: "auto vendedor cliente"
              }
            };
            _context5.prev = 2;
            _context5.next = 5;
            return _Record.default.find({}).populate(filtro).where("status_tarjeta").equals(tarjeta).where("status_placa").equals(placa);

          case 5:
            objeto = _context5.sent;

            if (!(objeto.length > 0)) {
              _context5.next = 10;
              break;
            }

            res.json(objeto);
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existen expedientes Ready"
            }));

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(503).json({
              message: _context5.t0.message
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function getRecordByTarjetayPlaca(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getRecordByTarjetayPlaca = getRecordByTarjetayPlaca;

var updateRecordById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var recordId, _req$body3, statusFile, observaciones_file, isPendienteFirma, fechaPendienteFirma, isFirmado, fechaFirmado, isLegalizado, fechaLegalizado, isFinalizado, fechaFinalizado, fecha_ingreso_file, hora_ingreso_file, num_titulo, codigo_verificacion, observaciones_registros, motivo_observacion, status_tarjeta, num_placa, fecha_entrega_file_recepcion, fecha_tramite_placa, status_placa, fecha_entrega_placa_recepcion, objetoActualizado;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            recordId = req.params.recordId;
            _req$body3 = req.body, statusFile = _req$body3.statusFile, observaciones_file = _req$body3.observaciones_file, isPendienteFirma = _req$body3.isPendienteFirma, fechaPendienteFirma = _req$body3.fechaPendienteFirma, isFirmado = _req$body3.isFirmado, fechaFirmado = _req$body3.fechaFirmado, isLegalizado = _req$body3.isLegalizado, fechaLegalizado = _req$body3.fechaLegalizado, isFinalizado = _req$body3.isFinalizado, fechaFinalizado = _req$body3.fechaFinalizado, fecha_ingreso_file = _req$body3.fecha_ingreso_file, hora_ingreso_file = _req$body3.hora_ingreso_file, num_titulo = _req$body3.num_titulo, codigo_verificacion = _req$body3.codigo_verificacion, observaciones_registros = _req$body3.observaciones_registros, motivo_observacion = _req$body3.motivo_observacion, status_tarjeta = _req$body3.status_tarjeta, num_placa = _req$body3.num_placa, fecha_entrega_file_recepcion = _req$body3.fecha_entrega_file_recepcion, fecha_tramite_placa = _req$body3.fecha_tramite_placa, status_placa = _req$body3.status_placa, fecha_entrega_placa_recepcion = _req$body3.fecha_entrega_placa_recepcion;
            _context6.prev = 2;
            _context6.next = 5;
            return _Record.default.findByIdAndUpdate(recordId, {
              statusFile: statusFile,
              observaciones_file: observaciones_file,
              isPendienteFirma: isPendienteFirma,
              fechaPendienteFirma: fechaPendienteFirma,
              isFirmado: isFirmado,
              fechaFirmado: fechaFirmado,
              isLegalizado: isLegalizado,
              fechaLegalizado: fechaLegalizado,
              isFinalizado: isFinalizado,
              fechaFinalizado: fechaFinalizado,
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
              fecha_entrega_placa_recepcion: fecha_entrega_placa_recepcion
            });

          case 5:
            objetoActualizado = _context6.sent;

            if (!objetoActualizado) {
              _context6.next = 10;
              break;
            }

            res.json({
              message: "Inmatriculación actualizado con éxito"
            });
            _context6.next = 11;
            break;

          case 10:
            return _context6.abrupt("return", res.status(404).json({
              message: "No existe Inmatriculación a actualizar"
            }));

          case 11:
            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(503).json({
              message: _context6.t0.message
            });

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 13]]);
  }));

  return function updateRecordById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateRecordById = updateRecordById;

var deleteRecordById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var recordId, deleteRecord;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            recordId = req.params.recordId;
            _context7.prev = 1;
            _context7.next = 4;
            return _Record.default.findByIdAndDelete(recordId);

          case 4:
            deleteRecord = _context7.sent;

            if (!deleteRecord) {
              _context7.next = 9;
              break;
            }

            res.json({
              message: "Inmatriculación eliminada con éxito"
            });
            _context7.next = 10;
            break;

          case 9:
            return _context7.abrupt("return", res.status(404).json({
              message: "No existe Inmatriculación a eliminar"
            }));

          case 10:
            _context7.next = 16;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            res.status(503).json({
              message: _context7.t0.message
            });

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 12]]);
  }));

  return function deleteRecordById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteRecordById = deleteRecordById;
//# sourceMappingURL=record.controller.js.map