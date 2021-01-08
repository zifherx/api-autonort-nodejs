"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _roles = _interopRequireDefault(require("./routes/roles.routes"));

var _vehicle = _interopRequireDefault(require("./routes/vehicle.routes"));

var _seller = _interopRequireDefault(require("./routes/seller.routes"));

var _campaign = _interopRequireDefault(require("./routes/campaign.routes"));

var _props = _interopRequireDefault(require("./routes/props.routes"));

var _customer = _interopRequireDefault(require("./routes/customer.routes"));

var _financing = _interopRequireDefault(require("./routes/financing.routes"));

var _sale = _interopRequireDefault(require("./routes/sale.routes"));

var _record = _interopRequireDefault(require("./routes/record.routes"));

var _path = _interopRequireDefault(require("path"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _initialSetup = require("./libs/initialSetup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _initialSetup.createRoles)(); //Settings

app.set('port', process.env.PORT || 4000); //Middlewares

app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: true
})); //Static Files

app.use('/public', _express.default.static(_path.default.join(__dirname, 'public'))); //Routes

app.get('/', function (req, res) {
  res.json({
    message: 'Bienvenido'
  });
});
app.use('/api/auth', _auth.default);
app.use('/api/users', _user.default);
app.use('/api/roles', _roles.default);
app.use('/api/vehicles', _vehicle.default);
app.use('/api/seller', _seller.default);
app.use('/api/campaign', _campaign.default);
app.use('/api/props', _props.default);
app.use('/api/customer', _customer.default);
app.use('/api/financing', _financing.default);
app.use('/api/sale', _sale.default);
app.use('/api/records', _record.default);
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map