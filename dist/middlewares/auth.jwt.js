"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.isVendedor = exports.isTasadororChiefEPDP = exports.isTasador = exports.isInmatriculadosAsistantyAdministrador = exports.isInmatriculadosAsistant = exports.isExecutiveMaf = exports.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin = exports.isConexosOrADVOrVendedorOrEPDPOrAdmin = exports.isConexosOrADV = exports.isConexosAsistantOrAdmin = exports.isChiefTunning = exports.isChiefSales = exports.isChiefEPDPorAdmin = exports.isChiefEPDP = exports.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento = exports.isChiefAdvorAdminorAsistantADV = exports.isChiefAdvorAdmin = exports.isChiefAdv = exports.isChiefADVOrChiefPlaneamientoOrAdministrador = exports.isCSAsistant = exports.isAdministradorOrAsistantComercial = exports.isAdmin = void 0;

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
            res.locals.jwtPayload = decoded;
            req.userId = decoded.id;
            _context.next = 9;
            return _User.default.findById(req.userId, {
              password: 0
            });

          case 9:
            user = _context.sent;

            if (user) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: 'No se encontró usuario'
            }));

          case 12:
            next();
            _context.next = 24;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

            if (!(_context.t0.message == "jwt expired")) {
              _context.next = 22;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: 'Token ha expirado'
            }));

          case 22:
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(403).json({
              message: 'No Autorizado'
            }));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
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

var isChiefAdvorAdmin = /*#__PURE__*/function () {
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

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Administrador')) {
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
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function isChiefAdvorAdmin(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.isChiefAdvorAdmin = isChiefAdvorAdmin;

var isChiefAdvorAdminorAsistantADV = /*#__PURE__*/function () {
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

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Administrador' || roles[i].name === 'Asistente-ADV')) {
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
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function isChiefAdvorAdminorAsistantADV(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.isChiefAdvorAdminorAsistantADV = isChiefAdvorAdminorAsistantADV;

var isChiefAdvorAdminorAsistantADVorChiefPlaneamiento = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context7.sent;
            _context7.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context7.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context7.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Administrador' || roles[i].name === 'Asistente-ADV' || roles[i].name === 'Jefe-Planeamiento-Comercial')) {
              _context7.next = 11;
              break;
            }

            next();
            return _context7.abrupt("return");

          case 11:
            i++;
            _context7.next = 7;
            break;

          case 14:
            return _context7.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function isChiefAdvorAdminorAsistantADVorChiefPlaneamiento(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento = isChiefAdvorAdminorAsistantADVorChiefPlaneamiento;

var isChiefTunning = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context8.sent;
            _context8.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context8.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context8.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Tunning')) {
              _context8.next = 11;
              break;
            }

            next();
            return _context8.abrupt("return");

          case 11:
            i++;
            _context8.next = 7;
            break;

          case 14:
            return _context8.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-Tunning'
            }));

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function isChiefTunning(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.isChiefTunning = isChiefTunning;

var isInmatriculadosAsistantyAdministrador = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context9.sent;
            _context9.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context9.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context9.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Inmatriculaciones' || roles[i].name === 'Administrador')) {
              _context9.next = 11;
              break;
            }

            next();
            return _context9.abrupt("return");

          case 11:
            i++;
            _context9.next = 7;
            break;

          case 14:
            return _context9.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Inmatriculacion o Administrador'
            }));

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function isInmatriculadosAsistantyAdministrador(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.isInmatriculadosAsistantyAdministrador = isInmatriculadosAsistantyAdministrador;

var isInmatriculadosAsistant = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context10.sent;
            _context10.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context10.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context10.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Inmatriculaciones')) {
              _context10.next = 11;
              break;
            }

            next();
            return _context10.abrupt("return");

          case 11:
            i++;
            _context10.next = 7;
            break;

          case 14:
            return _context10.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Inmatriculacion'
            }));

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function isInmatriculadosAsistant(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.isInmatriculadosAsistant = isInmatriculadosAsistant;

var isCSAsistant = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context11.sent;
            _context11.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context11.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context11.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-CS')) {
              _context11.next = 11;
              break;
            }

            next();
            return _context11.abrupt("return");

          case 11:
            i++;
            _context11.next = 7;
            break;

          case 14:
            return _context11.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-CS'
            }));

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function isCSAsistant(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.isCSAsistant = isCSAsistant;

var isConexosAsistantOrAdmin = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context12.sent;
            _context12.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context12.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context12.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Administrador')) {
              _context12.next = 11;
              break;
            }

            next();
            return _context12.abrupt("return");

          case 11:
            i++;
            _context12.next = 7;
            break;

          case 14:
            return _context12.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos'
            }));

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function isConexosAsistantOrAdmin(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

exports.isConexosAsistantOrAdmin = isConexosAsistantOrAdmin;

var isConexosOrADV = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context13.sent;
            _context13.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context13.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context13.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV')) {
              _context13.next = 11;
              break;
            }

            next();
            return _context13.abrupt("return");

          case 11:
            i++;
            _context13.next = 7;
            break;

          case 14:
            return _context13.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos || Jefe ADV'
            }));

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function isConexosOrADV(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

exports.isConexosOrADV = isConexosOrADV;

var isConexosOrADVOrVendedorOrEPDPOrAdmin = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context14.sent;
            _context14.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context14.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context14.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV' || roles[i].name === 'Asistente-ADV' || roles[i].name === 'Vendedor' || roles[i].name === 'Administrador' || roles[i].name === 'Jefe-EPDP' || roles[i].name === 'Tasador')) {
              _context14.next = 11;
              break;
            }

            next();
            return _context14.abrupt("return");

          case 11:
            i++;
            _context14.next = 7;
            break;

          case 14:
            return _context14.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos || Jefe-ADV || Vendedor || Administrador || Jefe-EPDP || Tasador'
            }));

          case 15:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function isConexosOrADVOrVendedorOrEPDPOrAdmin(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

exports.isConexosOrADVOrVendedorOrEPDPOrAdmin = isConexosOrADVOrVendedorOrEPDPOrAdmin;

var isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context15.sent;
            _context15.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context15.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context15.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV' || roles[i].name === 'Asistente-ADV' || roles[i].name === 'Vendedor' || roles[i].name === 'Administrador' || roles[i].name === 'Jefe-EPDP' || roles[i].name === 'Tasador' || roles[i].name === 'Jefe-Planeamiento-Comercial')) {
              _context15.next = 11;
              break;
            }

            next();
            return _context15.abrupt("return");

          case 11:
            i++;
            _context15.next = 7;
            break;

          case 14:
            return _context15.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos || Jefe-ADV || Vendedor || Administrador || Jefe-EPDP || Tasador || Jefe-Planeamiento-Comercial'
            }));

          case 15:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();

