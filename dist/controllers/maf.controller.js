"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enviarCorreoSolicitud = exports.deleteRequest = exports.cambioStatusByMaf = exports.requestaHot = exports.actualizarReqAprobada = exports.agregarNewDocuments = exports.actualizarRequest = exports.createRequest = exports.obtenerRequestbyStatus = exports.getOneById = exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Maf = _interopRequireDefault(require("../models/Maf"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Maf.default.find().populate('customer seller car');

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
            return _Maf.default.findById(mafId).populate('customer seller car');

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

var obtenerRequestbyStatus = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, status, pasoaHot, query;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, status = _req$body.status, pasoaHot = _req$body.pasoaHot;
            _context3.prev = 1;
            _context3.next = 4;
            return _Maf.default.find({
              primer_status_request: status,
              pasoaHot: pasoaHot
            }).populate('car seller customer');

          case 4:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 9;
              break;
            }

            res.json(query);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: "No se encuentran solicitudes en ".concat(status)
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0.response);
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

  return function obtenerRequestbyStatus(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.obtenerRequestbyStatus = obtenerRequestbyStatus;

var createRequest = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body2, nro_solicitud, fecha_ingreso, hora_ingreso, sucursal, cliente, estado_civil, lugar_trabajo, conyuge, document_conyuge, fecha_nacimiento_conyuge, ingreso_promedio, cuota_inicial, vendedor, vehiculo, anio_fab, anio_mod, pvp, plan, tipo_uso, primer_status_request, observaciones_ingreso, files, filePaths, obj, clienteEncontrado, vendedorEncontrado, vehiculoEncontrado, objCreated;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, nro_solicitud = _req$body2.nro_solicitud, fecha_ingreso = _req$body2.fecha_ingreso, hora_ingreso = _req$body2.hora_ingreso, sucursal = _req$body2.sucursal, cliente = _req$body2.cliente, estado_civil = _req$body2.estado_civil, lugar_trabajo = _req$body2.lugar_trabajo, conyuge = _req$body2.conyuge, document_conyuge = _req$body2.document_conyuge, fecha_nacimiento_conyuge = _req$body2.fecha_nacimiento_conyuge, ingreso_promedio = _req$body2.ingreso_promedio, cuota_inicial = _req$body2.cuota_inicial, vendedor = _req$body2.vendedor, vehiculo = _req$body2.vehiculo, anio_fab = _req$body2.anio_fab, anio_mod = _req$body2.anio_mod, pvp = _req$body2.pvp, plan = _req$body2.plan, tipo_uso = _req$body2.tipo_uso, primer_status_request = _req$body2.primer_status_request, observaciones_ingreso = _req$body2.observaciones_ingreso;
            files = req.files; // console.log(req);

            filePaths = [];
            _context4.prev = 3;

            if (!(files.length === 0)) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
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
            _context4.next = 10;
            return _Customer.default.find({
              name: cliente
            });

          case 10:
            clienteEncontrado = _context4.sent;
            obj.customer = clienteEncontrado.map(function (a) {
              return a._id;
            });
            _context4.next = 14;
            return _Seller.default.find({
              name: vendedor
            });

          case 14:
            vendedorEncontrado = _context4.sent;
            obj.seller = vendedorEncontrado.map(function (b) {
              return b._id;
            });
            _context4.next = 18;
            return _Vehicle.default.find({
              cod_tdp: vehiculo
            });

          case 18:
            vehiculoEncontrado = _context4.sent;
            obj.car = vehiculoEncontrado.map(function (c) {
              return c._id;
            });
            _context4.next = 22;
            return obj.save();

          case 22:
            objCreated = _context4.sent;

            if (objCreated) {
              res.json({
                message: 'Solicitud MAF creada con éxito'
              });
            }

            _context4.next = 30;
            break;

          case 26:
            _context4.prev = 26;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 30:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 26]]);
  }));

  return function createRequest(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createRequest = createRequest;

var actualizarRequest = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var mafId, _req$body3, primer_status_request, fecha_respuesta, observacion, motivo, obj;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            mafId = req.params.mafId;
            _req$body3 = req.body, primer_status_request = _req$body3.primer_status_request, fecha_respuesta = _req$body3.fecha_respuesta, observacion = _req$body3.observacion, motivo = _req$body3.motivo;
            _context5.prev = 2;
            _context5.next = 5;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              fecha_respuesta: fecha_respuesta,
              observacion: observacion,
              motivo: motivo
            });

          case 5:
            obj = _context5.sent;

            if (!obj) {
              _context5.next = 10;
              break;
            }

            res.json({
              message: 'Solicitud MAF actualizada con éxito'
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.status(404).json({
              messsage: 'No existe Solicitud a actualizar'
            }));

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              error: _context5.t0
            }));

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function actualizarRequest(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.actualizarRequest = actualizarRequest;

var agregarNewDocuments = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var mafId, reingresado, adicionales, filePaths, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            mafId = req.params.mafId;
            reingresado = req.body.reingresado;
            adicionales = req.files; // console.log(req)

            filePaths = [];
            _context6.prev = 4;

            if (!(adicionales.length === 0)) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              message: 'Falta los Documentos'
            }));

          case 7:
            adicionales.map(function (file) {
              filePaths.push(file.location);
            });
            _context6.next = 10;
            return _Maf.default.findByIdAndUpdate(mafId, {
              isReingresado: reingresado,
              files_adicionales: filePaths
            });

          case 10:
            query = _context6.sent;

            if (!query) {
              _context6.next = 15;
              break;
            }

            res.json({
              message: 'Documentos agregados con éxito'
            });
            _context6.next = 16;
            break;

          case 15:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe Solicitud a modificar'
            }));

          case 16:
            _context6.next = 22;
            break;

          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](4);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 22:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[4, 18]]);
  }));

  return function agregarNewDocuments(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.agregarNewDocuments = agregarNewDocuments;

var actualizarReqAprobada = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var mafId, _req$body4, primer_status_request, fecha_respuesta, observacion, fecha_aprobacion, carta_aprobacion, carta, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            mafId = req.params.mafId;
            _req$body4 = req.body, primer_status_request = _req$body4.primer_status_request, fecha_respuesta = _req$body4.fecha_respuesta, observacion = _req$body4.observacion, fecha_aprobacion = _req$body4.fecha_aprobacion, carta_aprobacion = _req$body4.carta_aprobacion;
            carta = req.file;
            _context7.prev = 3;
            _context7.next = 6;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              fecha_respuesta: fecha_respuesta,
              observacion: observacion,
              fecha_aprobacion: fecha_aprobacion,
              carta_aprobacion: carta_aprobacion,
              carta_evidencia: carta.location
            });

          case 6:
            query = _context7.sent;

            if (!query) {
              _context7.next = 11;
              break;
            }

            res.json({
              message: 'Solicitud MAF aprobada con éxito'
            });
            _context7.next = 12;
            break;

          case 11:
            return _context7.abrupt("return", res.status(404).json({
              message: 'No existe Solicitud a aprobar'
            }));

          case 12:
            _context7.next = 18;
            break;

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 14]]);
  }));

  return function actualizarReqAprobada(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.actualizarReqAprobada = actualizarReqAprobada;

var requestaHot = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var mafId, pasoaHot, query;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            mafId = req.params.mafId;
            pasoaHot = req.body.pasoaHot;
            _context8.prev = 2;
            _context8.next = 5;
            return _Maf.default.findByIdAndUpdate(mafId, {
              pasoaHot: pasoaHot
            });

          case 5:
            query = _context8.sent;

            if (!query) {
              _context8.next = 10;
              break;
            }

            res.json({
              message: 'Solicitud MAF se actualizó con éxito'
            });
            _context8.next = 11;
            break;

          case 10:
            return _context8.abrupt("return", res.status(404).json({
              messsage: 'No existe Solicitud a actualizar'
            }));

          case 11:
            _context8.next = 17;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              error: _context8.t0
            }));

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 13]]);
  }));

  return function requestaHot(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.requestaHot = requestaHot;

var cambioStatusByMaf = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var mafId, tercer_status_request, query;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            mafId = req.params.mafId;
            tercer_status_request = req.body.tercer_status_request;
            _context9.prev = 2;
            _context9.next = 5;
            return _Maf.default.findByIdAndUpdate(mafId, {
              tercer_status_request: tercer_status_request
            });

          case 5:
            query = _context9.sent;

            if (!query) {
              _context9.next = 10;
              break;
            }

            res.json({
              message: "Cambio de Status a ".concat(tercer_status_request, " con \xE9xito")
            });
            _context9.next = 11;
            break;

          case 10:
            return _context9.abrupt("return", res.status(404).json({
              messsage: 'No existe Solicitud a actualizar'
            }));

          case 11:
            _context9.next = 17;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              error: _context9.t0
            }));

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 13]]);
  }));

  return function cambioStatusByMaf(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.cambioStatusByMaf = cambioStatusByMaf;

var deleteRequest = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res) {
    var mafId, query;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            mafId = req.params.mafId;
            _context10.prev = 1;
            _context10.next = 4;
            return _Maf.default.findByIdAndRemove(mafId);

          case 4:
            query = _context10.sent;

            if (!query) {
              _context10.next = 9;
              break;
            }

            res.json({
              message: 'Solicitud eliminada con éxito'
            });
            _context10.next = 10;
            break;

          case 9:
            return _context10.abrupt("return", res.status(404).json({
              message: 'No existe la solicitud a eliminar'
            }));

          case 10:
            _context10.next = 16;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 12]]);
  }));

  return function deleteRequest(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.deleteRequest = deleteRequest;

var enviarCorreoSolicitud = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(req, res) {
    var _req$body5, to, cc, subject, text, html, transporter, email, respuesta;

    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body5 = req.body, to = _req$body5.to, cc = _req$body5.cc, subject = _req$body5.subject, text = _req$body5.text, html = _req$body5.html;
            _context11.prev = 1;
            transporter = _nodemailer.default.createTransport({
              host: 'mail.autonortnor.com',
              port: '465',
              secure: true,
              auth: {
                user: 'sistemadv@autonortnor.com',
                pass: 'k=q0mdgLo,QS'
              }
            });
            _context11.next = 5;
            return transporter.sendMail({
              from: '"Sistema ADV 👻" <sistemadv@autonortnor.com>',
              to: to,
              cc: [cc, 'frojas@autonortnor.com.pe'],
              subject: subject,
              text: text,
              html: html
            });

          case 5:
            email = _context11.sent;
            respuesta = email.response.split(" "); // console.log(respuesta)
            // console.log(respuesta[1])

            if (!(respuesta[1] == 'OK')) {
              _context11.next = 12;
              break;
            }

            console.log("Preview URL: %s", _nodemailer.default.getTestMessageUrl(email));
            res.json({
              message: 'Mensaje enviado',
              info: email.messageId,
              retardo: email.envelopeTime,
              respuesta: email.response
            });
            _context11.next = 13;
            break;

          case 12:
            return _context11.abrupt("return", res.status(500).json({
              message: 'Error al enviar correo'
            }));

          case 13:
            _context11.next = 19;
            break;

          case 15:
            _context11.prev = 15;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0.message);
            return _context11.abrupt("return", res.status(503).json({
              message: _context11.t0.message
            }));

          case 19:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 15]]);
  }));

  return function enviarCorreoSolicitud(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.enviarCorreoSolicitud = enviarCorreoSolicitud;
//# sourceMappingURL=maf.controller.js.map