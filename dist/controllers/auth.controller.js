"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = void 0;

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
    var userFound, matchPassword, token;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User.default.findOne({
              username: req.body.username
            }).populate("roles");

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: 'Usuario no existe'
            }));

          case 5:
            _context2.next = 7;
            return _User.default.comparePassword(req.body.password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'Contraseña Errónea'
            }));

          case 10:
            token = _jsonwebtoken.default.sign({
              id: userFound._id
            }, _config.default.SECRET, {
              expiresIn: 86400
            });
            res.status(201).json({
              token: token,
              codigo: userFound._id,
              status: userFound.activo
            });

          case 12:
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
//# sourceMappingURL=auth.controller.js.map