"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tecnicoSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  document: {
    type: String
  },
  email: {
    type: String
  },
  sucursal: {
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

var _default = (0, _mongoose.model)('Tecnico', tecnicoSchema);

exports.default = _default;
//# sourceMappingURL=Tecnico.js.map