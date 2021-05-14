"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfigUbicacion = exports.createConfigSustento = exports.createConfigSucursal = exports.createConfigSituacion = exports.createConfigCondicion = exports.createConfigSectorista = exports.createConfigModelo = exports.createConfigFinanciamiento = exports.createConfigBanco = exports.createConfigMarca = exports.createConfigChasis = exports.createConfigColor = exports.createConfigAnios = exports.createUserAdmin = exports.createRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _User = _interopRequireDefault(require("../models/User"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Colores = _interopRequireDefault(require("../models/Colores"));

var _Chasis = _interopRequireDefault(require("../models/Chasis"));

var _Marca = _interopRequireDefault(require("../models/Marca"));

var _Banco = _interopRequireDefault(require("../models/Banco"));

var _Financiamiento = _interopRequireDefault(require("../models/Financiamiento"));

var _Modelo = _interopRequireDefault(require("../models/Modelo"));

var _Sectorista = _interopRequireDefault(require("../models/Sectorista"));

var _Condicion = _interopRequireDefault(require("../models/Condicion"));

var _Situacion = _interopRequireDefault(require("../models/Situacion"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Sustento = _interopRequireDefault(require("../models/Sustento"));

var _Ubicacion = _interopRequireDefault(require("../models/Ubicacion"));

var createRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var count, values;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role.default.estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Role.default({
              name: 'Administrador'
            }).save(), new _Role.default({
              name: 'Jefe-ADV'
            }).save(), new _Role.default({
              name: 'Jefe-Tunning'
            }).save(), new _Role.default({
              name: 'Jefe-Ventas'
            }).save(), new _Role.default({
              name: 'Asistente-Inmatriculaciones'
            }).save(), new _Role.default({
              name: 'Usuario'
            }).save(), new _Role.default({
              name: 'Vendedor'
            }).save(), new _Role.default({
              name: 'Asistente-CS'
            }).save()]);

          case 8:
            values = _context.sent;
            console.log(values);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createUserAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var master, usuarios;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User.default.estimatedDocumentCount();

          case 3:
            master = _context2.sent;

            if (!(master > 0)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            _context2.t0 = Promise;
            _context2.t1 = _User.default;
            _context2.next = 10;
            return _User.default.encryptPassword('admin');

          case 10:
            _context2.t2 = _context2.sent;
            _context2.t3 = {
              name: 'Fernando Rojas',
              username: 'frojasq',
              password: _context2.t2,
              roles: '60940f326432ff2be060a423',
              activo: 'Activo',
              sucursal: 'Trujillo'
            };
            _context2.t4 = new _context2.t1(_context2.t3).save();
            _context2.t5 = [_context2.t4];
            _context2.next = 16;
            return _context2.t0.all.call(_context2.t0, _context2.t5);

          case 16:
            usuarios = _context2.sent;
            console.log(usuarios);
            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t6 = _context2["catch"](0);
            console.error(_context2.t6);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 20]]);
  }));

  return function createUserAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUserAdmin = createUserAdmin;

