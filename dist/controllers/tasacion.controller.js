"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _User = _interopRequireDefault(require("../models/User"));

var _Tasacion = _interopRequireDefault(require("../models/Tasacion"));

var _Tecnico = _interopRequireDefault(require("../models/Tecnico"));

var _AServicios = _interopRequireDefault(require("../models/AServicios"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var tasacionCtrl = {};

tasacionCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tasacion.default.find().sort({
              name: 'asc'
            }).populate({
              path: 'cliente',
              select: 'name document'
            }).populate({
              path: 'asesor_venta',
              select: 'name'
            }).populate({
              path: 'asesor_servicio',
              select: 'name'
            }).populate({
              path: 'tecnico_inspector',
              select: 'name'
            }).populate({
              path: 'createdBy',
              select: 'name'
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json({
              total: query.length,
              tasaciones: query
            });
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: 'No existen Tasaciones'
            }));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 14:
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

tasacionCtrl.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var tasacionId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Tasacion.default.findById(tasacionId).populate({
              path: 'cliente',
              select: 'name document email cellphone address'
            }).populate({
              path: 'asesor_venta',
              select: 'name'
            }).populate({
              path: 'asesor_servicio',
              select: 'name'
            }).populate({
              path: 'tecnico_inspector',
              select: 'name'
            }).populate({
              path: 'createdBy',
              select: 'name'
            });

          case 4:
            query = _context2.sent;

            if (query) {
              res.json(query);
            } else {
              res.status(404).json({
                message: 'No existe la Tasación'
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

tasacionCtrl.getAllByTasador = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var tasador, userFound, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            tasador = req.body.tasador;
            _context3.prev = 1;
            _context3.next = 4;
            return _User.default.find({
              username: tasador
            });

          case 4:
            userFound = _context3.sent;
            _context3.next = 7;
            return _Tasacion.default.find({
              createdBy: userFound.map(function (a) {
                return a._id;
              })
            }).sort({
              name: 'asc'
            }).populate({
              path: 'cliente',
              select: 'name document'
            }).populate({
              path: 'asesor_venta',
              select: 'name'
            }).populate({
              path: 'asesor_servicio',
              select: 'name'
            }).populate({
              path: 'tecnico_inspector',
              select: 'name'
            }).populate({
              path: 'createdBy',
              select: 'name'
            });

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
              message: 'No existen Tasaciones'
            }));

          case 13:
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 15]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

