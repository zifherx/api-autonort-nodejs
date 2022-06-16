"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Resultado = _interopRequireDefault(require("../models/Resultado"));

var _TipoProducto = _interopRequireDefault(require("../models/TipoProducto"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Mes = _interopRequireDefault(require("../models/Mes"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _User = _interopRequireDefault(require("../models/User"));

var resultadoCtrl = {};

resultadoCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Resultado.default.find().sort({
              fecha: -1
            }).populate({
              path: "tipoProductoE",
              select: "name"
            }).populate({
              path: "anioE",
              select: "name"
            }).populate({
              path: "mesE",
              select: "name numero abreviatura"
            }).populate({
              path: "sucursalE",
              select: "name"
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
              message: "No existen resultados"
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

resultadoCtrl.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var itemId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            itemId = req.params.itemId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Resultado.default.findById(itemId).populate({
              path: "tipoProductoE",
              select: "name"
            }).populate({
              path: "anioE",
              select: "name"
            }).populate({
              path: "mesE",
              select: "name numero abreviatura"
            }).poppulat({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "createdBy",
              select: "name username"
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
              message: "No existen el resultado"
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

resultadoCtrl.createOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, cod_interno, tipoProducto, tipoProductoE, fecha, anio, mes, anioE, mesE, sucursal, sucursalE, meta, valor, createdBy, newObj, productoFound, anioFound, mesFound, sucursalFound, userFound, query;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cod_interno = _req$body.cod_interno, tipoProducto = _req$body.tipoProducto, tipoProductoE = _req$body.tipoProductoE, fecha = _req$body.fecha, anio = _req$body.anio, mes = _req$body.mes, anioE = _req$body.anioE, mesE = _req$body.mesE, sucursal = _req$body.sucursal, sucursalE = _req$body.sucursalE, meta = _req$body.meta, valor = _req$body.valor, createdBy = _req$body.createdBy;
            _context3.prev = 1;
            newObj = new _Resultado.default({
              cod_interno: cod_interno,
              tipoProducto: tipoProducto,
              fecha: fecha,
              anio: anio,
              mes: mes,
              sucursal: sucursal,
              meta: meta,
              valor: valor
            });
            _context3.next = 5;
            return _TipoProducto.default.findOne({
              name: tipoProductoE
            });

          case 5:
            productoFound = _context3.sent;

            if (productoFound) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Tipo Producto ".concat(tipoProductoE, " no encontrado")
            }));

          case 8:
            newObj.tipoProductoE = productoFound._id;
            _context3.next = 11;
            return _Anio.default.findOne({
              name: anioE
            });

          case 11:
            anioFound = _context3.sent;

            if (anioFound) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioE, " no encontrado")
            }));

          case 14:
            newObj.anioE = anioFound._id;
            _context3.next = 17;
            return _Mes.default.findOne({
              name: mesE
            });

          case 17:
            mesFound = _context3.sent;

            if (mesFound) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Mes ".concat(mesE, " no encontrado")
            }));

          case 20:
            newObj.mesE = mesFound._id;

            if (!(sucursalE == null || sucursalE == undefined)) {
              _context3.next = 25;
              break;
            }

            newObj.sucursalE == null;
            _context3.next = 31;
            break;

          case 25:
            _context3.next = 27;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 27:
            sucursalFound = _context3.sent;

            if (sucursalFound) {
              _context3.next = 30;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrado")
            }));

          case 30:
            newObj.sucursalE = sucursalFound._id;

          case 31:
            _context3.next = 33;
            return _User.default.findOne({
              username: createdBy
            });

          case 33:
            userFound = _context3.sent;

            if (userFound) {
              _context3.next = 36;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 36:
            newObj.createdBy = userFound._id;
            _context3.next = 39;
            return newObj.save();

          case 39:
            query = _context3.sent;

            if (query) {
              res.json({
                message: "Resultado ".concat(cod_interno, " creado con \xE9xito")
              });
            }

            _context3.next = 47;
            break;

          case 43:
            _context3.prev = 43;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 47:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 43]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

