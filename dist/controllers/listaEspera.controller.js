"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ListaEspera = _interopRequireDefault(require("../models/ListaEspera"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _Colores = _interopRequireDefault(require("../models/Colores"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Mes = _interopRequireDefault(require("../models/Mes"));

var _Financiamiento = _interopRequireDefault(require("../models/Financiamiento"));

var _Banco = _interopRequireDefault(require("../models/Banco"));

var _PlanMAF = _interopRequireDefault(require("../models/PlanMAF"));

var _Maf = _interopRequireDefault(require("../models/Maf"));

var _User = _interopRequireDefault(require("../models/User"));

var _EstadoListaEspera = _interopRequireDefault(require("../models/EstadoListaEspera"));

var listaEsperaController = {};

listaEsperaController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ListaEspera.default.find().sort({
              mes_primer_abono: -1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "vehiculo",
              select: "chasis model cod_tdp version",
              populate: [{
                path: "chasis",
                select: "name"
              }, {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }]
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document cellphone email"
            }).populate({
              path: "estadoE",
              select: "name valor"
            }).populate({
              path: "anio_primer_abono",
              select: "name"
            }).populate({
              path: "mes_primer_abono",
              select: "name"
            }).populate({
              path: "tipo_venta",
              select: "name"
            }).populate({
              path: "financiera",
              select: "name avatar"
            }).populate({
              path: "plan_maf",
              select: "name"
            }).populate({
              path: "solicitudMAF",
              select: "nro_solicitud fecha_ingreso sucursalE customer cuota_inicial seller car estadoSolicitudMAF fecha_aprobacion carta_evidencia",
              populate: [{
                path: "sucursalE",
                select: "name"
              }, {
                path: "customer",
                select: "name document cellphone email"
              }, {
                path: "seller",
                select: "name document sucursalE marcaE",
                populate: [{
                  path: "sucursalE",
                  select: "name"
                }, {
                  path: "marcaE",
                  select: "name avatar"
                }]
              }, {
                path: "car",
                select: "chasis model cod_tdp version",
                populate: [{
                  path: "chasis",
                  select: "name"
                }, {
                  path: "model",
                  select: "name avatar marca",
                  populate: {
                    path: "marca",
                    select: "name avatar"
                  }
                }]
              }, {
                path: "estadoSolicitudMAF",
                select: "name"
              }]
            }).populate({
              path: "createdBy",
              select: "name username"
            }).populate({
              path: "updatedBy",
              select: "name username"
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
              message: "No existen clientes en espera"
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

listaEsperaController.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var itemId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            itemId = req.params.itemId;
            _context2.prev = 1;
            _context2.next = 4;
            return _ListaEspera.default.findById(itemId).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "vehiculo",
              select: "chasis model cod_tdp version",
              populate: [{
                path: "chasis",
                select: "name"
              }, {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }]
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document cellphone email"
            }).populate({
              path: "estadoE",
              select: "name valor"
            }).populate({
              path: "anio_primer_abono",
              select: "name"
            }).populate({
              path: "mes_primer_abono",
              select: "name"
            }).populate({
              path: "tipo_venta",
              select: "name"
            }).populate({
              path: "financiera",
              select: "name avatar"
            }).populate({
              path: "plan_maf",
              select: "name"
            }).populate({
              path: "solicitudMAF",
              select: "nro_solicitud fecha_ingreso sucursalE customer cuota_inicial seller car estadoSolicitudMAF fecha_aprobacion carta_evidencia",
              populate: [{
                path: "sucursalE",
                select: "name"
              }, {
                path: "customer",
                select: "name document cellphone email"
              }, {
                path: "seller",
                select: "name document sucursalE marcaE",
                populate: [{
                  path: "sucursalE",
                  select: "name"
                }, {
                  path: "marcaE",
                  select: "name avatar"
                }]
              }, {
                path: "car",
                select: "chasis model cod_tdp version",
                populate: [{
                  path: "chasis",
                  select: "name"
                }, {
                  path: "model",
                  select: "name avatar marca",
                  populate: {
                    path: "marca",
                    select: "name avatar"
                  }
                }]
              }, {
                path: "estadoSolicitudMAF",
                select: "name"
              }]
            }).populate({
              path: "createdBy",
              select: "name username"
            }).populate({
              path: "updatedBy",
              select: "name username"
            });

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: "No se encontró el cliente en la lista de espera"
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

