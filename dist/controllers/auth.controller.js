"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = exports.signIn = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, newUser, foundRoles, role, saveUser, token;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            newUser = new _User.default({
              username: username,
              email: email
            });

            if (!roles) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 5:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 13;
            break;

          case 9:
            _context.next = 11;
            return _Role.default.findOne({
              name: "user"
            });

          case 11:
            role = _context.sent;
            newUser.roles = [role._id];

          case 13:
            _context.next = 15;
            return newUser.save();

          case 15:
            saveUser = _context.sent;
            //console.log(saveUser);
            token = _jsonwebtoken.default.sign({
              id: saveUser._id
            }, _config.default.SECRET, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var _req$body2, username, password, userFound, matchPassword, token;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
            _context2.next = 3;
            return _User.default.findOne({
              username: username
            }).populate("roles");

          case 3:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: 'Usuario no existe'
            }));

          case 6:
            _context2.next = 8;
            return _User.default.comparePassword(password, userFound.password);

          case 8:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'Contraseña Errónea'
            }));

          case 11:
            token = _jsonwebtoken.default.sign({
              id: userFound._id
            }, _config.default.SECRET, {
              expiresIn: '24h'
            });
            res.json({
              token: token,
              codigo: userFound._id,
              status: userFound.activo
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var changePassword = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var id, _req$body3, oldPassword, newPassword, user, matchPassword, guardado;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = res.locals.jwtPayload.id;
            _req$body3 = req.body, oldPassword = _req$body3.oldPassword, newPassword = _req$body3.newPassword;

            if (!(oldPassword && newPassword)) {
              res.status(400).json({
                message: 'Contraseña Anterior y Nueva Contraseña son necesarios'
              });
            }

            _context3.prev = 3;
            _context3.next = 6;
            return _User.default.findById(id);

          case 6:
            user = _context3.sent;
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](3);
            res.status(404).json({
              message: 'Usuario no existe'
            });

          case 12:
            _context3.next = 14;
            return _User.default.comparePassword(oldPassword, user.password);

          case 14:
            matchPassword = _context3.sent;

            if (matchPassword) {
              _context3.next = 17;
              break;
            }

            return _context3.abrupt("return", res.status(401).json({
              message: 'Contraseña Anterior Errónea'
            }));

          case 17:
            _context3.prev = 17;
            _context3.next = 20;
            return _User.default.encryptPassword(newPassword);

          case 20:
            user.password = _context3.sent;
            _context3.next = 23;
            return user.save();

          case 23:
            guardado = _context3.sent;

            if (guardado) {
              res.json({
                message: 'Contraseña actualizada con éxito'
              });
            }

            _context3.next = 31;
            break;

          case 27:
            _context3.prev = 27;
            _context3.t1 = _context3["catch"](17);
            console.log(_context3.t1);
            res.status(409).json({
              message: _context3.t1.message
            });

          case 31:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 9], [17, 27]]);
  }));

  return function changePassword(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.changePassword = changePassword;
//# sourceMappingURL=auth.controller.js.map