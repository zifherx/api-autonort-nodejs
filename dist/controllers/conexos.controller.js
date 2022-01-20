"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateConexo = exports.obtenerAsesorxSucursal = exports.obtenerAsesorxArea = exports.obtenerAsesorByName = exports.getConexos = exports.getConexoById = exports.getConexoByActivo = exports.deleteConexo = exports.createConexo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Conexos = _interopRequireDefault(require("../models/Conexos"));

var _User = _interopRequireDefault(require("../models/User"));

var getConexos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Conexos.default.find().sort({
              name: 'asc'
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json(query);
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: 'No existen Asesores de Conexos'
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

  return function getConexos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getConexos = getConexos;

var getConexoByActivo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Conexos.default.find({
              status: true
            }).sort({
              name: 'asc'
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json(query);
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existen Asesores Activos'
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

  return function getConexoByActivo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getConexoByActivo = getConexoByActivo;

var getConexoById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var conexoId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            conexoId = req.params.conexoId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Conexos.default.findById(conexoId);

          case 4:
            query = _context3.sent;

            if (!query) {
              _context3.next = 9;
              break;
            }

            res.json(query);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: 'No existe el Asesor'
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

  return function getConexoById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getConexoById = getConexoById;

var createConexo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, name, email, area, sucursal, encargadoDe, status, createdBy, newObj, userFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, area = _req$body.area, sucursal = _req$body.sucursal, encargadoDe = _req$body.encargadoDe, status = _req$body.status, createdBy = _req$body.createdBy;
            _context4.prev = 1;
            newObj = new _Conexos.default({
              name: name,
              email: email,
              area: area,
              sucursal: sucursal,
              encargadoDe: encargadoDe,
              status: status
            });
            _context4.next = 5;
            return _User.default.find({
              username: {
                $in: createdBy
              }
            });

          case 5:
            userFound = _context4.sent;
            newObj.createdBy = userFound.map(function (a) {
              return a._id;
            });
            _context4.next = 9;
            return newObj.save();

          case 9:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Asesor creado con éxito'
              });
            }

            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 13]]);
  }));

  return function createConexo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createConexo = createConexo;

var updateConexo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, name, email, area, sucursal, encargadoDe, status, conexoId, newObj;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, area = _req$body2.area, sucursal = _req$body2.sucursal, encargadoDe = _req$body2.encargadoDe, status = _req$body2.status;
            conexoId = req.params.conexoId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Conexos.default.findByIdAndUpdate(conexoId, {
              name: name,
              email: email,
              area: area,
              sucursal: sucursal,
              encargadoDe: encargadoDe,
              status: status
            });

          case 5:
            newObj = _context5.sent;

            if (!newObj) {
              _context5.next = 10;
              break;
            }

            res.json({
              message: 'Asesor actualizado con éxito'
            });
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.json(404).json({
              message: 'No existe Asesor a actualizar'
            }));

          case 11:
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  }));

  return function updateConexo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateConexo = updateConexo;

var deleteConexo = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var conexoId, newObj;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            conexoId = req.params.conexoId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Conexos.default.findByIdAndDelete(conexoId);

          case 4:
            newObj = _context6.sent;

            if (!newObj) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Asesor eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.json(404).json({
              message: 'No existe Asesor a eliminar'
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

  return function deleteConexo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteConexo = deleteConexo;

var obtenerAsesorxSucursal = /*#__PURE__*/function () {
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
            });

          case 4:
            query = _context7.sent;

            if (!query) {
              _context7.next = 9;
              break;
            }

            res.json({
              asesor: query
            });
            _context7.next = 10;
            break;

          case 9:
            return _context7.abrupt("return", res.status(404).json({
              message: 'No se encontraron asesores'
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

  return function obtenerAsesorxSucursal(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.obtenerAsesorxSucursal = obtenerAsesorxSucursal;

var obtenerAsesorxArea = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var area, query;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            area = req.body.area;
            _context8.prev = 1;
            _context8.next = 4;
            return _Conexos.default.find({
              area: area,
              status: true
            });

          case 4:
            query = _context8.sent;

            if (!query) {
              _context8.next = 9;
              break;
            }

            res.json({
              asesores: query
            });
            _context8.next = 10;
            break;

          case 9:
            return _context8.abrupt("return", res.status(404).json({
              message: 'No se encontraron asesores'
            }));

          case 10:
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 12]]);
  }));

  return function obtenerAsesorxArea(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.obtenerAsesorxArea = obtenerAsesorxArea;

var obtenerAsesorByName = /*#__PURE__*/function () {
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
            }).select('name email area sucursal encargadoDe');

          case 4:
            query = _context9.sent;

            if (!query) {
              _context9.next = 9;
              break;
            }

            res.json({
              asesor: query
            });
            _context9.next = 10;
            break;

          case 9:
            return _context9.abrupt("return", res.status(404).json({
              message: 'No se encontraron asesores'
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

  return function obtenerAsesorByName(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.obtenerAsesorByName = obtenerAsesorByName;
//# sourceMappingURL=conexos.controller.js.map