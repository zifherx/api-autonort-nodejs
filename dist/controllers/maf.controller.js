"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Maf = _interopRequireDefault(require("../models/Maf"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _User = _interopRequireDefault(require("../models/User"));

var _PlanMAF = _interopRequireDefault(require("../models/PlanMAF"));

var _TipoUso = _interopRequireDefault(require("../models/TipoUso"));

var _StatusMafRequest = _interopRequireDefault(require("../models/StatusMafRequest"));

require("dotenv/config");

var _fs = _interopRequireDefault(require("fs"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _path = _interopRequireDefault(require("path"));

var _download = _interopRequireDefault(require("download"));

var _admZip = _interopRequireDefault(require("adm-zip"));

var _twilio = _interopRequireDefault(require("twilio"));

var mafController = {}; // Nuevos

mafController.createOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, nro_solicitud, fecha_ingreso, sucursal, sucursalE, customer, estado_civil, observaciones_ingreso, conyuge, document_conyuge, fecha_nacimiento_conyuge, lugar_trabajo, ingreso_promedio, cuota_inicial, seller, car, anioFabE, anioModE, pvp, planMAF, tipoUsoE, primer_status_request, estadoSolicitudMAF, fechaIngresoSolicitud, createdBy, evidencias, obj, sucursalFound, customerFound, sellerFound, carFound, anioFFound, anioMFound, planMafFound, tipoUsoFound, estadoFound, userFound, query;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nro_solicitud = _req$body.nro_solicitud, fecha_ingreso = _req$body.fecha_ingreso, sucursal = _req$body.sucursal, sucursalE = _req$body.sucursalE, customer = _req$body.customer, estado_civil = _req$body.estado_civil, observaciones_ingreso = _req$body.observaciones_ingreso, conyuge = _req$body.conyuge, document_conyuge = _req$body.document_conyuge, fecha_nacimiento_conyuge = _req$body.fecha_nacimiento_conyuge, lugar_trabajo = _req$body.lugar_trabajo, ingreso_promedio = _req$body.ingreso_promedio, cuota_inicial = _req$body.cuota_inicial, seller = _req$body.seller, car = _req$body.car, anioFabE = _req$body.anioFabE, anioModE = _req$body.anioModE, pvp = _req$body.pvp, planMAF = _req$body.planMAF, tipoUsoE = _req$body.tipoUsoE, primer_status_request = _req$body.primer_status_request, estadoSolicitudMAF = _req$body.estadoSolicitudMAF, fechaIngresoSolicitud = _req$body.fechaIngresoSolicitud, createdBy = _req$body.createdBy; // console.log(req.body);

            evidencias = req.files;
            _context.prev = 2;

            if (!(evidencias.length == 0)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "No se cargó ningún archivo"
            }));

          case 5:
            if (!(evidencias.length > 50)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Excedió el límite de archivos"
            }));

          case 7:
            // evidencias.map((a) => {
            //     archivos.push(a.location);
            // });
            obj = new _Maf.default({
              nro_solicitud: nro_solicitud,
              fecha_ingreso: fecha_ingreso,
              sucursal: sucursal,
              estado_civil: estado_civil,
              lugar_trabajo: lugar_trabajo,
              observaciones_ingreso: observaciones_ingreso,
              conyuge: conyuge,
              document_conyuge: document_conyuge,
              fecha_nacimiento_conyuge: fecha_nacimiento_conyuge,
              ingreso_promedio: ingreso_promedio,
              cuota_inicial: cuota_inicial,
              pvp: pvp,
              evidencias: evidencias.map(function (a) {
                return a.location;
              }),
              primer_status_request: primer_status_request,
              fechaIngresoSolicitud: fechaIngresoSolicitud
            });
            _context.next = 10;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 10:
            sucursalFound = _context.sent;

            if (sucursalFound) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 13:
            obj.sucursalE = sucursalFound._id;
            _context.next = 16;
            return _Customer.default.findOne({
              name: customer
            });

          case 16:
            customerFound = _context.sent;

            if (customerFound) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(customer, " no encontrado")
            }));

          case 19:
            obj.customer = customerFound._id;
            _context.next = 22;
            return _Seller.default.findOne({
              name: seller
            });

          case 22:
            sellerFound = _context.sent;

            if (sellerFound) {
              _context.next = 25;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(seller, " no encontrado")
            }));

          case 25:
            obj.seller = sellerFound._id;
            _context.next = 28;
            return _Vehicle.default.findOne({
              cod_tdp: car
            });

          case 28:
            carFound = _context.sent;

            if (carFound) {
              _context.next = 31;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(car, " no encontrado")
            }));

          case 31:
            obj.car = carFound._id;
            _context.next = 34;
            return _Anio.default.findOne({
              name: anioFabE
            });

          case 34:
            anioFFound = _context.sent;

            if (anioFFound) {
              _context.next = 37;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "A\xF1o Fab ".concat(anioFabE, " no encontrado")
            }));

          case 37:
            obj.anioFabE = anioFFound._id;
            _context.next = 40;
            return _Anio.default.findOne({
              name: anioModE
            });

          case 40:
            anioMFound = _context.sent;

            if (anioMFound) {
              _context.next = 43;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "A\xF1o Mod ".concat(anioModE, " no encontrado")
            }));

          case 43:
            obj.anioModE = anioMFound._id;
            _context.next = 46;
            return _PlanMAF.default.findOne({
              name: planMAF
            });

          case 46:
            planMafFound = _context.sent;

            if (planMafFound) {
              _context.next = 49;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Plan ".concat(planMAF, " no encontrado")
            }));

          case 49:
            obj.planMAF = planMafFound._id;
            _context.next = 52;
            return _TipoUso.default.findOne({
              name: tipoUsoE
            });

          case 52:
            tipoUsoFound = _context.sent;

            if (tipoUsoFound) {
              _context.next = 55;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Tipo de uso ".concat(tipoUsoE, " no encontrado")
            }));

          case 55:
            obj.tipoUsoE = tipoUsoFound._id;
            _context.next = 58;
            return _StatusMafRequest.default.findOne({
              name: estadoSolicitudMAF
            });

          case 58:
            estadoFound = _context.sent;

            if (estadoFound) {
              _context.next = 61;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoSolicitudMAF, " no encontrado")
            }));

          case 61:
            obj.estadoSolicitudMAF = estadoFound._id;
            _context.next = 64;
            return _User.default.findOne({
              username: createdBy
            });

          case 64:
            userFound = _context.sent;

            if (userFound) {
              _context.next = 67;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 67:
            obj.createdBy = userFound._id;
            obj.userCreator = userFound._id;
            _context.next = 71;
            return obj.save();

          case 71:
            query = _context.sent;

            if (query) {
              res.json({
                message: "Solicitud creada con éxito"
              });
            }

            _context.next = 79;
            break;

          case 75:
            _context.prev = 75;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 79:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 75]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

