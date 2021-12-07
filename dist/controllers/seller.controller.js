"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSellerById = exports.updateSellerById = exports.uploadAvatar = exports.createSeller = exports.getSellerByName = exports.getSellerByMarcaAndSucursal = exports.getSellerBySucursal = exports.getSellerById = exports.getSellers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _User = _interopRequireDefault(require("../models/User"));

var getSellers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Seller.default.find().sort({
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
              message: 'No existen Vendedores'
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(503).json({
              message: _context.t0.message
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getSellers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSellers = getSellers;

var getSellerById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var sellerId, query;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sellerId = req.params.sellerId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Seller.default.findById(sellerId);

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json(query);
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'No existe Vendedor'
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(503).json({
              message: _context2.t0.message
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function getSellerById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSellerById = getSellerById;

var getSellerBySucursal = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var sucursal, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sucursal = req.body.sucursal;
            _context3.prev = 1;
            _context3.next = 4;
            return _Seller.default.find({
              sucursal: sucursal,
              estatus: true
            }).sort({
              name: 'asc'
            });

          case 4:
            query = _context3.sent;

            if (!(query.length > 0)) {
              _context3.next = 9;
              break;
            }

            res.json(query);
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existen Vendedores en ".concat(sucursal)
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

  return function getSellerBySucursal(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSellerBySucursal = getSellerBySucursal;

var getSellerByMarcaAndSucursal = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body, sucursal, marca, query;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, sucursal = _req$body.sucursal, marca = _req$body.marca;
            _context4.prev = 1;
            _context4.next = 4;
            return _Seller.default.find({
              sucursal: sucursal,
              marca: marca,
              estatus: true
            }).sort({
              name: 'asc'
            });

          case 4:
            query = _context4.sent;

            if (!(query.length > 0)) {
              _context4.next = 9;
              break;
            }

            res.json(query);
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existen vendedores en ".concat(sucursal)
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 12]]);
  }));

  return function getSellerByMarcaAndSucursal(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getSellerByMarcaAndSucursal = getSellerByMarcaAndSucursal;

var getSellerByName = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var name, query;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            name = req.body.name;
            _context5.prev = 1;
            _context5.next = 4;
            return _Seller.default.findOne({
              name: name
            });

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json(query);
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: 'No existen Vendedores con este Nombre'
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

  return function getSellerByName(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getSellerByName = getSellerByName;

var createSeller = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var _req$body2, name, sucursal, marca, document, telefono, email, estatus, empleado, newSeller, foundEmployee, sellerSaved;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, sucursal = _req$body2.sucursal, marca = _req$body2.marca, document = _req$body2.document, telefono = _req$body2.telefono, email = _req$body2.email, estatus = _req$body2.estatus, empleado = _req$body2.empleado;
            _context6.prev = 1;
            newSeller = new _Seller.default({
              name: name,
              sucursal: sucursal,
              marca: marca,
              document: document,
              telefono: telefono,
              email: email,
              estatus: estatus
            });
            _context6.next = 5;
            return _User.default.find({
              username: {
                $in: empleado
              }
            });

          case 5:
            foundEmployee = _context6.sent;
            newSeller.createdBy = foundEmployee.map(function (em) {
              return em._id;
            });
            _context6.next = 9;
            return newSeller.save();

          case 9:
            sellerSaved = _context6.sent;

            if (sellerSaved) {
              res.json({
                message: 'Vendedor creado con éxito'
              });
            }

            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(503).json({
              message: _context6.t0.message
            });

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 13]]);
  }));

  return function createSeller(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createSeller = createSeller;

var uploadAvatar = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var sellerId, photo, query;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            sellerId = req.params.sellerId;
            photo = req.file;
            _context7.prev = 2;
            _context7.next = 5;
            return _Seller.default.findByIdAndUpdate(sellerId, {
              avatar: photo.location
            });

          case 5:
            query = _context7.sent;

            if (!query) {
              _context7.next = 10;
              break;
            }

            res.json({
              message: 'Avatar subido con éxito'
            });
            _context7.next = 11;
            break;

          case 10:
            return _context7.abrupt("return", res.status(404).json({
              message: 'No existe el vendedor'
            }));

          case 11:
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](2);
            console.error(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 13]]);
  }));

  return function uploadAvatar(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.uploadAvatar = uploadAvatar;

var updateSellerById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res) {
    var sellerId, _req$body3, name, sucursal, marca, document, telefono, email, estatus, updateSeller;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            sellerId = req.params.sellerId;
            _req$body3 = req.body, name = _req$body3.name, sucursal = _req$body3.sucursal, marca = _req$body3.marca, document = _req$body3.document, telefono = _req$body3.telefono, email = _req$body3.email, estatus = _req$body3.estatus;
            _context8.prev = 2;
            _context8.next = 5;
            return _Seller.default.findByIdAndUpdate(sellerId, {
              name: name,
              sucursal: sucursal,
              marca: marca,
              document: document,
              telefono: telefono,
              email: email,
              estatus: estatus
            });

          case 5:
            updateSeller = _context8.sent;

            if (!updateSeller) {
              _context8.next = 10;
              break;
            }

            res.json({
              message: 'Vendedor actualizado con éxito'
            });
            _context8.next = 11;
            break;

          case 10:
            return _context8.abrupt("return", res.status(404).json({
              message: 'No existe Vendedor a actualizar'
            }));

          case 11:
            _context8.next = 17;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            res.status(503).json({
              message: _context8.t0.message
            });

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 13]]);
  }));

  return function updateSellerById(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.updateSellerById = updateSellerById;

var deleteSellerById = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res) {
    var sellerId, deletedSeller;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            sellerId = req.params.sellerId;
            _context9.prev = 1;
            _context9.next = 4;
            return _Seller.default.findByIdAndDelete(sellerId);

          case 4:
            deletedSeller = _context9.sent;

            if (!deletedSeller) {
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
            res.status(503).json({
              message: _context9.t0.message
            });

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 12]]);
  }));

  return function deleteSellerById(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.deleteSellerById = deleteSellerById;
//# sourceMappingURL=seller.controller.js.map