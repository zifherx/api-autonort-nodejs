"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var estadoUsadosSchema = new _mongoose.Schema({
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

var _default = (0, _mongoose.model)('EstadoUsados', estadoUsadosSchema);

exports.default = _default;
//# sourceMappingURL=EstadoUsados.js.map