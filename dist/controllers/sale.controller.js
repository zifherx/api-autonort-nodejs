"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSaleById = exports.updateSaleById = exports.getSaleById = exports.getSales = exports.createSale = void 0;

var _Sale = _interopRequireDefault(require("../models/Sale"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Financing = _interopRequireDefault(require("../models/Financing"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createSale = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, fecha, nroComprobante, seller, vehicle, financing, entity, support, office, account_executive, customer, situacion, newSale, foundSeller, foundVehicle, foundFinancing, foundCustomer, saleSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, fecha = _req$body.fecha, nroComprobante = _req$body.nroComprobante, seller = _req$body.seller, vehicle = _req$body.vehicle, financing = _req$body.financing, entity = _req$body.entity, support = _req$body.support, office = _req$body.office, account_executive = _req$body.account_executive, customer = _req$body.customer, situacion = _req$body.situacion;
            newSale = new _Sale.default({
              fecha: fecha,
              nroComprobante: nroComprobante,
              entity: entity,
              support: support,
              office: office,
              account_executive: account_executive,
              situacion: situacion
            }); //Seller

            _context.next = 5;
            return _Seller.default.find({
              name: {
                $in: seller
              }
            });

          case 5:
            foundSeller = _context.sent;
            newSale.seller = foundSeller.map(function (seller) {
              return seller._id;
            }); //Vehicle

            _context.next = 9;
            return _Vehicle.default.find({
              serie_tdp: {
                $in: vehicle
              }
            });

          case 9:
            foundVehicle = _context.sent;
            newSale.vehicle = foundVehicle.map(function (vehicle) {
              return vehicle._id;
            }); //Financing

            _context.next = 13;
            return _Financing.default.find({
              type: {
                $in: financing
              }
            });

          case 13:
            foundFinancing = _context.sent;
            newSale.financing = foundFinancing.map(function (financing) {
              return financing._id;
            }); //Customer

            _context.next = 17;
            return _Customer.default.find({
              document: {
                $in: customer
              }
            });

          case 17:
            foundCustomer = _context.sent;
            newSale.customer = foundCustomer.map(function (customer) {
              return customer._id;
            }); //console.log(newSale);

            _context.next = 21;
            return newSale.save();

          case 21:
            saleSaved = _context.sent;
            res.status(201).json(saleSaved);
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(401).json({
              message: 'Error interno'
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 25]]);
  }));

  return function createSale(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createSale = createSale;

var getSales = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var ventasfull;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Sale.default.find().populate('seller').populate('vehicle').populate('financing').populate('customer');

          case 3:
            ventasfull = _context2.sent;
            res.status(200).json(ventasfull); //console.log(ventasfull)

            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(401).json({
              message: 'Error interno'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getSales(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSales = getSales;

var getSaleById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var salesId, venta;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            salesId = req.params.salesId;
            _context3.next = 4;
            return _Sale.default.findById(salesId).populate('seller').populate('vehicle').populate('financing').populate('customer');

          case 4:
            venta = _context3.sent;

            if (venta) {
              res.status(200).json(venta);
            } else {
              res.status(201).json({
                message: 'No existe la venta'
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(401).json({
              message: 'Error interno'
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var salesId, _req$body2, fecha, nroComprobante, seller, vehicle, financing, entity, support, office, account_executive, customer, situacion, foundSeller, foundVehicle, foundFinancing, foundCustomer, ventaActualizada;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            salesId = req.params.salesId;
            _req$body2 = req.body, fecha = _req$body2.fecha, nroComprobante = _req$body2.nroComprobante, seller = _req$body2.seller, vehicle = _req$body2.vehicle, financing = _req$body2.financing, entity = _req$body2.entity, support = _req$body2.support, office = _req$body2.office, account_executive = _req$body2.account_executive, customer = _req$body2.customer, situacion = _req$body2.situacion; //Seller

            _context4.next = 5;
            return _Seller.default.find({
              name: {
                $in: seller
              }
            });

          case 5:
            foundSeller = _context4.sent;
            _context4.next = 8;
            return _Vehicle.default.find({
              serie_tdp: {
                $in: vehicle
              }
            });

          case 8:
            foundVehicle = _context4.sent;
            _context4.next = 11;
            return _Financing.default.find({
              type: {
                $in: financing
              }
            });

          case 11:
            foundFinancing = _context4.sent;
            _context4.next = 14;
            return _Customer.default.find({
              document: {
                $in: customer
              }
            });

          case 14:
            foundCustomer = _context4.sent;
            _context4.next = 17;
            return _Sale.default.findByIdAndUpdate(salesId, {
              fecha: fecha,
              nroComprobante: nroComprobante,
              seller: foundSeller.map(function (seller) {
                return seller._id;
              }),
              vehicle: foundVehicle.map(function (vehicle) {
                return vehicle._id;
              }),
              financing: foundFinancing.map(function (financing) {
                return financing._id;
              }),
              entity: entity,
              support: support,
              office: office,
              account_executive: account_executive,
              customer: foundCustomer.map(function (customer) {
                return customer._id;
              }),
              situacion: situacion
            }, {
              new: true
            });

          case 17:
            ventaActualizada = _context4.sent;

            if (ventaActualizada) {
              //Mandamos la respuesta
              res.status(201).json(ventaActualizada);
            } else {
              //Mandamos la respuesta
              res.status(401).json({
                message: 'Venta no existe'
              });
            }

            _context4.next = 25;
            break;

          case 21:
            _context4.prev = 21;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(401).json({
              message: 'Error interno'
            });

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 21]]);
  }));

  return function updateSaleById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateSaleById = updateSaleById;

var deleteSaleById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var salesId, deleteSale;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
                message: 'Venta Eliminada'
              });
            } else {
              res.status(401).json({
                message: 'Venta no existe'
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(401).json({
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
//# sourceMappingURL=sale.controller.js.map