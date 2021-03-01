"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conteoVentasByVendedor = exports.conteoJaenLibres = exports.conteoTarapotoLibres = exports.conteoJaenCanceladas = exports.conteoTarapotoCanceladas = exports.conteoUnidadesLibres = exports.conteoUnidadesCanceladas = exports.UnidadesByStatus = exports.deleteSaleById = exports.updateSaleById = exports.getSaleById = exports.getSales = exports.createSale = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Campaign = _interopRequireDefault(require("../models/Campaign"));

var _Props = _interopRequireDefault(require("../models/Props"));

var createSale = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, vendedor, cliente, auto, serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, campanias, observacion_adv, accesorios, condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion, newSale, foundSeller, foundVehicle, foundCustomer, foundCampaign, foundProps, saleSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, vendedor = _req$body.vendedor, cliente = _req$body.cliente, auto = _req$body.auto, serie_tdp = _req$body.serie_tdp, color = _req$body.color, precio = _req$body.precio, anio_fabricacion = _req$body.anio_fabricacion, anio_modelo = _req$body.anio_modelo, ubicacion_vehiculo = _req$body.ubicacion_vehiculo, estatus_vehiculo = _req$body.estatus_vehiculo, tipo_financiamiento = _req$body.tipo_financiamiento, entidad_bancaria = _req$body.entidad_bancaria, sustento = _req$body.sustento, fecha_sustento = _req$body.fecha_sustento, monto_aprobado = _req$body.monto_aprobado, oficina = _req$body.oficina, ejecutivo = _req$body.ejecutivo, montoAdelanto1 = _req$body.montoAdelanto1, fechaAdelanto1 = _req$body.fechaAdelanto1, montoAdelanto2 = _req$body.montoAdelanto2, fechaAdelanto2 = _req$body.fechaAdelanto2, montoAdelanto3 = _req$body.montoAdelanto3, fechaAdelanto3 = _req$body.fechaAdelanto3, montoAdelanto4 = _req$body.montoAdelanto4, fechaAdelanto4 = _req$body.fechaAdelanto4, montoAdelanto5 = _req$body.montoAdelanto5, fechaAdelanto5 = _req$body.fechaAdelanto5, montoAdelanto6 = _req$body.montoAdelanto6, fechaAdelanto6 = _req$body.fechaAdelanto6, montoAdelanto7 = _req$body.montoAdelanto7, fechaAdelanto7 = _req$body.fechaAdelanto7, montoAdelanto8 = _req$body.montoAdelanto8, fechaAdelanto8 = _req$body.fechaAdelanto8, campanias = _req$body.campanias, observacion_adv = _req$body.observacion_adv, accesorios = _req$body.accesorios, condicion_accesorios = _req$body.condicion_accesorios, fecha_facturacion_tdp = _req$body.fecha_facturacion_tdp, estatus_facturacion = _req$body.estatus_facturacion, tipo_operacion = _req$body.tipo_operacion, fecha_inicio_reserva = _req$body.fecha_inicio_reserva, fecha_fin_reserva = _req$body.fecha_fin_reserva, tipo_comprobante = _req$body.tipo_comprobante, nro_comprobante = _req$body.nro_comprobante, fecha_comprobante = _req$body.fecha_comprobante, estatus_venta = _req$body.estatus_venta, sucursal_venta = _req$body.sucursal_venta, fecha_cancelacion = _req$body.fecha_cancelacion;
            newSale = new _Sale.default({
              serie_tdp: serie_tdp,
              color: color,
              precio: precio,
              anio_fabricacion: anio_fabricacion,
              anio_modelo: anio_modelo,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              tipo_financiamiento: tipo_financiamiento,
              entidad_bancaria: entidad_bancaria,
              sustento: sustento,
              fecha_sustento: fecha_sustento,
              monto_aprobado: monto_aprobado,
              oficina: oficina,
              ejecutivo: ejecutivo,
              montoAdelanto1: montoAdelanto1,
              fechaAdelanto1: fechaAdelanto1,
              montoAdelanto2: montoAdelanto2,
              fechaAdelanto2: fechaAdelanto2,
              montoAdelanto3: montoAdelanto3,
              fechaAdelanto3: fechaAdelanto3,
              montoAdelanto4: montoAdelanto4,
              fechaAdelanto4: fechaAdelanto4,
              montoAdelanto5: montoAdelanto5,
              fechaAdelanto5: fechaAdelanto5,
              montoAdelanto6: montoAdelanto6,
              fechaAdelanto6: fechaAdelanto6,
              montoAdelanto7: montoAdelanto7,
              fechaAdelanto7: fechaAdelanto7,
              montoAdelanto8: montoAdelanto8,
              fechaAdelanto8: fechaAdelanto8,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              estatus_facturacion: estatus_facturacion,
              tipo_operacion: tipo_operacion,
              fecha_inicio_reserva: fecha_inicio_reserva,
              fecha_fin_reserva: fecha_fin_reserva,
              tipo_comprobante: tipo_comprobante,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              estatus_venta: estatus_venta,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion
            }); //Seller

            _context.next = 5;
            return _Seller.default.find({
              name: {
                $in: vendedor
              }
            });

          case 5:
            foundSeller = _context.sent;
            newSale.vendedor = foundSeller.map(function (seller) {
              return seller._id;
            }); //Vehicle

            _context.next = 9;
            return _Vehicle.default.find({
              cod_tdp: {
                $in: auto
              }
            });

          case 9:
            foundVehicle = _context.sent;
            newSale.auto = foundVehicle.map(function (vehicle) {
              return vehicle._id;
            }); //Customer

            _context.next = 13;
            return _Customer.default.find({
              document: {
                $in: cliente
              }
            });

          case 13:
            foundCustomer = _context.sent;
            newSale.cliente = foundCustomer.map(function (customer) {
              return customer._id;
            }); //Campaign

            _context.next = 17;
            return _Campaign.default.find({
              name: {
                $in: campanias
              }
            });

          case 17:
            foundCampaign = _context.sent;
            newSale.campanias = foundCampaign.map(function (campaign) {
              return campaign._id;
            }); //Props

            _context.next = 21;
            return _Props.default.find({
              name: {
                $in: accesorios
              }
            });

          case 21:
            foundProps = _context.sent;
            newSale.accesorios = foundProps.map(function (props) {
              return props._id;
            }); //console.log(newSale);

            _context.next = 25;
            return newSale.save();

          case 25:
            saleSaved = _context.sent;

            if (saleSaved) {
              res.json({
                message: 'Expediente creado con éxito'
              });
            }

            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(403).json({
              message: 'No autorizado'
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 29]]);
  }));

  return function createSale(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createSale = createSale;

var getSales = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var ventasfull;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Sale.default.find().populate('vendedor').populate('auto').populate('cliente').populate('campanias').populate('accesorios');

          case 3:
            ventasfull = _context2.sent;

            if (!(ventasfull.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json(ventasfull);
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(201).json({
              message: 'No Existen Expedientes'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              message: 'Error interno'
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getSales(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSales = getSales;

var getSaleById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var salesId, venta;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            salesId = req.params.salesId;
            _context3.next = 4;
            return _Sale.default.findById(salesId).populate('vendedor').populate('auto').populate('cliente').populate('campanias').populate('accesorios');

          case 4:
            venta = _context3.sent;

            if (venta) {
              res.send(venta);
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getSaleById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSaleById = getSaleById;

var updateSaleById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var salesId, _req$body2, vendedor, cliente, auto, serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, campanias, observacion_adv, accesorios, condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion, foundSeller, foundVehicle, foundCustomer, foundCampaign, foundProps, ventaActualizada;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            salesId = req.params.salesId;
            _req$body2 = req.body, vendedor = _req$body2.vendedor, cliente = _req$body2.cliente, auto = _req$body2.auto, serie_tdp = _req$body2.serie_tdp, color = _req$body2.color, precio = _req$body2.precio, anio_fabricacion = _req$body2.anio_fabricacion, anio_modelo = _req$body2.anio_modelo, ubicacion_vehiculo = _req$body2.ubicacion_vehiculo, estatus_vehiculo = _req$body2.estatus_vehiculo, tipo_financiamiento = _req$body2.tipo_financiamiento, entidad_bancaria = _req$body2.entidad_bancaria, sustento = _req$body2.sustento, fecha_sustento = _req$body2.fecha_sustento, monto_aprobado = _req$body2.monto_aprobado, oficina = _req$body2.oficina, ejecutivo = _req$body2.ejecutivo, montoAdelanto1 = _req$body2.montoAdelanto1, fechaAdelanto1 = _req$body2.fechaAdelanto1, montoAdelanto2 = _req$body2.montoAdelanto2, fechaAdelanto2 = _req$body2.fechaAdelanto2, montoAdelanto3 = _req$body2.montoAdelanto3, fechaAdelanto3 = _req$body2.fechaAdelanto3, montoAdelanto4 = _req$body2.montoAdelanto4, fechaAdelanto4 = _req$body2.fechaAdelanto4, montoAdelanto5 = _req$body2.montoAdelanto5, fechaAdelanto5 = _req$body2.fechaAdelanto5, montoAdelanto6 = _req$body2.montoAdelanto6, fechaAdelanto6 = _req$body2.fechaAdelanto6, montoAdelanto7 = _req$body2.montoAdelanto7, fechaAdelanto7 = _req$body2.fechaAdelanto7, montoAdelanto8 = _req$body2.montoAdelanto8, fechaAdelanto8 = _req$body2.fechaAdelanto8, campanias = _req$body2.campanias, observacion_adv = _req$body2.observacion_adv, accesorios = _req$body2.accesorios, condicion_accesorios = _req$body2.condicion_accesorios, fecha_facturacion_tdp = _req$body2.fecha_facturacion_tdp, estatus_facturacion = _req$body2.estatus_facturacion, tipo_operacion = _req$body2.tipo_operacion, fecha_inicio_reserva = _req$body2.fecha_inicio_reserva, fecha_fin_reserva = _req$body2.fecha_fin_reserva, tipo_comprobante = _req$body2.tipo_comprobante, nro_comprobante = _req$body2.nro_comprobante, fecha_comprobante = _req$body2.fecha_comprobante, estatus_venta = _req$body2.estatus_venta, sucursal_venta = _req$body2.sucursal_venta, fecha_cancelacion = _req$body2.fecha_cancelacion; //Seller

            _context4.next = 5;
            return _Seller.default.find({
              name: {
                $in: vendedor
              }
            });

          case 5:
            foundSeller = _context4.sent;
            _context4.next = 8;
            return _Vehicle.default.find({
              cod_tdp: {
                $in: auto
              }
            });

          case 8:
            foundVehicle = _context4.sent;
            _context4.next = 11;
            return _Customer.default.find({
              document: {
                $in: cliente
              }
            });

          case 11:
            foundCustomer = _context4.sent;
            _context4.next = 14;
            return _Campaign.default.find({
              name: {
                $in: campanias
              }
            });

          case 14:
            foundCampaign = _context4.sent;
            _context4.next = 17;
            return _Props.default.find({
              name: {
                $in: accesorios
              }
            });

          case 17:
            foundProps = _context4.sent;
            _context4.next = 20;
            return _Sale.default.findByIdAndUpdate(salesId, {
              vendedor: foundSeller.map(function (seller) {
                return seller._id;
              }),
              cliente: foundCustomer.map(function (customer) {
                return customer._id;
              }),
              auto: foundVehicle.map(function (vehicle) {
                return vehicle._id;
              }),
              serie_tdp: serie_tdp,
              color: color,
              precio: precio,
              anio_fabricacion: anio_fabricacion,
              anio_modelo: anio_modelo,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              tipo_financiamiento: tipo_financiamiento,
              entidad_bancaria: entidad_bancaria,
              sustento: sustento,
              fecha_sustento: fecha_sustento,
              monto_aprobado: monto_aprobado,
              oficina: oficina,
              ejecutivo: ejecutivo,
              montoAdelanto1: montoAdelanto1,
              fechaAdelanto1: fechaAdelanto1,
              montoAdelanto2: montoAdelanto2,
              fechaAdelanto2: fechaAdelanto2,
              montoAdelanto3: montoAdelanto3,
              fechaAdelanto3: fechaAdelanto3,
              montoAdelanto4: montoAdelanto4,
              fechaAdelanto4: fechaAdelanto4,
              montoAdelanto5: montoAdelanto5,
              fechaAdelanto5: fechaAdelanto5,
              montoAdelanto6: montoAdelanto6,
              fechaAdelanto6: fechaAdelanto6,
              montoAdelanto7: montoAdelanto7,
              fechaAdelanto7: fechaAdelanto7,
              montoAdelanto8: montoAdelanto8,
              fechaAdelanto8: fechaAdelanto8,
              campanias: foundCampaign.map(function (campaign) {
                return campaign._id;
              }),
              observacion_adv: observacion_adv,
              accesorios: foundProps.map(function (props) {
                return props._id;
              }),
              condicion_accesorios: condicion_accesorios,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              estatus_facturacion: estatus_facturacion,
              tipo_operacion: tipo_operacion,
              fecha_inicio_reserva: fecha_inicio_reserva,
              fecha_fin_reserva: fecha_fin_reserva,
              tipo_comprobante: tipo_comprobante,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              estatus_venta: estatus_venta,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion
            });

          case 20:
            ventaActualizada = _context4.sent;

            if (ventaActualizada) {
              //Mandamos la respuesta
              res.json({
                message: 'Expediente actualizado con éxito'
              });
            } else {
              //Mandamos la respuesta
              res.status(403).json({
                message: 'No Autorizado'
              });
            }

            _context4.next = 28;
            break;

          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(401).json({
              message: 'Error interno'
            });

          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 24]]);
  }));

  return function updateSaleById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateSaleById = updateSaleById;

var deleteSaleById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var salesId, deleteSale;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            salesId = req.params.salesId;
            _context5.next = 4;
            return _Sale.default.findByIdAndDelete(salesId);

          case 4:
            deleteSale = _context5.sent;

            if (deleteSale) {
              res.status(200).json({
                message: 'Expediente eliminado con éxito'
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(404).json({
              message: 'Error interno'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function deleteSaleById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteSaleById = deleteSaleById;

var UnidadesByStatus = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var estado, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            estado = req.body.estado;
            _context6.prev = 1;
            _context6.next = 4;
            return _Sale.default.where({
              estatus_venta: estado
            }).find().populate('vendedor').populate('auto').populate('cliente').populate('campanias').populate('accesorios');

          case 4:
            query = _context6.sent;

            if (!(query.length > 0)) {
              _context6.next = 9;
              break;
            }

            res.json(query);
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(201).json({
              message: 'No existen Unidades'
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function UnidadesByStatus(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.UnidadesByStatus = UnidadesByStatus;

var conteoUnidadesCanceladas = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var consulta;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _Sale.default.where({
              estatus_venta: 'Cancelado'
            }).countDocuments();

          case 3:
            consulta = _context7.sent;

            if (!(consulta > 0)) {
              _context7.next = 8;
              break;
            }

            res.json(consulta);
            _context7.next = 9;
            break;

          case 8:
            return _context7.abrupt("return", res.status(201).json({
              message: 'No existen Unidades Canceladas'
            }));

          case 9:
            _context7.next = 15;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 11]]);
  }));

  return function conteoUnidadesCanceladas(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.conteoUnidadesCanceladas = conteoUnidadesCanceladas;

var conteoUnidadesLibres = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var consulta;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _Sale.default.where({
              estatus_venta: 'Libre'
            }).countDocuments();

          case 3:
            consulta = _context8.sent;

            if (!consulta) {
              _context8.next = 8;
              break;
            }

            res.json(consulta);
            _context8.next = 9;
            break;

          case 8:
            return _context8.abrupt("return", res.status(201).json({
              message: 'No existen Unidades Libres'
            }));

          case 9:
            _context8.next = 15;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            console.error(_context8.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 11]]);
  }));

  return function conteoUnidadesLibres(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.conteoUnidadesLibres = conteoUnidadesLibres;

var conteoTarapotoCanceladas = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var consulta;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _Sale.default.where({
              estatus_venta: 'Cancelado',
              sucursal_venta: 'Tarapoto'
            }).countDocuments();

          case 3:
            consulta = _context9.sent;

            if (!consulta) {
              _context9.next = 8;
              break;
            }

            res.json(consulta);
            _context9.next = 9;
            break;

          case 8:
            return _context9.abrupt("return", res.status(201).json({
              message: 'No existen Unidades Canceladas en Tarapoto'
            }));

          case 9:
            _context9.next = 15;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            console.error(_context9.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 11]]);
  }));

  return function conteoTarapotoCanceladas(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.conteoTarapotoCanceladas = conteoTarapotoCanceladas;

var conteoJaenCanceladas = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res) {
    var consulta;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _Sale.default.where({
              estatus_venta: 'Cancelado',
              sucursal_venta: 'Jaén'
            }).countDocuments();

          case 3:
            consulta = _context10.sent;

            if (!consulta) {
              _context10.next = 8;
              break;
            }

            res.json(consulta);
            _context10.next = 9;
            break;

          case 8:
            return _context10.abrupt("return", res.status(201).json({
              message: 'No existen Unidades Canceladas en Jaén'
            }));

          case 9:
            _context10.next = 15;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](0);
            console.error(_context10.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 11]]);
  }));

  return function conteoJaenCanceladas(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.conteoJaenCanceladas = conteoJaenCanceladas;

var conteoTarapotoLibres = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(req, res) {
    var consulta;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _Sale.default.where({
              estatus_venta: 'Libre',
              sucursal_venta: 'Tarapoto'
            }).countDocuments();

          case 3:
            consulta = _context11.sent;

            if (!consulta) {
              _context11.next = 8;
              break;
            }

            res.json(consulta);
            _context11.next = 9;
            break;

          case 8:
            return _context11.abrupt("return", res.status(201).json({
              message: 'No existen Unidades Libres en Tarapoto'
            }));

          case 9:
            _context11.next = 15;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](0);
            console.error(_context11.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 11]]);
  }));

  return function conteoTarapotoLibres(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.conteoTarapotoLibres = conteoTarapotoLibres;

var conteoJaenLibres = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(req, res) {
    var consulta;
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _Sale.default.where({
              estatus_venta: 'Libre',
              sucursal_venta: 'Jaén'
            }).countDocuments();

          case 3:
            consulta = _context12.sent;

            if (!consulta) {
              _context12.next = 8;
              break;
            }

            res.json(consulta);
            _context12.next = 9;
            break;

          case 8:
            return _context12.abrupt("return", res.status(201).json({
              message: 'No existen Unidades Libres en Jaén'
            }));

          case 9:
            _context12.next = 15;
            break;

          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](0);
            console.error(_context12.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 11]]);
  }));

  return function conteoJaenLibres(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

exports.conteoJaenLibres = conteoJaenLibres;

var conteoVentasByVendedor = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(req, res) {
    var consulta;
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _Sale.default.aggregate([{
              $unwind: '$vendedor'
            }, {
              $group: {
                _id: "$vendedor",
                num_ventas: {
                  $sum: 1
                }
              }
            }]);

          case 3:
            consulta = _context13.sent;

            if (consulta) {
              res.json(consulta);
            }

            _context13.next = 11;
            break;

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](0);
            console.error(_context13.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 11:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 7]]);
  }));

  return function conteoVentasByVendedor(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

exports.conteoVentasByVendedor = conteoVentasByVendedor;
//# sourceMappingURL=sale.controller.js.map