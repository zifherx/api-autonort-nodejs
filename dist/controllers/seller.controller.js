"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _User = _interopRequireDefault(require("../models/User"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _MarcaTasaciones = _interopRequireDefault(require("../models/MarcaTasaciones"));

var sellerController = {};

sellerController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Seller.default.find().sort({
              name: 1
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'marcaE',
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
              message: 'No existen Vendedores'
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

sellerController.getAllActive = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Seller.default.find({
              estado: true
            }).sort({
              name: 1
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'marcaE',
              select: 'name avatar'
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
              message: 'No existen Vendedores'
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

sellerController.getSellerById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var sellerId, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sellerId = req.params.sellerId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Seller.default.findById(sellerId).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'marcaE',
              select: 'name avatar'
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
              message: 'No existe Vendedor'
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

sellerController.getSellerBySucursal = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var sucursal, sucursalFound, query;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sucursal = req.body.sucursal;
            _context4.prev = 1;
            _context4.next = 4;
            return _Sucursal.default.findOne({
              name: sucursal
            });

          case 4:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursal, " no encontrada")
            }));

          case 7:
            _context4.next = 9;
            return _Seller.default.find({
              sucursalE: sucursalFound._id,
              estado: true
            }).sort({
              name: 1
            }).populate({
              path: 'sucursalE',
              select: 'name'
            }).populate({
              path: 'marcaE',
              select: 'name avatar'
            }).populate({
              path: 'createdBy',
              select: 'name'
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
              message: "No existen Vendedores en ".concat(sucursal)
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

sellerController.getSellerByMarcaAndSucursal = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var _req$body, sucursal, marca, query;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, sucursal = _req$body.sucursal, marca = _req$body.marca;
            _context5.prev = 1;
            _context5.next = 4;
            return _Seller.default.find({
              sucursal: sucursal,
              marca: marca,
              estatus: true
            }).sort({
              name: 'asc'
            });

          case 4:
            query = _context5.sent;

            if (!(query.length > 0)) {
              _context5.next = 9;
              break;
            }

            res.json(query);
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existen vendedores en ".concat(sucursal)
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.error(_context5.t0);
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

sellerController.getSellerByName = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var name, query;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            name = req.body.name;
            _context6.prev = 1;
            _context6.next = 4;
            return _Seller.default.findOne({
              name: name
            });

          case 4:
            query = _context6.sent;

            if (!query) {
              _context6.next = 9;
              break;
            }

            res.json(query);
            _context6.next = 10;
            break;

          case 9:
            return _context6.abrupt("return", res.status(404).json({
              message: 'No existen Vendedores con este Nombre'
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

sellerController.createSeller = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var _req$body2, name, document, telefono, email, sucursalE, marcaE, estado, createdBy, obj, foundEmployee, sucursalFound, marcaFound, query;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, document = _req$body2.document, telefono = _req$body2.telefono, email = _req$body2.email, sucursalE = _req$body2.sucursalE, marcaE = _req$body2.marcaE, estado = _req$body2.estado, createdBy = _req$body2.createdBy;
            _context7.prev = 1;
            obj = new _Seller.default({
              name: name,
              document: document,
              telefono: telefono,
              email: email,
              estado: estado
            });
            _context7.next = 5;
            return _User.default.findOne({
              username: createdBy
            });

          case 5:
            foundEmployee = _context7.sent;

            if (foundEmployee) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Colaborador ".concat(createdBy, " no encontrado")
            }));

          case 8:
            obj.createdBy = foundEmployee._id;
            _context7.next = 11;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 11:
            sucursalFound = _context7.sent;

            if (sucursalFound) {
              _context7.next = 14;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 14:
            obj.sucursalE = sucursalFound._id;
            _context7.next = 17;
            return _MarcaTasaciones.default.findOne({
              name: marcaE
            });

          case 17:
            marcaFound = _context7.sent;

            if (marcaFound) {
              _context7.next = 20;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Marca ".concat(marcaE, " no encontrada")
            }));

          case 20:
            obj.marcaE = marcaFound._id;
            _context7.next = 23;
            return obj.save();

          case 23:
            query = _context7.sent;

            if (query) {
              res.json({
                message: 'Vendedor creado con éxito'
              });
            }

            _context7.next = 31;
            break;

          case 27:
            _context7.prev = 27;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 31:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 27]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

sellerController.updateSellerById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var sellerId, _req$body3, name, document, telefono, email, sucursalE, marcaE, estado, avatar, query, sucursalFound, marcaFound;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            sellerId = req.params.sellerId;
            _req$body3 = req.body, name = _req$body3.name, document = _req$body3.document, telefono = _req$body3.telefono, email = _req$body3.email, sucursalE = _req$body3.sucursalE, marcaE = _req$body3.marcaE, estado = _req$body3.estado;
            avatar = req.file;
            _context8.prev = 3;
            query = null;
            _context8.next = 7;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 7:
            sucursalFound = _context8.sent;

            if (sucursalFound) {
              _context8.next = 10;
              break;
            }

            return _context8.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 10:
            _context8.next = 12;
            return _MarcaTasaciones.default.findOne({
              name: marcaE
            });

          case 12:
            marcaFound = _context8.sent;

            if (marcaFound) {
              _context8.next = 15;
              break;
            }

            return _context8.abrupt("return", res.status(404).json({
              message: "Marca ".concat(marcaE, " no encontrada")
            }));

          case 15:
            if (!(avatar == null || avatar == undefined)) {
              _context8.next = 21;
              break;
            }

            _context8.next = 18;
            return _Seller.default.findByIdAndUpdate(sellerId, {
              name: name,
              document: document,
              telefono: telefono,
              email: email,
              sucursalE: sucursalFound._id,
              marcaE: marcaFound._id,
              estado: estado
            });

          case 18:
            query = _context8.sent;
            _context8.next = 24;
            break;

          case 21:
            _context8.next = 23;
            return _Seller.default.findByIdAndUpdate(sellerId, {
              name: name,
              document: document,
              telefono: telefono,
              email: email,
              sucursalE: sucursalFound._id,
              marcaE: marcaFound._id,
              avatar: avatar.location,
              estado: estado
            });

          case 23:
            query = _context8.sent;

          case 24:
            if (!query) {
              _context8.next = 28;
              break;
            }

            res.json({
              message: 'Vendedor actualizado con éxito'
            });
            _context8.next = 29;
            break;

          case 28:
            return _context8.abrupt("return", res.status(404).json({
              message: 'No existe Vendedor a actualizar'
            }));

          case 29:
            _context8.next = 35;
            break;

          case 31:
            _context8.prev = 31;
            _context8.t0 = _context8["catch"](3);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 35:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[3, 31]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

sellerController.deleteSellerById = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var sellerId, query;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            sellerId = req.params.sellerId;
            _context9.prev = 1;
            _context9.next = 4;
            return _Seller.default.findByIdAndDelete(sellerId);

          case 4:
            query = _context9.sent;

            if (!query) {
              _context9.next = 9;
              break;
            }

            res.json({
              message: 'Vendedor eliminado con éxito'
            });
            _context9.next = 10;
            break;

          case 9:
            return _context9.abrupt("return", res.status(404).json({
              message: 'No existe Vendedor a eliminar'
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

var _default = sellerController;
exports.default = _default;
//# sourceMappingURL=seller.controller.js.map