"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countByOnline = exports.countAll = exports.deleteUserById = exports.updateProfile = exports.updateUserById = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, username, name, password, sucursal, roles, status, newUser, foundRoles, role, userSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, name = _req$body.name, password = _req$body.password, sucursal = _req$body.sucursal, roles = _req$body.roles, status = _req$body.status;
            _context.prev = 1;
            _context.t0 = _User.default;
            _context.t1 = username;
            _context.t2 = name;
            _context.next = 7;
            return _User.default.encryptPassword(password);

          case 7:
            _context.t3 = _context.sent;
            _context.t4 = sucursal;
            _context.t5 = status;
            _context.t6 = {
              username: _context.t1,
              name: _context.t2,
              password: _context.t3,
              sucursal: _context.t4,
              status: _context.t5
            };
            newUser = new _context.t0(_context.t6);

            if (!roles) {
              _context.next = 19;
              break;
            }

            _context.next = 15;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 15:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 23;
            break;

          case 19:
            _context.next = 21;
            return _Role.default.findOne({
              name: "Usuario"
            });

          case 21:
            role = _context.sent;
            newUser.roles = [role._id];

          case 23:
            _context.next = 25;
            return newUser.save();

          case 25:
            userSaved = _context.sent;

            if (userSaved) {
              res.json({
                message: 'Usuario creado con éxito'
              });
            }

            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t7 = _context["catch"](1);
            console.log(_context.t7);
            res.status(503).json({
              error: _context.t7
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 29]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var lista;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User.default.find().sort({
              name: 'asc'
            }).populate('roles', 'name');

          case 3:
            lista = _context2.sent;

            if (!(lista.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json(lista);
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen Usuarios'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(503).json({
              error: _context2.t0
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var userId, objeto;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = req.params.userId;
            _context3.prev = 1;
            _context3.next = 4;
            return _User.default.findById(userId).populate('roles', 'name');

          case 4:
            objeto = _context3.sent;

            if (!objeto) {
              _context3.next = 9;
              break;
            }

            res.json(objeto);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existe Usuario'
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(503).json({
              error: _context3.t0
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var updateUserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var userId, _req$body2, username, name, sucursal, roles, status, foundRoles, userFound;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = req.params.userId;
            _req$body2 = req.body, username = _req$body2.username, name = _req$body2.name, sucursal = _req$body2.sucursal, roles = _req$body2.roles, status = _req$body2.status;
            _context4.prev = 2;
            _context4.next = 5;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 5:
            foundRoles = _context4.sent;
            _context4.next = 8;
            return _User.default.findByIdAndUpdate(userId, {
              username: username,
              name: name,
              sucursal: sucursal,
              roles: foundRoles.map(function (role) {
                return role._id;
              }),
              status: status
            });

          case 8:
            userFound = _context4.sent;

            if (!userFound) {
              _context4.next = 13;
              break;
            }

            res.json({
              message: 'Usuario actualizado con éxito'
            });
            _context4.next = 14;
            break;

          case 13:
            return _context4.abrupt("return", res.status(404).json({
              messsage: 'No existe usuario a actualizar'
            }));

          case 14:
            _context4.next = 20;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(503).json({
              error: _context4.t0
            });

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 16]]);
  }));

  return function updateUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var updateProfile = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body3, email, phone, direccion, pais, codigo_postal, about, userId, objeto;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, email = _req$body3.email, phone = _req$body3.phone, direccion = _req$body3.direccion, pais = _req$body3.pais, codigo_postal = _req$body3.codigo_postal, about = _req$body3.about;
            userId = req.params.userId;
            _context5.prev = 2;
            _context5.next = 5;
            return _User.default.findByIdAndUpdate(userId, {
              email: email,
              phone: phone,
              direccion: direccion,
              pais: pais,
              codigo_postal: codigo_postal,
              about: about
            });

          case 5:
            objeto = _context5.sent;

            if (!objeto) {
              _context5.next = 10;
              break;
            }

            res.json({
              message: 'Actualización de Perfil con éxito'
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.json.status(404).json({
              message: 'No existe Perfil a modificar'
            }));

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(503).json({
              message: _context5.t0.message
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function updateProfile(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProfile = updateProfile;

var deleteUserById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var userId, deletedUser;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            userId = req.params.userId;
            _context6.prev = 1;
            _context6.next = 4;
            return _User.default.findByIdAndRemove(userId);

          case 4:
            deletedUser = _context6.sent;

            if (!deletedUser) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Usuario eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe usuario a eliminar'
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

  return function deleteUserById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;

var countAll = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _User.default.countDocuments();

          case 3:
            query = _context7.sent;

            if (!(query >= 0)) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", res.json({
              count_user: query
            }));

          case 6:
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.status(503).json({
              error: _context7.t0
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function countAll(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.countAll = countAll;

var countByOnline = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var online, query;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            online = req.body.online;
            _context8.prev = 1;
            _context8.next = 4;
            return _User.default.where({
              online: online
            }).find().countDocuments();

          case 4:
            query = _context8.sent;

            if (!(query >= 0)) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", res.json({
              count_onlines: query
            }));

          case 7:
            _context8.next = 13;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            res.status(503).json({
              error: _context8.t0
            });

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 9]]);
  }));

  return function countByOnline(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.countByOnline = countByOnline;
//# sourceMappingURL=user.controller.js.map