"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var anioSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Anio', anioSchema);

exports.default = _default;
//# sourceMappingURL=Anio.js.map