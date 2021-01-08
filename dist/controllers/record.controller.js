"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRecordById = exports.updateRecordById = exports.getRecordById = exports.getRecords = exports.createRecord = void 0;

var _Record = _interopRequireDefault(require("../models/Record"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRecord = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, fecha, estatusContable, sales, newRecord, foundSale, recordSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, fecha = _req$body.fecha, estatusContable = _req$body.estatusContable, sales = _req$body.sales;
            newRecord = new _Record.default({
              fecha: fecha,
              estatusContable: estatusContable
            }); //Sales

            _context.next = 5;
            return _Sale.default.find({
              nroComprobante: {
                $in: sales
              }
            });

          case 5:
            foundSale = _context.sent;
            newRecord.sales = foundSale.map(function (sales) {
              return sales._id;
            });
            console.log(newRecord);
            _context.next = 10;
            return newRecord.save();

          case 10:
            recordSaved = _context.sent;
            res.status(201).json(recordSaved);
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(401).json({
              message: 'Error Interno'
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function createRecord(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRecord = createRecord;

var getRecords = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var filtro1, expedientes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            filtro1 = {
              path: 'sales',
              populate: {
                path: 'vehicle seller financing customer'
              }
            };
            _context2.prev = 1;
            _context2.next = 4;
            return _Record.default.find().populate(filtro1);

          case 4:
            expedientes = _context2.sent;
            res.status(200).json(expedientes);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(401).json({
              message: 'Error Interno'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getRecords(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRecords = getRecords;

var getRecordById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var filtro1, recordId, expediente;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filtro1 = {
              path: 'sales',
              populate: {
                path: 'vehicle seller financing customer'
              }
            };
            _context3.prev = 1;
            recordId = req.params.recordId;
            _context3.next = 5;
            return _Record.default.findById(recordId).populate(filtro1);

          case 5:
            expediente = _context3.sent;

            if (expediente) {
              res.status(200).json(expediente);
            } else {
              res.status(201).json({
                message: 'No existe el expediente'
              });
            }

            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(401).json({
              message: 'Error Interno'
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));

  return function getRecordById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRecordById = getRecordById;

var updateRecordById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              res.status(201).json({
                message: 'Not implement Yet'
              });
            } catch (e) {
              console.log(e);
              res.status(401).json({
                message: 'Error Interno'
              });
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateRecordById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateRecordById = updateRecordById;

var deleteRecordById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var recordId, deleteRecord;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            recordId = req.params.recordId;
            _context5.next = 4;
            return _Record.default.findByIdAndDelete(recordId);

          case 4:
            deleteRecord = _context5.sent;

            if (deleteRecord) {
              res.status(200).json({
                message: 'Expediente Eliminado'
              });
            } else {
              res.status(401).json({
                message: 'Expediente no existe'
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(401).json({
              message: 'Error Interno'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function deleteRecordById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteRecordById = deleteRecordById;
//# sourceMappingURL=record.controller.js.map