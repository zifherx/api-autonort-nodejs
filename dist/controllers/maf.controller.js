"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVehiclesBySeller = exports.getSolicitudesBySeller = exports.getRankingByVehicle = exports.getRankingByVendedor = exports.getRankingByStatus = exports.getCountByStatus = exports.getCountAll = exports.sendMessageWsp = exports.descargaYZip = exports.downloadAndZipeo = exports.enviarCorreoSolicitud = exports.deleteRequest = exports.cambioStatusByMaf = exports.requestaHot = exports.actualizarReqAprobada = exports.agregarNewDocuments = exports.actualizarRequest = exports.createRequest = exports.obtenerRequestbyStatus = exports.getAllBySucursal = exports.getAllByVendedor = exports.getOneById = exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Maf = _interopRequireDefault(require("../models/Maf"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _User = _interopRequireDefault(require("../models/User"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _download = _interopRequireDefault(require("download"));

var _admZip = _interopRequireDefault(require("adm-zip"));

require("dotenv/config");

var _twilio = _interopRequireDefault(require("twilio"));

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Maf.default.find().populate('customer seller car userCreator userApprove');

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
              message: 'No existen solicitudes'
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

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var mafId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mafId = req.params.mafId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Maf.default.findById(mafId).populate('customer seller car userCreator userApprove');

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json(query);
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen solicitudes'
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

  return function getOneById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getOneById = getOneById;

var getAllByVendedor = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var vendedor, sellerFound, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            vendedor = req.body.vendedor;
            _context3.prev = 1;
            _context3.next = 4;
            return _Seller.default.find({
              name: vendedor
            });

          case 4:
            sellerFound = _context3.sent;
            _context3.next = 7;
            return _Maf.default.find({
              seller: sellerFound.map(function (a) {
                return a._id;
              })
            }).populate('customer seller car userCreator userApprove');

          case 7:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 12;
              break;
            }

            res.json({
              nro_request: query.length,
              requests: query
            });
            _context3.next = 13;
            break;

          case 12:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existen solicitudes'
            }));

          case 13:
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 15]]);
  }));

  return function getAllByVendedor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllByVendedor = getAllByVendedor;

