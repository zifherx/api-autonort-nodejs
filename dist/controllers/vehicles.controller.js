"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVehicleById = exports.getVehiculeByModelo = exports.getVehiculeByMarca = exports.getVehicleById = exports.getVehicleByCodigo = exports.getAll = exports.deleteVehicleById = exports.createVehicle = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _User = _interopRequireDefault(require("../models/User"));

var _ModeloTasaciones = _interopRequireDefault(require("../models/ModeloTasaciones"));

var _Chasis = _interopRequireDefault(require("../models/Chasis"));

var createVehicle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, chasis, model, cod_tdp, version, sucursal, empleado, obj, foundEmployee, foundChasis, foundModel, query;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, chasis = _req$body.chasis, model = _req$body.model, cod_tdp = _req$body.cod_tdp, version = _req$body.version, sucursal = _req$body.sucursal, empleado = _req$body.empleado;
            _context.prev = 1;
            obj = new _Vehicle.default({
              cod_tdp: cod_tdp,
              version: version,
              sucursal: sucursal
            });
            _context.next = 5;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context.sent;
            obj.empleado = foundEmployee.map(function (a) {
              return a._id;
            });
            _context.next = 9;
            return _Chasis.default.find({
              name: {
                $in: chasis
              }
            });

          case 9:
            foundChasis = _context.sent;
            obj.chasis = foundChasis.map(function (b) {
              return b._id;
            });
            _context.next = 13;
            return _ModeloTasaciones.default.find({
              name: {
                $in: model
              }
            });

          case 13:
            foundModel = _context.sent;
            obj.model = foundModel.map(function (c) {
              return c._id;
            });
            _context.next = 17;
            return obj.save();

          case 17:
            query = _context.sent;

            if (query) {
              res.json({
                message: 'Vehículo creado con éxito'
              });
            }

            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 21]]);
  }));

  return function createVehicle(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createVehicle = createVehicle;

var getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Vehicle.default.find().sort({
              cod_tdp: 'asc'
            }).populate({
              path: 'chasis',
              select: 'name'
            }).populate({
              path: 'model',
              select: 'name avatar marca',
              populate: {
                path: 'marca',
                select: 'avatar name'
              }
            }).populate({
              path: 'empleado',
              select: 'name roles',
              populate: {
                path: 'roles',
                select: 'name'
              }
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json({
              total: query.length,
              vehicles: query
            });
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen vehículos'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getVehicleById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var vehicleId, vehicle;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Vehicle.default.findById(vehicleId).populate({
              path: 'chasis',
              select: 'name'
            }).populate({
              path: 'model',
              select: 'name avatar marca',
              populate: {
                path: 'marca',
                select: 'avatar name'
              }
            }).populate({
              path: 'empleado',
              select: 'name roles',
              populate: {
                path: 'roles',
                select: 'name'
              }
            });

          case 4:
            vehicle = _context3.sent;

            if (!vehicle) {
              _context3.next = 9;
              break;
            }

            res.json(vehicle);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existe el Vehículo'
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
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

  return function getVehicleById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getVehicleById = getVehicleById;

var getVehicleByCodigo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var codigoAuto, query;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            codigoAuto = req.body.codigoAuto;
            _context4.prev = 1;
            _context4.next = 4;
            return _Vehicle.default.findOne({
              cod_tdp: codigoAuto
            }).populate({
              path: 'chasis',
              select: 'name'
            }).populate({
              path: 'model',
              select: 'name avatar marca',
              populate: {
                path: 'marca',
                select: 'avatar name'
              }
            }).populate({
              path: 'empleado',
              select: 'name roles',
              populate: {
                path: 'roles',
                select: 'name'
              }
            });

          case 4:
            query = _context4.sent;

            if (!query) {
              _context4.next = 9;
              break;
            }

            res.json(query);
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: 'No existe vehículo a mostrar'
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

  return function getVehicleByCodigo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getVehicleByCodigo = getVehicleByCodigo;

var getVehiculeByMarca = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var marca, query, obj;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            marca = req.body.marca;
            _context5.prev = 1;
            _context5.next = 4;
            return _Vehicle.default.find().populate({
              path: 'chasis',
              select: 'name'
            }).populate({
              path: 'model',
              select: 'name avatar marca',
              populate: {
                path: 'marca',
                select: 'name avatar',
                match: {
                  name: marca
                }
              }
            }).populate({
              path: 'empleado',
              select: 'name roles',
              populate: {
                path: 'roles',
                select: 'name'
              }
            });

          case 4:
            query = _context5.sent;
            obj = query.filter(function (b) {
              return b.model.marca;
            });

            if (!(obj.length > 0)) {
              _context5.next = 10;
              break;
            }

            res.json({
              total: obj.length,
              vehicles: obj
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existen Modelos en esa Marca'
            }));

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 13]]);
  }));

  return function getVehiculeByMarca(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getVehiculeByMarca = getVehiculeByMarca;

var getVehiculeByModelo = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var modelo, query, obj;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            modelo = req.body.modelo;
            _context6.prev = 1;
            _context6.next = 4;
            return _Vehicle.default.find().populate({
              path: 'model',
              match: {
                name: {
                  $in: modelo
                }
              },
              select: 'avatar name marca'
            });

          case 4:
            query = _context6.sent;
            obj = query.filter(function (a) {
              return a.model;
            });

            if (!(obj.length > 0)) {
              _context6.next = 10;
              break;
            }

            res.json({
              total: obj.length,
              vehicles: obj
            });
            _context6.next = 11;
            break;

          case 10:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existen Vehículos en ese Modelo'
            }));

          case 11:
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

  return function getVehiculeByModelo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getVehiculeByModelo = getVehiculeByModelo;