listaEsperaController.createOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, cod_interno, sucursal, sucursalE, vehiculo, colorE, cantidad, estado, estadoE, orden, cliente, anio_primer_abono, mes_primer_abono, grupo_abonos, precio_venta_final, tipo_venta, financiera, plan_maf, fecha_carta_aprobacion, inicial, solicitudMAF, cuenta_epdp, avance_pago_contado, avance_pago_credito, cumple_politica, createdBy, obj, sucursalFound, vehiculoFound, colorFound, customerFound, estadoFound, anioFound, mesFound, tipoVentaFound, financieraFound, planMAFFound, solicitudMAFFound, userFound, query;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cod_interno = _req$body.cod_interno, sucursal = _req$body.sucursal, sucursalE = _req$body.sucursalE, vehiculo = _req$body.vehiculo, colorE = _req$body.colorE, cantidad = _req$body.cantidad, estado = _req$body.estado, estadoE = _req$body.estadoE, orden = _req$body.orden, cliente = _req$body.cliente, anio_primer_abono = _req$body.anio_primer_abono, mes_primer_abono = _req$body.mes_primer_abono, grupo_abonos = _req$body.grupo_abonos, precio_venta_final = _req$body.precio_venta_final, tipo_venta = _req$body.tipo_venta, financiera = _req$body.financiera, plan_maf = _req$body.plan_maf, fecha_carta_aprobacion = _req$body.fecha_carta_aprobacion, inicial = _req$body.inicial, solicitudMAF = _req$body.solicitudMAF, cuenta_epdp = _req$body.cuenta_epdp, avance_pago_contado = _req$body.avance_pago_contado, avance_pago_credito = _req$body.avance_pago_credito, cumple_politica = _req$body.cumple_politica, createdBy = _req$body.createdBy;
            _context3.prev = 1;
            obj = new _ListaEspera.default({
              cod_interno: cod_interno,
              sucursal: sucursal,
              cantidad: cantidad,
              orden: orden,
              estado: estado,
              grupo_abonos: grupo_abonos,
              precio_venta_final: precio_venta_final,
              fecha_carta_aprobacion: fecha_carta_aprobacion,
              inicial: inicial,
              cuenta_epdp: cuenta_epdp,
              avance_pago_contado: avance_pago_contado,
              avance_pago_credito: avance_pago_credito,
              cumple_politica: cumple_politica
            });
            _context3.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            sucursalFound = _context3.sent;

            if (sucursalFound) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 8:
            obj.sucursalE = sucursalFound._id;
            _context3.next = 11;
            return _Vehicle.default.findOne({
              cod_tdp: vehiculo
            });

          case 11:
            vehiculoFound = _context3.sent;

            if (vehiculoFound) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(vehiculo, " no encontrado")
            }));

          case 14:
            obj.vehiculo = vehiculoFound._id;
            _context3.next = 17;
            return _Colores.default.find({
              name: {
                $in: colorE
              }
            });

          case 17:
            colorFound = _context3.sent;

            if (colorFound) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Color ".concat(colorE, " no encontrado")
            }));

          case 20:
            obj.colorE = colorFound.map(function (a) {
              return a._id;
            });
            _context3.next = 23;
            return _Customer.default.findOne({
              name: cliente
            });

          case 23:
            customerFound = _context3.sent;

            if (customerFound) {
              _context3.next = 26;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 26:
            obj.cliente = customerFound._id;
            _context3.next = 29;
            return _EstadoListaEspera.default.findOne({
              name: estadoE
            });

          case 29:
            estadoFound = _context3.sent;

            if (estadoFound) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoE, " no encontrado")
            }));

          case 32:
            obj.estadoE = estadoFound._id;
            _context3.next = 35;
            return _Anio.default.findOne({
              name: anio_primer_abono
            });

          case 35:
            anioFound = _context3.sent;

            if (anioFound) {
              _context3.next = 38;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Anio ".concat(anio_primer_abono, " no encontrado")
            }));

          case 38:
            obj.anio_primer_abono = anioFound._id;
            _context3.next = 41;
            return _Mes.default.findOne({
              name: mes_primer_abono
            });

          case 41:
            mesFound = _context3.sent;

            if (mesFound) {
              _context3.next = 44;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Mes ".concat(mes_primer_abono, " no encontrado")
            }));

          case 44:
            obj.mes_primer_abono = mesFound._id;
            _context3.next = 47;
            return _Financiamiento.default.findOne({
              name: tipo_venta
            });

          case 47:
            tipoVentaFound = _context3.sent;

            if (tipoVentaFound) {
              _context3.next = 50;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Tipo Venta ".concat(tipo_venta, " no encontrado")
            }));

          case 50:
            obj.tipo_venta = tipoVentaFound._id;

            if (!(financiera == null || financiera == undefined)) {
              _context3.next = 55;
              break;
            }

            obj.financiera = null;
            _context3.next = 61;
            break;

          case 55:
            _context3.next = 57;
            return _Banco.default.findOne({
              name: financiera
            });

          case 57:
            financieraFound = _context3.sent;

            if (financieraFound) {
              _context3.next = 60;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Financiera ".concat(financiera, " no encontrada")
            }));

          case 60:
            obj.financiera = financieraFound._id;

          case 61:
            if (!(plan_maf == null || plan_maf == undefined)) {
              _context3.next = 65;
              break;
            }

            obj.plan_maf = null;
            _context3.next = 71;
            break;

          case 65:
            _context3.next = 67;
            return _PlanMAF.default.findOne({
              name: plan_maf
            });

          case 67:
            planMAFFound = _context3.sent;

            if (planMAFFound) {
              _context3.next = 70;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Plan MAF ".concat(plan_maf, " no encontrado")
            }));

          case 70:
            obj.plan_maf = planMAFFound._id;

          case 71:
            if (!(solicitudMAF == null || solicitudMAF == undefined)) {
              _context3.next = 75;
              break;
            }

            obj.solicitudMAF = null;
            _context3.next = 81;
            break;

          case 75:
            _context3.next = 77;
            return _Maf.default.findOne({
              name: solicitudMAF
            });

          case 77:
            solicitudMAFFound = _context3.sent;

            if (solicitudMAFFound) {
              _context3.next = 80;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Solicitud MAF ".concat(solicitudMAF, " no encontrada")
            }));

          case 80:
            obj.solicitudMAF = solicitudMAFFound._id;

          case 81:
            _context3.next = 83;
            return _User.default.findOne({
              username: createdBy
            });

          case 83:
            userFound = _context3.sent;

            if (userFound) {
              _context3.next = 86;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 86:
            obj.createdBy = userFound._id;
            _context3.next = 89;
            return obj.save();

          case 89:
            query = _context3.sent;

            if (query) {
              res.json({
                message: "Cliente agregado a lista de espera con éxito"
              });
            }

            _context3.next = 97;
            break;

          case 93:
            _context3.prev = 93;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 97:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 93]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