var getAllBySucursal = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var sucursal, query;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sucursal = req.body.sucursal;
            _context4.prev = 1;
            _context4.next = 4;
            return _Maf.default.find({
              sucursal: sucursal
            }).populate('customer seller car userCreator userApprove');

          case 4:
            query = _context4.sent;

            if (!(query.length > 0)) {
              _context4.next = 9;
              break;
            }

            res.json({
              nro_request: query.length,
              requests: query
            });
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: 'No existen solicitudes'
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 12]]);
  }));

  return function getAllBySucursal(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllBySucursal = getAllBySucursal;

var obtenerRequestbyStatus = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body, status, pasoaHot, sucursal, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, status = _req$body.status, pasoaHot = _req$body.pasoaHot, sucursal = _req$body.sucursal;
            _context5.prev = 1;
            _context5.next = 4;
            return _Maf.default.find({
              primer_status_request: status,
              pasoaHot: pasoaHot,
              sucursal: sucursal
            }).populate('car seller customer');

          case 4:
            query = _context5.sent;

            if (!(query.length > 0)) {
              _context5.next = 9;
              break;
            }

            res.json(query);
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No se encuentran solicitudes en ".concat(status)
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0.response);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 12]]);
  }));

  return function obtenerRequestbyStatus(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.obtenerRequestbyStatus = obtenerRequestbyStatus;

var createRequest = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var _req$body2, nro_solicitud, fecha_ingreso, hora_ingreso, sucursal, cliente, estado_civil, lugar_trabajo, conyuge, document_conyuge, fecha_nacimiento_conyuge, ingreso_promedio, cuota_inicial, vendedor, vehiculo, anio_fab, anio_mod, pvp, plan, tipo_uso, primer_status_request, observaciones_ingreso, userCreator, files, filePaths, obj, clienteEncontrado, vendedorEncontrado, vehiculoEncontrado, usuarioCreador, objCreated;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, nro_solicitud = _req$body2.nro_solicitud, fecha_ingreso = _req$body2.fecha_ingreso, hora_ingreso = _req$body2.hora_ingreso, sucursal = _req$body2.sucursal, cliente = _req$body2.cliente, estado_civil = _req$body2.estado_civil, lugar_trabajo = _req$body2.lugar_trabajo, conyuge = _req$body2.conyuge, document_conyuge = _req$body2.document_conyuge, fecha_nacimiento_conyuge = _req$body2.fecha_nacimiento_conyuge, ingreso_promedio = _req$body2.ingreso_promedio, cuota_inicial = _req$body2.cuota_inicial, vendedor = _req$body2.vendedor, vehiculo = _req$body2.vehiculo, anio_fab = _req$body2.anio_fab, anio_mod = _req$body2.anio_mod, pvp = _req$body2.pvp, plan = _req$body2.plan, tipo_uso = _req$body2.tipo_uso, primer_status_request = _req$body2.primer_status_request, observaciones_ingreso = _req$body2.observaciones_ingreso, userCreator = _req$body2.userCreator;
            files = req.files;
            filePaths = [];
            _context6.prev = 3;

            if (!(files.length === 0)) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              message: 'Faltan los documentos'
            }));

          case 6:
            files.map(function (file) {
              filePaths.push(file.location);
            });
            obj = new _Maf.default({
              nro_solicitud: nro_solicitud,
              fecha_ingreso: fecha_ingreso,
              hora_ingreso: hora_ingreso,
              sucursal: sucursal,
              estado_civil: estado_civil,
              lugar_trabajo: lugar_trabajo,
              conyuge: conyuge,
              document_conyuge: document_conyuge,
              fecha_nacimiento_conyuge: fecha_nacimiento_conyuge,
              ingreso_promedio: ingreso_promedio,
              cuota_inicial: cuota_inicial,
              anio_fab: anio_fab,
              anio_mod: anio_mod,
              pvp: pvp,
              plan: plan,
              tipo_uso: tipo_uso,
              evidencias: filePaths,
              primer_status_request: primer_status_request,
              observaciones_ingreso: observaciones_ingreso
            });
            _context6.next = 10;
            return _Customer.default.find({
              name: cliente
            });

          case 10:
            clienteEncontrado = _context6.sent;
            obj.customer = clienteEncontrado.map(function (a) {
              return a._id;
            });
            _context6.next = 14;
            return _Seller.default.find({
              name: vendedor
            });

          case 14:
            vendedorEncontrado = _context6.sent;
            obj.seller = vendedorEncontrado.map(function (b) {
              return b._id;
            });
            _context6.next = 18;
            return _Vehicle.default.find({
              cod_tdp: vehiculo
            });

          case 18:
            vehiculoEncontrado = _context6.sent;
            obj.car = vehiculoEncontrado.map(function (c) {
              return c._id;
            });
            _context6.next = 22;
            return _User.default.find({
              username: userCreator
            });

          case 22:
            usuarioCreador = _context6.sent;
            obj.userCreator = usuarioCreador.map(function (d) {
              return d._id;
            });
            _context6.next = 26;
            return obj.save();

          case 26:
            objCreated = _context6.sent;

            if (objCreated) {
              res.json({
                message: 'Solicitud MAF creada con éxito'
              });
            }

            _context6.next = 34;
            break;

          case 30:
            _context6.prev = 30;
            _context6.t0 = _context6["catch"](3);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 34:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 30]]);
  }));

  return function createRequest(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createRequest = createRequest;

var actualizarRequest = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var mafId, _req$body3, primer_status_request, fecha_respuesta, observacion, motivo, userApprove, userFound, obj;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            mafId = req.params.mafId;
            _req$body3 = req.body, primer_status_request = _req$body3.primer_status_request, fecha_respuesta = _req$body3.fecha_respuesta, observacion = _req$body3.observacion, motivo = _req$body3.motivo, userApprove = _req$body3.userApprove;
            _context7.prev = 2;
            _context7.next = 5;
            return _User.default.find({
              username: userApprove
            });

          case 5:
            userFound = _context7.sent;
            _context7.next = 8;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              fecha_respuesta: fecha_respuesta,
              observacion: observacion,
              motivo: motivo,
              userApprove: userFound.map(function (a) {
                return a._id;
              })
            });

          case 8:
            obj = _context7.sent;

            if (!obj) {
              _context7.next = 13;
              break;
            }

            res.json({
              message: 'Solicitud MAF actualizada con éxito'
            });
            _context7.next = 14;
            break;

          case 13:
            return _context7.abrupt("return", res.status(404).json({
              messsage: 'No existe Solicitud a actualizar'
            }));

          case 14:
            _context7.next = 20;
            break;

          case 16:
            _context7.prev = 16;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              error: _context7.t0
            }));

          case 20:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 16]]);
  }));

  return function actualizarRequest(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.actualizarRequest = actualizarRequest;

var agregarNewDocuments = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var mafId, _req$body4, reingresado, fecha_ingreso, primer_status_request, adicionales, filePaths, query;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            mafId = req.params.mafId;
            _req$body4 = req.body, reingresado = _req$body4.reingresado, fecha_ingreso = _req$body4.fecha_ingreso, primer_status_request = _req$body4.primer_status_request;
            adicionales = req.files; // console.log(req)

            filePaths = [];
            _context8.prev = 4;

            if (!(adicionales.length === 0)) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", res.status(400).json({
              message: 'Falta los Documentos'
            }));

          case 7:
            adicionales.map(function (file) {
              filePaths.push(file.location);
            });
            _context8.next = 10;
            return _Maf.default.findByIdAndUpdate(mafId, {
              isReingresado: reingresado,
              fecha_ingreso: fecha_ingreso,
              primer_status_request: primer_status_request,
              files_adicionales: filePaths
            });

          case 10:
            query = _context8.sent;

            if (!query) {
              _context8.next = 15;
              break;
            }

            res.json({
              message: 'Documentos agregados con éxito'
            });
            _context8.next = 16;
            break;

          case 15:
            return _context8.abrupt("return", res.status(404).json({
              message: 'No existe Solicitud a modificar'
            }));

          case 16:
            _context8.next = 22;
            break;

          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](4);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 22:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[4, 18]]);
  }));

  return function agregarNewDocuments(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.agregarNewDocuments = agregarNewDocuments;

var actualizarReqAprobada = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var mafId, _req$body5, primer_status_request, fecha_respuesta, observacion, fecha_aprobacion, carta_aprobacion, carta, query;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            mafId = req.params.mafId;
            _req$body5 = req.body, primer_status_request = _req$body5.primer_status_request, fecha_respuesta = _req$body5.fecha_respuesta, observacion = _req$body5.observacion, fecha_aprobacion = _req$body5.fecha_aprobacion, carta_aprobacion = _req$body5.carta_aprobacion;
            carta = req.file;
            _context9.prev = 3;
            _context9.next = 6;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              fecha_respuesta: fecha_respuesta,
              observacion: observacion,
              fecha_aprobacion: fecha_aprobacion,
              carta_aprobacion: carta_aprobacion,
              carta_evidencia: carta.location
            });

          case 6:
            query = _context9.sent;

            if (!query) {
              _context9.next = 11;
              break;
            }

            res.json({
              message: 'Solicitud MAF aprobada con éxito'
            });
            _context9.next = 12;
            break;

          case 11:
            return _context9.abrupt("return", res.status(404).json({
              message: 'No existe Solicitud a aprobar'
            }));

          case 12:
            _context9.next = 18;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](3);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 18:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[3, 14]]);
  }));

  return function actualizarReqAprobada(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.actualizarReqAprobada = actualizarReqAprobada;

var requestaHot = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res) {
    var mafId, pasoaHot, query;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            mafId = req.params.mafId;
            pasoaHot = req.body.pasoaHot;
            _context10.prev = 2;
            _context10.next = 5;
            return _Maf.default.findByIdAndUpdate(mafId, {
              pasoaHot: pasoaHot
            });

          case 5:
            query = _context10.sent;

            if (!query) {
              _context10.next = 10;
              break;
            }

            res.json({
              message: 'Solicitud MAF se actualizó con éxito'
            });
            _context10.next = 11;
            break;

          case 10:
            return _context10.abrupt("return", res.status(404).json({
              messsage: 'No existe Solicitud a actualizar'
            }));

          case 11:
            _context10.next = 17;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(503).json({
              error: _context10.t0
            }));

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 13]]);
  }));

  return function requestaHot(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.requestaHot = requestaHot;

var cambioStatusByMaf = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(req, res) {
    var mafId, tercer_status_request, query;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            mafId = req.params.mafId;
            tercer_status_request = req.body.tercer_status_request;
            _context11.prev = 2;
            _context11.next = 5;
            return _Maf.default.findByIdAndUpdate(mafId, {
              tercer_status_request: tercer_status_request
            });

          case 5:
            query = _context11.sent;

            if (!query) {
              _context11.next = 10;
              break;
            }

            res.json({
              message: "Cambio de Status a ".concat(tercer_status_request, " con \xE9xito")
            });
            _context11.next = 11;
            break;

          case 10:
            return _context11.abrupt("return", res.status(404).json({
              messsage: 'No existe Solicitud a actualizar'
            }));

          case 11:
            _context11.next = 17;
            break;

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(503).json({
              error: _context11.t0
            }));

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 13]]);
  }));

  return function cambioStatusByMaf(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.cambioStatusByMaf = cambioStatusByMaf;

var deleteRequest = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(req, res) {
    var mafId, query;
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            mafId = req.params.mafId;
            _context12.prev = 1;
            _context12.next = 4;
            return _Maf.default.findByIdAndRemove(mafId);

          case 4:
            query = _context12.sent;

            if (!query) {
              _context12.next = 9;
              break;
            }

            res.json({
              message: 'Solicitud eliminada con éxito'
            });
            _context12.next = 10;
            break;

          case 9:
            return _context12.abrupt("return", res.status(404).json({
              message: 'No existe la solicitud a eliminar'
            }));

          case 10:
            _context12.next = 16;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(503).json({
              message: _context12.t0.message
            }));

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 12]]);
  }));

  return function deleteRequest(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

exports.deleteRequest = deleteRequest;

var enviarCorreoSolicitud = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(req, res) {
    var _req$body6, to, cc, subject, text, html, transporter, email, respuesta;

    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _req$body6 = req.body, to = _req$body6.to, cc = _req$body6.cc, subject = _req$body6.subject, text = _req$body6.text, html = _req$body6.html;
            _context13.prev = 1;
            transporter = _nodemailer.default.createTransport({
              host: 'mail.autonortnor.com',
              port: '465',
              secure: true,
              auth: {
                user: 'sistemadv@autonortnor.com',
                pass: 'k=q0mdgLo,QS'
              }
            });
            _context13.next = 5;
            return transporter.sendMail({
              from: '"Sistema ADV 👻" <sistemadv@autonortnor.com>',
              to: to,
              cc: [cc, 'frojas@autonortnor.com.pe'],
              subject: subject,
              text: text,
              html: html
            });

          case 5:
            email = _context13.sent;
            respuesta = email.response.split(" "); // console.log(respuesta)
            // console.log(respuesta[1])

            if (!(respuesta[1] == 'OK')) {
              _context13.next = 12;
              break;
            }

            console.log("Preview URL: %s", _nodemailer.default.getTestMessageUrl(email));
            res.json({
              message: 'Mensaje enviado',
              info: email.messageId,
              retardo: email.envelopeTime,
              respuesta: email.response
            });
            _context13.next = 13;
            break;

          case 12:
            return _context13.abrupt("return", res.status(500).json({
              message: 'Error al enviar correo'
            }));

          case 13:
            _context13.next = 19;
            break;

          case 15:
            _context13.prev = 15;
            _context13.t0 = _context13["catch"](1);
            console.log(_context13.t0.message);
            return _context13.abrupt("return", res.status(503).json({
              message: _context13.t0.message
            }));

          case 19:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 15]]);
  }));

  return function enviarCorreoSolicitud(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

exports.enviarCorreoSolicitud = enviarCorreoSolicitud;

var downloadAndZipeo = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(req, res) {
    var files, dir, uploadDir, zip, i, downloadName, data;
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            files = req.body.files;
            _context14.prev = 1;
            _context14.next = 4;
            return Promise.all(files.map(function (url) {
              return (0, _download.default)(url, _path.default.resolve('src/uploads'));
            }));

          case 4:
            console.log('Download completed!');
            dir = _path.default.resolve('src/uploads');
            uploadDir = _fs.default.readdirSync(dir);
            zip = new _admZip.default();

            for (i = 0; i < uploadDir.length; i++) {
              zip.addLocalFile(dir + '/' + uploadDir[i]);
            }

            downloadName = "".concat(Date.now(), ".zip");
            data = zip.toBuffer();
            zip.writeZip(dir + '/' + downloadName);
            res.json({
              url: downloadName
            }); // delFiles();

            _context14.next = 19;
            break;

          case 15:
            _context14.prev = 15;
            _context14.t0 = _context14["catch"](1);
            console.log(_context14.t0);
            return _context14.abrupt("return", res.status(503).json({
              message: _context14.t0.message
            }));

          case 19:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 15]]);
  }));

  return function downloadAndZipeo(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

exports.downloadAndZipeo = downloadAndZipeo;

var descargaYZip = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(req, res) {
    var links, fileZip;
    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            links = req.body.links;
            fileZip = req.file;
            /* await Promise.all(links
                .map(url => download(url, path.resolve('src/uploads'))));
              console.log('Download completed!'); */

            console.log(fileZip);

          case 3:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function descargaYZip(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

exports.descargaYZip = descargaYZip;

var sendMessageWsp = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16(req, res) {
    var _req$body7, placa, sucursal, servicio, mejora, calificacion, destino, accountSid, authToken, client;

    return _regenerator.default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _req$body7 = req.body, placa = _req$body7.placa, sucursal = _req$body7.sucursal, servicio = _req$body7.servicio, mejora = _req$body7.mejora, calificacion = _req$body7.calificacion, destino = _req$body7.destino;
            accountSid = 'AC5145f2cf5442844fa805e987f09751c6';
            authToken = '42d0808b60a3917dddcf06879e56ff4e';
            client = new _twilio.default(accountSid, authToken);
            client.messages.create({
              /* body: 'Se registró una calificación en la siguiente encuesta.
              Cliente con placa: {{1}} perteneciente a la sucursal: {{2}} que realizó el servicio de: {{3}}, sugiere mejorar en: {{4}}.
              Su calificación es: {{5}}' */
              body: "Se registr\xF3 una calificaci\xF3n en la siguiente encuesta. \nCliente con placa: *".concat(placa, "* perteneciente a la sucursal: *").concat(sucursal, "* que realiz\xF3 el servicio de: *").concat(servicio, "*, sugiere mejorar en: *").concat(mejora, "*. \nSu calificaci\xF3n es: *").concat(calificacion, "*"),
              // to: 'whatsapp:+51924063422', // Fernando Rojas
              to: 'whatsapp:+51' + destino,
              // Paul holguin
              // to: '+51989927794', // Paul holguin
              // to: '+51924063422',
              from: 'whatsapp:+18482856322' // From a valid Twilio number
              // from: '+18482856322',

            }).then(function (message) {
              // console.log(message)
              res.json({
                ok: 'Message sent',
                sid: message.sid,
                status: message.status
              });
            });

          case 5:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function sendMessageWsp(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

exports.sendMessageWsp = sendMessageWsp;

var getCountAll = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(req, res) {
    var _req$body8, sucursal, start, end, query;

    return _regenerator.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _req$body8 = req.body, sucursal = _req$body8.sucursal, start = _req$body8.start, end = _req$body8.end;
            _context17.prev = 1;
            _context17.next = 4;
            return _Maf.default.find({
              sucursal: sucursal,
              fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 4:
            query = _context17.sent;

            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context17.next = 11;
            break;

          case 8:
            _context17.prev = 8;
            _context17.t0 = _context17["catch"](1);
            return _context17.abrupt("return", res.status(503).json({
              message: _context17.t0.message
            }));

          case 11:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[1, 8]]);
  }));

  return function getCountAll(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getCountAll = getCountAll;

var getCountByStatus = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(req, res) {
    var _req$body9, sucursal, estado, start, end, query;

    return _regenerator.default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _req$body9 = req.body, sucursal = _req$body9.sucursal, estado = _req$body9.estado, start = _req$body9.start, end = _req$body9.end;
            _context18.prev = 1;
            _context18.next = 4;
            return _Maf.default.find({
              sucursal: sucursal,
              primer_status_request: estado,
              fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 4:
            query = _context18.sent;

            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context18.next = 11;
            break;

          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](1);
            return _context18.abrupt("return", res.status(503).json({
              message: _context18.t0.message
            }));

          case 11:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 8]]);
  }));

  return function getCountByStatus(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

exports.getCountByStatus = getCountByStatus;

var getRankingByStatus = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(req, res) {
    var _req$body10, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _req$body10 = req.body, sucursal = _req$body10.sucursal, start = _req$body10.start, end = _req$body10.end;
            _context19.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context19.next = 5;
            return _Maf.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$primer_status_request",
                num_solicitudes: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_solicitudes: -1
              }
            }]);

          case 5:
            query = _context19.sent;

            if (!(query.length > 0)) {
              _context19.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context19.next = 11;
            break;

          case 10:
            return _context19.abrupt("return", res.status(201).json({
              message: 'No existen Solicitudes aún'
            }));

          case 11:
            _context19.next = 17;
            break;

          case 13:
            _context19.prev = 13;
            _context19.t0 = _context19["catch"](1);
            console.log(_context19.t0);
            return _context19.abrupt("return", res.status(503).json({
              message: _context19.t0.message
            }));

          case 17:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[1, 13]]);
  }));

  return function getRankingByStatus(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();

exports.getRankingByStatus = getRankingByStatus;

var getRankingByVendedor = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(req, res) {
    var _req$body11, sucursal, estado, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _req$body11 = req.body, sucursal = _req$body11.sucursal, estado = _req$body11.estado, start = _req$body11.start, end = _req$body11.end;
            _context20.prev = 1;
            filtro = {
              sucursal: sucursal,
              primer_status_request: estado,
              fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context20.next = 5;
            return _Maf.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$seller",
                num_solicitudes: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_solicitudes: -1
              }
            }]);

          case 5:
            query = _context20.sent;

            if (!(query.length > 0)) {
              _context20.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context20.next = 11;
            break;

          case 10:
            return _context20.abrupt("return", res.status(201).json({
              message: 'No existen Solicitudes aún'
            }));

          case 11:
            _context20.next = 17;
            break;

          case 13:
            _context20.prev = 13;
            _context20.t0 = _context20["catch"](1);
            console.log(_context20.t0);
            return _context20.abrupt("return", res.status(503).json({
              message: _context20.t0.message
            }));

          case 17:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[1, 13]]);
  }));

  return function getRankingByVendedor(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();

exports.getRankingByVendedor = getRankingByVendedor;

var getRankingByVehicle = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(req, res) {
    var _req$body12, sucursal, estado, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _req$body12 = req.body, sucursal = _req$body12.sucursal, estado = _req$body12.estado, start = _req$body12.start, end = _req$body12.end;
            _context21.prev = 1;
            filtro = {
              sucursal: sucursal,
              primer_status_request: estado,
              fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context21.next = 5;
            return _Maf.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$car",
                num_solicitudes: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_solicitudes: -1
              }
            }]);

          case 5:
            query = _context21.sent;

            if (!(query.length > 0)) {
              _context21.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context21.next = 11;
            break;

          case 10:
            return _context21.abrupt("return", res.status(201).json({
              message: 'No existen Solicitudes aún'
            }));

          case 11:
            _context21.next = 17;
            break;

          case 13:
            _context21.prev = 13;
            _context21.t0 = _context21["catch"](1);
            console.log(_context21.t0);
            return _context21.abrupt("return", res.status(503).json({
              message: _context21.t0.message
            }));

          case 17:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[1, 13]]);
  }));

  return function getRankingByVehicle(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();

exports.getRankingByVehicle = getRankingByVehicle;

var getSolicitudesBySeller = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(req, res) {
    var _req$body13, vendedor, start, end, sellerFound, filtro, query;

    return _regenerator.default.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _req$body13 = req.body, vendedor = _req$body13.vendedor, start = _req$body13.start, end = _req$body13.end;
            _context22.prev = 1;
            _context22.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context22.sent;

            if (sellerFound) {
              _context22.next = 7;
              break;
            }

            return _context22.abrupt("return", res.status(404).json({
              message: 'No existe el vendedor'
            }));

          case 7:
            filtro = {
              seller: sellerFound._id,
              fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context22.next = 10;
            return _Maf.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$primer_status_request",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context22.sent;

            if (!(query.length > 0)) {
              _context22.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context22.next = 16;
            break;

          case 15:
            return _context22.abrupt("return", res.status(201).json({
              message: 'Vendedor no ingresó ninguna solicitud'
            }));

          case 16:
            _context22.next = 22;
            break;

          case 18:
            _context22.prev = 18;
            _context22.t0 = _context22["catch"](1);
            console.log(_context22.t0.message);
            return _context22.abrupt("return", res.status(503).json({
              message: _context22.t0.message
            }));

          case 22:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[1, 18]]);
  }));

  return function getSolicitudesBySeller(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();

exports.getSolicitudesBySeller = getSolicitudesBySeller;

var getVehiclesBySeller = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(req, res) {
    var _req$body14, vendedor, estado, start, end, sellerFound, filtro, query;

    return _regenerator.default.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _req$body14 = req.body, vendedor = _req$body14.vendedor, estado = _req$body14.estado, start = _req$body14.start, end = _req$body14.end;
            _context23.prev = 1;
            _context23.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context23.sent;

            if (sellerFound) {
              _context23.next = 7;
              break;
            }

            return _context23.abrupt("return", res.status(404).json({
              message: 'No existe el vendedor'
            }));

          case 7:
            filtro = {
              seller: sellerFound._id,
              primer_status_request: estado,
              fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context23.next = 10;
            return _Maf.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$car',
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context23.sent;

            if (!(query.length > 0)) {
              _context23.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context23.next = 16;
            break;

          case 15:
            return _context23.abrupt("return", res.status(201).json({
              message: 'Vendedor no ingresó ninguna solicitud'
            }));

          case 16:
            _context23.next = 22;
            break;

          case 18:
            _context23.prev = 18;
            _context23.t0 = _context23["catch"](1);
            console.log(_context23.t0.message);
            return _context23.abrupt("return", res.status(503).json({
              message: _context23.t0.message
            }));

          case 22:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[1, 18]]);
  }));

  return function getVehiclesBySeller(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();

exports.getVehiclesBySeller = getVehiclesBySeller;
//# sourceMappingURL=maf.controller.js.map