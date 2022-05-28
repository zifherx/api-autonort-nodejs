"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _MarcaTasaciones = _interopRequireDefault(require("../models/MarcaTasaciones"));

var _ModeloTasaciones = _interopRequireDefault(require("../models/ModeloTasaciones"));

var modeloController = {};

modeloController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ModeloTasaciones.default.find().sort({
              name: 'asc'
            }).populate({
              path: 'marca',
              select: 'name avatar'
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
              message: 'No existen Modelos'
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

modeloController.getModeloById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var modeloId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            modeloId = req.params.modeloId;
            _context2.prev = 1;
            _context2.next = 4;
            return _ModeloTasaciones.default.findById(modeloId).populate({
              path: 'marca',
              select: 'name avatar'
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
              message: 'No existe la Modelo'
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

modeloController.getModeloActivos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _ModeloTasaciones.default.find({
              estado: true
            }).sort({
              name: 'asc'
            }).populate({
              path: 'marca',
              select: 'name avatar'
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
              message: 'No existen Modelos activos'
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

modeloController.getModelosByMarca = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var marca, marcaFound, query;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            marca = req.body.marca;
            _context4.prev = 1;
            _context4.next = 4;
            return _MarcaTasaciones.default.findOne({
              name: marca
            });

          case 4:
            marcaFound = _context4.sent;

            if (marcaFound) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "La marca ".concat(marca, " no existe")
            }));

          case 7:
            _context4.next = 9;
            return _ModeloTasaciones.default.find({
              marca: marcaFound._id
            }).sort({
              name: 1
            }).populate({
              path: 'marca',
              select: 'name avatar'
            });

          case 9:
            query = _context4.sent;

            if (!(query.length > 0)) {
              _context4.next = 14;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context4.next = 15;
            break;

          case 14:
            return _context4.abrupt("return", res.status(404).json({
              message: "La marca ".concat(marca, " no tiene modelos creados")
            }));

          case 15:
            _context4.next = 21;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 17]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

modeloController.getModelosByName = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var name, query;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            name = req.body.name;
            _context5.prev = 1;
            _context5.next = 4;
            return _ModeloTasaciones.default.findOne({
              name: name
            }).sort({
              name: 'asc'
            }).populate({
              path: 'marca',
              select: 'name avatar'
            });

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json({
              total_model: query.length,
              all_model: query
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "El modelo ".concat(name, " no existe")
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

modeloController.createModelo = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var _req$body, marca, name, estado, avatar, obj, marcaFound, query;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, marca = _req$body.marca, name = _req$body.name, estado = _req$body.estado;
            avatar = req.file;
            _context6.prev = 2;
            obj = null;

            if (avatar == undefined || avatar == null) {
              obj = new _ModeloTasaciones.default({
                name: name,
                estado: estado
              });
            } else {
              obj = new _ModeloTasaciones.default({
                avatar: avatar.location,
                name: name,
                estado: estado
              });
            }

            _context6.next = 7;
            return _MarcaTasaciones.default.findOne({
              name: marca
            });

          case 7:
            marcaFound = _context6.sent;

            if (marcaFound) {
              _context6.next = 10;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: "No existe la Marca ".concat(marca)
            }));

          case 10:
            obj.marca = marcaFound._id;
            _context6.next = 13;
            return obj.save();

          case 13:
            query = _context6.sent;

            if (query) {
              res.json({
                message: 'Modelo creado con éxito'
              });
            }

            _context6.next = 21;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 17]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

modeloController.updateModeloById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body2, marca, name, estado, modeloId, avatar, marcaFound, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, marca = _req$body2.marca, name = _req$body2.name, estado = _req$body2.estado;
            modeloId = req.params.modeloId;
            avatar = req.file;
            _context7.prev = 3;
            _context7.next = 6;
            return _MarcaTasaciones.default.findOne({
              name: marca
            });

          case 6:
            marcaFound = _context7.sent;
            query = null;

            if (!(avatar == undefined || avatar == null)) {
              _context7.next = 14;
              break;
            }

            _context7.next = 11;
            return _ModeloTasaciones.default.findByIdAndUpdate(modeloId, {
              marca: marcaFound._id,
              name: name,
              estado: estado
            });

          case 11:
            query = _context7.sent;
            _context7.next = 17;
            break;

          case 14:
            _context7.next = 16;
            return _ModeloTasaciones.default.findByIdAndUpdate(modeloId, {
              marca: marcaFound._id,
              avatar: avatar.location,
              name: name,
              estado: estado
            });

          case 16:
            query = _context7.sent;

          case 17:
            if (!query) {
              _context7.next = 21;
              break;
            }

            res.json({
              message: 'Modelo actualizado con éxito'
            });
            _context7.next = 22;
            break;

          case 21:
            return _context7.abrupt("return", res.status(404).json({
              message: 'No existe Modelo a actualizar'
            }));

          case 22:
            _context7.next = 28;
            break;

          case 24:
            _context7.prev = 24;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 24]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

modeloController.deleteModeloById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var modeloId, query;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            modeloId = req.params.modeloId;
            _context8.prev = 1;
            _context8.next = 4;
            return _ModeloTasaciones.default.findByIdAndDelete(modeloId);

          case 4:
            query = _context8.sent;

            if (!query) {
              _context8.next = 9;
              break;
            }

            res.json({
              message: 'Modelo eliminado con éxito'
            });
            _context8.next = 10;
            break;

          case 9:
            return _context8.abrupt("return", res.status(404).json({
              message: 'No existe Modelo a eliminar'
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

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var _default = modeloController;
exports.default = _default;
//# sourceMappingURL=modeloT.controller.js.map