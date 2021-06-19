"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTasacion = exports.updateTasacion = exports.createTasacion = exports.getTasacionById = exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Tasacion = _interopRequireDefault(require("../models/Tasacion"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _User = _interopRequireDefault(require("../models/User"));

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tasacion.default.find().populate('cliente').populate('asesor_venta').populate('asesor_servicio').populate('empleado').sort({
              fecha_operacion: 'asc'
            });

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
              message: 'No existen Tasaciones'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            res.status(409).json({
              message: _context.t0.message
            });

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

var getTasacionById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var tasacionId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Tasacion.default.findById(tasacionId).populate('cliente').populate('asesor_venta').populate('asesor_servicio').populate('empleado');

          case 4:
            query = _context2.sent;

            if (query) {
              res.json(query);
            } else {
              res.status(404).json({
                message: 'No existe la Tasación'
              });
            }

            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
            res.status(409).json({
              message: _context2.t0.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getTasacionById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTasacionById = getTasacionById;

var createTasacion = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, cliente, marca, chasis, modelo, version, color, anio_fabricacion, kilometraje, placa, empresa, sucursal, origen_operacion, metodo, fecha_operacion, precio, mes, asesor_venta, asesor_derivado, asesor_servicio, empleado, newObj, foundCliente, foundAsesorV, foundAsesorS, foundEmployee, objSaved;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cliente = _req$body.cliente, marca = _req$body.marca, chasis = _req$body.chasis, modelo = _req$body.modelo, version = _req$body.version, color = _req$body.color, anio_fabricacion = _req$body.anio_fabricacion, kilometraje = _req$body.kilometraje, placa = _req$body.placa, empresa = _req$body.empresa, sucursal = _req$body.sucursal, origen_operacion = _req$body.origen_operacion, metodo = _req$body.metodo, fecha_operacion = _req$body.fecha_operacion, precio = _req$body.precio, mes = _req$body.mes, asesor_venta = _req$body.asesor_venta, asesor_derivado = _req$body.asesor_derivado, asesor_servicio = _req$body.asesor_servicio, empleado = _req$body.empleado;
            _context3.prev = 1;
            newObj = new _Tasacion.default({
              marca: marca,
              chasis: chasis,
              modelo: modelo,
              version: version,
              color: color,
              anio_fabricacion: anio_fabricacion,
              kilometraje: kilometraje,
              placa: placa,
              empresa: empresa,
              sucursal: sucursal,
              origen_operacion: origen_operacion,
              metodo: metodo,
              fecha_operacion: fecha_operacion,
              precio: precio,
              mes: mes,
              asesor_derivado: asesor_derivado
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
                $in: asesor_venta
              }
            });

          case 11:
            foundAsesorV = _context3.sent;
            newObj.asesor_venta = foundAsesorV.map(function (b) {
              return b._id;
            });

            if (!(!foundAsesorV.length > 0)) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "No existe este Asesor de Ventas"
            }));

          case 15:
            _context3.next = 17;
            return _Seller.default.find({
              name: {
                $in: asesor_servicio
              }
            });

          case 17:
            foundAsesorS = _context3.sent;
            newObj.asesor_servicio = foundAsesorS.map(function (c) {
              return c._id;
            });

            if (!(!foundAsesorS.length > 0)) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "No existe este Asesor de Servicio"
            }));

          case 21:
            _context3.next = 23;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 23:
            foundEmployee = _context3.sent;
            newObj.empleado = foundEmployee.map(function (d) {
              return d._id;
            });
            _context3.next = 27;
            return newObj.save();

          case 27:
            objSaved = _context3.sent;

            if (objSaved) {
              res.json({
                message: 'Tasación creada con éxito'
              });
            }

            _context3.next = 35;
            break;

          case 31:
            _context3.prev = 31;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);
            res.status(409).json({
              message: _context3.t0.message
            });

          case 35:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 31]]);
  }));

  return function createTasacion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createTasacion = createTasacion;

