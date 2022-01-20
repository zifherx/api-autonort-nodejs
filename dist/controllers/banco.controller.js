"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBanco = exports.getBancos = exports.getBancoById = exports.getBancoByActivo = exports.deleteBanco = exports.createBanco = void 0;

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
            return _Banco.default.find().sort({
              name: 'asc'
            });

          case 3:
            bancos = _context.sent;

            if (!(bancos.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json(bancos);
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: 'No existen Bancos'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
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

            if (!bancos) {
              _context2.next = 9;
              break;
            }

            res.json(bancos);
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existe Banco'
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
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
              status: true
            }).sort({
              name: 'asc'
            });

          case 3:
            bancos = _context3.sent;

            if (!(bancos.length > 0)) {
              _context3.next = 8;
              break;
            }

            res.json(bancos);
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existen Bancos Activos'
            }));

          case 9:
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getBancoByActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getBancoByActivo = getBancoByActivo;

var createBanco = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, status, avatar, obj, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, status = _req$body.status;
            avatar = req.file;
            _context4.prev = 2;
            obj = null;

            if (avatar == undefined || avatar == null) {
              obj = new _Banco.default({
                name: name,
                status: status
              });
            } else {
              obj = new _Banco.default({
                avatar: avatar.location,
                name: name,
                status: status
              });
            }

            _context4.next = 7;
            return newBanco.save();

          case 7:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Banco creado con éxito'
              });
            }

            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 11]]);
  }));

  return function createBanco(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createBanco = createBanco;

var updateBanco = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, status, bancoId, avatar, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, status = _req$body2.status;
            bancoId = req.params.bancoId;
            avatar = req.file;
            _context5.prev = 3;
            query = null;

            if (!(avatar == undefined || avatar == null)) {
              _context5.next = 11;
              break;
            }

            _context5.next = 8;
            return _Banco.default.findByIdAndUpdate(bancoId, {
              name: name,
              status: status
            });

          case 8:
            query = _context5.sent;
            _context5.next = 14;
            break;

          case 11:
            _context5.next = 13;
            return _Banco.default.findByIdAndUpdate(bancoId, {
              avatar: avatar.location,
              name: name,
              status: status
            });

          case 13:
            query = _context5.sent;

          case 14:
            if (!query) {
              _context5.next = 18;
              break;
            }

            res.json({
              message: 'Banco actualizado con éxito'
            });
            _context5.next = 19;
            break;

          case 18:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe Banco a eliminar'
            }));

          case 19:
            _context5.next = 25;
            break;

          case 21:
            _context5.prev = 21;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 21]]);
  }));

  return function updateBanco(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateBanco = updateBanco;

var deleteBanco = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var bancoId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            bancoId = req.params.bancoId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Banco.default.findByIdAndDelete(bancoId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Banco eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe Banco a eliminar'
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function deleteBanco(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteBanco = deleteBanco;
//# sourceMappingURL=banco.controller.js.map