mafController.getAllByCreador = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var _req$body2, primer_status_request, createdBy, userFound, query;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, primer_status_request = _req$body2.primer_status_request, createdBy = _req$body2.createdBy; // console.log(req.body);

            _context2.prev = 1;
            _context2.next = 4;
            return _User.default.findOne({
              username: createdBy
            });

          case 4:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              mesage: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 7:
            _context2.next = 9;
            return _Maf.default.find({
              $or: [{
                primer_status_request: {
                  $regex: ".*" + primer_status_request + ".*"
                },
                createdBy: userFound._id
              }, {
                primer_status_request: {
                  $regex: ".*" + primer_status_request + ".*"
                },
                userCreator: userFound._id
              }]
            }).sort({
              fecha_ingreso: -1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "customer",
              select: "name document"
            }).populate({
              path: "estadoSolicitudMAF",
              select: "name"
            }).populate({
              path: "car",
              select: "cod_tdp model version",
              populate: {
                path: "model",
                select: "avatar name"
              }
            }).populate({
              path: "seller",
              select: "name"
            });

          case 9:
            query = _context2.sent;

            if (query.length >= 0) {
              res.json({
                total: query.length,
                all: query
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

mafController.getAllBySucursal = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body3, sucursalE, startDate, endDate, query, sucursalFound;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body3 = req.body, sucursalE = _req$body3.sucursalE, startDate = _req$body3.startDate, endDate = _req$body3.endDate; // console.log(req.body);

            query = null;
            _context3.prev = 2;

            if (!(sucursalE == "")) {
              _context3.next = 9;
              break;
            }

            _context3.next = 6;
            return _Maf.default.find({
              sucursal: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_ingreso: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
              }
            }).sort({
              fecha_ingreso: -1
            }).populate({
              path: "customer",
              select: "name document"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "tipoUsoE",
              select: "name"
            }).populate({
              path: "planMAF",
              select: "name"
            }).populate({
              path: "seller",
              select: "name"
            }).populate({
              path: "car",
              select: "model cod_tdp version",
              populate: {
                path: 'model',
                select: 'avatar name marca',
                populate: {
                  path: 'marca',
                  select: 'name avatar'
                }
              }
            }).populate({
              path: "userApprove",
              select: "name username"
            }).populate({
              path: "estadoSolicitudMAF",
              select: "name"
            }).populate({
              path: "estadoAprobacionJefatura",
              select: "name"
            });

          case 6:
            query = _context3.sent;
            _context3.next = 17;
            break;

          case 9:
            _context3.next = 11;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 11:
            sucursalFound = _context3.sent;

            if (sucursalFound) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 14:
            _context3.next = 16;
            return _Maf.default.find({
              $or: [{
                sucursalE: sucursalFound._id,
                fecha_ingreso: {
                  $gte: new Date(startDate),
                  $lte: new Date(endDate)
                }
              }, {
                sucursal: {
                  $regex: ".*" + sucursalE + ".*"
                },
                fecha_ingreso: {
                  $gte: new Date(startDate),
                  $lte: new Date(endDate)
                }
              }]
            }).sort({
              fecha_ingreso: -1
            }).populate({
              path: "customer",
              select: "name document"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "tipoUsoE",
              select: "name"
            }).populate({
              path: "planMAF",
              select: "name"
            }).populate({
              path: "seller",
              select: "name"
            }).populate({
              path: "car",
              select: "model cod_tdp version",
              populate: {
                path: 'model',
                select: 'avatar name marca',
                populate: {
                  path: 'marca',
                  select: 'name avatar'
                }
              }
            }).populate({
              path: "userApprove",
              select: "name username"
            }).populate({
              path: "seller",
              select: "name"
            }).populate({
              path: "estadoSolicitudMAF",
              select: "name"
            }).populate({
              path: "estadoAprobacionJefatura",
              select: "name"
            });

          case 16:
            query = _context3.sent;

          case 17:
            if (!(query.length > 0)) {
              _context3.next = 21;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context3.next = 22;
            break;

          case 21:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existen solicitudes"
            }));

          case 22:
            _context3.next = 28;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 24]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

