"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AServicios = _interopRequireDefault(require("../models/AServicios"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var serviciosCtrl = {};

serviciosCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _AServicios.default.find().sort({
              name: 1
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
              message: 'No existen Asesores de Servicios'
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

serviciosCtrl.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var asesorId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            asesorId = req.params.asesorId;
            _context2.prev = 1;
            _context2.next = 4;
            return _AServicios.default.findById(asesorId).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existe el Asesor de Servicio'
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

serviciosCtrl.getAllByActivo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _AServicios.default.find({
              estado: true
            }).sort({
              name: 1
            }).populate({
              path: 'sucursalE',
              select: 'name'
            });

          case 3:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 8;
              break;
            }

            res.json({
              total_active: query.length,
              all_active: query
            });
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No hay Asesores de Servicios Activos'
            }));

          case 9:
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

serviciosCtrl.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, document, cellphone, email, sucursalE, estado, avatar, obj, sucursalFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, document = _req$body.document, cellphone = _req$body.cellphone, email = _req$body.email, sucursalE = _req$body.sucursalE, estado = _req$body.estado;
            avatar = req.file;
            _context4.prev = 2;
            obj = null;
            _context4.next = 6;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 6:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 9:
            if (avatar == null || avatar == undefined) {
              obj = new _AServicios.default({
                name: name,
                document: document,
                cellphone: cellphone,
                email: email,
                sucursalE: sucursalFound._id,
                estado: estado
              });
            } else {
              obj = new _AServicios.default({
                name: name,
                document: document,
                cellphone: cellphone,
                email: email,
                sucursalE: sucursalFound._id,
                estado: estado,
                avatar: avatar.location
              });
            }

            _context4.next = 12;
            return obj.save();

          case 12:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Asesor de Servicio creado con éxito'
              });
            }

            _context4.next = 20;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 16]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

serviciosCtrl.updatedOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, document, cellphone, email, sucursalE, estado, asesorId, avatar, query, sucursalFound;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, document = _req$body2.document, cellphone = _req$body2.cellphone, email = _req$body2.email, sucursalE = _req$body2.sucursalE, estado = _req$body2.estado;
            asesorId = req.params.asesorId;
            avatar = req.file;
            _context5.prev = 3;
            query = null;
            _context5.next = 7;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 7:
            sucursalFound = _context5.sent;

            if (sucursalFound) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 10:
            if (!(avatar == undefined || avatar == null)) {
              _context5.next = 16;
              break;
            }

            _context5.next = 13;
            return _AServicios.default.findByIdAndUpdate(asesorId, {
              name: name,
              document: document,
              cellphone: cellphone,
              email: email,
              sucursalE: sucursalFound._id,
              estado: estado
            });

          case 13:
            query = _context5.sent;
            _context5.next = 19;
            break;

          case 16:
            _context5.next = 18;
            return _AServicios.default.findByIdAndUpdate(asesorId, {
              name: name,
              document: document,
              cellphone: cellphone,
              email: email,
              sucursalE: sucursalFound._id,
              estado: estado,
              avatar: avatar.location
            });

          case 18:
            query = _context5.sent;

          case 19:
            if (!query) {
              _context5.next = 23;
              break;
            }

            res.json({
              message: 'Asesor de Servicio actualizado con éxito'
            });
            _context5.next = 24;
            break;

          case 23:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe el Asesor de Servicio a actualizar'
            }));

          case 24:
            _context5.next = 30;
            break;

          case 26:
            _context5.prev = 26;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 30:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 26]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

serviciosCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var asesorId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            asesorId = req.params.asesorId;
            _context6.prev = 1;
            _context6.next = 4;
            return _AServicios.default.findByIdAndDelete(asesorId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Asesor de Servicio eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe el Asesor de Servicio a eliminar'
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

serviciosCtrl.getBySucursal = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var sucursalE, sucursalFound, query;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            sucursalE = req.body.sucursalE;
            _context7.prev = 1;
            _context7.next = 4;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 4:
            sucursalFound = _context7.sent;

            if (sucursalFound) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 7:
            _context7.next = 9;
            return _AServicios.default.find({
              sucursalE: sucursalFound._id,
              estado: true
            }).sort({
              name: 1
            });

          case 9:
            query = _context7.sent;

            if (!(query.length > 0)) {
              _context7.next = 14;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context7.next = 15;
            break;

          case 14:
            return _context7.abrupt("return", res.status(404).json({
              message: "No Existen Asesores de Servicios en ".concat(sucursal)
            }));

          case 15:
            _context7.next = 21;
            break;

          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 17]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var _default = serviciosCtrl;
exports.default = _default;
//# sourceMappingURL=aservicios.controller.js.map