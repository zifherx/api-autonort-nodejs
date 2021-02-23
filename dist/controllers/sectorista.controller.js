"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSectorista = exports.updateSectorista = exports.createSectorista = exports.getSectoristaByActivo = exports.getSectoristaById = exports.getSectoristas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Sectorista = _interopRequireDefault(require("../models/Sectorista"));

var getSectoristas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var sectorista;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Sectorista.default.find();

          case 3:
            sectorista = _context.sent;

            if (sectorista.length > 0) {
              res.send(sectorista);
            } else {
              res.status(404).json({
                message: 'Vacío'
              });
            }

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getSectoristas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSectoristas = getSectoristas;

var getSectoristaById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var sectoristaId, sectorista;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sectoristaId = req.params.sectoristaId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Sectorista.default.findById(sectoristaId);

          case 4:
            sectorista = _context2.sent;

            if (sectorista) {
              res.send(sectorista);
            } else {
              res.status(404).json({
                message: 'No existe'
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getSectoristaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSectoristaById = getSectoristaById;

var getSectoristaByActivo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var sectorista;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Sectorista.default.find({
              status: "Activo"
            });

          case 3:
            sectorista = _context3.sent;

            if (sectorista) {
              res.status(200).json(sectorista);
            } else {
              res.status(404).json({
                message: 'Vacío'
              });
            }

            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            //console.log(err);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getSectoristaByActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSectoristaByActivo = getSectoristaByActivo;

var createSectorista = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, status, newSectorista, sectoristaCreado;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, status = _req$body.status;
            _context4.prev = 1;
            newSectorista = new _Sectorista.default({
              name: name,
              status: status
            });
            _context4.next = 5;
            return newSectorista.save();

          case 5:
            sectoristaCreado = _context4.sent;

            if (sectoristaCreado) {
              res.json({
                message: 'Sectorista creado con éxito'
              });
            }

            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));

  return function createSectorista(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createSectorista = createSectorista;

var updateSectorista = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, status, sectoristaId, _updateSectorista;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, status = _req$body2.status;
            sectoristaId = req.params.sectoristaId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Sectorista.default.findByIdAndUpdate(sectoristaId, {
              name: name,
              status: status
            }, {
              new: true
            });

          case 5:
            _updateSectorista = _context5.sent;

            if (_updateSectorista) {
              res.json({
                message: 'Sectorista actualizado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Sectorista'
              });
            }

            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            //console.log(e);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));

  return function updateSectorista(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateSectorista = updateSectorista;

var deleteSectorista = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var sectoristaId, _deleteSectorista;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            sectoristaId = req.params.sectoristaId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Sectorista.default.findByIdAndDelete(sectoristaId);

          case 4:
            _deleteSectorista = _context6.sent;

            if (_deleteSectorista) {
              res.json({
                message: 'Sectorista eliminado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Sectorista'
              });
            }

            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            //console.log(e);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function deleteSectorista(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteSectorista = deleteSectorista;
//# sourceMappingURL=sectorista.controller.js.map