mafController.getAllByEstado = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body4, estado, sucursalE, startDate, endDate, query, estadoFound;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body4 = req.body, estado = _req$body4.estado, sucursalE = _req$body4.sucursalE, startDate = _req$body4.startDate, endDate = _req$body4.endDate;
            query = null; // console.log(object);

            _context4.prev = 2;

            if (!(startDate && endDate)) {
              _context4.next = 9;
              break;
            }

            _context4.next = 6;
            return _Maf.default.find({
              sucursal: {
                $regex: ".*" + sucursalE + ".*"
              },
              primer_status_request: {
                $regex: ".*" + estado + ".*"
              },
              fecha_ingreso: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
              }
            }).sort({
              fecha_ingreso: -1
            }).populate({
              path: "customer",
              select: "name document"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "seller",
              select: "name email telefono"
            }).populate({
              path: "car",
              select: "model cod_tdp version",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "estadoSolicitudMAF",
              select: "name"
            }).populate({
              path: "planMAF",
              select: "name"
            }).populate({
              path: "tipoUsoE",
              select: "name"
            }).populate({
              path: "anioFabE",
              select: "name"
            }).populate({
              path: "anioModE",
              select: "name"
            }).populate({
              path: "estadoAprobacionJefatura",
              select: "name"
            }).populate({
              path: "userApprove",
              select: "name username email phone"
            }).populate({
              path: "userCreator",
              select: "name username"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 6:
            query = _context4.sent;
            _context4.next = 15;
            break;

          case 9:
            _context4.next = 11;
            return _StatusMafRequest.default.findOne({
              name: estado
            });

          case 11:
            estadoFound = _context4.sent;
            _context4.next = 14;
            return _Maf.default.find({
              $or: [{
                sucursal: {
                  $regex: ".*" + sucursalE + ".*"
                },
                primer_status_request: {
                  $regex: ".*" + estado + ".*"
                }
              }, {
                sucursal: {
                  $regex: ".*" + sucursalE + ".*"
                },
                estadoSolicitudMAF: estadoFound._id
              }]
            }).sort({
              fecha_ingreso: -1
            }).populate({
              path: "customer",
              select: "name document"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "seller",
              select: "name email telefono"
            }).populate({
              path: "car",
              select: "model cod_tdp version",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "estadoSolicitudMAF",
              select: "name"
            }).populate({
              path: "planMAF",
              select: "name"
            }).populate({
              path: "tipoUsoE",
              select: "name"
            }).populate({
              path: "anioFabE",
              select: "name"
            }).populate({
              path: "anioModE",
              select: "name"
            }).populate({
              path: "estadoAprobacionJefatura",
              select: "name"
            }).populate({
              path: "userApprove",
              select: "name username email phone"
            }).populate({
              path: "userCreator",
              select: "name username"
            }).populate({
              path: "createdBy",
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
              message: "No existen solicitudes ".concat(estado)
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

mafController.getOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var mafId, query;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            mafId = req.params.mafId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Maf.default.findById(mafId).populate({
              path: "customer",
              select: "name document cellphone email typeDocument"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "seller",
              select: "name email cellphone"
            }).populate({
              path: "estadoSolicitudMAF",
              select: "name"
            }).populate({
              path: "estadoAprobacionJefatura",
              select: "name"
            }).populate({
              path: "userCreator",
              select: "name username"
            }).populate({
              path: "createdBy",
              select: "name username"
            }).populate({
              path: "car",
              select: "cod_tdp model version",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "anioFabE",
              select: "name"
            }).populate({
              path: "anioModE",
              select: "name"
            }).populate({
              path: "planMAF",
              select: "name"
            }).populate({
              path: "tipoUsoE",
              select: "name"
            });

          case 4:
            query = _context5.sent;

            if (query) {
              res.json({
                one: query
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

mafController.updateRequestStateById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var _req$body5, primer_status_request, estadoSolicitudMAF, observacion, motivo, isEvaluacion, fechaEvaluacion, isObservado, fechaObservado, isRechazado, fechaRechazado, mafId, query, mafStatusFound;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body5 = req.body, primer_status_request = _req$body5.primer_status_request, estadoSolicitudMAF = _req$body5.estadoSolicitudMAF, observacion = _req$body5.observacion, motivo = _req$body5.motivo, isEvaluacion = _req$body5.isEvaluacion, fechaEvaluacion = _req$body5.fechaEvaluacion, isObservado = _req$body5.isObservado, fechaObservado = _req$body5.fechaObservado, isRechazado = _req$body5.isRechazado, fechaRechazado = _req$body5.fechaRechazado;
            mafId = req.params.mafId;
            query = null;
            _context6.prev = 3;
            _context6.next = 6;
            return _StatusMafRequest.default.findOne({
              name: estadoSolicitudMAF
            });

          case 6:
            mafStatusFound = _context6.sent;

            if (mafStatusFound) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(503).json({
              message: "Estado ".concat(estadoSolicitudMAF, " no encontrado")
            }));

          case 9:
            if (!(estadoSolicitudMAF == "EN EVALUACIÓN")) {
              _context6.next = 15;
              break;
            }

            _context6.next = 12;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              estadoSolicitudMAF: mafStatusFound._id,
              observacion: observacion,
              isEvaluacion: isEvaluacion,
              fechaEvaluacion: fechaEvaluacion
            });

          case 12:
            query = _context6.sent;
            _context6.next = 25;
            break;

          case 15:
            if (!(estadoSolicitudMAF == "OBSERVADO")) {
              _context6.next = 21;
              break;
            }

            _context6.next = 18;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              estadoSolicitudMAF: mafStatusFound._id,
              observacion: observacion,
              isObservado: isObservado,
              fechaObservado: fechaObservado
            });

          case 18:
            query = _context6.sent;
            _context6.next = 25;
            break;

          case 21:
            if (!(estadoSolicitudMAF == "RECHAZADO")) {
              _context6.next = 25;
              break;
            }

            _context6.next = 24;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              estadoSolicitudMAF: mafStatusFound._id,
              motivo: motivo,
              isRechazado: isRechazado,
              fechaRechazado: fechaRechazado
            });

          case 24:
            query = _context6.sent;

          case 25:
            if (!query) {
              _context6.next = 29;
              break;
            }

            res.json({
              message: "Solicitud MAF actualizada con éxito"
            });
            _context6.next = 30;
            break;

          case 29:
            return _context6.abrupt("return", res.status(404).json({
              message: "No se encontró la solicitud MAF"
            }));

          case 30:
            _context6.next = 36;
            break;

          case 32:
            _context6.prev = 32;
            _context6.t0 = _context6["catch"](3);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 36:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 32]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

