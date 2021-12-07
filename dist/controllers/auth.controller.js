"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshToken = exports.forzarCierre = exports.cerrarSesion = exports.changePassword = exports.signIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var signIn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, username, password, userFound, matchPassword, token;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 3;
            return _User.default.findOne({
              username: username
            });

          case 3:
            userFound = _context.sent;

            if (userFound) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: 'Usuario no existe'
            }));

          case 6:
            if (userFound.status) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: 'Usuario inactivo'
            }));

          case 8:
            if (!userFound.online) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: 'Usuario ya se encuentra logueado'
            }));

          case 10:
            _context.next = 12;
            return _User.default.comparePassword(password, userFound.password);

          case 12:
            matchPassword = _context.sent;

            if (matchPassword) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              token: null,
              message: 'Contraseña Errónea'
            }));

          case 15:
            token = _jsonwebtoken.default.sign({
              id: userFound._id
            }, _config.default.SECRET, {
              expiresIn: '36h'
            }); //Cambio de estado a online

            _context.next = 18;
            return _User.default.findByIdAndUpdate(userFound._id, {
              online: true
            });

          case 18:
            console.log('Token:', token);
            res.json({
              token: token,
              codigo: userFound._id
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var changePassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var id, _req$body2, oldPassword, newPassword, user, matchPassword, guardado;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = res.locals.jwtPayload.id;
            _req$body2 = req.body, oldPassword = _req$body2.oldPassword, newPassword = _req$body2.newPassword;

            if (!(oldPassword && newPassword)) {
              res.status(400).json({
                message: 'Contraseña Anterior y Nueva Contraseña son necesarios'
              });
            }

            _context2.prev = 3;
            _context2.next = 6;
            return _User.default.findById(id);

          case 6:
            user = _context2.sent;
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            res.status(404).json({
              message: 'Usuario no existe'
            });

          case 12:
            _context2.next = 14;
            return _User.default.comparePassword(oldPassword, user.password);

          case 14:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 17;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              message: 'Contraseña Anterior Errónea'
            }));

          case 17:
            _context2.prev = 17;
            _context2.next = 20;
            return _User.default.encryptPassword(newPassword);

          case 20:
            user.password = _context2.sent;
            _context2.next = 23;
            return user.save();

          case 23:
            guardado = _context2.sent;

            if (guardado) {
              res.json({
                message: 'Contraseña actualizada con éxito'
              });
            }

            _context2.next = 31;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t1 = _context2["catch"](17);
            console.log(_context2.t1);
            res.status(503).json({
              error: _context2.t1
            });

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 9], [17, 27]]);
  }));

  return function changePassword(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.changePassword = changePassword;

var cerrarSesion = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var id, userFound, offline;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = res.locals.jwtPayload.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _User.default.findById(id);

          case 4:
            userFound = _context3.sent;

            if (userFound.online) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(401).json({
              message: 'No existe sesión abierta'
            }));

          case 7:
            _context3.next = 9;
            return _User.default.findByIdAndUpdate(id, {
              online: false
            });

          case 9:
            offline = _context3.sent;

            if (!offline) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Sesión cerrada con éxito'
            }));

          case 12:
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(503).json({
              error: _context3.t0
            }));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 14]]);
  }));

  return function cerrarSesion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.cerrarSesion = cerrarSesion;

var forzarCierre = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var username, userFound, codUser, offline;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            username = req.body.username;
            _context4.prev = 1;
            _context4.next = 4;
            return _User.default.findOne({
              username: username
            });

          case 4:
            userFound = _context4.sent;
            codUser = userFound._id;

            if (userFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: 'Usuario no existe'
            }));

          case 8:
            if (userFound.online) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              message: 'No existe sesión iniciada'
            }));

          case 10:
            _context4.next = 12;
            return _User.default.findByIdAndUpdate(codUser, {
              online: false
            });

          case 12:
            offline = _context4.sent;

            if (!offline) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: 'Se cerró la sesión de forma forzada'
            }));

          case 15:
            _context4.next = 21;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 17]]);
  }));

  return function forzarCierre(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.forzarCierre = forzarCierre;

var refreshToken = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var refreshTok;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            refreshTok = req.headers.refresh;
            if (!refreshTok) res.status(400).json({
              message: 'Algo salió mal'
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function refreshToken(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.refreshToken = refreshToken;
//# sourceMappingURL=auth.controller.js.map