var updateTasacion = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var tasacionId, _req$body2, cliente, marca, chasis, modelo, version, color, anio_fabricacion, kilometraje, placa, empresa, sucursal, origen_operacion, metodo, fecha_operacion, precio, mes, asesor_venta, asesor_derivado, asesor_servicio, empleado, foundCliente, foundAsesorV, foundAsesorS, foundEmployee, updateObj;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _req$body2 = req.body, cliente = _req$body2.cliente, marca = _req$body2.marca, chasis = _req$body2.chasis, modelo = _req$body2.modelo, version = _req$body2.version, color = _req$body2.color, anio_fabricacion = _req$body2.anio_fabricacion, kilometraje = _req$body2.kilometraje, placa = _req$body2.placa, empresa = _req$body2.empresa, sucursal = _req$body2.sucursal, origen_operacion = _req$body2.origen_operacion, metodo = _req$body2.metodo, fecha_operacion = _req$body2.fecha_operacion, precio = _req$body2.precio, mes = _req$body2.mes, asesor_venta = _req$body2.asesor_venta, asesor_derivado = _req$body2.asesor_derivado, asesor_servicio = _req$body2.asesor_servicio, empleado = _req$body2.empleado;
            _context4.prev = 2;
            _context4.next = 5;
            return _Customer.default.find({
              name: {
                $in: cliente
              }
            });

          case 5:
            foundCliente = _context4.sent;
            _context4.next = 8;
            return _Seller.default.find({
              name: {
                $in: asesor_venta
              }
            });

          case 8:
            foundAsesorV = _context4.sent;
            _context4.next = 11;
            return _Seller.default.find({
              name: {
                $in: asesor_servicio
              }
            });

          case 11:
            foundAsesorS = _context4.sent;
            _context4.next = 14;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 14:
            foundEmployee = _context4.sent;
            _context4.next = 17;
            return _Tasacion.default.findByIdAndUpdate(tasacionId, {
              cliente: foundCliente.map(function (a) {
                return a._id;
              }),
              marca: marca,
              chasis: chasis,
              modelo: modelo,
              version: version,
              color: color,
              anio_fabricacion: anio_fabricacion,
              kilometraje: kilometraje,
              placa: placa,
              empresa: empresa,
              sucursal: sucursal,
              origen_operacion: origen_operacion,
              metodo: metodo,
              fecha_operacion: fecha_operacion,
              precio: precio,
              mes: mes,
              asesor_venta: foundAsesorV.map(function (b) {
                return b._id;
              }),
              asesor_derivado: asesor_derivado,
              asesor_servicio: foundAsesorS.map(function (c) {
                return c._id;
              }),
              empleado: foundEmployee.map(function (d) {
                return d._id;
              })
            });

          case 17:
            updateObj = _context4.sent;

            if (!updateObj) {
              _context4.next = 22;
              break;
            }

            res.json({
              message: 'Tasacion actualizada con éxito'
            });
            _context4.next = 23;
            break;

          case 22:
            return _context4.abrupt("return", res.status(404).json({
              message: 'No existe Tasación a actualizar'
            }));

          case 23:
            _context4.next = 29;
            break;

          case 25:
            _context4.prev = 25;
            _context4.t0 = _context4["catch"](2);
            console.error(_context4.t0);
            res.status(409).json({
              message: _context4.t0.message
            });

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 25]]);
  }));

  return function updateTasacion(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateTasacion = updateTasacion;

var deleteTasacion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var tasacionId, deleteObj;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Tasacion.default.findByIdAndDelete(tasacionId);

          case 4:
            deleteObj = _context5.sent;

            if (!deleteObj) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: 'Tasacion eliminada con éxito'
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe Tasación a eliminar'
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            res.status(409).json({
              message: _context5.t0.message
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 12]]);
  }));

  return function deleteTasacion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTasacion = deleteTasacion;
//# sourceMappingURL=tasacion.controller.js.map