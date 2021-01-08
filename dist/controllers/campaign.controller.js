"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCampaignById = exports.updateCampaignById = exports.getCampaignById = exports.getCampaigns = exports.createCampaign = void 0;

var _Campaign = _interopRequireDefault(require("../models/Campaign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCampaign = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, descripcion, bono, startDate, endDate, newCampaign, campaignSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, descripcion = _req$body.descripcion, bono = _req$body.bono, startDate = _req$body.startDate, endDate = _req$body.endDate;
            newCampaign = new _Campaign.default({
              name: name,
              descripcion: descripcion,
              bono: bono,
              startDate: startDate,
              endDate: endDate
            });
            _context.next = 5;
            return newCampaign.save();

          case 5:
            campaignSaved = _context.sent;
            res.status(201).json(campaignSaved);
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(401).json({
              message: 'Error al crear la campaña'
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

var getCampaigns = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var campaign;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Campaign.default.find();

          case 3:
            campaign = _context2.sent;
            res.status(201).json(campaign);
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(401).json({
              message: 'Error al obtener las campañas'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getCampaigns(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCampaigns = getCampaigns;

var getCampaignById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var campaignId, campaigns;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            campaignId = req.params.campaignId;
            _context3.next = 4;
            return _Campaign.default.findById(campaignId);

          case 4:
            campaigns = _context3.sent;
            res.status(200).json(campaigns);
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(401).json({
              message: 'Error al obtener la campaña'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getCampaignById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCampaignById = getCampaignById;

var updateCampaignById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var campaignId, updateCampaign;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            campaignId = req.params.campaignId;
            _context4.next = 4;
            return _Campaign.default.findByIdAndUpdate(campaignId, req.body, {
              new: true
            });

          case 4:
            updateCampaign = _context4.sent;

            if (updateCampaign) {
              res.status(200).json(updateCampaign);
            } else {
              res.status(401).json({
                message: 'Campaña no existe'
              });
            }

            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(401).json({
              message: 'Error al actualizar la campaña'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function updateCampaignById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateCampaignById = updateCampaignById;

var deleteCampaignById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var campaignId, deletedCampaign;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            campaignId = req.params.campaignId;
            _context5.next = 4;
            return _Campaign.default.findByIdAndRemove(campaignId);

          case 4:
            deletedCampaign = _context5.sent;

            if (deletedCampaign) {
              res.status(200).json({
                message: 'Campáña eliminada'
              });
            } else {
              res.status(401).json({
                message: 'Campaña no existe'
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(401).json({
              message: 'Error al eliminar la campaña'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function deleteCampaignById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCampaignById = deleteCampaignById;
//# sourceMappingURL=campaign.controller.js.map