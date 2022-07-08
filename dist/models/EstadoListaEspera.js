"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var estadoSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  valor: {
    type: Number
  },
  estado: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('EstadoListaEspera', estadoSchema);

exports.default = _default;
//# sourceMappingURL=EstadoListaEspera.js.map