var createConfigAnios = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Anio.default.estimatedDocumentCount();

          case 3:
            count = _context3.sent;

            if (!(count > 0)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            _context3.next = 8;
            return Promise.all([new _Anio.default({
              name: '2020',
              status: 'Activo'
            }).save(), new _Anio.default({
              name: '2021',
              status: 'Activo'
            }).save(), new _Anio.default({
              name: '2022',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context3.sent;
            console.log(poblado);
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function createConfigAnios() {
    return _ref3.apply(this, arguments);
  };
}();

exports.createConfigAnios = createConfigAnios;

var createConfigColor = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Colores.default.estimatedDocumentCount();

          case 3:
            count = _context4.sent;

            if (!(count > 0)) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            _context4.next = 8;
            return Promise.all([new _Colores.default({
              name: 'ANARANJADO METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'AZUL METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'AZUL OSCURO METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'BEIGE MICA',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'BEIGE OSCURO MICA',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'BEIGE/BLANCO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'BLANCO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'BLANCO PERLA',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'GRIS CELESTIAL METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'GRIS OSCURO METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'NEGRO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'NEGRO METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'NEGRO MICA',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'NEGRO/BLANCO PERLA',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'NEGRO/GRIS OSCURO MET.',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'PLATA GALAXY METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'PLATA METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'ROJO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'ROJO ESCARLATA METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'ROJO METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'ROJO MICA',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'ROJO MICA METALICO',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'ROJO OSCURO MICA',
              status: 'Activo'
            }).save(), new _Colores.default({
              name: 'ROJO SOLIDO',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context4.sent;
            console.log(poblado);
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function createConfigColor() {
    return _ref4.apply(this, arguments);
  };
}();

exports.createConfigColor = createConfigColor;

var createConfigChasis = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Chasis.default.estimatedDocumentCount();

          case 3:
            count = _context5.sent;

            if (!(count > 0)) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return");

          case 6:
            _context5.next = 8;
            return Promise.all([new _Chasis.default({
              name: 'Sedan',
              status: 'Activo'
            }).save(), new _Chasis.default({
              name: 'Hatchback',
              status: 'Activo'
            }).save(), new _Chasis.default({
              name: 'Pick-Up',
              status: 'Activo'
            }).save(), new _Chasis.default({
              name: 'Coupe',
              status: 'Activo'
            }).save(), new _Chasis.default({
              name: 'SUV',
              status: 'Activo'
            }).save(), new _Chasis.default({
              name: 'Cabinado',
              status: 'Activo'
            }).save(), new _Chasis.default({
              name: 'MicroBus',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context5.sent;
            console.log(poblado);
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function createConfigChasis() {
    return _ref5.apply(this, arguments);
  };
}();

exports.createConfigChasis = createConfigChasis;

var createConfigMarca = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _Marca.default.estimatedDocumentCount();

          case 3:
            count = _context6.sent;

            if (!(count > 0)) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return");

          case 6:
            _context6.next = 8;
            return Promise.all([new _Marca.default({
              name: 'Toyota',
              status: 'Activo'
            }).save(), new _Marca.default({
              name: 'Hino',
              status: 'Inactivo'
            }).save(), new _Marca.default({
              name: 'Lexus',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context6.sent;
            console.log(poblado);
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));

  return function createConfigMarca() {
    return _ref6.apply(this, arguments);
  };
}();

exports.createConfigMarca = createConfigMarca;

var createConfigBanco = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _Banco.default.estimatedDocumentCount();

          case 3:
            count = _context7.sent;

            if (!(count > 0)) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return");

          case 6:
            _context7.next = 8;
            return Promise.all([new _Banco.default({
              name: 'AUTOPLAN',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'BANBIF',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'BANCO FALABELLA',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'BANCO NACION',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'BBVA',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'BCP',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'CAJA PIURA',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'CAJA SULLANA',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'CAJA TRUJILLO',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'CFC',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'CONTADO',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'COOPERATIVA LEON XII',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'COOPERATIVA SAN LORENZO',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'CREDISCOTIA',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'EDIFICAR',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'ENDOSO',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'FINANCIERA COMPARTAMOS',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'FINANCIERO',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'INTERBANK',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'LEASING TOTAL',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'MAF',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'MAQUISTEMAS',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'MI BANCO',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'OPCION TOYOTA',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'PANDERO',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'SANTANDER',
              status: 'Activo'
            }).save(), new _Banco.default({
              name: 'SCOTIABANK',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context7.sent;
            console.log(poblado);
            _context7.next = 15;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 12]]);
  }));

  return function createConfigBanco() {
    return _ref7.apply(this, arguments);
  };
}();

exports.createConfigBanco = createConfigBanco;

var createConfigFinanciamiento = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _Financiamiento.default.estimatedDocumentCount();

          case 3:
            count = _context8.sent;

            if (!(count > 0)) {
              _context8.next = 6;
              break;
            }

            return _context8.abrupt("return");

          case 6:
            _context8.next = 8;
            return Promise.all([new _Financiamiento.default({
              name: 'ACTIVO FIJO',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'CONTADO',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'CREDITO COMERCIAL',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'CREDITO PERSONAL',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'CREDITO VEHICULAR',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'EN PARTE DE PAGO',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'ENDOSO',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'LEASING',
              status: 'Activo'
            }).save(), new _Financiamiento.default({
              name: 'LICITACION',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context8.sent;
            console.log(poblado);
            _context8.next = 15;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            console.error(_context8.t0);

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 12]]);
  }));

  return function createConfigFinanciamiento() {
    return _ref8.apply(this, arguments);
  };
}();

exports.createConfigFinanciamiento = createConfigFinanciamiento;

var createConfigModelo = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _Modelo.default.estimatedDocumentCount();

          case 3:
            count = _context9.sent;

            if (!(count > 0)) {
              _context9.next = 6;
              break;
            }

            return _context9.abrupt("return");

          case 6:
            _context9.next = 8;
            return Promise.all([new _Modelo.default({
              name: '4Runner',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Agya',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Avanza',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'C-HR',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Corolla',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Dutro',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Etios',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'FC',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'FD',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'FJ Cruiser',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'FM350',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Fortuner',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'GB',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'GD',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'GH',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'GT86',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Hiace',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Hilux',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Land Cruiser Prado',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Prius',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'RAV4',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Rush',
              status: 'Activo'
            }).save(), new _Modelo.default({
              name: 'Yaris',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context9.sent;
            console.log(poblado);
            _context9.next = 15;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            console.error(_context9.t0);

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 12]]);
  }));

  return function createConfigModelo() {
    return _ref9.apply(this, arguments);
  };
}();

exports.createConfigModelo = createConfigModelo;

var createConfigSectorista = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _Sectorista.default.estimatedDocumentCount();

          case 3:
            count = _context10.sent;

            if (!(count > 0)) {
              _context10.next = 6;
              break;
            }

            return _context10.abrupt("return");

          case 6:
            _context10.next = 8;
            return Promise.all([new _Sectorista.default({
              name: 'ARACELY RIVERA',
              status: 'Activo'
            }).save(), new _Sectorista.default({
              name: 'OSCAR VERA',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context10.sent;
            console.log(poblado);
            _context10.next = 15;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](0);
            console.error(_context10.t0);

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 12]]);
  }));

  return function createConfigSectorista() {
    return _ref10.apply(this, arguments);
  };
}();