tasacionCtrl.createTasacion = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, cliente, marca, modelo, version, placa, color, anio_fabricacion, kilometraje, tipo_transmision, num_propietarios, precio, observacion, empresa, sucursal, origen_operacion, metodo, fecha_operacion, mes, comentario, ingresoPor, asesor_venta, asesor_servicio, inspeccion_tecnica, tecnico_inspector, createdBy, obj, customerFound, sellerFound, servicesFound, tecnicoFound, userFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, cliente = _req$body.cliente, marca = _req$body.marca, modelo = _req$body.modelo, version = _req$body.version, placa = _req$body.placa, color = _req$body.color, anio_fabricacion = _req$body.anio_fabricacion, kilometraje = _req$body.kilometraje, tipo_transmision = _req$body.tipo_transmision, num_propietarios = _req$body.num_propietarios, precio = _req$body.precio, observacion = _req$body.observacion, empresa = _req$body.empresa, sucursal = _req$body.sucursal, origen_operacion = _req$body.origen_operacion, metodo = _req$body.metodo, fecha_operacion = _req$body.fecha_operacion, mes = _req$body.mes, comentario = _req$body.comentario, ingresoPor = _req$body.ingresoPor, asesor_venta = _req$body.asesor_venta, asesor_servicio = _req$body.asesor_servicio, inspeccion_tecnica = _req$body.inspeccion_tecnica, tecnico_inspector = _req$body.tecnico_inspector, createdBy = _req$body.createdBy;
            _context4.prev = 1;
            obj = new _Tasacion.default({
              marca: marca,
              modelo: modelo,
              version: version,
              placa: placa,
              color: color,
              anio_fabricacion: anio_fabricacion,
              kilometraje: kilometraje,
              tipo_transmision: tipo_transmision,
              num_propietarios: num_propietarios,
              precio: precio,
              observacion: observacion,
              empresa: empresa,
              sucursal: sucursal,
              origen_operacion: origen_operacion,
              metodo: metodo,
              fecha_operacion: fecha_operacion,
              mes: mes,
              comentario: comentario,
              ingresoPor: ingresoPor,
              inspeccion_tecnica: inspeccion_tecnica
            });
            _context4.next = 5;
            return _Customer.default.find({
              name: {
                $in: cliente
              }
            });

          case 5:
            customerFound = _context4.sent;
            obj.cliente = customerFound.map(function (a) {
              return a._id;
            });

            if (!asesor_venta) {
              _context4.next = 14;
              break;
            }

            _context4.next = 10;
            return _Seller.default.find({
              name: {
                $in: asesor_venta
              }
            });

          case 10:
            sellerFound = _context4.sent;
            obj.asesor_venta = sellerFound.map(function (b) {
              return b._id;
            });
            _context4.next = 15;
            break;

          case 14:
            obj.asesor_venta = null;

          case 15:
            if (!asesor_servicio) {
              _context4.next = 22;
              break;
            }

            _context4.next = 18;
            return _AServicios.default.find({
              name: asesor_servicio
            });

          case 18:
            servicesFound = _context4.sent;
            obj.asesor_servicio = servicesFound.map(function (c) {
              return c._id;
            });
            _context4.next = 23;
            break;

          case 22:
            obj.asesor_servicio = null;

          case 23:
            if (!tecnico_inspector) {
              _context4.next = 30;
              break;
            }

            _context4.next = 26;
            return _Tecnico.default.find({
              name: tecnico_inspector
            });

          case 26:
            tecnicoFound = _context4.sent;
            obj.tecnico_inspector = tecnicoFound.map(function (d) {
              return d._id;
            });
            _context4.next = 31;
            break;

          case 30:
            obj.tecnico_inspector = null;

          case 31:
            _context4.next = 33;
            return _User.default.find({
              username: {
                $in: createdBy
              }
            });

          case 33:
            userFound = _context4.sent;
            obj.createdBy = userFound.map(function (e) {
              return e._id;
            });
            _context4.next = 37;
            return obj.save();

          case 37:
            query = _context4.sent;
            if (query) res.json({
              message: 'Tasación creada con éxito'
            });
            _context4.next = 45;
            break;

          case 41:
            _context4.prev = 41;
            _context4.t0 = _context4["catch"](1);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 45:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 41]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

