"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, newUser, foundRoles, role, userSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            _context.t0 = _User.default;
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 7;
            return _User.default.encryptPassword(password);

          case 7:
            _context.t3 = _context.sent;
            _context.t4 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 17;
              break;
            }

            _context.next = 13;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 13:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 21;
            break;

          case 17:
            _context.next = 19;
            return _Role.default.findOne({
              name: "user"
            });

          case 19:
            role = _context.sent;
            newUser.roles = [role._id];

          case 21:
            _context.next = 23;
            return newUser.save();

          case 23:
            userSaved = _context.sent;
            res.status(201).json(userSaved);
            _context.next = 30;
            break;

          case 27:
            _context.prev = 27;
            _context.t5 = _context["catch"](0);
            console.log(_context.t5);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 27]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User.default.find({}, function (err, users) {
              _Role.default.populate(users, {
                path: "roles"
              }, function (err, users) {
                res.status(200).send(users);
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, username, email, password, roles, foundRoles, userFound;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, email = _req$body2.email, password = _req$body2.password, roles = _req$body2.roles;
            _context4.next = 3;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 3:
            foundRoles = _context4.sent;
            _context4.t0 = _User.default;
            _context4.t1 = req.params.userId;
            _context4.t2 = username;
            _context4.t3 = email;
            _context4.next = 10;
            return _User.default.encryptPassword(password);

          case 10:
            _context4.t4 = _context4.sent;
            _context4.t5 = foundRoles.map(function (role) {
              return role._id;
            });
            _context4.t6 = {
              username: _context4.t2,
              email: _context4.t3,
              password: _context4.t4,
              roles: _context4.t5
            };
            _context4.t7 = {
              new: true
            };
            _context4.next = 16;
            return _context4.t0.findByIdAndUpdate.call(_context4.t0, _context4.t1, _context4.t6, _context4.t7);

          case 16:
            userFound = _context4.sent;
            res.status(200).json(userFound);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var userId, deletedUser;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            userId = req.params.userId;
            _context5.next = 3;
            return _User.default.findByIdAndRemove(userId);

          case 3:
            deletedUser = _context5.sent;
            res.status(200).json({
              message: 'User Removed'
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