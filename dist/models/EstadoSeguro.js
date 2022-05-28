"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var estadoSeguroSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  value: {
    type: Number
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('EstadoSeguro', estadoSeguroSchema);

exports.default = _default;
//# sourceMappingURL=EstadoSeguro.js.map