mafController.approveRequestStateById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body6, primer_status_request, estadoSolicitudMAF, fecha_aprobacion, carta_aprobacion, observacion, isAprobado, fechaAprobado, userApprove, mafId, docuAprobacion, estadoFound, userFound, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body6 = req.body, primer_status_request = _req$body6.primer_status_request, estadoSolicitudMAF = _req$body6.estadoSolicitudMAF, fecha_aprobacion = _req$body6.fecha_aprobacion, carta_aprobacion = _req$body6.carta_aprobacion, observacion = _req$body6.observacion, isAprobado = _req$body6.isAprobado, fechaAprobado = _req$body6.fechaAprobado, userApprove = _req$body6.userApprove;
            mafId = req.params.mafId;
            docuAprobacion = req.files; // console.log(req.body);
            // console.log(docuAprobacion);

            if (!(docuAprobacion.length == 0)) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "No se adjuntó ningún documento"
            }));

          case 5:
            _context7.prev = 5;
            _context7.next = 8;
            return _StatusMafRequest.default.findOne({
              name: estadoSolicitudMAF
            });

          case 8:
            estadoFound = _context7.sent;

            if (estadoFound) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoSolicitudMAF, " no encontrado")
            }));

          case 11:
            _context7.next = 13;
            return _User.default.findOne({
              username: userApprove
            });

          case 13:
            userFound = _context7.sent;

            if (userFound) {
              _context7.next = 16;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(userApprove, " no encontrado")
            }));

          case 16:
            _context7.next = 18;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              estadoSolicitudMAF: estadoFound._id,
              fecha_aprobacion: fecha_aprobacion,
              carta_aprobacion: carta_aprobacion,
              observacion: observacion,
              isAprobado: isAprobado,
              fechaAprobado: fechaAprobado,
              carta_evidencia: docuAprobacion[0].location,
              cronograma_pagos: docuAprobacion[1].location,
              userApprove: userFound._id
            });

          case 18:
            query = _context7.sent;

            if (!query) {
              _context7.next = 23;
              break;
            }

            res.json({
              message: "Solicitud actualizada con éxito"
            });
            _context7.next = 24;
            break;

          case 23:
            return _context7.abrupt("return", res.status(404).json({
              message: "No se logr\xF3 actualizar solicitud ".concat(mafId)
            }));

          case 24:
            _context7.next = 30;
            break;

          case 26:
            _context7.prev = 26;
            _context7.t0 = _context7["catch"](5);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 30:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[5, 26]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

