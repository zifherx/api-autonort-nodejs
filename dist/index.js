"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

require("./config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(_app.default.get('port'), function () {
  console.log('Server on port', _app.default.get('port'));
});
//# sourceMappingURL=index.js.map