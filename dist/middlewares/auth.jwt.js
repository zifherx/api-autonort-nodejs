"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInmatriculadosAsistant = exports.isChiefTunning = exports.isChiefAdv = exports.isChiefSales = exports.isAdmin = exports.verifyToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              message: 'Falta Token'
            }));

          case 4:
            decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);
            req.userId = decoded.id;
            _context.next = 8;
            return _User.default.findById(req.userId, {
              password: 0
            });

          case 8:
            user = _context.sent;

            if (user) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: 'No se encontró usuario'
            }));

          case 11:
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(403).json({
              message: 'No Autorizado'
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context2.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context2.next = 14;
              break;
            }

            if (!(roles[i].name === 'Administrador')) {
              _context2.next = 11;
              break;
            }

            next();
            return _context2.abrupt("return");

          case 11:
            i++;
            _context2.next = 7;
            break;

          case 14:
            return _context2.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Administrador'
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;

var isChiefSales = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context3.sent;
            _context3.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context3.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context3.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Ventas')) {
              _context3.next = 11;
              break;
            }

            next();
            return _context3.abrupt("return");

          case 11:
            i++;
            _context3.next = 7;
            break;

          case 14:
            return _context3.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-Ventas'
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isChiefSales(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isChiefSales = isChiefSales;

var isChiefAdv = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context4.sent;
            _context4.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context4.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context4.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV')) {
              _context4.next = 11;
              break;
            }

            next();
            return _context4.abrupt("return");

          case 11:
            i++;
            _context4.next = 7;
            break;

          case 14:
            return _context4.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function isChiefAdv(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.isChiefAdv = isChiefAdv;

var isChiefTunning = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context5.sent;
            _context5.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context5.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context5.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Tunning')) {
              _context5.next = 11;
              break;
            }

            next();
            return _context5.abrupt("return");

          case 11:
            i++;
            _context5.next = 7;
            break;

          case 14:
            return _context5.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-Tunning'
            }));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function isChiefTunning(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.isChiefTunning = isChiefTunning;

var isInmatriculadosAsistant = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context6.sent;
            _context6.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context6.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context6.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Inmatriculaciones')) {
              _context6.next = 11;
              break;
            }

            next();
            return _context6.abrupt("return");

          case 11:
            i++;
            _context6.next = 7;
            break;

          case 14:
            return _context6.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente de Inmatriculacion'
            }));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function isInmatriculadosAsistant(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.isInmatriculadosAsistant = isInmatriculadosAsistant;
//# sourceMappingURL=auth.jwt.js.map