mafController.reenrollRequestStateById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var _req$body7, primer_status_request, estadoSolicitudMAF, observaciones_ingreso, isReingresado, fechaReingreso, mafId, adicionales, estadoFound, query;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body7 = req.body, primer_status_request = _req$body7.primer_status_request, estadoSolicitudMAF = _req$body7.estadoSolicitudMAF, observaciones_ingreso = _req$body7.observaciones_ingreso, isReingresado = _req$body7.isReingresado, fechaReingreso = _req$body7.fechaReingreso;
            mafId = req.params.mafId;
            adicionales = req.files;

            if (!(adicionales.length == 0)) {
              _context8.next = 5;
              break;
            }

            return _context8.abrupt("return", res.status(404).json({
              message: "No se adjuntó ningún documento"
            }));

          case 5:
            if (!(adicionales.length > 30)) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", res.status(404).json({
              message: "Se excedió el límite de archivos"
            }));

          case 7:
            _context8.prev = 7;
            _context8.next = 10;
            return _StatusMafRequest.default.findOne({
              name: estadoSolicitudMAF
            });

          case 10:
            estadoFound = _context8.sent;

            if (estadoFound) {
              _context8.next = 13;
              break;
            }

            return _context8.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoSolicitudMAF, " no encontrado")
            }));

          case 13:
            _context8.next = 15;
            return _Maf.default.findByIdAndUpdate(mafId, {
              primer_status_request: primer_status_request,
              estadoSolicitudMAF: estadoFound._id,
              observaciones_ingreso: observaciones_ingreso,
              isReingresado: isReingresado,
              fechaReingreso: fechaReingreso,
              files_adicionales: adicionales.map(function (a) {
                return a.location;
              })
            });

          case 15:
            query = _context8.sent;

            if (!query) {
              _context8.next = 20;
              break;
            }

            res.json({
              message: "Solicitud actualizada con éxito"
            });
            _context8.next = 21;
            break;

          case 20:
            return _context8.abrupt("return", res.status(404).json({
              message: "No se logr\xF3 actualizar solicitud ".concat(mafId)
            }));

          case 21:
            _context8.next = 27;
            break;

          case 23:
            _context8.prev = 23;
            _context8.t0 = _context8["catch"](7);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 27:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[7, 23]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

mafController.deleteOneById = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var mafId, query;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            mafId = req.params.mafId;
            _context9.prev = 1;
            _context9.next = 4;
            return _Maf.default.findByIdAndDelete(mafId);

          case 4:
            query = _context9.sent;

            if (!query) {
              _context9.next = 9;
              break;
            }

            res.json({
              message: "Solicitud MAF eliminada con éxito"
            });
            _context9.next = 10;
            break;

          case 9:
            return _context9.abrupt("return", res.status(404).json({
              message: "No se encontró solicitud"
            }));

          case 10:
            _context9.next = 16;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 12]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}(); // Anteriores1

