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
    type: Number,
    default: 0
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('EstadoTunningAccesorio', estadoSchema);

exports.default = _default;
//# sourceMappingURL=EstadoTunningAccesorio.js.map