exports.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin = isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin;

var isTasadororChiefEPDP = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context16.sent;
            _context16.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context16.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context16.next = 14;
              break;
            }

            if (!(roles[i].name === 'Tasador' || roles[i].name === 'Jefe-EPDP')) {
              _context16.next = 11;
              break;
            }

            next();
            return _context16.abrupt("return");

          case 11:
            i++;
            _context16.next = 7;
            break;

          case 14:
            return _context16.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Tasador ó Jefe-EPDP'
            }));

          case 15:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function isTasadororChiefEPDP(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();

exports.isTasadororChiefEPDP = isTasadororChiefEPDP;

var isTasador = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context17.sent;
            _context17.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context17.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context17.next = 14;
              break;
            }

            if (!(roles[i].name === 'Tasador')) {
              _context17.next = 11;
              break;
            }

            next();
            return _context17.abrupt("return");

          case 11:
            i++;
            _context17.next = 7;
            break;

          case 14:
            return _context17.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Tasador'
            }));

          case 15:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function isTasador(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();

exports.isTasador = isTasador;

var isChiefEPDP = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context18.sent;
            _context18.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context18.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context18.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Tasación')) {
              _context18.next = 11;
              break;
            }

            next();
            return _context18.abrupt("return");

          case 11:
            i++;
            _context18.next = 7;
            break;

          case 14:
            return _context18.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Jefe-EPDP'
            }));

          case 15:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function isChiefEPDP(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();

exports.isChiefEPDP = isChiefEPDP;

var isChiefEPDPorAdmin = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context19.sent;
            _context19.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context19.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context19.next = 14;
              break;
            }

            if (!(roles[i].name === 'Administrador' || roles[i].name === 'Jefe-EPDP')) {
              _context19.next = 11;
              break;
            }

            next();
            return _context19.abrupt("return");

          case 11:
            i++;
            _context19.next = 7;
            break;

          case 14:
            return _context19.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Jefe-EPDP'
            }));

          case 15:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function isChiefEPDPorAdmin(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

exports.isChiefEPDPorAdmin = isChiefEPDPorAdmin;

var isVendedor = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context20.sent;
            _context20.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context20.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context20.next = 14;
              break;
            }

            if (!(roles[i].name === 'Vendedor')) {
              _context20.next = 11;
              break;
            }

            next();
            return _context20.abrupt("return");

          case 11:
            i++;
            _context20.next = 7;
            break;

          case 14:
            return _context20.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Vendedor'
            }));

          case 15:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function isVendedor(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

exports.isVendedor = isVendedor;

var isExecutiveMaf = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context21.sent;
            _context21.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context21.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context21.next = 14;
              break;
            }

            if (!(roles[i].name === 'Ejecutivo-MAF')) {
              _context21.next = 11;
              break;
            }

            next();
            return _context21.abrupt("return");

          case 11:
            i++;
            _context21.next = 7;
            break;

          case 14:
            return _context21.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Ejecutivo MAF'
            }));

          case 15:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function isExecutiveMaf(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();

exports.isExecutiveMaf = isExecutiveMaf;

var isChiefADVOrChiefPlaneamientoOrAdministrador = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context22.sent;
            _context22.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context22.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context22.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Jefe-Planeamiento-Comercial' || roles[i].name === 'Administrador')) {
              _context22.next = 11;
              break;
            }

            next();
            return _context22.abrupt("return");

          case 11:
            i++;
            _context22.next = 7;
            break;

          case 14:
            return _context22.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV || Jefe-Planeamiento-Comercial || Administrador'
            }));

          case 15:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function isChiefADVOrChiefPlaneamientoOrAdministrador(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();

exports.isChiefADVOrChiefPlaneamientoOrAdministrador = isChiefADVOrChiefPlaneamientoOrAdministrador;

var isAdministradorOrAsistantComercial = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(req, res, next) {
    var user, roles, i;
    return _regenerator.default.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context23.sent;
            _context23.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context23.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context23.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Comercial' || roles[i].name === 'Administrador')) {
              _context23.next = 11;
              break;
            }

            next();
            return _context23.abrupt("return");

          case 11:
            i++;
            _context23.next = 7;
            break;

          case 14:
            return _context23.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Asistente Comercial || Administrador'
            }));

          case 15:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function isAdministradorOrAsistantComercial(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

exports.isAdministradorOrAsistantComercial = isAdministradorOrAsistantComercial;
//# sourceMappingURL=auth.jwt.js.map