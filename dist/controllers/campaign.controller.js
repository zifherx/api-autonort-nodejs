"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCampaignById = exports.updateCampaignById = exports.getCampaignByGrupo = exports.getCampaignByVehicle = exports.getCampaniasActivas = exports.getOne = exports.getAll = exports.createCampaign = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Campaign = _interopRequireDefault(require("../models/Campaign"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _User = _interopRequireDefault(require("../models/User"));

var createCampaign = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, descripcion, forCar, type, bono, startDate, endDate, status, empleado, newCampaign, foundEmployee, campaignSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, descripcion = _req$body.descripcion, forCar = _req$body.forCar, type = _req$body.type, bono = _req$body.bono, startDate = _req$body.startDate, endDate = _req$body.endDate, status = _req$body.status, empleado = _req$body.empleado;
            _context.prev = 1;
            newCampaign = new _Campaign.default({
              name: name,
              descripcion: descripcion,
              forCar: forCar,
              type: type,
              bono: bono,
              startDate: startDate,
              endDate: endDate,
              status: status
            });
            _context.next = 5;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context.sent;
            newCampaign.empleado = foundEmployee.map(function (em) {
              return em._id;
            }); //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });
            //newCampaign.auto = foundAuto.map(auto => auto._id);

            _context.next = 9;
            return newCampaign.save();

          case 9:
            campaignSaved = _context.sent;

            if (campaignSaved) {
              res.json({
                message: 'Campaña creada con éxito'
              });
            }

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(409).json({
              message: _context.t0.message
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));

  return function createCampaign(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCampaign = createCampaign;

var getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var campaign;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Campaign.default.find().sort({
              name: 'asc'
            });

          case 3:
            campaign = _context2.sent;

            if (!(campaign.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json(campaign);
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen Campañas'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(409).json({
              message: _context2.t0.message
            });

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

var getOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var campaignId, campaigns;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            campaignId = req.params.campaignId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Campaign.default.findById(campaignId);

          case 4:
            campaigns = _context3.sent;

            if (!campaigns) {
              _context3.next = 9;
              break;
            }

            res.json(campaigns);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existe la campaña'
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
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

  return function getOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var getCampaniasActivas = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var fechaDesde, fechaHasta, activos;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            fechaDesde = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().substr(0, 10);
            fechaHasta = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString().substr(0, 10);
            console.log("fecha-Desde: ", fechaDesde);
            console.log("fecha-Hasta: ", fechaHasta);
            _context4.prev = 4;
            _context4.next = 7;
            return _Campaign.default.find({
              status: 'Activo',
              startDate: fechaDesde,
              endDate: fechaHasta
            }).sort({
              name: 'asc'
            });

          case 7:
            activos = _context4.sent;

            if (activos.length > 0) {
              res.json(activos);
            } else {
              res.status(404).json({
                message: 'No existen Campañas Activas'
              });
            }

            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0);
            res.status(409).json({
              message: _context4.t0.message
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 11]]);
  }));

  return function getCampaniasActivas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCampaniasActivas = getCampaniasActivas;

var getCampaignByVehicle = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var modelo, campana;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            modelo = req.body.modelo;
            _context5.prev = 1;
            _context5.next = 4;
            return _Campaign.default.find({
              forCar: modelo
            }).sort({
              name: 'asc'
            });

          case 4:
            campana = _context5.sent;

            if (!(campana.length > 0)) {
              _context5.next = 9;
              break;
            }

            res.json(campana);
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existen campañas para ese vehículo'
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

  return function getCampaignByVehicle(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCampaignByVehicle = getCampaignByVehicle;

var getCampaignByGrupo = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var type, campana;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            type = req.body.type;
            _context6.prev = 1;
            _context6.next = 4;
            return _Campaign.default.find({
              type: type
            }).sort({
              name: 'asc'
            });

          case 4:
            campana = _context6.sent;

            if (!(campana.length > 0)) {
              _context6.next = 9;
              break;
            }

            res.json(campana);
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existen Campañas en ese grupo'
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(500).json({
              message: _context6.t0.message
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function getCampaignByGrupo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getCampaignByGrupo = getCampaignByGrupo;

var updateCampaignById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var campaignId, _req$body2, name, descripcion, forCar, type, bono, startDate, endDate, status, updateCampaign;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            campaignId = req.params.campaignId;
            _req$body2 = req.body, name = _req$body2.name, descripcion = _req$body2.descripcion, forCar = _req$body2.forCar, type = _req$body2.type, bono = _req$body2.bono, startDate = _req$body2.startDate, endDate = _req$body2.endDate, status = _req$body2.status;
            _context7.prev = 2;
            _context7.next = 5;
            return _Campaign.default.findByIdAndUpdate(campaignId, {
              name: name,
              descripcion: descripcion,
              forCar: forCar,
              type: type,
              bono: bono,
              startDate: startDate,
              endDate: endDate,
              status: status
            });

          case 5:
            updateCampaign = _context7.sent;

            if (updateCampaign) {
              res.json({
                message: 'Campaña actualizada con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Campaña'
              });
            }

            _context7.next = 13;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            res.status(409).json({
              message: _context7.t0.message
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 9]]);
  }));

  return function updateCampaignById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateCampaignById = updateCampaignById;

var deleteCampaignById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var campaignId, deletedCampaign;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            campaignId = req.params.campaignId;
            _context8.prev = 1;
            _context8.next = 4;
            return _Campaign.default.findByIdAndDelete(campaignId);

          case 4:
            deletedCampaign = _context8.sent;

            if (!deletedCampaign) {
              _context8.next = 9;
              break;
            }

            res.json({
              message: 'Campaña eliminada con éxito'
            });
            _context8.next = 10;
            break;

          case 9:
            return _context8.abrupt("return", res.status(404).json({
              message: 'Campaña no existe'
            }));

          case 10:
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            res.status(409).json({
              message: _context8.t0.message
            });

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 12]]);
  }));

  return function deleteCampaignById(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteCampaignById = deleteCampaignById;
//# sourceMappingURL=campaign.controller.js.map