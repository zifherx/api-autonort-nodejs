"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExist = exports.checkDuplicateUsernameOrEmail = void 0;

var _Role = require("../models/Role");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkDuplicateUsernameOrEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var user, email;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User.default.findOne({
              username: req.body.username
            });

          case 2:
            user = _context.sent;

            if (!user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'El usuario ya existe'
            }));

          case 5:
            _context.next = 7;
            return _User.default.findOne({
              email: req.body.email
            });

          case 7:
            email = _context.sent;

            if (!email) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'El email ya existe'
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkDuplicateUsernameOrEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicateUsernameOrEmail = checkDuplicateUsernameOrEmail;

var checkRolesExist = function checkRolesExist(req, res, next) {
  if (req.body.roles) {
    for (var h = 0; h < req.body.roles.length; h++) {
      if (!_Role.ROLES.includes(req.body.roles[h])) {
        return res.status(400).json({
          message: "Rol ".concat(req.body.roles[h], " no existe")
        });
      }
    }
  }

  next();
};

exports.checkRolesExist = checkRolesExist;
//# sourceMappingURL=verifySignup.js.map