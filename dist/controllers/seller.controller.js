"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSellerById = exports.updateSellerById = exports.getSellers = exports.getSellerById = exports.createSeller = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var createSeller = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, sucursal, document, newSeller, sellerSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, sucursal = _req$body.sucursal, document = _req$body.document;
            newSeller = new _Seller.default({
              name: name,
              sucursal: sucursal,
              document: document
            });
            _context.next = 5;
            return newSeller.save();

          case 5:
            sellerSaved = _context.sent;
            res.json({
              message: 'Vendedor creado con éxito'
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(401).json({
              message: 'No puede ejecutar la consulta'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createSeller(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createSeller = createSeller;

var getSellerById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var sellerId, seller;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            sellerId = req.params.sellerId;
            _context2.next = 4;
            return _Seller.default.findById(sellerId);

          case 4:
            seller = _context2.sent;
            res.send(seller);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(401).json({
              message: 'Error'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getSellerById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSellerById = getSellerById;

var getSellers = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var seller;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Seller.default.find();

          case 3:
            seller = _context3.sent;

            if (seller.length > 0) {
              res.send(seller);
            }

            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(404).json({
              message: 'Error'
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getSellers(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSellers = getSellers;

var updateSellerById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var sellerId, updateSeller;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            sellerId = req.params.sellerId;
            _context4.next = 4;
            return _Seller.default.findByIdAndUpdate(sellerId, req.body, {
              new: true
            });

          case 4:
            updateSeller = _context4.sent;
            res.json({
              message: 'Vendedor actualizado con éxito'
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(401).json({
              message: 'Error'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function updateSellerById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateSellerById = updateSellerById;

var deleteSellerById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var sellerId, deletedSeller;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            sellerId = req.params.sellerId;
            _context5.next = 4;
            return _Seller.default.findByIdAndRemove(sellerId);

          case 4:
            deletedSeller = _context5.sent;
            res.json({
              message: 'Vendedor eliminado con éxito'
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(401).json({
              message: 'Error'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function deleteSellerById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteSellerById = deleteSellerById;
//# sourceMappingURL=seller.controller.js.map