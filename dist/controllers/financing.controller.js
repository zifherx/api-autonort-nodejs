"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFinancingById = exports.updateFinancingById = exports.getFinancingById = exports.getFinancing = exports.createFinancing = void 0;

var _Financing = _interopRequireDefault(require("../models/Financing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createFinancing = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, type, description, newFinancing, financingSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, type = _req$body.type, description = _req$body.description;
            newFinancing = new _Financing.default({
              type: type,
              description: description
            });
            _context.next = 5;
            return newFinancing.save();

          case 5:
            financingSaved = _context.sent;
            res.status(201).json(financingSaved);
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(401).json({
              message: 'Error'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createFinancing(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createFinancing = createFinancing;

var getFinancing = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var financing;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Financing.default.find();

          case 3:
            financing = _context2.sent;

            if (financing) {
              res.status(200).json(financing);
            } else {
              res.status(201).json({
                message: 'No existe financiamiento a mostrar'
              });
            }

            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(401).json({
              message: 'Error'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getFinancing(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getFinancing = getFinancing;

var getFinancingById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var financingId, financiamiento;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            financingId = req.params.financingId;
            _context3.next = 4;
            return _Financing.default.findById(financingId);

          case 4:
            financiamiento = _context3.sent;

            if (financiamiento) {
              res.status(200).json(financiamiento);
            } else {
              res.status(201).json({
                message: 'No existe el financiamiento'
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(401).json({
              message: 'Error'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getFinancingById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getFinancingById = getFinancingById;

var updateFinancingById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var financingId, updateFinancing;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            financingId = req.params.financingId;
            _context4.next = 4;
            return _Financing.default.findByIdAndUpdate(financingId, req.body, {
              new: true
            });

          case 4:
            updateFinancing = _context4.sent;

            if (updateFinancing) {
              res.status(200).json(updateFinancing);
            } else {
              res.status(201).json({
                message: 'No existe financiamiento a actualizar'
              });
            }

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

  return function updateFinancingById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateFinancingById = updateFinancingById;

var deleteFinancingById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var financingId, deleteFinancing;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            financingId = req.params.financingId;
            _context5.next = 4;
            return _Financing.default.findByIdAndDelete(financingId);

          case 4:
            deleteFinancing = _context5.sent;

            if (deleteFinancing) {
              res.status(200).json({
                message: 'Financiamiento Eliminado'
              });
            } else {
              res.status(201).json({
                message: 'Financiamiento no Existe'
              });
            }

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

  return function deleteFinancingById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteFinancingById = deleteFinancingById;
//# sourceMappingURL=financing.controller.js.map