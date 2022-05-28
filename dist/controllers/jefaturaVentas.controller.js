"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _JefaturaVentas = _interopRequireDefault(require("../models/JefaturaVentas"));

var _User = _interopRequireDefault(require("../models/User"));

var _Area = _interopRequireDefault(require("../models/Area"));

var _MarcaTasaciones = _interopRequireDefault(require("../models/MarcaTasaciones"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var jefaturaCtrl = {};

jefaturaCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _JefaturaVentas.default.find().populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'marcaE',
              select: 'name avatar'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'createdBy',
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
              message: 'No existen jefes'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
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

jefaturaCtrl.getAllActivos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _JefaturaVentas.default.find({
              estado: true
            }).populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'marcaE',
              select: 'name avatar'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'createdBy',
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
              message: 'No existen jefes'
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
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

jefaturaCtrl.getOneById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var jefaturaId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            jefaturaId = req.params.jefaturaId;
            _context3.prev = 1;
            _context3.next = 4;
            return _JefaturaVentas.default.findById(jefaturaId).populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'marcaE',
              select: 'name avatar'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'createdBy',
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
              message: 'No existe el Jefe'
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);
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

jefaturaCtrl.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, email, areaE, marcaE, sucursalE, encargadoDe, estado, createdBy, newObj, userFound, areaFound, marcaFound, sucursalFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, areaE = _req$body.areaE, marcaE = _req$body.marcaE, sucursalE = _req$body.sucursalE, encargadoDe = _req$body.encargadoDe, estado = _req$body.estado, createdBy = _req$body.createdBy;
            _context4.prev = 1;
            newObj = new _JefaturaVentas.default({
              name: name,
              email: email,
              encargadoDe: encargadoDe,
              estado: estado
            });
            _context4.next = 5;
            return _User.default.findOne({
              username: createdBy
            });

          case 5:
            userFound = _context4.sent;

            if (userFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "No existe el usuario ".concat(createdBy)
            }));

          case 8:
            newObj.createdBy = userFound._id;
            _context4.next = 11;
            return _Area.default.findOne({
              name: areaE
            });

          case 11:
            areaFound = _context4.sent;

            if (areaFound) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "No existe el area ".concat(areaE)
            }));

          case 14:
            newObj.areaE = areaFound._id;
            _context4.next = 17;
            return _MarcaTasaciones.default.findOne({
              name: marcaE
            });

          case 17:
            marcaFound = _context4.sent;

            if (marcaFound) {
              _context4.next = 20;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "No existe la marca ".concat(marcaE)
            }));

          case 20:
            newObj.marcaE = marcaFound._id;
            _context4.next = 23;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 23:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 26;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "No existe la sucursal ".concat(sucursalE)
            }));

          case 26:
            newObj.sucursalE = sucursalFound._id;
            _context4.next = 29;
            return newObj.save();

          case 29:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Jefe creado con éxito'
              });
            }

            _context4.next = 37;
            break;

          case 33:
            _context4.prev = 33;
            _context4.t0 = _context4["catch"](1);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 37:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 33]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

jefaturaCtrl.updateById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var jefaturaId, _req$body2, name, email, areaE, marcaE, sucursalE, encargadoDe, estado, areaFound, marcaFound, sucursalFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            jefaturaId = req.params.jefaturaId;
            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, areaE = _req$body2.areaE, marcaE = _req$body2.marcaE, sucursalE = _req$body2.sucursalE, encargadoDe = _req$body2.encargadoDe, estado = _req$body2.estado;
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
              message: "No existe el area ".concat(areaE)
            }));

          case 8:
            _context5.next = 10;
            return _MarcaTasaciones.default.findOne({
              name: marcaE
            });

          case 10:
            marcaFound = _context5.sent;

            if (marcaFound) {
              _context5.next = 13;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "No existe la marca ".concat(marcaE)
            }));

          case 13:
            _context5.next = 15;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 15:
            sucursalFound = _context5.sent;

            if (sucursalFound) {
              _context5.next = 18;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "No existe la sucursal ".concat(sucursalE)
            }));

          case 18:
            _context5.next = 20;
            return _JefaturaVentas.default.findByIdAndUpdate(jefaturaId, {
              name: name,
              email: email,
              areaE: areaFound._id,
              marcaE: marcaFound._id,
              sucursalE: sucursalFound._id,
              encargadoDe: encargadoDe,
              estado: estado
            });

          case 20:
            query = _context5.sent;

            if (!query) {
              _context5.next = 25;
              break;
            }

            res.json({
              message: 'Jefe actualizado con éxito'
            });
            _context5.next = 26;
            break;

          case 25:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe Jefe a actualizar'
            }));

          case 26:
            _context5.next = 31;
            break;

          case 28:
            _context5.prev = 28;
            _context5.t0 = _context5["catch"](2);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 31:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 28]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

jefaturaCtrl.deleteById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var jefaturaId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            jefaturaId = req.params.jefaturaId;
            _context6.prev = 1;
            _context6.next = 4;
            return _JefaturaVentas.default.findByIdAndDelete(jefaturaId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Jefe eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe Jefe a eliminar'
            }));

          case 10:
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 15:
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

jefaturaCtrl.obtenerJefexSucursal = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body3, areaE, marcaE, sucursal, areaFound, marcaFound, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, areaE = _req$body3.areaE, marcaE = _req$body3.marcaE, sucursal = _req$body3.sucursal;
            _context7.prev = 1;
            _context7.next = 4;
            return _Area.default.findOne({
              name: areaE
            });

          case 4:
            areaFound = _context7.sent;

            if (areaFound) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "No existe el area ".concat(areaE)
            }));

          case 7:
            _context7.next = 9;
            return _MarcaTasaciones.default.findOne({
              name: marcaE
            });

          case 9:
            marcaFound = _context7.sent;

            if (marcaFound) {
              _context7.next = 12;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "No existe la marca ".concat(marcaE)
            }));

          case 12:
            _context7.next = 14;
            return _JefaturaVentas.default.findOne({
              areaE: areaFound._id,
              marcaE: marcaFound._id,
              encargadoDe: {
                $in: sucursal
              },
              estado: true
            }).select('name email areaE marcaE sucursalE encargadoDe area marca sucursal').populate({
              path: 'areaE',
              select: 'name'
            }).populate({
              path: 'marcaE',
              select: 'name'
            }).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 14:
            query = _context7.sent;

            if (!query) {
              _context7.next = 19;
              break;
            }

            res.json({
              one: query
            });
            _context7.next = 20;
            break;

          case 19:
            return _context7.abrupt("return", res.status(404).json({
              message: 'No se encontraron asesores'
            }));

          case 20:
            _context7.next = 26;
            break;

          case 22:
            _context7.prev = 22;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 26:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 22]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var _default = jefaturaCtrl;
exports.default = _default;
//# sourceMappingURL=jefaturaVentas.controller.js.map