exports.createConfigSectorista = createConfigSectorista;

var createConfigCondicion = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _Condicion.default.estimatedDocumentCount();

          case 3:
            count = _context11.sent;

            if (!(count > 0)) {
              _context11.next = 6;
              break;
            }

            return _context11.abrupt("return");

          case 6:
            _context11.next = 8;
            return Promise.all([new _Condicion.default({
              name: 'ASIGNADO',
              status: 'Activo'
            }).save(), new _Condicion.default({
              name: 'BLOQUEADO',
              status: 'Activo'
            }).save(), new _Condicion.default({
              name: 'CONSEGUIR',
              status: 'Activo'
            }).save(), new _Condicion.default({
              name: 'EXHIBICIÓN',
              status: 'Activo'
            }).save(), new _Condicion.default({
              name: 'LIBRE',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context11.sent;
            console.log(poblado);
            _context11.next = 15;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](0);
            console.error(_context11.t0);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 12]]);
  }));

  return function createConfigCondicion() {
    return _ref11.apply(this, arguments);
  };
}();

exports.createConfigCondicion = createConfigCondicion;

var createConfigSituacion = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _Situacion.default.estimatedDocumentCount();

          case 3:
            count = _context12.sent;

            if (!(count > 0)) {
              _context12.next = 6;
              break;
            }

            return _context12.abrupt("return");

          case 6:
            _context12.next = 8;
            return Promise.all([new _Situacion.default({
              name: 'Anticipo',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Cancelado',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Cancelado PT',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Credito',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Devolución',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'En Espera',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Facturado',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Libre',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Por Desembolsar',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Reservado',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Reservado C',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Reservado L',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Stand By',
              status: 'Activo'
            }).save(), new _Situacion.default({
              name: 'Test Drive',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context12.sent;
            console.log(poblado);
            _context12.next = 15;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](0);
            console.error(_context12.t0);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 12]]);
  }));

  return function createConfigSituacion() {
    return _ref12.apply(this, arguments);
  };
}();

