"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var condicionSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Condicion', condicionSchema);

exports.default = _default;
//# sourceMappingURL=Condicion.js.map