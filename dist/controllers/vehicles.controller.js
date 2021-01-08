"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVehicleById = exports.updateVehicleById = exports.getVehicleBySerie = exports.getVehicleById = exports.getVehicles = exports.createVehicle = void 0;

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createVehicle = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, brand, cod_tdp, serie_tdp, category, model, colour, manufacturing_year, model_year, branch_office, location, price, imgURL, status, newVehicle, vehicleSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, brand = _req$body.brand, cod_tdp = _req$body.cod_tdp, serie_tdp = _req$body.serie_tdp, category = _req$body.category, model = _req$body.model, colour = _req$body.colour, manufacturing_year = _req$body.manufacturing_year, model_year = _req$body.model_year, branch_office = _req$body.branch_office, location = _req$body.location, price = _req$body.price, imgURL = _req$body.imgURL, status = _req$body.status;
            newVehicle = new _Vehicle.default({
              brand: brand,
              cod_tdp: cod_tdp,
              serie_tdp: serie_tdp,
              category: category,
              model: model,
              colour: colour,
              manufacturing_year: manufacturing_year,
              model_year: model_year,
              branch_office: branch_office,
              location: location,
              price: price,
              imgURL: imgURL,
              status: status
            });
            _context.next = 4;
            return newVehicle.save();

          case 4:
            vehicleSaved = _context.sent;
            res.status(201).json(vehicleSaved);

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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var vehicles;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var vehicleId, vehicle;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _context3.next = 3;
            return _Vehicle.default.findById(vehicleId);

          case 3:
            vehicle = _context3.sent;
            res.status(200).json(vehicle);

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

var getVehicleBySerie = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var serie, carro;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            serie = req.body.serie;
            _context4.next = 4;
            return _Vehicle.default.findOne({
              serie_tdp: serie
            });

          case 4:
            carro = _context4.sent;

            //console.log(carro);
            if (carro) {
              console.log(carro);
              res.status(200).json(carro);
            } else {
              res.status(201).json({
                messsage: 'No existe vehículo a mostrar'
              });
            }

            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function getVehicleBySerie(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getVehicleBySerie = getVehicleBySerie;

var updateVehicleById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var vehicleId, updatedVehicle;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _context5.next = 3;
            return _Vehicle.default.findByIdAndUpdate(vehicleId, req.body, {
              new: true
            });

          case 3:
            updatedVehicle = _context5.sent;
            res.status(200).json(updatedVehicle);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateVehicleById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateVehicleById = updateVehicleById;

var deleteVehicleById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var vehicleId, deletedVehicle;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            vehicleId = req.params.vehicleId;
            _context6.next = 3;
            return _Vehicle.default.findByIdAndRemove(vehicleId);

          case 3:
            deletedVehicle = _context6.sent;
            res.status(201).json({
              message: 'Vehicle Removed'
            });

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