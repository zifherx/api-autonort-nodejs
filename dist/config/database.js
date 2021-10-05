"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

_mongoose.default.connect(_config.default.mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("DB ".concat(db.connection.name, " is connected"));
}).catch(function (err) {
  return console.error(err);
});
//# sourceMappingURL=database.js.map