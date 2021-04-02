"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.updateProfile = exports.updateUserById = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, username, email, name, password, sucursal, direccion, pais, codigo_postal, about, roles, activo, newUser, foundRoles, role, userSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, name = _req$body.name, password = _req$body.password, sucursal = _req$body.sucursal, direccion = _req$body.direccion, pais = _req$body.pais, codigo_postal = _req$body.codigo_postal, about = _req$body.about, roles = _req$body.roles, activo = _req$body.activo;
            _context.prev = 1;
            _context.t0 = _User.default;
            _context.t1 = username;
            _context.t2 = email;
            _context.t3 = name;
            _context.next = 8;
            return _User.default.encryptPassword(password);

          case 8:
            _context.t4 = _context.sent;
            _context.t5 = sucursal;
            _context.t6 = direccion;
            _context.t7 = pais;
            _context.t8 = codigo_postal;
            _context.t9 = about;
            _context.t10 = activo;
            _context.t11 = {
              username: _context.t1,
              email: _context.t2,
              name: _context.t3,
              password: _context.t4,
              sucursal: _context.t5,
              direccion: _context.t6,
              pais: _context.t7,
              codigo_postal: _context.t8,
              about: _context.t9,
              activo: _context.t10
            };
            newUser = new _context.t0(_context.t11);

            if (!roles) {
              _context.next = 24;
              break;
            }

            _context.next = 20;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 20:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 28;
            break;

          case 24:
            _context.next = 26;
            return _Role.default.findOne({
              name: "Usuario"
            });

          case 26:
            role = _context.sent;
            newUser.roles = [role._id];

          case 28:
            _context.next = 30;
            return newUser.save();

          case 30:
            userSaved = _context.sent;

            if (userSaved) {
              res.json({
                message: 'Usuario creado con éxito'
              });
            }

            _context.next = 38;
            break;

          case 34:
            _context.prev = 34;
            _context.t12 = _context["catch"](1);
            console.log(_context.t12);
            res.status(409).json({
              message: _context.t12.message
            });

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 34]]);
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
            }).populate('roles');

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
            res.status(409).json({
              message: _context2.t0.message
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
            return _User.default.findById(userId).populate('roles');

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
            res.status(409).json({
              message: _context3.t0.message
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
    var userId, _req$body2, username, email, name, sucursal, direccion, pais, codigo_postal, about, roles, activo, foundRoles, userFound;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = req.params.userId;
            _req$body2 = req.body, username = _req$body2.username, email = _req$body2.email, name = _req$body2.name, sucursal = _req$body2.sucursal, direccion = _req$body2.direccion, pais = _req$body2.pais, codigo_postal = _req$body2.codigo_postal, about = _req$body2.about, roles = _req$body2.roles, activo = _req$body2.activo;
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
              email: email,
              name: name,
              sucursal: sucursal,
              direccion: direccion,
              pais: pais,
              codigo_postal: codigo_postal,
              about: about,
              roles: foundRoles.map(function (role) {
                return role._id;
              }),
              activo: activo
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
            res.status(409).json({
              message: _context4.t0.message
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
    var _req$body3, email, direccion, pais, codigo_postal, about, userId, objeto;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, email = _req$body3.email, direccion = _req$body3.direccion, pais = _req$body3.pais, codigo_postal = _req$body3.codigo_postal, about = _req$body3.about;
            userId = req.params.userId;
            _context5.prev = 2;
            _context5.next = 5;
            return _User.default.findByIdAndUpdate(userId, {
              email: email,
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
            res.status(409).json({
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
            _context6.prev = 0;
            userId = req.params.userId;
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
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(409).json({
              message: _context6.t0.message
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));

  return function deleteUserById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;
//# sourceMappingURL=user.controller.js.map