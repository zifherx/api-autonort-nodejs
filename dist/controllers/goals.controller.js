"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMeta = exports.updateMeta = exports.createMeta = exports.getMetaById = exports.getMetaByActivo = exports.getMetas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Goal = _interopRequireDefault(require("../models/Goal"));

var _User = _interopRequireDefault(require("../models/User"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var getMetas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Goal.default.find().populate('vendedor empleado').sort({
              mes: 'asc'
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
              message: 'No existen Metas'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(409).json({
              message: _context.t0.message
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getMetas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMetas = getMetas;

var getMetaByActivo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Goal.default.find({
              status: 'Activo'
            }).populate('vendedor empleado').sort({
              name: 'asc'
            });

          case 3:
            query = _context2.sent;

            if (query.length > 0) {
              res.json(query);
            } else {
              res.status(404).json({
                message: 'No existen Metas Activas'
              });
            }

            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(409).json({
              message: _context2.t0.message
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getMetaByActivo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMetaByActivo = getMetaByActivo;

var getMetaById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var metaId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            metaId = req.params.metaId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Goal.default.findById(metaId).populate('vendedor empleado');

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
              message: 'No existe Meta'
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

  return function getMetaById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMetaById = getMetaById;

var createMeta = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, anio, mes, vendedor, criterio, meta, avance, status, empleado, obj, foundSeller, foundEmployee, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, anio = _req$body.anio, mes = _req$body.mes, vendedor = _req$body.vendedor, criterio = _req$body.criterio, meta = _req$body.meta, avance = _req$body.avance, status = _req$body.status, empleado = _req$body.empleado;
            _context4.prev = 1;
            obj = new _Goal.default({
              anio: anio,
              mes: mes,
              criterio: criterio,
              meta: meta,
              avance: avance,
              status: status
            });
            _context4.next = 5;
            return _Seller.default.find({
              name: {
                $in: vendedor
              }
            });

          case 5:
            foundSeller = _context4.sent;
            obj.vendedor = foundSeller.map(function (a) {
              return a._id;
            });
            _context4.next = 9;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 9:
            foundEmployee = _context4.sent;
            obj.empleado = foundEmployee.map(function (em) {
              return em._id;
            });
            _context4.next = 13;
            return obj.save();

          case 13:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Meta creada con éxito'
              });
            }

            _context4.next = 21;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(409).json({
              message: _context4.t0.message
            });

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 17]]);
  }));

  return function createMeta(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createMeta = createMeta;

var updateMeta = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, anio, mes, vendedor, criterio, meta, avance, status, empleado, metaId, foundSeller, foundEmployee, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, anio = _req$body2.anio, mes = _req$body2.mes, vendedor = _req$body2.vendedor, criterio = _req$body2.criterio, meta = _req$body2.meta, avance = _req$body2.avance, status = _req$body2.status, empleado = _req$body2.empleado;
            metaId = req.params.metaId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Seller.default.find({
              name: {
                $in: vendedor
              }
            });

          case 5:
            foundSeller = _context5.sent;
            _context5.next = 8;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 8:
            foundEmployee = _context5.sent;
            _context5.next = 11;
            return _Goal.default.findByIdAndUpdate(metaId, {
              anio: anio,
              mes: mes,
              vendedor: foundSeller.map(function (a) {
                return a._id;
              }),
              criterio: criterio,
              meta: meta,
              avance: avance,
              status: status,
              empleado: foundEmployee.map(function (b) {
                return b._id;
              })
            });

          case 11:
            query = _context5.sent;

            if (query) {
              res.json({
                message: 'Meta actualizada con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Meta a actualizar'
              });
            }

            _context5.next = 19;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(409).json({
              message: _context5.t0.message
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 15]]);
  }));

  return function updateMeta(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateMeta = updateMeta;

var deleteMeta = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var metaId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            metaId = req.params.metaId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Goal.default.findByIdAndDelete(metaId);

          case 4:
            query = _context6.sent;

            if (query) {
              res.json({
                message: 'Meta eliminada con éxito'
              });
            } else {
              res.status(404).json({
                message: 'No existe Meta a eliminar'
              });
            }

            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(409).json({
              message: _context6.t0.message
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function deleteMeta(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteMeta = deleteMeta;
//# sourceMappingURL=goals.controller.js.map