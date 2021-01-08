"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePropById = exports.updatePropById = exports.getPropById = exports.getProps = exports.createProp = void 0;

var _Props = _interopRequireDefault(require("../models/Props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, type, forCar, cantidad, precio, newProp, propSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, type = _req$body.type, forCar = _req$body.forCar, cantidad = _req$body.cantidad, precio = _req$body.precio;
            newProp = new _Props.default({
              name: name,
              type: type,
              forCar: forCar,
              cantidad: cantidad,
              precio: precio
            });
            _context.next = 5;
            return newProp.save();

          case 5:
            propSaved = _context.sent;
            res.status(201).json(propSaved);
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createProp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProp = createProp;

var getProps = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var props;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Props.default.find();

          case 3:
            props = _context2.sent;

            if (props) {
              res.status(200).json(props);
            } else {
              res.status(201).json({
                messsage: 'No existen campañas a mostrar'
              });
            }

            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getProps(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProps = getProps;

var getPropById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var propsId, props;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            propsId = req.params.propsId;
            _context3.next = 4;
            return _Props.default.findById(propsId);

          case 4:
            props = _context3.sent;

            if (props) {
              res.status(200).json(props);
            } else {
              res.status(201).json({
                messsage: 'No existe campaña a mostrar'
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getPropById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPropById = getPropById;

var updatePropById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var propsId, updateProp;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            propsId = req.params.propsId;
            _context4.next = 4;
            return _Props.default.findByIdAndUpdate(propsId, req.body, {
              new: true
            });

          case 4:
            updateProp = _context4.sent;

            if (updateProp) {
              res.status(200).json(updateProp);
            } else {
              res.status(401).json({
                messsage: 'No existe campaña a actualizar'
              });
            }

            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function updatePropById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatePropById = updatePropById;

var deletePropById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var propsId, deletedProp;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            propsId = req.params.propsId;
            _context5.next = 4;
            return _Props.default.findByIdAndDelete(propsId);

          case 4:
            deletedProp = _context5.sent;

            if (deletedProp) {
              res.status(200).json({
                messsage: 'Accesorio Eliminado'
              });
            } else {
              res.status(401).json({
                messsage: 'Accesorio no Existe'
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(401).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function deletePropById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePropById = deletePropById;
//# sourceMappingURL=props.controller.js.map