"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Permiso = _interopRequireDefault(require("../models/Permiso"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _SubmoduloG = _interopRequireDefault(require("../models/SubmoduloG"));

var permisoController = {};

permisoController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Permiso.default.find().sort({
              cod_interno: 1
            }).populate({
              path: 'submoduloG',
              select: 'name estado moduloG',
              populate: {
                path: 'moduloG',
                select: 'name icon menuG',
                populate: {
                  path: 'menuG',
                  select: 'name icon'
                }
              }
            }).populate({
              path: 'rolesPermitidos',
              select: 'name descripcion'
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: 'No existen permisos'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

permisoController.findBySubmodule = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var submodulo, submoduloFound, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            submodulo = req.body.submodulo;
            _context2.prev = 1;
            _context2.next = 4;
            return _SubmoduloG.default.findOne({
              name: submodulo
            });

          case 4:
            submoduloFound = _context2.sent;

            if (submoduloFound) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Subm\xF3dulo ".concat(submodulo, " no encontrado")
            }));

          case 7:
            _context2.next = 9;
            return _Permiso.default.findOne({
              submoduloG: submoduloFound._id
            }).populate({
              path: 'submoduloG',
              select: 'name'
            }).populate({
              path: 'rolesPermitidos',
              select: 'name descripcion'
            });

          case 9:
            query = _context2.sent;

            if (!query) {
              _context2.next = 14;
              break;
            }

            res.json({
              total: query.length,
              one: query
            });
            _context2.next = 15;
            break;

          case 14:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen permisos'
            }));

          case 15:
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 17]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

permisoController.createOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, cod_interno, submoduloG, rolesPermitidos, estado, obj, submoduleFound, roleFound, query;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cod_interno = _req$body.cod_interno, submoduloG = _req$body.submoduloG, rolesPermitidos = _req$body.rolesPermitidos, estado = _req$body.estado;
            _context3.prev = 1;
            obj = new _Permiso.default({
              cod_interno: cod_interno,
              estado: estado
            });
            _context3.next = 5;
            return _SubmoduloG.default.findOne({
              name: submoduloG
            });

          case 5:
            submoduleFound = _context3.sent;

            if (submoduleFound) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Subm\xF3dulo ".concat(submoduloG, " no encontrado")
            }));

          case 8:
            obj.submoduloG = submoduleFound._id;
            _context3.next = 11;
            return _Role.default.find({
              name: {
                $in: rolesPermitidos
              }
            });

          case 11:
            roleFound = _context3.sent;

            if (roleFound) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Rol ".concat(rolesPermitidos, " no encontrado")
            }));

          case 14:
            obj.rolesPermitidos = roleFound.map(function (a) {
              return a.id;
            });
            _context3.next = 17;
            return obj.save();

          case 17:
            query = _context3.sent;

            if (query) {
              res.json({
                message: 'Permiso creado con éxito'
              });
            }

            _context3.next = 25;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 21]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

permisoController.updateOneById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body2, cod_interno, submoduloG, rolesPermitidos, estado, permisoId, roleFound, subModuleFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, cod_interno = _req$body2.cod_interno, submoduloG = _req$body2.submoduloG, rolesPermitidos = _req$body2.rolesPermitidos, estado = _req$body2.estado;
            permisoId = req.params.permisoId;
            _context4.prev = 2;
            _context4.next = 5;
            return _Role.default.find({
              name: {
                $in: rolesPermitidos
              }
            });

          case 5:
            roleFound = _context4.sent;

            if (roleFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "No se encontr\xF3 el rol ".concat(rolesPermitidos)
            }));

          case 8:
            _context4.next = 10;
            return _SubmoduloG.default.findOne({
              name: submoduloG
            });

          case 10:
            subModuleFound = _context4.sent;

            if (subModuleFound) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Subm\xF3dulo ".concat(submoduloG, " no encontrado")
            }));

          case 13:
            _context4.next = 15;
            return _Permiso.default.findByIdAndUpdate(permisoId, {
              cod_interno: cod_interno,
              submoduloG: subModuleFound._id,
              estado: estado,
              rolesPermitidos: roleFound.map(function (a) {
                return a._id;
              })
            });

          case 15:
            query = _context4.sent;

            if (!query) {
              _context4.next = 20;
              break;
            }

            res.json({
              message: 'Permiso actualizado con éxito'
            });
            _context4.next = 21;
            break;

          case 20:
            return _context4.abrupt("return", res.status(404).json({
              message: 'No existe permiso a actualizar'
            }));

          case 21:
            _context4.next = 27;
            break;

          case 23:
            _context4.prev = 23;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 27:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 23]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

permisoController.deleteOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var permisoId, query;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            permisoId = req.params.permisoId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Permiso.default.findByIdAndDelete(permisoId);

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: 'Permiso eliminado con éxito'
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe permiso a eliminar'
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 12]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = permisoController;
exports.default = _default;
//# sourceMappingURL=permiso.controller.js.map