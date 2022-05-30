"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _config = _interopRequireDefault(require("./config/config"));

var initData = _interopRequireWildcard(require("./libs/initialSetup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
initData.createConfigUbicacion();
initData.createConfigStatusFile(); //Settings

app.set('port', Number(_config.default.API_PORT) || Number(4000)); //Middlewares

app.use((0, _morgan.default)('dev')); // app.use(helmet());

app.use((0, _cors.default)({
  origin: ['https://autonortnor.com', 'http://localhost:8080']
}));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
})); //Routes

app.use('/api', _routes.default); //Static Files

app.use('/public', _express.default.static(_path.default.join(__dirname, 'public')));
app.use('/views', _express.default.static(_path.default.join(__dirname, 'views')));
app.use('/uploads', _express.default.static(_path.default.join(__dirname, 'uploads')));
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map