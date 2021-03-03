"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./auth.routes"));

var _user = _interopRequireDefault(require("./user.routes"));

var _roles = _interopRequireDefault(require("./roles.routes"));

var _vehicle = _interopRequireDefault(require("./vehicle.routes"));

var _seller = _interopRequireDefault(require("./seller.routes"));

var _campaign = _interopRequireDefault(require("./campaign.routes"));

var _props = _interopRequireDefault(require("./props.routes"));

var _customer = _interopRequireDefault(require("./customer.routes"));

var _sale = _interopRequireDefault(require("./sale.routes"));

var _record = _interopRequireDefault(require("./record.routes"));

var _modelo = _interopRequireDefault(require("./modelo.routes"));

var _banco = _interopRequireDefault(require("./banco.routes"));

var _colores = _interopRequireDefault(require("./colores.routes"));

var _sectorista = _interopRequireDefault(require("./sectorista.routes"));

var _situacion = _interopRequireDefault(require("./situacion.routes"));

var _condicion = _interopRequireDefault(require("./condicion.routes"));

var _financiamiento = _interopRequireDefault(require("./financiamiento.routes"));

var _sucursal = _interopRequireDefault(require("./sucursal.routes"));

var _sustento = _interopRequireDefault(require("./sustento.routes"));

var _ubicacion = _interopRequireDefault(require("./ubicacion.routes"));

var router = (0, _express.Router)();
router.use('/auth', _auth.default);
router.use('/users', _user.default);
router.use('/roles', _roles.default);
router.use('/vehicles', _vehicle.default);
router.use('/seller', _seller.default);
router.use('/campania', _campaign.default);
router.use('/props', _props.default);
router.use('/customer', _customer.default);
router.use('/sale', _sale.default);
router.use('/records', _record.default);
router.use('/modelo', _modelo.default);
router.use('/banco', _banco.default);
router.use('/color', _colores.default);
router.use('/sectorista', _sectorista.default);
router.use('/situacion', _situacion.default);
router.use('/condicion', _condicion.default);
router.use('/sucursal', _sucursal.default);
router.use('/sustento', _sustento.default);
router.use('/financiamiento', _financiamiento.default);
router.use('/ubicacion', _ubicacion.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map