"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes"));

var _initialSetup = require("./libs/initialSetup");

var app = (0, _express.default)();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createUserAdmin)(); //Settings

app.set('port', process.env.PORT || 4000); //Middlewares

app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: true
})); //Routes

app.get('/', function (req, res) {
  res.json('Bienvenido');
});
app.use('/api', _routes.default); //Static Files

app.use(_express.default.static(_path.default.join(__dirname, '/public'))); //app.use(express.static(__dirname + '\\public'));

var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map