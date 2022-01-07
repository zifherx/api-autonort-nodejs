"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSegurosByModelo = exports.getSegurosByVendedor = exports.getRankingByAseguradora = exports.getRankingBySeller = exports.getRankingByVehicle = exports.getRankingByTipo = exports.getRankingByStatus = exports.countByDates = exports.countByStatusySucursal = exports.countAll = exports.deleteSeguro = exports.updateSeguro = exports.createSeguro = exports.getSeguroById = exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Seguro = _interopRequireDefault(require("../models/Seguro"));

var _User = _interopRequireDefault(require("../models/User"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Seguro.default.find().populate({
              path: 'cliente',
              select: 'name document'
            }).populate({
              path: 'vendedor',
              select: 'name document sucursal'
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
              seguros: query
            });
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: "No existen Seguros"
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
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

var getSeguroById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var seguroId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            seguroId = req.params.seguroId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Seguro.default.findById(seguroId).populate({
              path: 'cliente',
              select: 'name document cellphone email'
            }).populate({
              path: 'vendedor',
              select: 'name document sucursal'
            }).populate({
              path: 'createdBy',
              select: 'name'
            });

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
              message: "No existe el Seguro"
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
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

  return function getSeguroById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSeguroById = getSeguroById;

var createSeguro = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, cliente, company, sucursal, mes, status, forma_pago, cuotas, fecha_emision, tipo_venta, area_venta, poliza, vendedor, placa, chasis, motor, marca, modelo, version, anio, uso, asesor, endoso, entidad, inicio_vigencia, fin_vigencia, suma_asegurada, aseguradora, comision_seguro, comision_asesor, createdBy, newObj, foundCliente, foundSeller, foundEmployee, objSaved;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cliente = _req$body.cliente, company = _req$body.company, sucursal = _req$body.sucursal, mes = _req$body.mes, status = _req$body.status, forma_pago = _req$body.forma_pago, cuotas = _req$body.cuotas, fecha_emision = _req$body.fecha_emision, tipo_venta = _req$body.tipo_venta, area_venta = _req$body.area_venta, poliza = _req$body.poliza, vendedor = _req$body.vendedor, placa = _req$body.placa, chasis = _req$body.chasis, motor = _req$body.motor, marca = _req$body.marca, modelo = _req$body.modelo, version = _req$body.version, anio = _req$body.anio, uso = _req$body.uso, asesor = _req$body.asesor, endoso = _req$body.endoso, entidad = _req$body.entidad, inicio_vigencia = _req$body.inicio_vigencia, fin_vigencia = _req$body.fin_vigencia, suma_asegurada = _req$body.suma_asegurada, aseguradora = _req$body.aseguradora, comision_seguro = _req$body.comision_seguro, comision_asesor = _req$body.comision_asesor, createdBy = _req$body.createdBy;
            _context3.prev = 1;
            newObj = new _Seguro.default({
              company: company,
              sucursal: sucursal,
              mes: mes,
              status: status,
              forma_pago: forma_pago,
              cuotas: cuotas,
              fecha_emision: fecha_emision,
              tipo_venta: tipo_venta,
              area_venta: area_venta,
              poliza: poliza,
              vendedor: vendedor,
              placa: placa,
              chasis: chasis,
              motor: motor,
              marca: marca,
              modelo: modelo,
              version: version,
              anio: anio,
              uso: uso,
              asesor: asesor,
              endoso: endoso,
              entidad: entidad,
              inicio_vigencia: inicio_vigencia,
              fin_vigencia: fin_vigencia,
              suma_asegurada: suma_asegurada,
              aseguradora: aseguradora,
              comision_seguro: comision_seguro,
              comision_asesor: comision_asesor
            });
            _context3.next = 5;
            return _Customer.default.find({
              name: {
                $in: cliente
              }
            });

          case 5:
            foundCliente = _context3.sent;
            newObj.cliente = foundCliente.map(function (a) {
              return a._id;
            });

            if (!(!foundCliente.length > 0)) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "No existe este cliente"
            }));

          case 9:
            _context3.next = 11;
            return _Seller.default.find({
              name: {
                $in: vendedor
              }
            });

          case 11:
            foundSeller = _context3.sent;
            newObj.vendedor = foundSeller.map(function (b) {
              return b._id;
            });

            if (!(!foundCliente.length > 0)) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "No existe este Vendedor"
            }));

          case 15:
            _context3.next = 17;
            return _User.default.find({
              username: {
                $in: createdBy
              }
            });

          case 17:
            foundEmployee = _context3.sent;
            newObj.createdBy = foundEmployee.map(function (c) {
              return c._id;
            });
            _context3.next = 21;
            return newObj.save();

          case 21:
            objSaved = _context3.sent;

            if (objSaved) {
              res.json({
                message: "Seguro creado con éxito"
              });
            }

            _context3.next = 29;
            break;

          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 29:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 25]]);
  }));

  return function createSeguro(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createSeguro = createSeguro;

var updateSeguro = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var seguroId, _req$body2, status, isProceso, fechaProceso, isEmitido, fechaEmision, updateObj;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            seguroId = req.params.seguroId;
            _req$body2 = req.body, status = _req$body2.status, isProceso = _req$body2.isProceso, fechaProceso = _req$body2.fechaProceso, isEmitido = _req$body2.isEmitido, fechaEmision = _req$body2.fechaEmision;
            _context4.prev = 2;
            _context4.next = 5;
            return _Seguro.default.findByIdAndUpdate(seguroId, {
              status: status,
              isProceso: isProceso,
              fechaProceso: fechaProceso,
              isEmitido: isEmitido,
              fechaEmision: fechaEmision
            });

          case 5:
            updateObj = _context4.sent;

            if (!updateObj) {
              _context4.next = 10;
              break;
            }

            res.json({
              message: "Seguro actualizado con éxito"
            });
            _context4.next = 11;
            break;

          case 10:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existe Seguro a actualizar"
            }));

          case 11:
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](2);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 13]]);
  }));

  return function updateSeguro(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateSeguro = updateSeguro;

var deleteSeguro = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var seguroId, deleteObj;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            seguroId = req.params.seguroId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Seguro.default.findByIdAndDelete(seguroId);

          case 4:
            deleteObj = _context5.sent;

            if (!deleteObj) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: "Seguro eliminado con éxito"
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe Seguro a eliminar"
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

  return function deleteSeguro(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteSeguro = deleteSeguro;

var countAll = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _Seguro.default.countDocuments();

          case 3:
            query = _context6.sent;

            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function countAll(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.countAll = countAll;

var countByStatusySucursal = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body3, sucursal, estado, start, end, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, sucursal = _req$body3.sucursal, estado = _req$body3.estado, start = _req$body3.start, end = _req$body3.end;
            _context7.prev = 1;
            _context7.next = 4;
            return _Seguro.default.find({
              sucursal: sucursal,
              status: estado,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

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

  return function countByStatusySucursal(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.countByStatusySucursal = countByStatusySucursal;

var countByDates = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var _req$body4, sucursal, start, end, query;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body4 = req.body, sucursal = _req$body4.sucursal, start = _req$body4.start, end = _req$body4.end;
            _context8.prev = 1;
            _context8.next = 4;
            return _Seguro.default.find({
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 4:
            query = _context8.sent;

            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));

  return function countByDates(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.countByDates = countByDates;

var getRankingByStatus = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var _req$body5, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body5 = req.body, sucursal = _req$body5.sucursal, start = _req$body5.start, end = _req$body5.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context9.prev = 2;
            _context9.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$status',
                qty: {
                  $sum: 1
                }
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
              deploy: query
            });
            _context9.next = 11;
            break;

          case 10:
            return _context9.abrupt("return", res.status(201).json({
              message: 'No existen solicitudes'
            }));

          case 11:
            _context9.next = 16;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](2);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 13]]);
  }));

  return function getRankingByStatus(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getRankingByStatus = getRankingByStatus;

var getRankingByTipo = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res) {
    var _req$body6, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body6 = req.body, sucursal = _req$body6.sucursal, start = _req$body6.start, end = _req$body6.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context10.prev = 2;
            _context10.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$tipo_venta',
                qty: {
                  $sum: 1
                }
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
              deploy: query
            });
            _context10.next = 11;
            break;

          case 10:
            return _context10.abrupt("return", res.status(201).json({
              message: 'No existen solicitudes'
            }));

          case 11:
            _context10.next = 16;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](2);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 13]]);
  }));

  return function getRankingByTipo(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getRankingByTipo = getRankingByTipo;

var getRankingByVehicle = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(req, res) {
    var _req$body7, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body7 = req.body, sucursal = _req$body7.sucursal, start = _req$body7.start, end = _req$body7.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context11.prev = 2;
            _context11.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$modelo',
                qty: {
                  $sum: 1
                }
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
              deploy: query
            });
            _context11.next = 11;
            break;

          case 10:
            return _context11.abrupt("return", res.status(201).json({
              message: 'No existen solicitudes'
            }));

          case 11:
            _context11.next = 16;
            break;

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](2);
            return _context11.abrupt("return", res.status(503).json({
              message: _context11.t0.message
            }));

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 13]]);
  }));

  return function getRankingByVehicle(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.getRankingByVehicle = getRankingByVehicle;

var getRankingBySeller = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(req, res) {
    var _req$body8, sucursal, status, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body8 = req.body, sucursal = _req$body8.sucursal, status = _req$body8.status, start = _req$body8.start, end = _req$body8.end;
            filtro = {
              sucursal: sucursal,
              status: status,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context12.prev = 2;
            _context12.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$vendedor',
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 5:
            query = _context12.sent;

            if (!(query.length > 0)) {
              _context12.next = 10;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context12.next = 11;
            break;

          case 10:
            return _context12.abrupt("return", res.status(201).json({
              message: 'No existen solicitudes'
            }));

          case 11:
            _context12.next = 16;
            break;

          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](2);
            return _context12.abrupt("return", res.status(503).json({
              message: _context12.t0.message
            }));

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 13]]);
  }));

  return function getRankingBySeller(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getRankingBySeller = getRankingBySeller;

var getRankingByAseguradora = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(req, res) {
    var _req$body9, sucursal, start, end, filtro, query;

    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _req$body9 = req.body, sucursal = _req$body9.sucursal, start = _req$body9.start, end = _req$body9.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context13.prev = 2;
            _context13.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$aseguradora',
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 5:
            query = _context13.sent;

            if (!(query.length > 0)) {
              _context13.next = 10;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context13.next = 11;
            break;

          case 10:
            return _context13.abrupt("return", res.status(201).json({
              message: 'No existen solicitudes'
            }));

          case 11:
            _context13.next = 16;
            break;

          case 13:
            _context13.prev = 13;
            _context13.t0 = _context13["catch"](2);
            return _context13.abrupt("return", res.status(503).json({
              message: _context13.t0.message
            }));

          case 16:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[2, 13]]);
  }));

  return function getRankingByAseguradora(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

exports.getRankingByAseguradora = getRankingByAseguradora;

var getSegurosByVendedor = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(req, res) {
    var _req$body10, vendedor, start, end, sellerFound, filtro, query;

    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$body10 = req.body, vendedor = _req$body10.vendedor, start = _req$body10.start, end = _req$body10.end;
            _context14.prev = 1;
            _context14.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context14.sent;

            if (sellerFound) {
              _context14.next = 7;
              break;
            }

            return _context14.abrupt("return", res.status(404).json({
              message: 'No existe el vendedor'
            }));

          case 7:
            filtro = {
              vendedor: sellerFound._id,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context14.next = 10;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$status',
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context14.sent;

            if (!(query.length > 0)) {
              _context14.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context14.next = 16;
            break;

          case 15:
            return _context14.abrupt("return", res.status(201).json({
              message: 'Vendedor no cuenta con seguros'
            }));

          case 16:
            _context14.next = 22;
            break;

          case 18:
            _context14.prev = 18;
            _context14.t0 = _context14["catch"](1);
            console.log(_context14.t0.response);
            return _context14.abrupt("return", res.status(503).json({
              message: _context14.t0.message
            }));

          case 22:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 18]]);
  }));

  return function getSegurosByVendedor(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

exports.getSegurosByVendedor = getSegurosByVendedor;

var getSegurosByModelo = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(req, res) {
    var _req$body11, vendedor, estado, start, end, sellerFound, filtro, query;

    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body11 = req.body, vendedor = _req$body11.vendedor, estado = _req$body11.estado, start = _req$body11.start, end = _req$body11.end;
            _context15.prev = 1;
            _context15.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context15.sent;

            if (sellerFound) {
              _context15.next = 7;
              break;
            }

            return _context15.abrupt("return", res.status(404).json({
              message: 'No existe el vendedor'
            }));

          case 7:
            filtro = {
              vendedor: sellerFound._id,
              status: estado,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context15.next = 10;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: '$modelo',
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context15.sent;

            if (!(query.length > 0)) {
              _context15.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context15.next = 16;
            break;

          case 15:
            return _context15.abrupt("return", res.status(201).json({
              message: 'Vendedor no cuenta con solicitudes'
            }));

          case 16:
            _context15.next = 22;
            break;

          case 18:
            _context15.prev = 18;
            _context15.t0 = _context15["catch"](1);
            console.log(_context15.t0.message);
            return _context15.abrupt("return", res.status(503).json({
              message: _context15.t0.message
            }));

          case 22:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 18]]);
  }));

  return function getSegurosByModelo(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

exports.getSegurosByModelo = getSegurosByModelo;
//# sourceMappingURL=seguro.controller.js.map