/*

mafController.getAll = async (req, res) => {
    try {
        const query = await Maf.find()
            .populate({ path: "customer", select: "name document cellphone email" })
            .populate({ path: "seller", select: "name avatar sucursal marca" })
            .populate({
                path: "car",
                select: "cod_tdp model version",
                populate: {
                    path: "model",
                    select: "avatar name marca",
                    populate: {
                        path: "marca",
                        select: "avatar name",
                    },
                },
            })
            .populate({ path: "userCreator", select: "name username avatar" })
            .populate({ path: "userApprove", select: "name username avatar" });
        // console.log(query)
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getOneById = async (req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findById(mafId)
            .populate({ path: "customer", select: "name document cellphone email" })
            .populate({ path: "seller", select: "name avatar sucursal marca" })
            .populate({
                path: "car",
                select: "cod_tdp model version",
                populate: {
                    path: "model",
                    select: "avatar name marca",
                    populate: {
                        path: "marca",
                        select: "avatar name",
                    },
                },
            })
            .populate({ path: "userCreator", select: "name username avatar" })
            .populate({ path: "userApprove", select: "name username avatar" });
        // console.log(query)
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existen solicitud" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getAllByVendedor = async (req, res) => {
    const { vendedor } = req.body;
    try {
        const sellerFound = await Seller.find({ name: vendedor });
        const query = await Maf.find({ seller: sellerFound.map((a) => a._id) }).populate("customer seller car userCreator userApprove");
        if (query.length > 0) {
            res.json({ nro_request: query.length, requests: query });
        } else {
            return res.status(404).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getAllBySucursalyFecha = async (req, res) => {
    const { sucursal, startDate, endDate } = req.body;
    try {
        const query = await Maf.find({
            sucursal: { $regex: ".*" + sucursal + ".*" },
            fecha_ingreso: {
                $gte: new Date(startDate),
                $lte: new Date(endDate),
            },
        })
            .sort({ fecha_ingreso: -1 })
            .populate({
                path: "customer",
                select: "name document",
            })
            .populate({
                path: "seller",
                select: "name document avatar sucursalE",
                populate: {
                    path: "sucursalE",
                    select: "name",
                },
            })
            .populate({
                path: "car",
                select: "model cod_tdp version chasis",
                populate: [
                    { path: "chasis", select: "name" },
                    { path: "model", select: "name avatar marca", populate: { path: "marca", select: "name avatar" } },
                ],
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen solicitudes MAF" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.obtenerRequestbyStatus = async (req, res) => {
    const { status, pasoaHot, sucursal } = req.body;
    try {
        const query = await Maf.find({ primer_status_request: status, pasoaHot: pasoaHot, sucursal: sucursal }).populate("car seller customer");
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: `No se encuentran solicitudes en ${status}` });
        }
    } catch (err) {
        console.log(err.response);
        return res.status(503).json({ message: err.message });
    }
};

mafController.createRequest = async (req, res) => {
    const {
        nro_solicitud,
        fecha_ingreso,
        hora_ingreso,
        sucursal,
        cliente,
        estado_civil,
        lugar_trabajo,
        conyuge,
        document_conyuge,
        fecha_nacimiento_conyuge,
        ingreso_promedio,
        cuota_inicial,
        vendedor,
        vehiculo,
        anio_fab,
        anio_mod,
        pvp,
        plan,
        tipo_uso,
        primer_status_request,
        observaciones_ingreso,
        userCreator,
    } = req.body;
    const files = req.files;

    let filePaths = [];

    try {
        if (files.length === 0) return res.status(400).json({ message: "Faltan los documentos" });

        files.map((file) => {
            filePaths.push(file.location);
        });

        const obj = new Maf({
            nro_solicitud,
            fecha_ingreso,
            hora_ingreso,
            sucursal,
            estado_civil,
            lugar_trabajo,
            conyuge,
            document_conyuge,
            fecha_nacimiento_conyuge,
            ingreso_promedio,
            cuota_inicial,
            anio_fab,
            anio_mod,
            pvp,
            plan,
            tipo_uso,
            evidencias: filePaths,
            primer_status_request,
            observaciones_ingreso,
        });

        let clienteEncontrado = await Customer.find({ name: cliente });
        obj.customer = clienteEncontrado.map((a) => a._id);

        let vendedorEncontrado = await Seller.find({ name: vendedor });
        obj.seller = vendedorEncontrado.map((b) => b._id);

        let vehiculoEncontrado = await Vehicle.find({ cod_tdp: vehiculo });
        obj.car = vehiculoEncontrado.map((c) => c._id);

        let usuarioCreador = await User.find({ username: userCreator });
        obj.userCreator = usuarioCreador.map((d) => d._id);

        const objCreated = await obj.save();

        if (objCreated) {
            res.json({ message: "Solicitud MAF creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.actualizarRequest = async (req, res) => {
    const { mafId } = req.params;
    const { primer_status_request, fecha_respuesta, observacion, motivo, userApprove } = req.body;

    try {
        const userFound = await User.find({ username: userApprove });
        const obj = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            fecha_respuesta,
            observacion,
            motivo,
            userApprove: userFound.map((a) => a._id),
        });
        if (obj) {
            res.json({ message: "Solicitud MAF actualizada con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe Solicitud a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ error: err });
    }
};

mafController.agregarNewDocuments = async (req, res) => {
    const { mafId } = req.params;
    const { reingresado, fecha_ingreso, primer_status_request } = req.body;
    const adicionales = req.files;
    // console.log(req)
    let filePaths = [];

    try {
        if (adicionales.length === 0) return res.status(400).json({ message: "Falta los Documentos" });

        adicionales.map((file) => {
            filePaths.push(file.location);
        });

        const query = await Maf.findByIdAndUpdate(mafId, {
            isReingresado: reingresado,
            fecha_ingreso,
            primer_status_request,
            files_adicionales: filePaths,
        });

        if (query) {
            res.json({ message: "Documentos agregados con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Solicitud a modificar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.actualizarReqAprobada = async (req, res) => {
    const { mafId } = req.params;
    const { primer_status_request, fecha_respuesta, observacion, fecha_aprobacion, carta_aprobacion } = req.body;
    const carta = req.file;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            fecha_respuesta,
            observacion,
            fecha_aprobacion,
            carta_aprobacion,
            carta_evidencia: carta.location,
        });

        if (query) {
            res.json({ message: "Solicitud MAF aprobada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Solicitud a aprobar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.requestaHot = async (req, res) => {
    const { mafId } = req.params;
    const { pasoaHot } = req.body;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, { pasoaHot });
        if (query) {
            res.json({ message: "Solicitud MAF se actualizó con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe Solicitud a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ error: err });
    }
};

mafController.cambioStatusByMaf = async (req, res) => {
    const { mafId } = req.params;
    const { tercer_status_request } = req.body;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, { tercer_status_request });
        if (query) {
            res.json({ message: `Cambio de Status a ${tercer_status_request} con éxito` });
        } else {
            return res.status(404).json({ messsage: "No existe Solicitud a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ error: err });
    }
};

mafController.deleteRequest = async (req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findByIdAndRemove(mafId);
        if (query) {
            res.json({ message: "Solicitud eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe la solicitud a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.enviarCorreoSolicitud = async (req, res) => {
    const { to, cc, subject, text, html } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: "mail.autonortnor.com",
            port: "465",
            secure: true,
            auth: {
                user: "sistemadv@autonortnor.com",
                pass: "k=q0mdgLo,QS",
            },
        });

        let email = await transporter.sendMail({
            from: '"Sistema ADV 👻" <sistemadv@autonortnor.com>',
            to: to,
            cc: [cc, "frojas@autonortnor.com.pe"],
            subject: subject,
            text: text,
            html: html,
        });

        let respuesta = email.response.split(" ");
        // console.log(respuesta)
        // console.log(respuesta[1])
        if (respuesta[1] == "OK") {
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));
            res.json({ message: "Mensaje enviado", info: email.messageId, retardo: email.envelopeTime, respuesta: email.response });
        } else {
            return res.status(500).json({ message: "Error al enviar correo" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

mafController.downloadAndZipeo = async (req, res) => {
    const { files } = req.body;

    try {
        await Promise.all(files.map((url) => download(url, path.resolve("src/uploads"))));

        console.log("Download completed!");

        var dir = path.resolve("src/uploads");
        var uploadDir = fs.readdirSync(dir);

        const zip = new AdmZip();

        for (var i = 0; i < uploadDir.length; i++) {
            zip.addLocalFile(dir + "/" + uploadDir[i]);
        }

        const downloadName = `${Date.now()}.zip`;

        const data = zip.toBuffer();

        zip.writeZip(dir + "/" + downloadName);

        res.json({ url: downloadName });

        // delFiles();
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.descargaYZip = async (req, res) => {
    const { links } = req.body;
    const fileZip = req.file;

    await Promise.all(links
        .map(url => download(url, path.resolve('src/uploads'))));

    console.log('Download completed!');
    console.log(fileZip);
};

mafController.sendMessageWsp = async (req, res) => {
    const { placa, sucursal, servicio, mejora, calificacion, destino } = req.body;
    const accountSid = "AC5145f2cf5442844fa805e987f09751c6";
    const authToken = "42d0808b60a3917dddcf06879e56ff4e";

    const client = new twilio(accountSid, authToken);

    client.messages
        .create({
            // body: 'Se registró una calificación en la siguiente encuesta.
            Cliente con placa: {{1}} perteneciente a la sucursal: {{2}} que realizó el servicio de: {{3}}, sugiere mejorar en: {{4}}.
            Su calificación es: {{5}}'
            body: `Se registró una calificación en la siguiente encuesta. \nCliente con placa: *${placa}* perteneciente a la sucursal: *${sucursal}* que realizó el servicio de: *${servicio}*, sugiere mejorar en: *${mejora}*. \nSu calificación es: *${calificacion}*`,
            // to: 'whatsapp:+51924063422', // Fernando Rojas
            to: "whatsapp:+51" + destino, // Paul holguin
            // to: '+51989927794', // Paul holguin
            // to: '+51924063422',
            from: "whatsapp:+18482856322", // From a valid Twilio number
            // from: '+18482856322',
        })
        .then((message) => {
            // console.log(message)
            res.json({ ok: "Message sent", sid: message.sid, status: message.status });
        });
};

mafController.getCountAll = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const query = await Maf.find({
            sucursal: sucursal,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        }).countDocuments();

        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

mafController.getCountByStatus = async (req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const query = await Maf.find({
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        }).countDocuments();

        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

mafController.getRankingByStatus = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$primer_status_request",
                    num_solicitudes: { $sum: 1 },
                },
            },
            {
                $sort: { num_solicitudes: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Solicitudes aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getRankingByVendedor = async (req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$seller",
                    num_solicitudes: { $sum: 1 },
                },
            },
            {
                $sort: { num_solicitudes: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Solicitudes aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getRankingByVehicle = async (req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$car",
                    num_solicitudes: { $sum: 1 },
                },
            },
            {
                $sort: { num_solicitudes: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Solicitudes aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getSolicitudesBySeller = async (req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        const filtro = { seller: sellerFound._id, fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) } };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$primer_status_request",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna solicitud" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getVehiclesBySeller = async (req, res) => {
    const { vendedor, estado, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        const filtro = {
            seller: sellerFound._id,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$car",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna solicitud" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

mafController.testRanking = async (req, res) => {
    // const { sucursal,marca, start, end } = req.body;
    const { marca } = req.body;

    try {
        const query = await Maf.find({
            "car.model.marca.name": marca,
        });
        // const filtro = {
        //     sucursal: sucursal,
        //     "car.model.marca.name" : marca,
        //     fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) }
        // };

        console.log(query);

        if (query.length > 0) {
            res.json({ deploy: query, total: query.length });
        } else {
            return res.status(404).json({ message: "No existen filtros" });
        }

        // const query = await Maf.aggregate([{
        //     $match: filtro
        // }, {
        //     $group: {
        //         _id: "$primer_status_request",
        //         num_solicitudes: { $sum: 1 }
        //     }
        // }, {
        //     $sort: { num_solicitudes: -1 }
        // }]);

        // if (query.length > 0) {
        //     res.json({ total: query.length, ranking: query });
        // } else {
        //     return res.status(201).json({ message: 'No existen Solicitudes aún' });
        // }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
*/


