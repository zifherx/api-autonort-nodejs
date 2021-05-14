"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDuplicateExpediente = exports.checkDuplicateTramite = exports.checkDuplicateAccesorio = exports.checkDuplicateVehiculo = exports.checkDuplicateAdicional = exports.checkDuplicateCampania = exports.checkDuplicateCliente = exports.checkDuplicateVendedor = exports.checkDuplicateAnio = exports.checkDuplicateChasis = exports.checkDuplicateUbicacion = exports.checkDuplicateFinanciamiento = exports.checkDuplicateSustento = exports.checkDuplicateSucursal = exports.checkDuplicateSituacion = exports.checkDuplicateCondicion = exports.checkDuplicateMarca = exports.checkDuplicateSectorista = exports.checkDuplicateBanco = exports.checkDuplicateColor = exports.checkDuplicateModelo = exports.checkDuplicateUser = exports.checkDuplicateRole = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _Modelo = _interopRequireDefault(require("../models/Modelo"));

var _Colores = _interopRequireDefault(require("../models/Colores"));

var _Banco = _interopRequireDefault(require("../models/Banco"));

var _Sectorista = _interopRequireDefault(require("../models/Sectorista"));

var _Condicion = _interopRequireDefault(require("../models/Condicion"));

var _Situacion = _interopRequireDefault(require("../models/Situacion"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Sustento = _interopRequireDefault(require("../models/Sustento"));

var _Financiamiento = _interopRequireDefault(require("../models/Financiamiento"));

var _Ubicacion = _interopRequireDefault(require("../models/Ubicacion"));

var _Chasis = _interopRequireDefault(require("../models/Chasis"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Campaign = _interopRequireDefault(require("../models/Campaign"));

var _Adicional = _interopRequireDefault(require("../models/Adicional"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _Props = _interopRequireDefault(require("../models/Props"));

var _Record = _interopRequireDefault(require("../models/Record"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Marca = _interopRequireDefault(require("../models/Marca"));

var checkDuplicateRole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var name, roleEncontrado;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = req.body.name;
            _context.next = 3;
            return _Role.default.findOne({
              name: name
            });

          case 3:
            roleEncontrado = _context.sent;

            if (!roleEncontrado) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(201).json({
              message: 'El rol ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkDuplicateRole(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicateRole = checkDuplicateRole;

var checkDuplicateUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res, next) {
    var username, usuarioEncontrado;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = req.body.username;
            _context2.next = 3;
            return _User.default.findOne({
              username: username
            });

          case 3:
            usuarioEncontrado = _context2.sent;

            if (!usuarioEncontrado) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(201).json({
              message: 'El usuario ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function checkDuplicateUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkDuplicateUser = checkDuplicateUser;

var checkDuplicateModelo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res, next) {
    var name, modeloEncontrado;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = req.body.name;
            _context3.next = 3;
            return _Modelo.default.findOne({
              name: name
            });

          case 3:
            modeloEncontrado = _context3.sent;

            if (!modeloEncontrado) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              message: 'El Modelo ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkDuplicateModelo(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.checkDuplicateModelo = checkDuplicateModelo;

var checkDuplicateColor = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res, next) {
    var name, colorEncontrado;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            name = req.body.name;
            _context4.next = 3;
            return _Colores.default.findOne({
              name: name
            });

          case 3:
            colorEncontrado = _context4.sent;

            if (!colorEncontrado) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(201).json({
              message: 'El Color ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function checkDuplicateColor(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.checkDuplicateColor = checkDuplicateColor;

var checkDuplicateBanco = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res, next) {
    var name, bancoEncontrado;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            name = req.body.name;
            _context5.next = 3;
            return _Banco.default.findOne({
              name: name
            });

          case 3:
            bancoEncontrado = _context5.sent;

            if (!bancoEncontrado) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(201).json({
              message: 'La entidad Financiera ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function checkDuplicateBanco(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.checkDuplicateBanco = checkDuplicateBanco;

var checkDuplicateSectorista = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            name = req.body.name;
            _context6.next = 3;
            return _Sectorista.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context6.sent;

            if (!encontrado) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return", res.status(201).json({
              message: 'El Sectorista ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function checkDuplicateSectorista(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.checkDuplicateSectorista = checkDuplicateSectorista;

var checkDuplicateMarca = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            name = req.body.name;
            _context7.next = 3;
            return _Marca.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context7.sent;

            if (!encontrado) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", res.status(201).json({
              message: 'La Marca ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function checkDuplicateMarca(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.checkDuplicateMarca = checkDuplicateMarca;

var checkDuplicateCondicion = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            name = req.body.name;
            _context8.next = 3;
            return _Condicion.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context8.sent;

            if (!encontrado) {
              _context8.next = 6;
              break;
            }

            return _context8.abrupt("return", res.status(201).json({
              message: 'La Condición Vehicular ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function checkDuplicateCondicion(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.checkDuplicateCondicion = checkDuplicateCondicion;

var checkDuplicateSituacion = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            name = req.body.name;
            _context9.next = 3;
            return _Situacion.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context9.sent;

            if (!encontrado) {
              _context9.next = 6;
              break;
            }

            return _context9.abrupt("return", res.status(201).json({
              message: 'La Situación de Venta ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function checkDuplicateSituacion(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.checkDuplicateSituacion = checkDuplicateSituacion;

var checkDuplicateSucursal = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            name = req.body.name;
            _context10.next = 3;
            return _Sucursal.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context10.sent;

            if (!encontrado) {
              _context10.next = 6;
              break;
            }

            return _context10.abrupt("return", res.status(201).json({
              message: 'La Sucursal ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function checkDuplicateSucursal(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.checkDuplicateSucursal = checkDuplicateSucursal;

var checkDuplicateSustento = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            name = req.body.name;
            _context11.next = 3;
            return _Sustento.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context11.sent;

            if (!encontrado) {
              _context11.next = 6;
              break;
            }

            return _context11.abrupt("return", res.status(201).json({
              message: 'El Sustento ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function checkDuplicateSustento(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.checkDuplicateSustento = checkDuplicateSustento;

var checkDuplicateFinanciamiento = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            name = req.body.name;
            _context12.next = 3;
            return _Financiamiento.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context12.sent;

            if (!encontrado) {
              _context12.next = 6;
              break;
            }

            return _context12.abrupt("return", res.status(201).json({
              message: 'El Financiamiento ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function checkDuplicateFinanciamiento(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

exports.checkDuplicateFinanciamiento = checkDuplicateFinanciamiento;

var checkDuplicateUbicacion = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            name = req.body.name;
            _context13.next = 3;
            return _Ubicacion.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context13.sent;

            if (!encontrado) {
              _context13.next = 6;
              break;
            }

            return _context13.abrupt("return", res.status(201).json({
              message: 'La Ubicacion ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function checkDuplicateUbicacion(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

exports.checkDuplicateUbicacion = checkDuplicateUbicacion;

var checkDuplicateChasis = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            name = req.body.name;
            _context14.next = 3;
            return _Chasis.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context14.sent;

            if (!encontrado) {
              _context14.next = 6;
              break;
            }

            return _context14.abrupt("return", res.status(201).json({
              message: 'El Chasis ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function checkDuplicateChasis(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

exports.checkDuplicateChasis = checkDuplicateChasis;

var checkDuplicateAnio = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            name = req.body.name;
            _context15.next = 3;
            return _Anio.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context15.sent;

            if (!encontrado) {
              _context15.next = 6;
              break;
            }

            return _context15.abrupt("return", res.status(201).json({
              message: 'El Año ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function checkDuplicateAnio(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();

exports.checkDuplicateAnio = checkDuplicateAnio;

var checkDuplicateVendedor = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16(req, res, next) {
    var _req$body, name, document, encontrado, encontrado1;

    return _regenerator.default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, document = _req$body.document;
            _context16.next = 3;
            return _Seller.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context16.sent;
            _context16.next = 6;
            return _Seller.default.findOne({
              document: document
            });

          case 6:
            encontrado1 = _context16.sent;

            if (!encontrado) {
              _context16.next = 9;
              break;
            }

            return _context16.abrupt("return", res.status(201).json({
              message: 'El Vendedor ya existe'
            }));

          case 9:
            if (!encontrado1) {
              _context16.next = 11;
              break;
            }

            return _context16.abrupt("return", res.status(201).json({
              message: 'El DNI ya existe'
            }));

          case 11:
            next();

          case 12:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function checkDuplicateVendedor(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();

exports.checkDuplicateVendedor = checkDuplicateVendedor;

var checkDuplicateCliente = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(req, res, next) {
    var _req$body2, name, document, encontrado, encontrado1;

    return _regenerator.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, document = _req$body2.document;
            _context17.next = 3;
            return _Customer.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context17.sent;
            _context17.next = 6;
            return _Customer.default.findOne({
              document: document
            });

          case 6:
            encontrado1 = _context17.sent;

            if (!encontrado) {
              _context17.next = 9;
              break;
            }

            return _context17.abrupt("return", res.status(201).json({
              message: 'El Cliente ya existe'
            }));

          case 9:
            if (!encontrado1) {
              _context17.next = 11;
              break;
            }

            return _context17.abrupt("return", res.status(201).json({
              message: 'El DNI ya existe'
            }));

          case 11:
            next();

          case 12:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function checkDuplicateCliente(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();

exports.checkDuplicateCliente = checkDuplicateCliente;

var checkDuplicateCampania = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            name = req.body.name;
            _context18.next = 3;
            return _Campaign.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context18.sent;

            if (!encontrado) {
              _context18.next = 6;
              break;
            }

            return _context18.abrupt("return", res.status(201).json({
              message: 'La Campaña ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function checkDuplicateCampania(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();

exports.checkDuplicateCampania = checkDuplicateCampania;

var checkDuplicateAdicional = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            name = req.body.name;
            _context19.next = 3;
            return _Adicional.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context19.sent;

            if (!encontrado) {
              _context19.next = 6;
              break;
            }

            return _context19.abrupt("return", res.status(201).json({
              message: 'El Adicional ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function checkDuplicateAdicional(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

exports.checkDuplicateAdicional = checkDuplicateAdicional;

var checkDuplicateVehiculo = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(req, res, next) {
    var _req$body3, cod_tdp, version, encontrado, encontrado1;

    return _regenerator.default.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _req$body3 = req.body, cod_tdp = _req$body3.cod_tdp, version = _req$body3.version;
            _context20.next = 3;
            return _Vehicle.default.findOne({
              cod_tdp: cod_tdp
            });

          case 3:
            encontrado = _context20.sent;
            _context20.next = 6;
            return _Vehicle.default.findOne({
              version: version
            });

          case 6:
            encontrado1 = _context20.sent;

            if (!encontrado) {
              _context20.next = 9;
              break;
            }

            return _context20.abrupt("return", res.status(201).json({
              message: 'El COD-TDP ya existe'
            }));

          case 9:
            if (!encontrado1) {
              _context20.next = 11;
              break;
            }

            return _context20.abrupt("return", res.status(201).json({
              message: 'El vehículo ya existe'
            }));

          case 11:
            next();

          case 12:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function checkDuplicateVehiculo(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

exports.checkDuplicateVehiculo = checkDuplicateVehiculo;

var checkDuplicateAccesorio = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(req, res, next) {
    var name, encontrado;
    return _regenerator.default.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            name = req.body.name;
            _context21.next = 3;
            return _Props.default.findOne({
              name: name
            });

          case 3:
            encontrado = _context21.sent;

            if (!encontrado) {
              _context21.next = 6;
              break;
            }

            return _context21.abrupt("return", res.status(201).json({
              message: 'El Accesorio ya existe'
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function checkDuplicateAccesorio(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();

exports.checkDuplicateAccesorio = checkDuplicateAccesorio;

var checkDuplicateTramite = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(req, res, next) {
    var sales, expediente, cod_exp, encontrado;
    return _regenerator.default.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            sales = req.body.sales;
            _context22.next = 3;
            return _Sale.default.find({
              nro_comprobante: {
                $in: sales
              }
            });

          case 3:
            expediente = _context22.sent;
            cod_exp = expediente.map(function (rs) {
              return rs._id;
            });
            _context22.next = 7;
            return _Record.default.findOne({
              sales: cod_exp
            });

          case 7:
            encontrado = _context22.sent;

            if (!encontrado) {
              _context22.next = 10;
              break;
            }

            return _context22.abrupt("return", res.status(201).json({
              message: 'El Trámite ya existe'
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function checkDuplicateTramite(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();

exports.checkDuplicateTramite = checkDuplicateTramite;

var checkDuplicateExpediente = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(req, res, next) {
    var serie_tdp, encontrado;
    return _regenerator.default.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            serie_tdp = req.body.serie_tdp;

            if (!(serie_tdp.length > 0)) {
              _context23.next = 10;
              break;
            }

            _context23.next = 4;
            return _Sale.default.findOne({
              serie_tdp: serie_tdp
            });

          case 4:
            encontrado = _context23.sent;

            if (!encontrado) {
              _context23.next = 7;
              break;
            }

            return _context23.abrupt("return", res.status(201).json({
              message: 'Esta SERIE-TDP ya está asignada'
            }));

          case 7:
            next();
            _context23.next = 11;
            break;

          case 10:
            next();

          case 11:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function checkDuplicateExpediente(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

exports.checkDuplicateExpediente = checkDuplicateExpediente;
//# sourceMappingURL=verifyDuplicate.js.map