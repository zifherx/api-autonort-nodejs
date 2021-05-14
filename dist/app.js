"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _helmet = _interopRequireDefault(require("helmet"));

var _routes = _interopRequireDefault(require("./routes"));

var initData = _interopRequireWildcard(require("./libs/initialSetup"));

var app = (0, _express.default)();
initData.createRoles();
initData.createUserAdmin();
initData.createConfigAnios();
initData.createConfigColor();
initData.createConfigChasis();
initData.createConfigMarca();
initData.createConfigBanco();
initData.createConfigFinanciamiento();
initData.createConfigModelo();
initData.createConfigSectorista();
initData.createConfigCondicion();
initData.createConfigSituacion();
initData.createConfigSucursal();
initData.createConfigSustento();
initData.createConfigUbicacion(); //Settings

app.set('port', process.env.PORT || 4000); //Middlewares

app.use((0, _morgan.default)('dev'));
app.use((0, _helmet.default)());
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
})); //Routes

app.get('/', function (req, res) {
  res.json('Bienvenido Puto');
});
app.use('/api', _routes.default); //Static Files

app.use(_express.default.static(_path.default.join(__dirname, '/public'))); //app.use(express.static(__dirname + '\\public'));

var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map