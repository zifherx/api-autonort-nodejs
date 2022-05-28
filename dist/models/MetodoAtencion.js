"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var metodoSchema = new _mongoose.Schema({
  name: {
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

var _default = (0, _mongoose.model)('MetodoAtencion', metodoSchema);

exports.default = _default;
//# sourceMappingURL=MetodoAtencion.js.map