"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

function conteoUnidadesCanceladas() {
  return _conteoUnidadesCanceladas.apply(this, arguments);
}

function _conteoUnidadesCanceladas() {
  _conteoUnidadesCanceladas = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var unidCanceladas;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Sale.default.where({
              estatus_venta: 'Cancelado'
            });

          case 2:
            unidCanceladas = _context2.sent;
            return _context2.abrupt("return", unidCanceladas.count() > 0);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _conteoUnidadesCanceladas.apply(this, arguments);
}

module.exports = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var resultado;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.all([conteoUnidadesCanceladas()]);

        case 2:
          resultado = _context.sent;
          return _context.abrupt("return", {
            canceladas: resultado[0]
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
//# sourceMappingURL=stats.js.map