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

var _adicional = _interopRequireDefault(require("./adicional.routes"));

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

var _chasis = _interopRequireDefault(require("./chasis.routes"));

var _anio = _interopRequireDefault(require("./anio.routes"));

var _marca = _interopRequireDefault(require("./marca.routes"));

var _delivery = _interopRequireDefault(require("./delivery.routes"));

var _seguro = _interopRequireDefault(require("./seguro.routes"));

var _conexos = _interopRequireDefault(require("./conexos.routes"));

var _endoso = _interopRequireDefault(require("./endoso.routes"));

var _aseguradora = _interopRequireDefault(require("./aseguradora.routes"));

var _operacion = _interopRequireDefault(require("./operacion.routes"));

var _statusFile = _interopRequireDefault(require("./statusFile.routes"));

var _statusRP = _interopRequireDefault(require("./statusRP.routes"));

var _statusAAP = _interopRequireDefault(require("./statusAAP.routes"));

var _maf = _interopRequireDefault(require("./maf.routes"));

var _jefaturaVentas = _interopRequireDefault(require("./jefaturaVentas.routes"));

var _statusMafRequest = _interopRequireDefault(require("./statusMafRequest.routes"));

var _tasacion = _interopRequireDefault(require("./tasacion.routes"));

var _tecnico = _interopRequireDefault(require("./tecnico.routes"));

var _aservicios = _interopRequireDefault(require("./aservicios.routes"));

var _marcaT = _interopRequireDefault(require("./marcaT.routes"));

var _modeloT = _interopRequireDefault(require("./modeloT.routes"));

var _meta = _interopRequireDefault(require("./meta.routes"));

var _accesorio = _interopRequireDefault(require("./accesorio.routes"));

var _oferta = _interopRequireDefault(require("./oferta.routes"));

var _portada = _interopRequireDefault(require("./portada.routes"));

var _submodule = _interopRequireDefault(require("./submodule.routes"));

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.send('Api Swagger');
});
router.use('/auth', _auth.default);
router.use('/users', _user.default);
router.use('/roles', _roles.default);
router.use('/vehicles', _vehicle.default);
router.use('/seller', _seller.default);
router.use('/campania', _campaign.default);
router.use('/adicional', _adicional.default);
router.use('/props', _props.default);
router.use('/customer', _customer.default);
router.use('/sale', _sale.default);
router.use('/record', _record.default);
router.use('/modelo', _modelo.default);
router.use('/banco', _banco.default);
router.use('/conexo', _conexos.default);
router.use('/endoso', _endoso.default);
router.use('/color', _colores.default);
router.use('/sectorista', _sectorista.default);
router.use('/situacion', _situacion.default);
router.use('/condicion', _condicion.default);
router.use('/sucursal', _sucursal.default);
router.use('/sustento', _sustento.default);
router.use('/financiamiento', _financiamiento.default);
router.use('/ubicacion', _ubicacion.default);
router.use('/chasis', _chasis.default);
router.use('/anios', _anio.default);
router.use('/marca', _marca.default);
router.use('/delivery', _delivery.default);
router.use('/seguro', _seguro.default);
router.use('/aseguradora', _aseguradora.default);
router.use('/tipo-operacion', _operacion.default);
router.use('/status-file', _statusFile.default);
router.use('/status-rp', _statusRP.default);
router.use('/status-aap', _statusAAP.default);
router.use('/maf', _maf.default);
router.use('/jefatura-ventas', _jefaturaVentas.default);
router.use('/status-maf-request', _statusMafRequest.default);
router.use('/tasacion', _tasacion.default);
router.use('/technical', _tecnico.default);
router.use('/service-advisor', _aservicios.default);
router.use('/brand', _marcaT.default);
router.use('/models', _modeloT.default);
router.use('/metas', _meta.default);
router.use('/accesorio', _accesorio.default);
router.use('/oferta', _oferta.default);
router.use('/portada', _portada.default);
router.use('/submodule', _submodule.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map