"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var meSchema = new _mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  abreviatura: {
    type: String
  },
  numero: {
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

var _default = (0, _mongoose.model)('Mes', meSchema);

exports.default = _default;
//# sourceMappingURL=Mes.js.map