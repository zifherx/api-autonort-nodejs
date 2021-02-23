"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserAdmin = exports.createRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _User = _interopRequireDefault(require("../models/User"));

var createRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var count, values;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role.default.estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Role.default({
              name: 'Aministrador'
            }).save(), new _Role.default({
              name: 'Jefe-ADV'
            }).save(), new _Role.default({
              name: 'Jefe-Tunning'
            }).save(), new _Role.default({
              name: 'Jefe-Ventas'
            }).save(), new _Role.default({
              name: 'Usuario'
            }).save(), new _Role.default({
              name: 'Vendedor'
            }).save()]);

          case 8:
            values = _context.sent;
            console.log(values);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createUserAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var master, usuarios;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User.default.estimatedDocumentCount();

          case 3:
            master = _context2.sent;

            if (!(master > 0)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            _context2.t0 = Promise;
            _context2.t1 = _User.default;
            _context2.next = 10;
            return _User.default.encryptPassword(password);

          case 10:
            _context2.t2 = _context2.sent;
            _context2.t3 = {
              name: 'Fernando Rojas Quezada',
              username: 'frojasq',
              password: _context2.t2,
              activo: 'Activo'
            };
            _context2.t4 = new _context2.t1(_context2.t3).save();
            _context2.t5 = [_context2.t4];
            _context2.next = 16;
            return _context2.t0.all.call(_context2.t0, _context2.t5);

          case 16:
            usuarios = _context2.sent;
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t6 = _context2["catch"](0);
            console.error(_context2.t6);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 19]]);
  }));

  return function createUserAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUserAdmin = createUserAdmin;
//# sourceMappingURL=initialSetup.js.map