mafController.getAllSolicitudesAprobadas = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res) {
    var _req$body8, customer, estado, start, end, customerFound, query;

    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body8 = req.body, customer = _req$body8.customer, estado = _req$body8.estado, start = _req$body8.start, end = _req$body8.end;
            _context10.prev = 1;
            _context10.next = 4;
            return _Customer.default.findOne({
              name: customer
            });

          case 4:
            customerFound = _context10.sent;
            _context10.next = 7;
            return _Maf.default.find({
              customer: customerFound._id,
              primer_status_request: estado
            }).select("nro_solicitud fecha_ingreso customer seller car fecha_aprobacion carta_evidencia primer_status_request").populate({
              path: "customer",
              select: "name"
            }).populate({
              path: "seller",
              select: "name"
            }).populate({
              path: "car",
              select: "model cod_tdp version",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            });

          case 7:
            query = _context10.sent;

            if (!(query.length > 0)) {
              _context10.next = 12;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context10.next = 13;
            break;

          case 12:
            return _context10.abrupt("return", res.status(404).json({
              message: "No se encontraron solicitudes"
            }));

          case 13:
            _context10.next = 19;
            break;

          case 15:
            _context10.prev = 15;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 19:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 15]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

var _default = mafController;
exports.default = _default;
//# sourceMappingURL=maf.controller.js.map