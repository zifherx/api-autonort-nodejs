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

var _campania = _interopRequireDefault(require("./campania.routes"));

var _tipoCampania = _interopRequireDefault(require("./tipoCampania.routes"));

var _adicional = _interopRequireDefault(require("./adicional.routes"));

var _props = _interopRequireDefault(require("./props.routes"));

var _customer = _interopRequireDefault(require("./customer.routes"));

var _files = _interopRequireDefault(require("./files.routes"));

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

var _statusTasacion = _interopRequireDefault(require("./statusTasacion.routes"));

var _maf = _interopRequireDefault(require("./maf.routes"));

var _jefaturaVentas = _interopRequireDefault(require("./jefaturaVentas.routes"));

var _statusMafRequest = _interopRequireDefault(require("./statusMafRequest.routes"));

var _tasacion = _interopRequireDefault(require("./tasacion.routes"));

var _tecnico = _interopRequireDefault(require("./tecnico.routes"));

var _aservicios = _interopRequireDefault(require("./aservicios.routes"));

var _marcaT = _interopRequireDefault(require("./marcaT.routes"));

var _modeloT = _interopRequireDefault(require("./modeloT.routes"));

var _accesorio = _interopRequireDefault(require("./accesorio.routes"));

var _portada = _interopRequireDefault(require("./portada.routes"));

var _submodule = _interopRequireDefault(require("./submodule.routes"));

var _area = _interopRequireDefault(require("./area.routes"));

var _tipoComprobante = _interopRequireDefault(require("./tipoComprobante.routes"));

var _motivo = _interopRequireDefault(require("./motivo.routes"));

var _statusFacturacion = _interopRequireDefault(require("./statusFacturacion.routes"));

var _statusEntrega = _interopRequireDefault(require("./statusEntrega.routes"));

var _entrega = _interopRequireDefault(require("./entrega.routes"));

var _condicionAccesorio = _interopRequireDefault(require("./condicionAccesorio.routes"));

var _estadoSeguro = _interopRequireDefault(require("./estadoSeguro.routes"));

var _estadoUsados = _interopRequireDefault(require("./estadoUsados.routes"));

var _tipoUso = _interopRequireDefault(require("./tipoUso.routes"));

var _origenConcesionario = _interopRequireDefault(require("./origenConcesionario.routes"));

var _metodoAtencion = _interopRequireDefault(require("./metodoAtencion.routes"));

var _civil = _interopRequireDefault(require("./civil.routes"));

var _planMaf = _interopRequireDefault(require("./planMaf.routes"));

var _filtroMaf = _interopRequireDefault(require("./filtroMaf.routes"));

var _helper = _interopRequireDefault(require("./helper.routes"));

var _tipoDocumento = _interopRequireDefault(require("./tipoDocumento.routes"));

var _permiso = _interopRequireDefault(require("./permiso.routes"));

var _menuG = _interopRequireDefault(require("./menuG.routes"));

var _moduloG = _interopRequireDefault(require("./moduloG.routes"));

var _submoduloG = _interopRequireDefault(require("./submoduloG.routes"));

var _tipoProducto = _interopRequireDefault(require("./tipoProducto.routes"));

var _mes = _interopRequireDefault(require("./mes.routes"));

var _resultado = _interopRequireDefault(require("./resultado.routes"));

var _stockAccesorio = _interopRequireDefault(require("./stockAccesorio.routes"));

var _ventasAccesorio = _interopRequireDefault(require("./ventasAccesorio.routes"));

var _listaEspera = _interopRequireDefault(require("./listaEspera.routes"));

var _estadoListaEspera = _interopRequireDefault(require("./estadoListaEspera.routes"));

var _nMas = _interopRequireDefault(require("./nMas2.routes"));

var _usados = _interopRequireDefault(require("./usados.routes"));

var _tcambio = _interopRequireDefault(require("./tcambio.routes"));

var _tunningAccesorios = _interopRequireDefault(require("./tunningAccesorios.routes"));

var _estadoTunningAccesorios = _interopRequireDefault(require("./estadoTunningAccesorios.routes"));

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.send('Api Swagger');
});
router.use('/auth', _auth.default);
router.use('/users', _user.default);
router.use('/roles', _roles.default);
router.use('/vehicles', _vehicle.default);
router.use('/seller', _seller.default);
router.use('/campania', _campania.default);
router.use('/tipo-campania', _tipoCampania.default);
router.use('/adicional', _adicional.default);
router.use('/props', _props.default);
router.use('/customer', _customer.default);
router.use('/files', _files.default);
router.use('/record', _record.default);
router.use('/modelo', _modelo.default);
router.use('/banco', _banco.default);
router.use('/asesor-conexo', _conexos.default);
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
router.use('/status-maf', _statusMafRequest.default);
router.use('/tasacion', _tasacion.default);
router.use('/tecnico-automotriz', _tecnico.default);
router.use('/service-advisor', _aservicios.default);
router.use('/brand', _marcaT.default);
router.use('/models', _modeloT.default);
router.use('/accesorios', _accesorio.default);
router.use('/portada', _portada.default);
router.use('/submodule', _submodule.default);
router.use('/area', _area.default);
router.use('/status-tasacion', _statusTasacion.default);
router.use('/comprobante', _tipoComprobante.default);
router.use('/motivo-rechazo', _motivo.default);
router.use('/status-facturacion', _statusFacturacion.default);
router.use('/status-entrega', _statusEntrega.default);
router.use('/entregas', _entrega.default);
router.use('/condicion-accesorio', _condicionAccesorio.default);
router.use('/status-seguro', _estadoSeguro.default);
router.use('/status-usados', _estadoUsados.default);
router.use('/tipo-uso', _tipoUso.default);
router.use('/origen-concesionario', _origenConcesionario.default);
router.use('/metodo-atencion', _metodoAtencion.default);
router.use('/estado-civil', _civil.default);
router.use('/plan-maf', _planMaf.default);
router.use('/filtro-maf', _filtroMaf.default);
router.use('/helper', _helper.default);
router.use('/documento-identidad', _tipoDocumento.default);
router.use('/permisos', _permiso.default);
router.use('/tipo-producto', _tipoProducto.default);
router.use('/mes', _mes.default);
router.use('/resultado', _resultado.default);
router.use('/accesorio-stock', _stockAccesorio.default);
router.use('/accesorio-stock-ventas', _ventasAccesorio.default);
router.use('/lista-espera', _listaEspera.default);
router.use('/estado-lespera', _estadoListaEspera.default);
router.use('/n2', _nMas.default);
router.use('/usados', _usados.default);
router.use('/t-cambio', _tcambio.default);
router.use('/tunning-accesorios', _tunningAccesorios.default);
router.use('/estado-tAccesorios', _estadoTunningAccesorios.default); //Modulos

router.use('/menuG', _menuG.default);
router.use('/moduloG', _moduloG.default);
router.use('/submoduloG', _submoduloG.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map