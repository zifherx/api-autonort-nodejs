"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.getUsers = exports.createUser = void 0;

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
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, email = _req$body.email, name = _req$body.name, password = _req$body.password, sucursal = _req$body.sucursal, direccion = _req$body.direccion, pais = _req$body.pais, codigo_postal = _req$body.codigo_postal, about = _req$body.about, roles = _req$body.roles, activo = _req$body.activo;
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
            res.json({
              message: 'Usuario creado con éxito'
            });
            _context.next = 38;
            break;

          case 34:
            _context.prev = 34;
            _context.t12 = _context["catch"](0);
            console.log(_context.t12);
            return _context.abrupt("return", res.status(404).json({
              message: 'Error'
            }));

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 34]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User.default.find({}, function (err, users) {
              _Role.default.populate(users, {
                path: "roles"
              }, function (err, users) {
                res.send(users);
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User.default.findById(req.params.userId, function (err, user) {
              _Role.default.populate(user, {
                path: "roles"
              }, function (err, user) {
                res.status(200).json(user);
              });
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var updateUserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body2, username, email, name, sucursal, direccion, pais, codigo_postal, about, roles, activo, foundRoles, userFound;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, email = _req$body2.email, name = _req$body2.name, sucursal = _req$body2.sucursal, direccion = _req$body2.direccion, pais = _req$body2.pais, codigo_postal = _req$body2.codigo_postal, about = _req$body2.about, roles = _req$body2.roles, activo = _req$body2.activo;
            _context4.prev = 1;
            _context4.next = 4;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 4:
            foundRoles = _context4.sent;
            _context4.next = 7;
            return _User.default.findByIdAndUpdate(req.params.userId, {
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
            }, {
              new: true
            });

          case 7:
            userFound = _context4.sent;
            //res.status(200).json(userFound);
            res.json({
              message: 'Usuario actualizado con éxito'
            });
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(401).json({
              message: 'Error en la consulta'
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));

  return function updateUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var userId, deletedUser;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            userId = req.params.userId;
            _context5.next = 3;
            return _User.default.findByIdAndRemove(userId);

          case 3:
            deletedUser = _context5.sent;
            res.json({
              message: 'Usuario eliminado con éxito'
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUserById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;
//# sourceMappingURL=user.controller.js.map