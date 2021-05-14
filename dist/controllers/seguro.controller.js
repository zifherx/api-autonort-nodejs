"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSeguro = exports.updateSeguro = exports.createSeguro = exports.getSeguroById = exports.getSeguroByActivo = exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Seguro = _interopRequireDefault(require("../models/Seguro"));

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
            return _Seguro.default.find().sort({
              name: "asc"
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
              message: "No existen Seguros"
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

var getSeguroByActivo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSeguroByActivo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSeguroByActivo = getSeguroByActivo;

var getSeguroById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var seguroId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            seguroId = req.params.seguroId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Seguro.default.findById(seguroId);

          case 4:
            query = _context3.sent;

            if (!query) {
              _context3.next = 9;
              break;
            }

            res.json(query);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existe el Seguro"
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);
            res.status(409).json({
              message: _context3.t0.message
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function getSeguroById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSeguroById = getSeguroById;

var createSeguro = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, document, telefono, company, sucursal, fecha_registro, mes, status, forma_pago, cuotas, fecha_emision, tipo_venta, area_venta, poliza, vendedor, placa, chasis, motor, marca, modelo, anio, uso, asesor, endoso, inicio_vigencia, fin_vigencia, suma_asegurada, aseguradora, comision_seguro, comision_asesor, empleado, newObj, foundEmployee, objSaved;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, document = _req$body.document, telefono = _req$body.telefono, company = _req$body.company, sucursal = _req$body.sucursal, fecha_registro = _req$body.fecha_registro, mes = _req$body.mes, status = _req$body.status, forma_pago = _req$body.forma_pago, cuotas = _req$body.cuotas, fecha_emision = _req$body.fecha_emision, tipo_venta = _req$body.tipo_venta, area_venta = _req$body.area_venta, poliza = _req$body.poliza, vendedor = _req$body.vendedor, placa = _req$body.placa, chasis = _req$body.chasis, motor = _req$body.motor, marca = _req$body.marca, modelo = _req$body.modelo, anio = _req$body.anio, uso = _req$body.uso, asesor = _req$body.asesor, endoso = _req$body.endoso, inicio_vigencia = _req$body.inicio_vigencia, fin_vigencia = _req$body.fin_vigencia, suma_asegurada = _req$body.suma_asegurada, aseguradora = _req$body.aseguradora, comision_seguro = _req$body.comision_seguro, comision_asesor = _req$body.comision_asesor, empleado = _req$body.empleado;
            _context4.prev = 1;
            newObj = new _Seguro.default({
              name: name,
              document: document,
              telefono: telefono,
              company: company,
              sucursal: sucursal,
              fecha_registro: fecha_registro,
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
              anio: anio,
              uso: uso,
              asesor: asesor,
              endoso: endoso,
              inicio_vigencia: inicio_vigencia,
              fin_vigencia: fin_vigencia,
              suma_asegurada: suma_asegurada,
              aseguradora: aseguradora,
              comision_seguro: comision_seguro,
              comision_asesor: comision_asesor
            });
            _context4.next = 5;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context4.sent;
            newObj.empleado = foundEmployee.map(function (a) {
              return a._id;
            });
            _context4.next = 9;
            return newObj.save();

          case 9:
            objSaved = _context4.sent;

            if (objSaved) {
              res.json({
                message: "Seguro creado con éxito"
              });
            }

            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](1);
            console.error(_context4.t0);
            res.json({
              message: _context4.t0.message
            });

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 13]]);
  }));

  return function createSeguro(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createSeguro = createSeguro;

var updateSeguro = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var seguroId, _req$body2, name, document, telefono, company, sucursal, fecha_registro, mes, status, forma_pago, cuotas, fecha_emision, tipo_venta, area_venta, poliza, vendedor, placa, chasis, motor, marca, modelo, anio, uso, asesor, endoso, inicio_vigencia, fin_vigencia, suma_asegurada, aseguradora, comision_seguro, comision_asesor, empleado, foundEmployee, updateObj;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            seguroId = req.params.seguroId;
            _req$body2 = req.body, name = _req$body2.name, document = _req$body2.document, telefono = _req$body2.telefono, company = _req$body2.company, sucursal = _req$body2.sucursal, fecha_registro = _req$body2.fecha_registro, mes = _req$body2.mes, status = _req$body2.status, forma_pago = _req$body2.forma_pago, cuotas = _req$body2.cuotas, fecha_emision = _req$body2.fecha_emision, tipo_venta = _req$body2.tipo_venta, area_venta = _req$body2.area_venta, poliza = _req$body2.poliza, vendedor = _req$body2.vendedor, placa = _req$body2.placa, chasis = _req$body2.chasis, motor = _req$body2.motor, marca = _req$body2.marca, modelo = _req$body2.modelo, anio = _req$body2.anio, uso = _req$body2.uso, asesor = _req$body2.asesor, endoso = _req$body2.endoso, inicio_vigencia = _req$body2.inicio_vigencia, fin_vigencia = _req$body2.fin_vigencia, suma_asegurada = _req$body2.suma_asegurada, aseguradora = _req$body2.aseguradora, comision_seguro = _req$body2.comision_seguro, comision_asesor = _req$body2.comision_asesor, empleado = _req$body2.empleado;
            _context5.prev = 2;
            _context5.next = 5;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context5.sent;
            _context5.next = 8;
            return _Seguro.default.findByIdAndUpdate(seguroId, {
              name: name,
              document: document,
              telefono: telefono,
              company: company,
              sucursal: sucursal,
              fecha_registro: fecha_registro,
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
              anio: anio,
              uso: uso,
              asesor: asesor,
              endoso: endoso,
              inicio_vigencia: inicio_vigencia,
              fin_vigencia: fin_vigencia,
              suma_asegurada: suma_asegurada,
              aseguradora: aseguradora,
              comision_seguro: comision_seguro,
              comision_asesor: comision_asesor,
              empleado: foundEmployee.map(function (a) {
                return a._id;
              })
            });

          case 8:
            updateObj = _context5.sent;

            if (!updateObj) {
              _context5.next = 13;
              break;
            }

            res.json({
              message: 'Seguro actualizado con éxito'
            });
            _context5.next = 14;
            break;

          case 13:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe Seguro a actualizar'
            }));

          case 14:
            _context5.next = 20;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](2);
            console.error(_context5.t0);
            res.status(409).json({
              message: _context5.t0.message
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 16]]);
  }));

  return function updateSeguro(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateSeguro = updateSeguro;

var deleteSeguro = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var seguroId, deleteObj;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            seguroId = req.params.seguroId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Seguro.default.findByIdAndDelete(seguroId);

          case 4:
            deleteObj = _context6.sent;

            if (!deleteObj) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: "Seguro eliminado con éxito"
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: "No existe Seguro a eliminar"
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(409).json({
              message: _context6.t0.message
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function deleteSeguro(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteSeguro = deleteSeguro;
//# sourceMappingURL=seguro.controller.js.map