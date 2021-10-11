"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRoleById = exports.updateRoleById = exports.getRolesById = exports.getCountAll = exports.getRoles = exports.createRole = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var createRole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, description, obj, query;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            _context.prev = 1;
            obj = new _Role.default({
              name: name,
              description: description
            });
            _context.next = 5;
            return obj.save();

          case 5:
            query = _context.sent;

            if (query) {
              res.json({
                message: 'Rol creado con éxito'
              });
            }

            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(503).json({
              message: _context.t0.message
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
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
            _context2.prev = 0;
            _context2.next = 3;
            return _Role.default.find().sort({
              name: 'asc'
            });

          case 3:
            roles = _context2.sent;

            if (!(roles.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json(roles);
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen Roles'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(503).json({
              message: _context2.t0.message
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getRoles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRoles = getRoles;

var getCountAll = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Role.default.countDocuments();

          case 3:
            query = _context3.sent;

            if (!(query >= 0)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.json({
              count_roles: query
            }));

          case 6:
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(503).json({
              message: _context3.t0.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getCountAll(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCountAll = getCountAll;

var getRolesById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var roleId, roles;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            roleId = req.params.roleId;
            _context4.prev = 1;
            _context4.next = 4;
            return _Role.default.findById(roleId);

          case 4:
            roles = _context4.sent;

            if (!roles) {
              _context4.next = 9;
              break;
            }

            res.json(roles);
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: 'No existe el Rol'
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(503).json({
              message: _context4.t0.message
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 12]]);
  }));

  return function getRolesById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getRolesById = getRolesById;

var updateRoleById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var roleId, _req$body2, name, description, updateRole;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            roleId = req.params.roleId;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description;
            _context5.prev = 2;
            _context5.next = 5;
            return _Role.default.findByIdAndUpdate(roleId, {
              name: name,
              description: description
            });

          case 5:
            updateRole = _context5.sent;

            if (updateRole) {
              res.json({
                message: 'Rol actualizado con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe el Rol a actualizar'
              });
            }

            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(503).json({
              message: _context5.t0.message
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));

  return function updateRoleById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateRoleById = updateRoleById;

var deleteRoleById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var roleId, deletedRole;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            roleId = req.params.roleId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Role.default.findByIdAndDelete(roleId);

          case 4:
            deletedRole = _context6.sent;

            if (!deletedRole) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Rol eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe el Rol a eliminar'
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(503).json({
              message: _context6.t0.message
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function deleteRoleById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteRoleById = deleteRoleById;
//# sourceMappingURL=roles.controller.js.map