resultadoCtrl.updateOneById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body2, tipoProducto, tipoProductoE, anio, mes, anioE, mesE, sucursal, sucursalE, meta, valor, itemId, productoFound, anioFound, mesFound, sucursalFound, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, tipoProducto = _req$body2.tipoProducto, tipoProductoE = _req$body2.tipoProductoE, anio = _req$body2.anio, mes = _req$body2.mes, anioE = _req$body2.anioE, mesE = _req$body2.mesE, sucursal = _req$body2.sucursal, sucursalE = _req$body2.sucursalE, meta = _req$body2.meta, valor = _req$body2.valor;
            itemId = req.params.itemId;
            _context4.prev = 2;
            _context4.next = 5;
            return _TipoProducto.default.findOne({
              name: tipoProductoE
            });

          case 5:
            productoFound = _context4.sent;

            if (productoFound) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Tipo Producto ".concat(tipoProductoE, " no encontrado")
            }));

          case 8:
            _context4.next = 10;
            return _Anio.default.findOne({
              name: anioE
            });

          case 10:
            anioFound = _context4.sent;

            if (anioFound) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioE, " no encontrado")
            }));

          case 13:
            _context4.next = 15;
            return _Mes.default.findOne({
              name: mesE
            });

          case 15:
            mesFound = _context4.sent;

            if (mesFound) {
              _context4.next = 18;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Mes ".concat(mesE, " no encontrado")
            }));

          case 18:
            _context4.next = 20;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 20:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 23;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrado")
            }));

          case 23:
            _context4.next = 25;
            return _Resultado.default.findByIdAndUpdate(itemId, {
              tipoProducto: tipoProducto,
              tipoProductoE: productoFound._id,
              anio: anio,
              mes: mes,
              anioE: anioFound._id,
              mesE: mesFound._id,
              sucursal: sucursal,
              sucursalE: sucursalFound._id,
              meta: meta,
              valor: valor
            });

          case 25:
            query = _context4.sent;

            if (!query) {
              _context4.next = 30;
              break;
            }

            res.json({
              message: "Resultado actualizado con éxito"
            });
            _context4.next = 31;
            break;

          case 30:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existe el resultado a actualizar"
            }));

          case 31:
            _context4.next = 37;
            break;

          case 33:
            _context4.prev = 33;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 37:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 33]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

resultadoCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var itemId, query;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            itemId = req.params.itemId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Resultado.default.findByIdAndDelete(itemId);

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: "Resultado eliminado con éxito"
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe el resultado a eliminar"
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

resultadoCtrl.getAllByProductSedeYear = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var _req$body3, sucursalE, productoE, yearE, productoFound, query;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, sucursalE = _req$body3.sucursalE, productoE = _req$body3.productoE, yearE = _req$body3.yearE;
            _context6.prev = 1;
            _context6.next = 4;
            return _TipoProducto.default.findOne({
              name: productoE
            });

          case 4:
            productoFound = _context6.sent;

            if (productoFound) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: "Producto ".concat(productoE, " no encontrado")
            }));

          case 7:
            _context6.next = 9;
            return _Resultado.default.find({
              sucursal: {
                $regex: '.*' + sucursalE + '.*'
              },
              tipoProductoE: productoFound._id,
              anio: yearE
            }).select('cod_interno sucursalE tipoProductoE anioE mesE meta valor').sort({
              fecha: 1
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'tipoProductoE',
              select: 'name'
            }).populate({
              path: 'anioE',
              select: 'name'
            }).populate({
              path: 'mesE',
              select: 'name'
            });

          case 9:
            query = _context6.sent;

            if (!(query.length > 0)) {
              _context6.next = 14;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context6.next = 15;
            break;

          case 14:
            return _context6.abrupt("return", res.status(404).json({
              message: "No se cargaron resultados de ".concat(productoE, " en el ").concat(yearE)
            }));

          case 15:
            _context6.next = 21;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 17]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var _default = resultadoCtrl;
exports.default = _default;
//# sourceMappingURL=resultado.controller.js.map