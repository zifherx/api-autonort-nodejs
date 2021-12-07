"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var colorSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: String
  },
  estado: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Colores', colorSchema);

exports.default = _default;
//# sourceMappingURL=Colores.js.map