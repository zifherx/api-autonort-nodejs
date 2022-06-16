"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Campania = _interopRequireDefault(require("../models/Campania"));

var _TipoCampania = _interopRequireDefault(require("../models/TipoCampania"));

var _ModeloTasaciones = _interopRequireDefault(require("../models/ModeloTasaciones"));

var _User = _interopRequireDefault(require("../models/User"));

var campaniaCtrl = {};

campaniaCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Campania.default.find().sort({
              startDate: -1
            }).populate({
              path: "tipo",
              select: "name"
            }).populate({
              path: "model",
              select: "name avatar marca",
              populate: {
                path: "marca",
                select: "name avatar"
              }
            }).populate({
              path: "createdBy",
              select: "name username"
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
              message: "No existen campanias"
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

campaniaCtrl.getAllActivos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Campania.default.find({
              estado: true
            }).sort({
              startDate: -1
            }).populate({
              path: "tipo",
              select: "name"
            }).populate({
              path: "model",
              select: "name avatar marca",
              populate: {
                path: "marca",
                select: "name avatar"
              }
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existen campañas activas"
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

campaniaCtrl.getOneById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var campaniaId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            campaniaId = req.params.campaniaId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Campania.default.findById(campaniaId).sort({
              startDate: -1
            }).populate({
              path: "tipo",
              select: "name"
            }).populate({
              path: "model",
              select: "name avatar marca",
              populate: {
                path: "marca",
                select: "name avatar"
              }
            }).populate({
              path: "createdBy",
              select: "name username"
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
              message: "No existen la campaña"
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

campaniaCtrl.createOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, cod_interno, descripcion, tipo, startDate, endDate, estado, model, versiones, oferta, createdBy, obj, tipoCFound, modelFound, userFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, cod_interno = _req$body.cod_interno, descripcion = _req$body.descripcion, tipo = _req$body.tipo, startDate = _req$body.startDate, endDate = _req$body.endDate, estado = _req$body.estado, model = _req$body.model, versiones = _req$body.versiones, oferta = _req$body.oferta, createdBy = _req$body.createdBy;
            _context4.prev = 1;
            obj = new _Campania.default({
              cod_interno: cod_interno,
              descripcion: descripcion,
              startDate: startDate,
              endDate: endDate,
              estado: estado,
              versiones: versiones,
              oferta: oferta
            });
            _context4.next = 5;
            return _TipoCampania.default.findOne({
              name: tipo
            });

          case 5:
            tipoCFound = _context4.sent;

            if (tipoCFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Tipo de campa\xF1a ".concat(tipo, " no encontrado")
            }));

          case 8:
            obj.tipo = tipoCFound._id;
            _context4.next = 11;
            return _ModeloTasaciones.default.findOne({
              name: model
            });

          case 11:
            modelFound = _context4.sent;

            if (modelFound) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Modelo ".concat(model, " no encontrado")
            }));

          case 14:
            obj.model = modelFound._id;
            _context4.next = 17;
            return _User.default.findOne({
              username: createdBy
            });

          case 17:
            userFound = _context4.sent;

            if (userFound) {
              _context4.next = 20;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 20:
            obj.createdBy = userFound._id;
            query = obj.save();

            if (query) {
              res.json({
                message: "Campaña creada con éxito"
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

campaniaCtrl.updateOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body2, descripcion, startDate, endDate, tipo, model, versiones, oferta, estado, campaniaId, tipoCFound, modelFound, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, descripcion = _req$body2.descripcion, startDate = _req$body2.startDate, endDate = _req$body2.endDate, tipo = _req$body2.tipo, model = _req$body2.model, versiones = _req$body2.versiones, oferta = _req$body2.oferta, estado = _req$body2.estado;
            campaniaId = req.params.campaniaId;
            _context5.prev = 2;
            _context5.next = 5;
            return _TipoCampania.default.findOne({
              name: tipo
            });

          case 5:
            tipoCFound = _context5.sent;

            if (tipoCFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Tipo de campa\xF1a ".concat(tipo, " no encontrado")
            }));

          case 8:
            _context5.next = 10;
            return _ModeloTasaciones.default.findOne({
              name: model
            });

          case 10:
            modelFound = _context5.sent;

            if (modelFound) {
              _context5.next = 13;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Modelo ".concat(model, " no encontrado")
            }));

          case 13:
            _context5.next = 15;
            return _Campania.default.findByIdAndUpdate(campaniaId, {
              descripcion: descripcion,
              startDate: startDate,
              endDate: endDate,
              tipo: tipoCFound._id,
              model: modelFound._id,
              versiones: versiones,
              oferta: oferta,
              estado: estado
            });

          case 15:
            query = _context5.sent;

            if (!query) {
              _context5.next = 20;
              break;
            }

            res.json({
              message: "Campaña actualizada con éxito"
            });
            _context5.next = 21;
            break;

          case 20:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe campaña a actualizar"
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

campaniaCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var campaniaId, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            campaniaId = req.params.campaniaId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Campania.default.findByIdAndDelete(campaniaId);

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json({
              message: "Campaña eliminada con éxito"
            });
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: "No existe campaña a eliminar"
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

campaniaCtrl.findCampaniaByParams = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body3, startDate, endDate, model, tipo, version, modelFound, tipoFound, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, startDate = _req$body3.startDate, endDate = _req$body3.endDate, model = _req$body3.model, tipo = _req$body3.tipo, version = _req$body3.version;
            _context7.prev = 1;
            _context7.next = 4;
            return _ModeloTasaciones.default.findOne({
              name: model
            });

          case 4:
            modelFound = _context7.sent;

            if (modelFound) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Modelo ".concat(model, " no encontrado")
            }));

          case 7:
            _context7.next = 9;
            return _TipoCampania.default.findOne({
              name: tipo
            });

          case 9:
            tipoFound = _context7.sent;

            if (tipoFound) {
              _context7.next = 12;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Tipo ".concat(tipo, " no encontrado")
            }));

          case 12:
            _context7.next = 14;
            return _Campania.default.find({
              startDate: startDate,
              endDate: endDate,
              tipo: tipoFound._id,
              versiones: {
                $in: version
              },
              model: modelFound._id
            }).sort({
              cod_interno: 1
            }).populate({
              path: "tipo",
              select: "name"
            }).populate({
              path: "model",
              select: "name avatar marca",
              populate: {
                path: "marca",
                select: "name avatar"
              }
            }).populate({
              path: "createdBy",
              select: "name"
            });

          case 14:
            query = _context7.sent;

            if (!(query.length > 0)) {
              _context7.next = 19;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context7.next = 20;
            break;

          case 19:
            return _context7.abrupt("return", res.status(404).json({
              message: "No existen campa\xF1as ".concat(tipo, " del ").concat(model)
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

campaniaCtrl.getOfertaByCampania = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var cod_interno, query;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            cod_interno = req.body.cod_interno;
            _context8.prev = 1;
            _context8.next = 4;
            return _Campania.default.findOne({
              cod_interno: cod_interno
            }).select('tipo oferta estado startDate endDate').populate({
              path: "tipo",
              select: "name"
            });

          case 4:
            query = _context8.sent;

            if (!query) {
              _context8.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context8.next = 10;
            break;

          case 9:
            return _context8.abrupt("return", res.status(404).json({
              message: "Campania ".concat(cod_interno, " no encontrada")
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

var _default = campaniaCtrl;
exports.default = _default;
//# sourceMappingURL=campania.controller.js.map