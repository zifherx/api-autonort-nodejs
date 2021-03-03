"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCampaignById = exports.updateCampaignById = exports.getCampaignByVehicle = exports.getCampaniasActivas = exports.getOne = exports.getAll = exports.createCampaign = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Campaign = _interopRequireDefault(require("../models/Campaign"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var createCampaign = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, descripcion, bono, startDate, endDate, status, newCampaign, campaignSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, descripcion = _req$body.descripcion, bono = _req$body.bono, startDate = _req$body.startDate, endDate = _req$body.endDate, status = _req$body.status;
            newCampaign = new _Campaign.default({
              name: name,
              descripcion: descripcion,
              bono: bono,
              startDate: startDate,
              endDate: endDate,
              status: status
            }); //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });
            //newCampaign.auto = foundAuto.map(auto => auto._id);

            _context.next = 5;
            return newCampaign.save();

          case 5:
            campaignSaved = _context.sent;

            if (campaignSaved) {
              res.json({
                message: 'Campaña creada con éxito'
              });
            }

            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(404).json({
              message: 'Campaña ya existe'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
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
            return _Campaign.default.find();

          case 3:
            campaign = _context2.sent;

            if (!campaign) {
              _context2.next = 8;
              break;
            }

            res.send(campaign);
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(201).json({
              message: 'No existen Campañas'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(404).json({
              message: "".concat(_context2.t0)
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
            _context3.prev = 0;
            campaignId = req.params.campaignId;
            _context3.next = 4;
            return _Campaign.default.findById(campaignId);

          case 4:
            campaigns = _context3.sent;

            if (campaigns) {
              res.json(campaigns);
            } else {
              res.status(201).json({
                message: 'No existe la campaña'
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(404).json({
              message: 'Error de Servidor'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var getCampaniasActivas = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var activos;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Campaign.default.find({
              status: 'Activo'
            });

          case 3:
            activos = _context4.sent;

            if (activos) {
              res.json(activos);
            }

            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(404).json({
              message: 'Erro de Servidor'
            });
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getCampaniasActivas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCampaniasActivas = getCampaniasActivas;

var getCampaignByVehicle = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var modelo, vehiculo, campana;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            modelo = req.body.modelo;
            _context5.next = 4;
            return _Vehicle.default.findOne({
              cod_tdp: modelo
            });

          case 4:
            vehiculo = _context5.sent;
            _context5.next = 7;
            return _Campaign.default.find({
              auto: vehiculo
            });

          case 7:
            campana = _context5.sent;

            if (campana) {
              //console.log(campana);
              res.json(campana);
            } else {
              res.status(201).json({
                message: 'No existen campañas para ese vehículo'
              });
            }

            _context5.next = 15;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(404).json({
              message: 'Error filtrando Campañas'
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function getCampaignByVehicle(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCampaignByVehicle = getCampaignByVehicle;

var updateCampaignById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var campaignId, _req$body2, name, descripcion, bono, startDate, endDate, status, updateCampaign;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            campaignId = req.params.campaignId;
            _req$body2 = req.body, name = _req$body2.name, descripcion = _req$body2.descripcion, bono = _req$body2.bono, startDate = _req$body2.startDate, endDate = _req$body2.endDate, status = _req$body2.status; //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

            _context6.next = 5;
            return _Campaign.default.findByIdAndUpdate(campaignId, {
              name: name,
              descripcion: descripcion,
              bono: bono,
              startDate: startDate,
              endDate: endDate,
              status: status
            }, {
              new: true
            });

          case 5:
            updateCampaign = _context6.sent;

            if (updateCampaign) {
              res.json({
                message: 'Campaña actualizada con éxito'
              });
            } else {
              res.status(201).json({
                message: 'Campaña no existe'
              });
            }

            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(404).json({
              message: 'Error al actualizar la campaña'
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 9]]);
  }));

  return function updateCampaignById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateCampaignById = updateCampaignById;

var deleteCampaignById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var campaignId, deletedCampaign;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            campaignId = req.params.campaignId;
            _context7.next = 4;
            return _Campaign.default.findByIdAndRemove(campaignId);

          case 4:
            deletedCampaign = _context7.sent;

            if (deletedCampaign) {
              res.json({
                message: 'Campaña eliminada con éxito'
              });
            } else {
              res.status(201).json({
                message: 'Campaña no existe'
              });
            }

            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.status(404).json({
              message: 'Error al eliminar la campaña'
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function deleteCampaignById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteCampaignById = deleteCampaignById;
//# sourceMappingURL=campaign.controller.js.map