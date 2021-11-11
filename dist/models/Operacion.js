"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var operacionSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Operacion', operacionSchema);

exports.default = _default;
//# sourceMappingURL=Operacion.js.map