listaEsperaController.updateOneById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body2, sucursal, sucursalE, orden, estado, estadoE, cliente, vehiculo, cantidad, grupo_abonos, itemId, sucursalFound, vehiculoFound, customerFound, estadoFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, sucursal = _req$body2.sucursal, sucursalE = _req$body2.sucursalE, orden = _req$body2.orden, estado = _req$body2.estado, estadoE = _req$body2.estadoE, cliente = _req$body2.cliente, vehiculo = _req$body2.vehiculo, cantidad = _req$body2.cantidad, grupo_abonos = _req$body2.grupo_abonos;
            itemId = req.params.itemId;
            _context4.prev = 2;
            _context4.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 8:
            _context4.next = 10;
            return _Vehicle.default.findOne({
              cod_tdp: vehiculo
            });

          case 10:
            vehiculoFound = _context4.sent;

            if (vehiculoFound) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(vehiculo, " no encontrado")
            }));

          case 13:
            _context4.next = 15;
            return _Customer.default.findOne({
              name: cliente
            });

          case 15:
            customerFound = _context4.sent;

            if (customerFound) {
              _context4.next = 18;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 18:
            _context4.next = 20;
            return _EstadoListaEspera.default.findOne({
              name: estadoE
            });

          case 20:
            estadoFound = _context4.sent;

            if (estadoFound) {
              _context4.next = 23;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoE, " no encontrado")
            }));

          case 23:
            _context4.next = 25;
            return _ListaEspera.default.findByIdAndUpdate(itemId, {
              sucursal: sucursal,
              sucursalE: sucursalFound._id,
              orden: orden,
              estado: estado,
              estadoE: estadoFound._id,
              cliente: customerFound._id,
              vehiculo: vehiculoFound._id,
              cantidad: cantidad,
              grupo_abonos: grupo_abonos
            });

          case 25:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Cliente actualizado!'
              });
            } else {
              res.status(404).json({
                message: 'No se encontró el cliente a actualizar'
              });
            }

            _context4.next = 33;
            break;

          case 29:
            _context4.prev = 29;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 33:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 29]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

listaEsperaController.deleteOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var itemId, query;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            itemId = req.params.itemId;
            _context5.prev = 1;
            _context5.next = 4;
            return _ListaEspera.default.findByIdAndDelete(itemId);

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: "Cliente eliminado de la lista de espera con éxito"
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No se encuentra cliente a eliminar"
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
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

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

listaEsperaController.getCountByEstado = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var estadoE, estadoFound, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            estadoE = req.body.estadoE;
            _context6.prev = 1;
            _context6.next = 4;
            return _EstadoListaEspera.default.findOne({
              name: estadoE
            });

          case 4:
            estadoFound = _context6.sent;

            if (estadoFound) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoE, " no encontrado")
            }));

          case 7:
            _context6.next = 9;
            return _ListaEspera.default.find({
              estadoE: estadoFound._id
            }).countDocuments();

          case 9:
            query = _context6.sent;

            if (query >= 0) {
              res.json({
                total: query
              });
            }

            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 13]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var _default = listaEsperaController;
exports.default = _default;
//# sourceMappingURL=listaEspera.controller.js.map