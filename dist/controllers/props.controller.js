"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePropById = exports.updatePropById = exports.getAccesorioByAuto = exports.getAccesorioById = exports.getAccesoriosActivos = exports.getAll = exports.createProp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Props = _interopRequireDefault(require("../models/Props"));

var createProp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, forCar, stock, precio, status, newProp, propSaved;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, forCar = _req$body.forCar, stock = _req$body.stock, precio = _req$body.precio, status = _req$body.status;
            newProp = new _Props.default({
              name: name,
              forCar: forCar,
              stock: stock,
              precio: precio,
              status: status
            });
            _context.next = 5;
            return newProp.save();

          case 5:
            propSaved = _context.sent;

            if (propSaved) {
              res.json({
                message: 'Accesorio creado con éxito'
              });
            }

            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(404).json({
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

var getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var props;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Props.default.find();

          case 3:
            props = _context2.sent;

            if (props) {
              res.json(props);
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
            res.status(403).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getAccesoriosActivos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var activos;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Props.default.find({
              status: 'Activo'
            });

          case 3:
            activos = _context3.sent;

            if (activos) {
              res.json(activos);
            }

            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(403).json({
              message: 'No Autorizado'
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getAccesoriosActivos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAccesoriosActivos = getAccesoriosActivos;

var getAccesorioById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var propsId, props;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            propsId = req.params.propsId;
            _context4.next = 4;
            return _Props.default.findById(propsId);

          case 4:
            props = _context4.sent;

            if (props) {
              res.json(props);
            } else {
              res.status(201).json({
                messsage: 'No existe campaña a mostrar'
              });
            }

            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(403).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function getAccesorioById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAccesorioById = getAccesorioById;

var getAccesorioByAuto = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var modelo, foundProp;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            modelo = req.body.modelo;
            _context5.next = 4;
            return _Props.default.find({
              forCar: modelo
            });

          case 4:
            foundProp = _context5.sent;

            if (foundProp) {
              res.json(foundProp);
            } else {
              res.status(201).json({
                message: 'No existe el accesorio'
              });
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(403).json({
              message: 'Error filtrando Campañas'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getAccesorioByAuto(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAccesorioByAuto = getAccesorioByAuto;

var updatePropById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var propsId, _req$body2, name, forCar, stock, precio, status, updateProp;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            propsId = req.params.propsId;
            _req$body2 = req.body, name = _req$body2.name, forCar = _req$body2.forCar, stock = _req$body2.stock, precio = _req$body2.precio, status = _req$body2.status; //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

            _context6.next = 5;
            return _Props.default.findByIdAndUpdate(propsId, {
              name: name,
              forCar: forCar,
              stock: stock,
              precio: precio,
              status: status
            }, {
              new: true
            });

          case 5:
            updateProp = _context6.sent;

            if (!updateProp) {
              _context6.next = 10;
              break;
            }

            res.json({
              message: 'Accesorio actualizado con éxito'
            });
            _context6.next = 11;
            break;

          case 10:
            return _context6.abrupt("return", res.status(201).json({
              messsage: 'No existe campaña a actualizar'
            }));

          case 11:
            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(403).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 13]]);
  }));

  return function updatePropById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updatePropById = updatePropById;

var deletePropById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var propsId, deletedProp;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            propsId = req.params.propsId;
            _context7.next = 4;
            return _Props.default.findByIdAndDelete(propsId);

          case 4:
            deletedProp = _context7.sent;

            if (deletedProp) {
              res.json({
                message: 'Accesorio eliminado con éxito'
              });
            } else {
              res.status(201).json({
                messsage: 'Accesorio no Existe'
              });
            }

            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.status(403).json({
              messsage: 'No se puede ejecutar la consulta'
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function deletePropById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deletePropById = deletePropById;
//# sourceMappingURL=props.controller.js.map