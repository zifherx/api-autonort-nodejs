"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVehicleById = exports.updateVehicleById = exports.getVehicleByCodigo = exports.getVehicleById = exports.getVehicles = exports.createVehicle = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var createVehicle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, marca, cod_tdp, categoria, modelo, version, sucursal, newVehicle, vehicleSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, marca = _req$body.marca, cod_tdp = _req$body.cod_tdp, categoria = _req$body.categoria, modelo = _req$body.modelo, version = _req$body.version, sucursal = _req$body.sucursal;
            newVehicle = new _Vehicle.default({
              marca: marca,
              cod_tdp: cod_tdp,
              categoria: categoria,
              modelo: modelo,
              version: version,
              sucursal: sucursal
            }); //const foundCampaign = await Campaign.find({ name: { $in: campaign } });
            //newVehicle.campaign = foundCampaign.map(campaign => campaign._id);

            _context.next = 4;
            return newVehicle.save();

          case 4:
            vehicleSaved = _context.sent;
            res.json({
              message: 'Vehículo creado con éxito'
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createVehicle(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createVehicle = createVehicle;

var getVehicles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var vehicles;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Vehicle.default.find();

          case 2:
            vehicles = _context2.sent;
            res.json(vehicles);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getVehicles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getVehicles = getVehicles;

var getVehicleById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var vehicleId, vehicle;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _context3.next = 3;
            return _Vehicle.default.findById(vehicleId);

          case 3:
            vehicle = _context3.sent;
            res.json(vehicle);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getVehicleById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getVehicleById = getVehicleById;

var getVehicleByCodigo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var codigoAuto, carro;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            codigoAuto = req.body.codigoAuto;
            _context4.next = 4;
            return _Vehicle.default.findOne({
              cod_tdp: codigoAuto
            });

          case 4:
            carro = _context4.sent;

            if (!carro) {
              _context4.next = 9;
              break;
            }

            res.json(carro);
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(201).json({
              message: 'No existe vehículo a mostrar'
            }));

          case 10:
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(403).json({
              message: 'No Autorizado'
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function getVehicleByCodigo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getVehicleByCodigo = getVehicleByCodigo;

var updateVehicleById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var vehicleId, _req$body2, marca, cod_tdp, categoria, modelo, version, sucursal, updatedVehicle;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _req$body2 = req.body, marca = _req$body2.marca, cod_tdp = _req$body2.cod_tdp, categoria = _req$body2.categoria, modelo = _req$body2.modelo, version = _req$body2.version, sucursal = _req$body2.sucursal; //Campaign
            //const foundCampaign = await Campaign.find({ name: { $in: campaign } });

            _context5.prev = 2;
            _context5.next = 5;
            return _Vehicle.default.findByIdAndUpdate(vehicleId, {
              marca: marca,
              cod_tdp: cod_tdp,
              categoria: categoria,
              modelo: modelo,
              version: version,
              sucursal: sucursal
            }, {
              new: true
            });

          case 5:
            updatedVehicle = _context5.sent;

            if (!updatedVehicle) {
              _context5.next = 10;
              break;
            }

            res.json({
              message: 'Vehículo actualizado con éxito'
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.status(404).json({
              message: 'Vehículo ya modificado'
            }));

          case 11:
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            res.status(403).json({
              message: 'Vehículo no existe'
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function updateVehicleById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateVehicleById = updateVehicleById;

var deleteVehicleById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var vehicleId, deletedVehicle;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _context6.next = 3;
            return _Vehicle.default.findByIdAndRemove(vehicleId);

          case 3:
            deletedVehicle = _context6.sent;

            if (deletedVehicle) {
              res.json({
                message: 'Vehículo eliminado con éxito'
              });
            }

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteVehicleById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteVehicleById = deleteVehicleById;
//# sourceMappingURL=vehicles.controller.js.map