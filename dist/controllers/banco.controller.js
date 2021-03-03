"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBanco = exports.updateBanco = exports.createBanco = exports.getBancoByActivo = exports.getBancoById = exports.getBancos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Banco = _interopRequireDefault(require("../models/Banco"));

var getBancos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var bancos;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Banco.default.find();

          case 3:
            bancos = _context.sent;

            if (bancos.length > 0) {
              res.send(bancos);
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

  return function getBancos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBancos = getBancos;

var getBancoById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var bancoId, bancos;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            bancoId = req.params.bancoId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Banco.default.findById(bancoId);

          case 4:
            bancos = _context2.sent;

            if (bancos) {
              res.send(bancos);
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

  return function getBancoById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getBancoById = getBancoById;

var getBancoByActivo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var bancos;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Banco.default.find({
              status: "Activo"
            });

          case 3:
            bancos = _context3.sent;

            if (bancos) {
              res.status(200).json(bancos);
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

  return function getBancoByActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getBancoByActivo = getBancoByActivo;

var createBanco = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, status, newBanco, bancoCreado;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, status = _req$body.status;
            _context4.prev = 1;
            newBanco = new _Banco.default({
              name: name,
              status: status
            });
            _context4.next = 5;
            return newBanco.save();

          case 5:
            bancoCreado = _context4.sent;

            if (bancoCreado) {
              res.json({
                message: 'Banco creado con éxito'
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

  return function createBanco(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createBanco = createBanco;

var updateBanco = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, status, bancoId, _updateBanco;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, status = _req$body2.status;
            bancoId = req.params.bancoId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Banco.default.findByIdAndUpdate(bancoId, {
              name: name,
              status: status
            }, {
              new: true
            });

          case 5:
            _updateBanco = _context5.sent;

            if (_updateBanco) {
              res.json({
                message: 'Banco actualizado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Banco'
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

  return function updateBanco(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateBanco = updateBanco;

var deleteBanco = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var bancoId, _deleteBanco;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            bancoId = req.params.bancoId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Banco.default.findByIdAndDelete(bancoId);

          case 4:
            _deleteBanco = _context6.sent;

            if (_deleteBanco) {
              res.json({
                message: 'Banco eliminado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Banco'
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

  return function deleteBanco(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteBanco = deleteBanco;
//# sourceMappingURL=banco.controller.js.map