exports.createConfigSituacion = createConfigSituacion;

var createConfigSucursal = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _Sucursal.default.estimatedDocumentCount();

          case 3:
            count = _context13.sent;

            if (!(count > 0)) {
              _context13.next = 6;
              break;
            }

            return _context13.abrupt("return");

          case 6:
            _context13.next = 8;
            return Promise.all([new _Sucursal.default({
              name: 'Jaén',
              status: 'Activo'
            }).save(), new _Sucursal.default({
              name: 'Tarapoto',
              status: 'Activo'
            }).save(), new _Sucursal.default({
              name: 'Trujillo',
              status: 'Activo'
            }).save(), new _Sucursal.default({
              name: 'Chachapoyas',
              status: 'Inactivo'
            }).save()]);

          case 8:
            poblado = _context13.sent;
            console.log(poblado);
            _context13.next = 15;
            break;

          case 12:
            _context13.prev = 12;
            _context13.t0 = _context13["catch"](0);
            console.error(_context13.t0);

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 12]]);
  }));

  return function createConfigSucursal() {
    return _ref13.apply(this, arguments);
  };
}();

exports.createConfigSucursal = createConfigSucursal;

var createConfigSustento = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _Sustento.default.estimatedDocumentCount();

          case 3:
            count = _context14.sent;

            if (!(count > 0)) {
              _context14.next = 6;
              break;
            }

            return _context14.abrupt("return");

          case 6:
            _context14.next = 8;
            return Promise.all([new _Sustento.default({
              name: 'BUENA PRO',
              status: 'Activo'
            }).save(), new _Sustento.default({
              name: 'CARTA APROBACION',
              status: 'Activo'
            }).save(), new _Sustento.default({
              name: 'CONTADO',
              status: 'Activo'
            }).save(), new _Sustento.default({
              name: 'ORDEN COMPRA BANCO',
              status: 'Activo'
            }).save(), new _Sustento.default({
              name: 'ORDEN COMPRA CLIENTE',
              status: 'Activo'
            }).save(), new _Sustento.default({
              name: 'SOLICITUD COMPRA',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context14.sent;
            console.log(poblado);
            _context14.next = 15;
            break;

          case 12:
            _context14.prev = 12;
            _context14.t0 = _context14["catch"](0);
            console.error(_context14.t0);

          case 15:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 12]]);
  }));

  return function createConfigSustento() {
    return _ref14.apply(this, arguments);
  };
}();

exports.createConfigSustento = createConfigSustento;

var createConfigUbicacion = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
    var count, poblado;
    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _Ubicacion.default.estimatedDocumentCount();

          case 3:
            count = _context15.sent;

            if (!(count > 0)) {
              _context15.next = 6;
              break;
            }

            return _context15.abrupt("return");

          case 6:
            _context15.next = 8;
            return Promise.all([new _Ubicacion.default({
              name: 'ADUANAS',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'ALMACEN TRANSPESA',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'CIGUEÑA',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'EN TRANSITO',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'ENTREGADO',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'JAÉN',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'NACIONALIZACIÓN',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'PRODUCCIÓN',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'RODADO',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'TARAPOTO',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'TDP',
              status: 'Activo'
            }).save(), new _Ubicacion.default({
              name: 'TRUJILLO',
              status: 'Activo'
            }).save()]);

          case 8:
            poblado = _context15.sent;
            console.log(poblado);
            _context15.next = 15;
            break;

          case 12:
            _context15.prev = 12;
            _context15.t0 = _context15["catch"](0);
            console.error(_context15.t0);

          case 15:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 12]]);
  }));

  return function createConfigUbicacion() {
    return _ref15.apply(this, arguments);
  };
}();

exports.createConfigUbicacion = createConfigUbicacion;
//# sourceMappingURL=initialSetup.js.map