var updateVehicleById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var vehicleId, _req$body2, chasis, model, cod_tdp, version, foundChasis, foundModel, updatedVehicle;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _req$body2 = req.body, chasis = _req$body2.chasis, model = _req$body2.model, cod_tdp = _req$body2.cod_tdp, version = _req$body2.version;
            _context7.prev = 2;
            _context7.next = 5;
            return _Chasis.default.findOne({
              name: {
                $in: chasis
              }
            });

          case 5:
            foundChasis = _context7.sent;

            if (foundChasis) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: 'No existe el chasis'
            }));

          case 8:
            _context7.next = 10;
            return _ModeloTasaciones.default.findOne({
              name: {
                $in: model
              }
            });

          case 10:
            foundModel = _context7.sent;

            if (foundModel) {
              _context7.next = 13;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: 'No existe el modelo'
            }));

          case 13:
            _context7.next = 15;
            return _Vehicle.default.findByIdAndUpdate(vehicleId, {
              chasis: foundChasis._id,
              cod_tdp: cod_tdp,
              model: foundModel._id,
              version: version
            });

          case 15:
            updatedVehicle = _context7.sent;

            if (!updatedVehicle) {
              _context7.next = 20;
              break;
            }

            res.json({
              message: 'Vehículo actualizado con éxito'
            });
            _context7.next = 21;
            break;

          case 20:
            return _context7.abrupt("return", res.status(404).json({
              message: 'No existe Vehículo a actualizar'
            }));

          case 21:
            _context7.next = 27;
            break;

          case 23:
            _context7.prev = 23;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 27:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 23]]);
  }));

  return function updateVehicleById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateVehicleById = updateVehicleById;

var deleteVehicleById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var vehicleId, deletedVehicle;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _context8.prev = 1;
            _context8.next = 4;
            return _Vehicle.default.findByIdAndDelete(vehicleId);

          case 4:
            deletedVehicle = _context8.sent;

            if (!deletedVehicle) {
              _context8.next = 9;
              break;
            }

            res.json({
              message: 'Vehículo eliminado con éxito'
            });
            _context8.next = 10;
            break;

          case 9:
            return _context8.abrupt("return", res.status(404).json({
              message: 'No existe Vehículo a eliminar'
            }));

          case 10:
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 12]]);
  }));

  return function deleteVehicleById(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteVehicleById = deleteVehicleById;
//# sourceMappingURL=vehicles.controller.js.map