"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Area = _interopRequireDefault(require("../models/Area"));

var _Conexos = _interopRequireDefault(require("../models/Conexos"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _User = _interopRequireDefault(require("../models/User"));

var conexosController = {};

conexosController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Conexos.default.find().sort({
              name: 1
            }).populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'sucursalE',
              select: 'name'
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
              message: "No existen asesores de conexos"
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

conexosController.getAllActivos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Conexos.default.find({
              estado: true
            }).sort({
              name: 1
            }).populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json({
              total_active: query.length,
              all_active: query
            });
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existen asesores activos"
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

conexosController.getOneById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var conexoId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            conexoId = req.params.conexoId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Conexos.default.findById(conexoId).populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 4:
            query = _context3.sent;

            if (!query) {
              _context3.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existe el Asesor"
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

conexosController.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, email, areaE, sucursalE, encargadoDe, estado, createdBy, newObj, areaFound, sucursalFound, userFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, areaE = _req$body.areaE, sucursalE = _req$body.sucursalE, encargadoDe = _req$body.encargadoDe, estado = _req$body.estado, createdBy = _req$body.createdBy;
            _context4.prev = 1;
            newObj = new _Conexos.default({
              name: name,
              email: email,
              encargadoDe: encargadoDe,
              estado: estado
            });
            _context4.next = 5;
            return _Area.default.findOne({
              name: areaE
            });

          case 5:
            areaFound = _context4.sent;

            if (areaFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Area ".concat(areaE, " no encontrada")
            }));

          case 8:
            newObj.areaE = areaFound._id;
            _context4.next = 11;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 11:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 14:
            newObj.sucursalE = sucursalFound._id;
            _context4.next = 17;
            return _User.default.findOne({
              username: createdBy
            });

          case 17:
            userFound = _context4.sent;
            newObj.createdBy = userFound._id;
            _context4.next = 21;
            return newObj.save();

          case 21:
            query = _context4.sent;

            if (query) {
              res.json({
                message: "Asesor creado con éxito"
              });
            }

            _context4.next = 29;
            break;

          case 25:
            _context4.prev = 25;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 25]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

conexosController.updateOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, email, areaE, sucursalE, encargadoDe, estado, conexoId, areaFound, sucursalFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, areaE = _req$body2.areaE, sucursalE = _req$body2.sucursalE, encargadoDe = _req$body2.encargadoDe, estado = _req$body2.estado;
            conexoId = req.params.conexoId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Area.default.findOne({
              name: areaE
            });

          case 5:
            areaFound = _context5.sent;

            if (areaFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Area ".concat(areaE, " no encontrada")
            }));

          case 8:
            _context5.next = 10;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 10:
            sucursalFound = _context5.sent;

            if (sucursalFound) {
              _context5.next = 13;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 13:
            _context5.next = 15;
            return _Conexos.default.findByIdAndUpdate(conexoId, {
              name: name,
              email: email,
              areaE: areaFound._id,
              sucursalE: sucursalFound._id,
              encargadoDe: encargadoDe,
              estado: estado
            });

          case 15:
            query = _context5.sent;

            if (!query) {
              _context5.next = 20;
              break;
            }

            res.json({
              message: "Asesor actualizado con éxito"
            });
            _context5.next = 21;
            break;

          case 20:
            return _context5.abrupt("return", res.json(404).json({
              message: "No existe Asesor a actualizar"
            }));

          case 21:
            _context5.next = 27;
            break;

          case 23:
            _context5.prev = 23;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 27:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 23]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

conexosController.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var conexoId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            conexoId = req.params.conexoId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Conexos.default.findByIdAndDelete(conexoId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: "Asesor eliminado con éxito"
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.json(404).json({
              message: "No existe Asesor a eliminar"
            }));

          case 10:
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 12]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

conexosController.getAsesorxSucursalyArea = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body3, sucursal, area, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, sucursal = _req$body3.sucursal, area = _req$body3.area;
            _context7.prev = 1;
            _context7.next = 4;
            return _Conexos.default.findOne({
              area: area,
              encargadoDe: {
                $in: sucursal
              },
              status: true
            }).populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'createdBy',
              select: 'name username'
            });

          case 4:
            query = _context7.sent;

            if (!query) {
              _context7.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context7.next = 10;
            break;

          case 9:
            return _context7.abrupt("return", res.status(404).json({
              message: "No se encontraron asesores"
            }));

          case 10:
            _context7.next = 16;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 12]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

conexosController.getAsesoresxArea = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var areaE, areaFound, query;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            areaE = req.body.areaE;
            _context8.prev = 1;
            _context8.next = 4;
            return _Area.default.findOne({
              name: areaE
            });

          case 4:
            areaFound = _context8.sent;

            if (areaFound) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", res.status(404).json({
              message: "Area ".concat(areaE, " no encontrada")
            }));

          case 7:
            _context8.next = 9;
            return _Conexos.default.find({
              areaE: areaFound._id,
              estado: true
            });

          case 9:
            query = _context8.sent;

            if (!query) {
              _context8.next = 14;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context8.next = 15;
            break;

          case 14:
            return _context8.abrupt("return", res.status(404).json({
              message: "No se encontraron asesores"
            }));

          case 15:
            _context8.next = 21;
            break;

          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 21:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 17]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

conexosController.getAsesorByName = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var name, query;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            name = req.body.name;
            _context9.prev = 1;
            _context9.next = 4;
            return _Conexos.default.findOne({
              name: name
            }).select("name email areaE sucursalE encargadoDe").populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 4:
            query = _context9.sent;

            if (!query) {
              _context9.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context9.next = 10;
            break;

          case 9:
            return _context9.abrupt("return", res.status(404).json({
              message: "No se encontraron asesores"
            }));

          case 10:
            _context9.next = 16;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 12]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

var _default = conexosController;
exports.default = _default;
//# sourceMappingURL=conexos.controller.js.map