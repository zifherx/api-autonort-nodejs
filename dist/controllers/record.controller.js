"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRecordById = exports.updateRecordById = exports.getRecordById = exports.getRecords = exports.createRecord = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Record = _interopRequireDefault(require("../models/Record"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

var createRecord = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, fecha_recepcion, hora_recepcion, sales, fecha_ingreso_file, hora_ingreso_file, num_titulo, status_tarjeta, num_placa, fecha_entrega_file, fecha_tramite_placa, status_placa, fecha_entrega_placa, fecha_entrega_cliente, nuevoInmatriculado, expediente, recordSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, fecha_recepcion = _req$body.fecha_recepcion, hora_recepcion = _req$body.hora_recepcion, sales = _req$body.sales, fecha_ingreso_file = _req$body.fecha_ingreso_file, hora_ingreso_file = _req$body.hora_ingreso_file, num_titulo = _req$body.num_titulo, status_tarjeta = _req$body.status_tarjeta, num_placa = _req$body.num_placa, fecha_entrega_file = _req$body.fecha_entrega_file, fecha_tramite_placa = _req$body.fecha_tramite_placa, status_placa = _req$body.status_placa, fecha_entrega_placa = _req$body.fecha_entrega_placa, fecha_entrega_cliente = _req$body.fecha_entrega_cliente;
            nuevoInmatriculado = new _Record.default({
              fecha_recepcion: fecha_recepcion,
              hora_recepcion: hora_recepcion,
              fecha_ingreso_file: fecha_ingreso_file,
              hora_ingreso_file: hora_ingreso_file,
              num_titulo: num_titulo,
              status_tarjeta: status_tarjeta,
              num_placa: num_placa,
              fecha_entrega_file: fecha_entrega_file,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              fecha_entrega_placa: fecha_entrega_placa,
              fecha_entrega_cliente: fecha_entrega_cliente
            }); //Sales

            _context.next = 5;
            return _Sale.default.find({
              nro_comprobante: {
                $in: sales
              }
            });

          case 5:
            expediente = _context.sent;
            nuevoInmatriculado.sales = expediente.map(function (sales) {
              return sales._id;
            });
            _context.next = 9;
            return nuevoInmatriculado.save();

          case 9:
            recordSaved = _context.sent;

            if (recordSaved) {
              res.json({
                message: 'Inmatriculado creado con éxito'
              });
            } else {
              res.status(201).json({
                message: 'Ya existe el inmatriculado'
              });
            }

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
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
              path: 'sales',
              populate: {
                path: 'auto vendedor  cliente'
              }
            };
            _context2.prev = 1;
            _context2.next = 4;
            return _Record.default.find().populate(filtro1);

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
            return _context2.abrupt("return", res.status(201).json({
              message: 'No existen Inmatriculados'
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(401).json({
              message: 'Error Interno'
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
    var filtro1, recordId, expediente;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filtro1 = {
              path: 'sales',
              populate: {
                path: 'auto vendedor  cliente'
              }
            };
            _context3.prev = 1;
            recordId = req.params.recordId;
            _context3.next = 5;
            return _Record.default.findById(recordId).populate(filtro1);

          case 5:
            expediente = _context3.sent;

            if (expediente) {
              res.json(expediente);
            } else {
              res.status(201).json({
                message: 'No existe el inmatriculado'
              });
            }

            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(401).json({
              message: 'Error Interno'
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));

  return function getRecordById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRecordById = getRecordById;

var updateRecordById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var recordId, _req$body2, fecha_recepcion, hora_recepcion, sales, fecha_ingreso_file, hora_ingreso_file, num_titulo, status_tarjeta, num_placa, fecha_entrega_file, fecha_tramite_placa, status_placa, fecha_entrega_placa, fecha_entrega_cliente, foundExpediente, objetoActualizado;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            recordId = req.params.recordId;
            _req$body2 = req.body, fecha_recepcion = _req$body2.fecha_recepcion, hora_recepcion = _req$body2.hora_recepcion, sales = _req$body2.sales, fecha_ingreso_file = _req$body2.fecha_ingreso_file, hora_ingreso_file = _req$body2.hora_ingreso_file, num_titulo = _req$body2.num_titulo, status_tarjeta = _req$body2.status_tarjeta, num_placa = _req$body2.num_placa, fecha_entrega_file = _req$body2.fecha_entrega_file, fecha_tramite_placa = _req$body2.fecha_tramite_placa, status_placa = _req$body2.status_placa, fecha_entrega_placa = _req$body2.fecha_entrega_placa, fecha_entrega_cliente = _req$body2.fecha_entrega_cliente; //Expediente

            _context4.next = 5;
            return _Sale.default.find({
              nro_comprobante: {
                $in: sales
              }
            });

          case 5:
            foundExpediente = _context4.sent;
            _context4.next = 8;
            return _Record.default.findByIdAndUpdate(recordId, {
              fecha_recepcion: fecha_recepcion,
              hora_recepcion: hora_recepcion,
              sales: foundExpediente.map(function (expediente) {
                return expediente._id;
              }),
              fecha_ingreso_file: fecha_ingreso_file,
              hora_ingreso_file: hora_ingreso_file,
              num_titulo: num_titulo,
              status_tarjeta: status_tarjeta,
              num_placa: num_placa,
              fecha_entrega_file: fecha_entrega_file,
              fecha_tramite_placa: fecha_tramite_placa,
              status_placa: status_placa,
              fecha_entrega_placa: fecha_entrega_placa,
              fecha_entrega_cliente: fecha_entrega_cliente
            }, {
              new: true
            });

          case 8:
            objetoActualizado = _context4.sent;

            if (!objetoActualizado) {
              _context4.next = 13;
              break;
            }

            res.json({
              message: 'Inmatriculado actualizado con éxito'
            });
            _context4.next = 14;
            break;

          case 13:
            return _context4.abrupt("return", res.status(201).json({
              message: 'Ya existe'
            }));

          case 14:
            _context4.next = 20;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(403).json({
              message: 'Error Interno'
            });

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 16]]);
  }));

  return function updateRecordById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateRecordById = updateRecordById;

var deleteRecordById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var recordId, deleteRecord;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            recordId = req.params.recordId;
            _context5.next = 4;
            return _Record.default.findByIdAndDelete(recordId);

          case 4:
            deleteRecord = _context5.sent;

            if (!deleteRecord) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: 'Expediente Eliminado con éxito'
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(201).json({
              message: 'Expediente no existe'
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(403).json({
              message: 'Error Interno'
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function deleteRecordById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteRecordById = deleteRecordById;
//# sourceMappingURL=record.controller.js.map