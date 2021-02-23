"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRoleById = exports.updateRoleById = exports.getRolesById = exports.getRoles = exports.createRole = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var createRole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, description, newRole, roleSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            newRole = new _Role.default({
              name: name,
              description: description
            });
            _context.next = 4;
            return newRole.save();

          case 4:
            roleSaved = _context.sent;
            res.json({
              message: 'Rol creado con éxito'
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRole = createRole;

var getRoles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var roles;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Role.default.find();

          case 2:
            roles = _context2.sent;
            res.status(200).json(roles);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getRoles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRoles = getRoles;

var getRolesById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var roles;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Role.default.findById(req.params.roleId);

          case 2:
            roles = _context3.sent;
            res.status(200).json(roles);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getRolesById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRolesById = getRolesById;

var updateRoleById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var roleId, _req$body2, name, description, updateRole;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            roleId = req.params.roleId;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description;
            _context4.prev = 2;
            _context4.next = 5;
            return _Role.default.findByIdAndUpdate(roleId, {
              name: name,
              description: description
            }, {
              new: true
            });

          case 5:
            updateRole = _context4.sent;

            if (updateRole) {
              res.json({
                message: 'Rol actualizado con éxito'
              });
            } else {
              res.status(403).json({
                message: 'No Autorizado'
              });
            }

            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.error(_context4.t0); //res.status(404).json(err)

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));

  return function updateRoleById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateRoleById = updateRoleById;

var deleteRoleById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var roleId, deletedRole;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            roleId = req.params.roleId;
            _context5.next = 3;
            return _Role.default.findByIdAndRemove(roleId);

          case 3:
            deletedRole = _context5.sent;
            res.json({
              message: 'Rol eliminado con éxito'
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteRoleById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteRoleById = deleteRoleById;
//# sourceMappingURL=roles.controller.js.map