tasacionCtrl.updatedOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var tasacionId, _req$body2, status_tasacion, IsProceso, fechaProceso, IsRechazado, fechaRechazado, IsCerrado, fechaCerrado, comentario, motivo, nro_serie_nuevo_vehiculo, modelo_nuevo_vehiculo, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _req$body2 = req.body, status_tasacion = _req$body2.status_tasacion, IsProceso = _req$body2.IsProceso, fechaProceso = _req$body2.fechaProceso, IsRechazado = _req$body2.IsRechazado, fechaRechazado = _req$body2.fechaRechazado, IsCerrado = _req$body2.IsCerrado, fechaCerrado = _req$body2.fechaCerrado, comentario = _req$body2.comentario, motivo = _req$body2.motivo, nro_serie_nuevo_vehiculo = _req$body2.nro_serie_nuevo_vehiculo, modelo_nuevo_vehiculo = _req$body2.modelo_nuevo_vehiculo;
            _context5.prev = 2;
            _context5.next = 5;
            return _Tasacion.default.findByIdAndUpdate(tasacionId, {
              status_tasacion: status_tasacion,
              IsProceso: IsProceso,
              fechaProceso: fechaProceso,
              IsRechazado: IsRechazado,
              fechaRechazado: fechaRechazado,
              IsCerrado: IsCerrado,
              fechaCerrado: fechaCerrado,
              comentario: comentario,
              motivo: motivo,
              nro_serie_nuevo_vehiculo: nro_serie_nuevo_vehiculo,
              modelo_nuevo_vehiculo: modelo_nuevo_vehiculo
            });

          case 5:
            query = _context5.sent;

            if (!query) {
              _context5.next = 10;
              break;
            }

            res.json({
              message: 'Tasación actualizada con éxito'
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.status(404).json({
              messsage: 'No existe Tasación a actualizar'
            }));

          case 11:
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

tasacionCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var tasacionId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Tasacion.default.findByIdAndDelete(tasacionId);

          case 4:
            query = _context6.sent;

            if (query) {
              res.json({
                message: 'Tasación eliminada con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe la Tasación a eliminar'
              });
            }

            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

tasacionCtrl.countBySucursalFecha = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body3, sucursal, start, end, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, sucursal = _req$body3.sucursal, start = _req$body3.start, end = _req$body3.end;
            _context7.prev = 1;
            _context7.next = 4;
            return _Tasacion.default.where({
              sucursal: sucursal,
              fecha_operacion: {
                $gte: start,
                $lte: end
              }
            }).find().countDocuments();

          case 4:
            query = _context7.sent;

            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

tasacionCtrl.getRankingByStatus = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var _req$body4, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body4 = req.body, sucursal = _req$body4.sucursal, start = _req$body4.start, end = _req$body4.end;
            _context8.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context8.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$status_tasacion',
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context8.sent;

            if (!(query.length > 0)) {
              _context8.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context8.next = 11;
            break;

          case 10:
            return _context8.abrupt("return", res.status(201).json({
              message: 'No existen Tasaciones aún'
            }));

          case 11:
            _context8.next = 17;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 13]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

tasacionCtrl.getCountByMetodo = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var _req$body5, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body5 = req.body, sucursal = _req$body5.sucursal, start = _req$body5.start, end = _req$body5.end;
            _context9.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context9.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$metodo',
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context9.sent;

            if (!(query.length > 0)) {
              _context9.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context9.next = 11;
            break;

          case 10:
            return _context9.abrupt("return", res.status(201).json({
              message: 'No existen Tasaciones aún'
            }));

          case 11:
            _context9.next = 17;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 13]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

tasacionCtrl.getCountByOrigen = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res) {
    var _req$body6, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body6 = req.body, sucursal = _req$body6.sucursal, start = _req$body6.start, end = _req$body6.end;
            _context10.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context10.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$origen_operacion',
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context10.sent;

            if (!(query.length > 0)) {
              _context10.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context10.next = 11;
            break;

          case 10:
            return _context10.abrupt("return", res.status(201).json({
              message: 'No existen Tasaciones aún'
            }));

          case 11:
            _context10.next = 17;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 13]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

tasacionCtrl.getRankingByIngreso = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(req, res) {
    var _req$body7, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body7 = req.body, sucursal = _req$body7.sucursal, start = _req$body7.start, end = _req$body7.end;
            _context11.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context11.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$ingresoPor',
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context11.sent;

            if (!(query.length > 0)) {
              _context11.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context11.next = 11;
            break;

          case 10:
            return _context11.abrupt("return", res.status(201).json({
              message: 'No existen Tasaciones aún'
            }));

          case 11:
            _context11.next = 17;
            break;

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(503).json({
              message: _context11.t0.message
            }));

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 13]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

tasacionCtrl.getRankingByVendedor = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(req, res) {
    var _req$body8, sucursal, estado, ingreso, start, end, query, filtro;

    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body8 = req.body, sucursal = _req$body8.sucursal, estado = _req$body8.estado, ingreso = _req$body8.ingreso, start = _req$body8.start, end = _req$body8.end;
            query = null;
            _context12.prev = 2;
            filtro = {
              sucursal: sucursal,
              ingresoPor: ingreso,
              status_tasacion: estado,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };

            if (!(filtro.ingresoPor == "VENTAS")) {
              _context12.next = 10;
              break;
            }

            _context12.next = 7;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$asesor_venta',
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 7:
            query = _context12.sent;
            _context12.next = 13;
            break;

          case 10:
            _context12.next = 12;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$asesor_servicio',
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 12:
            query = _context12.sent;

          case 13:
            if (!(query.length > 0)) {
              _context12.next = 17;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context12.next = 18;
            break;

          case 17:
            return _context12.abrupt("return", res.status(201).json({
              message: 'No existen Tasaciones aún'
            }));

          case 18:
            _context12.next = 24;
            break;

          case 20:
            _context12.prev = 20;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(503).json({
              message: _context12.t0.message
            }));

          case 24:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 20]]);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

tasacionCtrl.getTasacionesBySeller = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(req, res) {
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

var _default = tasacionCtrl;
exports.default = _default;
//# sourceMappingURL=tasacion.controller.js.map