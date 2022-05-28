"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AccesorioE = _interopRequireDefault(require("../models/AccesorioE"));

var _ModeloTasaciones = _interopRequireDefault(require("../models/ModeloTasaciones"));

var _User = _interopRequireDefault(require("../models/User"));

var accesorioController = {};

accesorioController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _AccesorioE.default.find().sort({
              name: 1
            }).populate({
              path: 'model',
              select: 'name avatar marca',
              populate: {
                path: 'marca',
                select: 'name avatar'
              }
            }).populate({
              path: 'createdBy',
              select: 'name username'
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
              message: 'No existen accesorios creados'
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

accesorioController.getOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var accesorioId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            accesorioId = req.params.accesorioId;
            _context2.prev = 1;
            _context2.next = 4;
            return _AccesorioE.default.findById(accesorioId).populate({
              path: 'model',
              select: 'name avatar marca',
              populate: {
                path: 'marca',
                select: 'name avatar'
              }
            }).populate({
              path: 'createdBy',
              select: 'name username'
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
              message: "No existe accesorio ".concat(accesorioId)
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

accesorioController.getAllActivos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _AccesorioE.default.find({
              estado: true
            }).sort({
              name: 1
            }).populate({
              path: 'model',
              select: 'name avatar marca',
              populate: {
                path: 'marca',
                select: 'name avatar'
              }
            }).populate({
              path: 'createdBy',
              select: 'name username'
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
              message: 'No hay accesorios activos'
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

accesorioController.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, cod_interno, name, model, precio, estado, createdBy, obj, modelFound, userFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, cod_interno = _req$body.cod_interno, name = _req$body.name, model = _req$body.model, precio = _req$body.precio, estado = _req$body.estado, createdBy = _req$body.createdBy;
            _context4.prev = 1;
            obj = new _AccesorioE.default({
              cod_interno: cod_interno,
              name: name,
              precio: precio,
              estado: estado
            });
            _context4.next = 5;
            return _ModeloTasaciones.default.findOne({
              name: model
            });

          case 5:
            modelFound = _context4.sent;

            if (modelFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Modelo ".concat(model, " no encontrado")
            }));

          case 8:
            obj.model = modelFound._id;
            _context4.next = 11;
            return _User.default.findOne({
              username: createdBy
            });

          case 11:
            userFound = _context4.sent;

            if (userFound) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 14:
            obj.createdBy = userFound._id;
            _context4.next = 17;
            return obj.save();

          case 17:
            query = _context4.sent;

            if (query) {
              res.json({
                message: 'Accesorio creado con éxito'
              });
            }

            _context4.next = 25;
            break;

          case 21:
            _context4.prev = 21;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 21]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

accesorioController.updateById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var accesorioId, _req$body2, cod_interno, name, model, precio, estado, modelFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            accesorioId = req.params.accesorioId;
            _req$body2 = req.body, cod_interno = _req$body2.cod_interno, name = _req$body2.name, model = _req$body2.model, precio = _req$body2.precio, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _ModeloTasaciones.default.findOne({
              name: model
            });

          case 5:
            modelFound = _context5.sent;

            if (modelFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Modelo ".concat(model, " no encontrado")
            }));

          case 8:
            _context5.next = 10;
            return _AccesorioE.default.findByIdAndUpdate(accesorioId, {
              cod_interno: cod_interno,
              name: name,
              model: modelFound._id,
              precio: precio,
              estado: estado
            });

          case 10:
            query = _context5.sent;

            if (!query) {
              _context5.next = 15;
              break;
            }

            res.json({
              message: 'Accesorio actualizado con éxito'
            });
            _context5.next = 16;
            break;

          case 15:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existe accesorio a actualizar'
            }));

          case 16:
            _context5.next = 22;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 18]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

accesorioController.deleteById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var accesorioId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            accesorioId = req.params.accesorioId;
            _context6.prev = 1;
            _context6.next = 4;
            return _AccesorioE.default.findByIdAndDelete(accesorioId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: 'Accesorio eliminado con éxito'
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existe accesorio a eliminar'
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

accesorioController.getAccesoriosByModelo = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var modelo, modelFound, query;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            modelo = req.body.modelo;
            _context7.prev = 1;
            _context7.next = 4;
            return _ModeloTasaciones.default.findOne({
              name: modelo
            });

          case 4:
            modelFound = _context7.sent;
            _context7.next = 7;
            return _AccesorioE.default.find({
              model: modelFound._id
            }).sort({
              cod_interno: 1
            });

          case 7:
            query = _context7.sent;

            if (!(query.length > 0)) {
              _context7.next = 12;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context7.next = 13;
            break;

          case 12:
            return _context7.abrupt("return", res.status(404).json({
              message: "No se encontraron accesorios para ".concat(modelo)
            }));

          case 13:
            _context7.next = 19;
            break;

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 15]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var _default = accesorioController;
exports.default = _default;
//# sourceMappingURL=accesorio.controller.js.map