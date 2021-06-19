"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExist = exports.checkDuplicateUsernameOrEmail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = require("../models/Role");

var _User = _interopRequireDefault(require("../models/User"));

var checkDuplicateUsernameOrEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var user, email;
    return _regenerator.default.wrap(function _callee$(_context) {
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
  //console.log(req.body.roles)
  if (req.body.roles) {
    for (var h = 0; h < req.body.roles.size; h++) {
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