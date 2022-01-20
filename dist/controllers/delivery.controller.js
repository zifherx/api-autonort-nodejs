"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDeliveryById = exports.getDeliveryById = exports.getAll = exports.deleteDeliveryById = exports.createDelivery = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Delivery = _interopRequireDefault(require("../models/Delivery"));

var _Record = _interopRequireDefault(require("../models/Record"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

var _User = _interopRequireDefault(require("../models/User"));

var createDelivery = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, tramite, fecha_entrega_cliente, hora_entrega_cliente, status, empleado, nuevoRegistro, cliente, cod_cliente, expediente, cod_expediente, inmatriculado, foundEmployee, cod_tramite, a, registroGuardado;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, tramite = _req$body.tramite, fecha_entrega_cliente = _req$body.fecha_entrega_cliente, hora_entrega_cliente = _req$body.hora_entrega_cliente, status = _req$body.status, empleado = _req$body.empleado;
            _context.prev = 1;
            nuevoRegistro = new _Delivery.default({
              tramite: tramite,
              fecha_entrega_cliente: fecha_entrega_cliente,
              hora_entrega_cliente: hora_entrega_cliente,
              status: status
            }); //Cliente

            _context.next = 5;
            return _Customer.default.find({
              name: {
                $in: tramite
              }
            });

          case 5:
            cliente = _context.sent;
            cod_cliente = cliente.map(function (a) {
              return a._id;
            }); //Sale

            _context.next = 9;
            return _Sale.default.find({
              cliente: cod_cliente
            });

          case 9:
            expediente = _context.sent;
            cod_expediente = expediente.map(function (b) {
              return b._id;
            }); //Record

            _context.next = 13;
            return _Record.default.find({
              sales: cod_expediente
            });

          case 13:
            inmatriculado = _context.sent;
            nuevoRegistro.tramite = inmatriculado.map(function (c) {
              return c._id;
            }); //Empleado

            _context.next = 17;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 17:
            foundEmployee = _context.sent;
            nuevoRegistro.empleado = foundEmployee.map(function (em) {
              return em._id;
            }); //Cambio de filtro al Expediente

            cod_tramite = inmatriculado[0]._id;
            _context.next = 22;
            return _Record.default.findByIdAndUpdate(cod_tramite, {
              pasoaEntrega: 1
            }, {
              new: true
            });

          case 22:
            a = _context.sent;
            _context.next = 25;
            return nuevoRegistro.save();

          case 25:
            registroGuardado = _context.sent;

            if (registroGuardado) {
              res.json({
                message: "Entrega creada con éxito"
              });
            }

            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(409).json({
              message: _context.t0.message
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 29]]);
  }));

  return function createDelivery(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDelivery = createDelivery;

var getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var filtro1, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            filtro1 = {
              path: "tramite",
              populate: {
                path: "sales",
                populate: "auto cliente vendedor empleado"
              }
            };
            _context2.prev = 1;
            _context2.next = 4;
            return _Delivery.default.find().populate(filtro1).populate('empleado');

          case 4:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 9;
              break;
            }

            res.json(query);
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existen Entregas"
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(409).json({
              message: _context2.t0.message
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function getAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getDeliveryById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var deliveryId, filtro1, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            deliveryId = req.params.deliveryId;
            filtro1 = {
              path: "tramite",
              populate: {
                path: "sales",
                populate: "auto cliente vendedor empleado"
              }
            };
            _context3.prev = 2;
            _context3.next = 5;
            return _Delivery.default.findById(deliveryId).populate(filtro1).populate('empleado');

          case 5:
            query = _context3.sent;

            if (!query) {
              _context3.next = 10;
              break;
            }

            res.json(query);
            _context3.next = 11;
            break;

          case 10:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existe el Expediente"
            }));

          case 11:
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(409).json({
              message: _context3.t0.message
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 13]]);
  }));

  return function getDeliveryById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDeliveryById = getDeliveryById;

var updateDeliveryById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var deliveryId, _req$body2, tramite, fecha_entrega_cliente, hora_entrega_cliente, status, cliente, cod_cliente, expediente, cod_expediente, inmatriculado, objActualizado;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            deliveryId = req.params.deliveryId;
            _req$body2 = req.body, tramite = _req$body2.tramite, fecha_entrega_cliente = _req$body2.fecha_entrega_cliente, hora_entrega_cliente = _req$body2.hora_entrega_cliente, status = _req$body2.status;
            _context4.prev = 2;
            _context4.next = 5;
            return _Customer.default.find({
              name: {
                $in: tramite
              }
            });

          case 5:
            cliente = _context4.sent;
            cod_cliente = cliente.map(function (a) {
              return a._id;
            }); //Sale

            _context4.next = 9;
            return _Sale.default.find({
              cliente: cod_cliente
            });

          case 9:
            expediente = _context4.sent;
            cod_expediente = expediente.map(function (b) {
              return b._id;
            }); //Record

            _context4.next = 13;
            return _Record.default.find({
              sales: cod_expediente
            });

          case 13:
            inmatriculado = _context4.sent;

            if (!(cliente <= 0)) {
              _context4.next = 16;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: 'Cliente ingresado no existe'
            }));

          case 16:
            if (!(expediente <= 0)) {
              _context4.next = 18;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: 'Cliente ingresado no cuenta con expediente'
            }));

          case 18:
            if (!(inmatriculado <= 0)) {
              _context4.next = 20;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: 'El expediente no se encuentra en trámites'
            }));

          case 20:
            _context4.next = 22;
            return _Delivery.default.findByIdAndUpdate(deliveryId, {
              tramite: inmatriculado.map(function (x) {
                return x._id;
              }),
              fecha_entrega_cliente: fecha_entrega_cliente,
              hora_entrega_cliente: hora_entrega_cliente,
              status: status
            });

          case 22:
            objActualizado = _context4.sent;

            if (!objActualizado) {
              _context4.next = 27;
              break;
            }

            res.json({
              message: 'Entrega actualizada con éxito'
            });
            _context4.next = 28;
            break;

          case 27:
            return _context4.abrupt("return", res.status(404).json({
              message: 'No existe Expediente a Actualizar'
            }));

          case 28:
            _context4.next = 34;
            break;

          case 30:
            _context4.prev = 30;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(409).json({
              message: _context4.t0.message
            });

          case 34:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 30]]);
  }));

  return function updateDeliveryById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateDeliveryById = updateDeliveryById;

var deleteDeliveryById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var deliveryId, objeto;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            deliveryId = req.params.deliveryId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Delivery.default.findByIdAndDelete(deliveryId);

          case 4:
            objeto = _context5.sent;

            if (!objeto) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: 'Entrega eliminada con éxito'
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe Expediente a Eliminar'
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

  return function deleteDeliveryById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDeliveryById = deleteDeliveryById;
//# sourceMappingURL=delivery.controller.js.map