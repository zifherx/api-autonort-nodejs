"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSellerById = exports.updateSellerById = exports.getSellers = exports.getSellerById = exports.createSeller = void 0;

var _Seller = _interopRequireDefault(require("../models/Seller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createSeller = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, type, document, newSeller, sellerSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, type = _req$body.type, document = _req$body.document;
            newSeller = new _Seller.default({
              name: name,
              type: type,
              document: document
            });
            _context.next = 5;
            return newSeller.save();

          case 5:
            sellerSaved = _context.sent;
            res.status(201).json(sellerSaved);
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var sellerId, seller;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            sellerId = req.params.sellerId;
            _context2.next = 4;
            return _Seller.default.findById(sellerId);

          case 4:
            seller = _context2.sent;
            res.status(200).json(seller);
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var seller;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Seller.default.find();

          case 3:
            seller = _context3.sent;
            res.status(201).json(seller);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(401).json({
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var sellerId, updateSeller;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
            res.status(200).json(updateSeller);
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var sellerId, deletedSeller;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            sellerId = req.params.sellerId;
            _context5.next = 4;
            return _Seller.default.findByIdAndRemove(sellerId);

          case 4:
            deletedSeller = _context5.sent;
            res.status(200).json({
              message: 'Vendedor eliminado'
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